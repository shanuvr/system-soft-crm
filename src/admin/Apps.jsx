import { useState } from 'react'
import {
  Plus,
  CheckCircle2,
  ChevronRight,
  Trash2,
  X,
  Check,
  Sparkles,
  Layers,
  FolderKanban,
  DollarSign,
  Clock,
  Package,
  Shield,
  Sliders,
} from 'lucide-react'
import {
  LEADS_PERMISSIONS_SCHEMA,
  PROJECT_PERMISSIONS_SCHEMA,
  ACCOUNTS_PERMISSIONS_SCHEMA,
  TIMETRACKER_PERMISSIONS_SCHEMA,
  ASSETSOFT_PERMISSIONS_SCHEMA,
  LeadsLogoIcon,
  AssetProLogoIcon,
  AccountSoftLogoIcon,
} from './AddUserModal.jsx'

// Initial enterprise apps with live schemas
const INITIAL_APPS = [
  {
    id: 'leads',
    key: 'leads',
    name: 'Leads',
    subtitle: 'CRM & Calling',
    code: 'LEADS',
    description: 'Lead management, telecalling workflow, quotations & customer orders.',
    url: 'https://leads.company.com',
    status: 'Active',
    roles: ['Staff', 'Manager'],
    activeRole: 'Staff',
    schema: LEADS_PERMISSIONS_SCHEMA,
    accentBg: 'bg-red-600',
    accentText: 'text-red-600',
    lightBg: 'bg-red-50 text-red-700 border-red-200',
    gradient: 'from-rose-600 to-red-600',
    icon: LeadsLogoIcon,
  },
  {
    id: 'projectsoft',
    key: 'projectsoft',
    name: 'ProjectSoft',
    subtitle: 'Tasks & Sprints',
    code: 'PROJECT',
    description: 'Project planning, task status tracking, daily work reports and man-hours.',
    url: 'https://project.company.com',
    status: 'Active',
    roles: ['Developer', 'Project Manager'],
    activeRole: 'Developer',
    schema: PROJECT_PERMISSIONS_SCHEMA,
    accentBg: 'bg-amber-600',
    accentText: 'text-amber-600',
    lightBg: 'bg-amber-50 text-amber-700 border-amber-200',
    gradient: 'from-amber-500 to-orange-600',
    icon: FolderKanban,
  },
  {
    id: 'accountsoft',
    key: 'accountsoft',
    name: 'Account Soft',
    subtitle: 'Order · Delivery · Finance',
    code: 'ACCOUNTS',
    description: 'PTDAs, client payments, invoice generation and accounting registers.',
    url: 'https://accounts.company.com',
    status: 'Active',
    roles: ['Accounts Executive', 'Accounts Manager'],
    activeRole: 'Accounts Executive',
    schema: ACCOUNTS_PERMISSIONS_SCHEMA,
    accentBg: 'bg-emerald-600',
    accentText: 'text-emerald-600',
    lightBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    gradient: 'from-emerald-500 to-teal-600',
    icon: AccountSoftLogoIcon,
  },
  {
    id: 'timetracker',
    key: 'timetracker',
    name: 'Time Tracker',
    subtitle: 'Attendance & Leaves',
    code: 'TIMETRACK',
    description: 'Employee check-in/out attendance, leave approval workflows & time reports.',
    url: 'https://time.company.com',
    status: 'Active',
    roles: ['Employee', 'HR Manager'],
    activeRole: 'Employee',
    schema: TIMETRACKER_PERMISSIONS_SCHEMA,
    accentBg: 'bg-emerald-600',
    accentText: 'text-emerald-600',
    lightBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    gradient: 'from-emerald-500 to-green-600',
    icon: Clock,
  },
  {
    id: 'assetsoft',
    key: 'assetsoft',
    name: 'AssetPro',
    subtitle: 'Office Assets & Devices',
    code: 'ASSETPRO',
    description: 'Office asset registry (table, chair, PC, laptops), allocation & repair maintenance.',
    url: 'https://assetpro.company.com',
    status: 'Active',
    roles: ['Staff', 'Asset Manager'],
    activeRole: 'Staff',
    schema: ASSETSOFT_PERMISSIONS_SCHEMA,
    accentBg: 'bg-cyan-500',
    accentText: 'text-cyan-600',
    lightBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    gradient: 'from-cyan-500 to-teal-600',
    icon: AssetProLogoIcon,
  },
]

export default function Apps() {
  const [apps, setApps] = useState(INITIAL_APPS)
  const [selectedAppForConfig, setSelectedAppForConfig] = useState(null)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState(null)

  // In-modal quick add permission state per module: { [moduleName]: boolean }
  const [addingInModule, setAddingInModule] = useState(null)
  const [inlinePermLabel, setInlinePermLabel] = useState('')

  // In-modal quick add new module
  const [isAddingNewModule, setIsAddingNewModule] = useState(false)
  const [newModuleName, setNewModuleName] = useState('')

  // In-modal quick add role
  const [isAddingRole, setIsAddingRole] = useState(false)
  const [newRoleInput, setNewRoleInput] = useState('')

  // Register New App Form
  const [newAppForm, setNewAppForm] = useState({
    name: '',
    code: '',
    description: '',
    url: '',
    color: 'from-blue-600 to-indigo-600',
  })

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 4000)
  }

  // Count total permissions in an app schema
  const getTotalPermsCount = (schema) => {
    if (!schema) return 0
    return schema.reduce((acc, mod) => acc + (mod.permissions?.length || 0), 0)
  }

  // Add permission directly to a module
  const handleAddPermissionToModule = (moduleName) => {
    if (!inlinePermLabel.trim()) return

    const label = inlinePermLabel.trim()
    const generatedId = `${selectedAppForConfig.id}.${moduleName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '_')}.${label.toLowerCase().replace(/[^a-z0-9]/g, '_')}`

    setApps((prevApps) =>
      prevApps.map((app) => {
        if (app.id !== selectedAppForConfig.id) return app

        const existingSchema = app.schema.map((m) => {
          if (m.module !== moduleName) return m
          return {
            ...m,
            permissions: [...m.permissions, { id: generatedId, label }],
          }
        })

        const updatedApp = { ...app, schema: existingSchema }
        setSelectedAppForConfig(updatedApp)
        return updatedApp
      })
    )

    setInlinePermLabel('')
    setAddingInModule(null)
    showToast(`Added "${label}" to ${moduleName}`)
  }

  // Add a brand new module section
  const handleAddNewModule = (e) => {
    e.preventDefault()
    if (!newModuleName.trim()) return

    const modName = newModuleName.trim()

    setApps((prevApps) =>
      prevApps.map((app) => {
        if (app.id !== selectedAppForConfig.id) return app

        if (app.schema.some((m) => m.module.toLowerCase() === modName.toLowerCase())) {
          alert('A module with this name already exists.')
          return app
        }

        const defaultId = `${app.id}.${modName.toLowerCase().replace(/[^a-z0-9]/g, '_')}.view`
        const updatedSchema = [
          ...app.schema,
          {
            module: modName,
            permissions: [{ id: defaultId, label: `View ${modName}` }],
          },
        ]

        const updatedApp = { ...app, schema: updatedSchema }
        setSelectedAppForConfig(updatedApp)
        return updatedApp
      })
    )

    setNewModuleName('')
    setIsAddingNewModule(false)
    showToast(`New Module "${modName}" created!`)
  }

  // Delete a permission
  const handleDeletePermission = (moduleName, permId) => {
    setApps((prevApps) =>
      prevApps.map((app) => {
        if (app.id !== selectedAppForConfig.id) return app

        const updatedSchema = app.schema
          .map((m) => {
            if (m.module !== moduleName) return m
            return {
              ...m,
              permissions: m.permissions.filter((p) => p.id !== permId),
            }
          })
          .filter((m) => m.permissions.length > 0)

        const updatedApp = { ...app, schema: updatedSchema }
        setSelectedAppForConfig(updatedApp)
        return updatedApp
      })
    )
    showToast('Permission deleted.')
  }

  // Add a new role preset
  const handleAddRole = (e) => {
    e.preventDefault()
    if (!newRoleInput.trim()) return

    const roleName = newRoleInput.trim()

    setApps((prevApps) =>
      prevApps.map((app) => {
        if (app.id !== selectedAppForConfig.id) return app
        if (app.roles.includes(roleName)) {
          alert('This role already exists.')
          return app
        }
        const updatedRoles = [...app.roles, roleName]
        const updatedApp = { ...app, roles: updatedRoles, activeRole: roleName }
        setSelectedAppForConfig(updatedApp)
        return updatedApp
      })
    )

    setNewRoleInput('')
    setIsAddingRole(false)
    showToast(`Role "${roleName}" added to ${selectedAppForConfig.name}!`)
  }

  // Change active role in modal preview
  const handleSelectRole = (role) => {
    setApps((prevApps) =>
      prevApps.map((app) => {
        if (app.id !== selectedAppForConfig.id) return app
        const updatedApp = { ...app, activeRole: role }
        setSelectedAppForConfig(updatedApp)
        return updatedApp
      })
    )
  }

  // Register New App
  const handleRegisterApp = (e) => {
    e.preventDefault()
    if (!newAppForm.name.trim() || !newAppForm.code.trim()) {
      alert('Please fill in Application Name and Application Code.')
      return
    }

    const newApp = {
      id: newAppForm.name.toLowerCase().replace(/[^a-z0-9]/g, ''),
      key: newAppForm.name.toLowerCase().replace(/[^a-z0-9]/g, ''),
      name: newAppForm.name.trim(),
      subtitle: 'Custom Service',
      code: newAppForm.code.trim().toUpperCase(),
      description: newAppForm.description.trim() || 'Custom Enterprise Connected Application',
      url: newAppForm.url.trim() || `https://${newAppForm.code.toLowerCase()}.company.com`,
      status: 'Active',
      roles: ['Staff', 'Manager'],
      activeRole: 'Staff',
      schema: [
        {
          module: 'General Module',
          permissions: [
            { id: `${newAppForm.code.toLowerCase()}.view`, label: 'View Dashboard & Records' },
            { id: `${newAppForm.code.toLowerCase()}.manage`, label: 'Create & Edit Records' },
          ],
        },
      ],
      accentBg: 'bg-blue-600',
      accentText: 'text-blue-600',
      lightBg: 'bg-blue-50 text-blue-700 border-blue-200',
      gradient: newAppForm.color,
      icon: Package,
    }

    setApps((prev) => [...prev, newApp])
    setIsRegisterModalOpen(false)
    setNewAppForm({
      name: '',
      code: '',
      description: '',
      url: '',
      color: 'from-blue-600 to-indigo-600',
    })
    showToast(`Application "${newApp.name}" registered successfully!`)
  }

  return (
    <div className="space-y-5">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3 shadow-xs animate-in fade-in slide-in-from-top-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <p className="text-xs font-semibold">{toastMessage}</p>
        </div>
      )}

      {/* Action Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-2xs">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Central Application Registry
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Connect and manage organization-wide applications and their granular RBAC permissions
          </p>
        </div>

        <button
          onClick={() => setIsRegisterModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/25 transition-all cursor-pointer shrink-0 active:scale-[0.99]"
        >
          <Plus className="w-4 h-4" />
          <span>Register Application</span>
        </button>
      </div>

      {/* Compact Connected Apps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
        {apps.map((app) => {
          const totalPerms = getTotalPermsCount(app.schema)
          const Icon = app.icon || Package

          return (
            <div
              key={app.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 sm:p-5 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${app.gradient} text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-tight">
                        {app.name}
                      </h4>
                      <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded mt-0.5 inline-block">
                        {app.code}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {app.status}
                  </span>
                </div>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed min-h-[36px]">
                  {app.description}
                </p>
              </div>

              <div className="mt-4 pt-3.5 border-t border-slate-100">
                {/* Metric Badges */}
                <div className="grid grid-cols-2 gap-2 text-center mb-3">
                  <div className="py-1.5 px-2 bg-slate-50 rounded-xl border border-slate-100/80">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Roles</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
                      {app.roles?.length || 2}
                    </p>
                  </div>
                  <div className="py-1.5 px-2 bg-slate-50 rounded-xl border border-slate-100/80">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Permissions
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">{totalPerms}</p>
                  </div>
                </div>

                {/* Configure Button */}
                <button
                  onClick={() => {
                    setSelectedAppForConfig(app)
                    setAddingInModule(null)
                    setInlinePermLabel('')
                    setIsAddingNewModule(false)
                    setIsAddingRole(false)
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 border border-transparent text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer active:scale-[0.99]"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Configure Roles & Matrix</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* ========================================================================= */}
      {/* CONFIGURE ROLES & PERMISSIONS MATRIX MODAL (MATCHING STEP 2 DESIGN) */}
      {/* ========================================================================= */}
      {selectedAppForConfig && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs font-sans animate-in fade-in duration-200">
          <div className="bg-white rounded-[24px] w-full max-w-xl sm:max-w-[660px] max-h-[90vh] shadow-2xl flex flex-col overflow-hidden border border-slate-200">
            {/* Modal Header */}
            <div className="px-5 sm:px-6 py-4 bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 text-white flex items-center justify-between shrink-0">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-bold tracking-wide uppercase">
                    RBAC Matrix
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {selectedAppForConfig.name} Access & Permissions
                  </h2>
                </div>
                <p className="text-xs text-blue-100 mt-0.5">
                  Manage modules, granular functional permissions, and role presets
                </p>
              </div>

              <button
                onClick={() => setSelectedAppForConfig(null)}
                className="p-1.5 rounded-xl hover:bg-white/20 transition-colors text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6">
              {/* Slate Container Card matching Step 2 in AddUserModal */}
              <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-4 space-y-3.5">
                {/* 1. Panel Header inside Slate Container */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200/80">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-xl ${selectedAppForConfig.lightBg}`}>
                      {selectedAppForConfig.icon ? (
                        <selectedAppForConfig.icon className="w-4 h-4" />
                      ) : (
                        <Package className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                          {selectedAppForConfig.name} Permissions
                        </h3>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          {getTotalPermsCount(selectedAppForConfig.schema)} Active
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Configure permissions & roles for {selectedAppForConfig.name}
                      </p>
                    </div>
                  </div>

                  {/* Add New Module Button */}
                  <button
                    type="button"
                    onClick={() => setIsAddingNewModule(!isAddingNewModule)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer shrink-0"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Module</span>
                  </button>
                </div>

                {/* Inline New Module Form */}
                {isAddingNewModule && (
                  <form
                    onSubmit={handleAddNewModule}
                    className="bg-white p-3 rounded-xl border border-blue-200 shadow-2xs flex items-center gap-2 animate-in fade-in"
                  >
                    <input
                      type="text"
                      placeholder="Enter new module name (e.g. Audit Logs, Invoices)..."
                      value={newModuleName}
                      onChange={(e) => setNewModuleName(e.target.value)}
                      className="flex-1 px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-blue-500 font-medium"
                      autoFocus
                      required
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0"
                    >
                      Create
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAddingNewModule(false)}
                      className="px-2 py-1.5 text-slate-400 hover:text-slate-600 text-xs font-semibold cursor-pointer"
                    >
                      Cancel
                    </button>
                  </form>
                )}

                {/* 2. Role Preset Selector with Plus (+) Icon */}
                <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shadow-2xs">
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      {selectedAppForConfig.name} Role Preset
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Auto-selects standard functional permissions
                    </p>
                  </div>

                  <div className="flex items-center flex-wrap gap-1.5">
                    {selectedAppForConfig.roles?.map((role) => {
                      const isSelectedRole = selectedAppForConfig.activeRole === role

                      return (
                        <button
                          key={role}
                          type="button"
                          onClick={() => handleSelectRole(role)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            isSelectedRole
                              ? `${selectedAppForConfig.accentBg} text-white shadow-xs`
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {role}
                        </button>
                      )
                    })}

                    {/* Quick + Add Role Button */}
                    {!isAddingRole ? (
                      <button
                        type="button"
                        onClick={() => setIsAddingRole(true)}
                        title="Add New Role"
                        className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/60 transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Role</span>
                      </button>
                    ) : (
                      <form onSubmit={handleAddRole} className="flex items-center gap-1">
                        <input
                          type="text"
                          placeholder="Role name..."
                          value={newRoleInput}
                          onChange={(e) => setNewRoleInput(e.target.value)}
                          className="w-28 px-2 py-1 text-xs bg-slate-50 border border-blue-300 rounded-lg outline-none font-medium"
                          autoFocus
                          required
                        />
                        <button
                          type="submit"
                          className="p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
                          title="Save Role"
                        >
                          <Check className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsAddingRole(false)}
                          className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </form>
                    )}
                  </div>
                </div>

                {/* 3. Permissions Matrix by Modules (2-Column Grid matching Step 2) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedAppForConfig.schema?.map((group) => {
                    const isAddingHere = addingInModule === group.module

                    return (
                      <div
                        key={group.module}
                        className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs space-y-2 flex flex-col justify-between"
                      >
                        <div>
                          {/* Module Header with Module Name and + Add Permission Button */}
                          <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                            <span className="text-xs font-bold text-slate-800 tracking-tight">
                              {group.module}
                            </span>

                            <div className="flex items-center gap-1.5">
                              {/* + Add Permission button for this specific module */}
                              <button
                                type="button"
                                onClick={() => {
                                  if (isAddingHere) {
                                    setAddingInModule(null)
                                  } else {
                                    setAddingInModule(group.module)
                                    setInlinePermLabel('')
                                  }
                                }}
                                className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                                  isAddingHere
                                    ? 'bg-slate-200 text-slate-700'
                                    : `${selectedAppForConfig.accentText} bg-slate-50 hover:bg-slate-100 border border-slate-200/60`
                                }`}
                              >
                                <Plus className="w-3 h-3" />
                                <span>Add</span>
                              </button>
                            </div>
                          </div>

                          {/* Quick Inline Add Form within Module */}
                          {isAddingHere && (
                            <div className="my-2 p-2 bg-blue-50/60 border border-blue-200 rounded-lg flex items-center gap-1.5 animate-in fade-in">
                              <input
                                type="text"
                                placeholder={`Permission name in ${group.module}...`}
                                value={inlinePermLabel}
                                onChange={(e) => setInlinePermLabel(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    e.preventDefault()
                                    handleAddPermissionToModule(group.module)
                                  }
                                }}
                                className="flex-1 px-2 py-1 text-[11px] bg-white border border-slate-300 rounded outline-none focus:border-blue-500 font-medium"
                                autoFocus
                              />
                              <button
                                type="button"
                                onClick={() => handleAddPermissionToModule(group.module)}
                                className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-[10px] font-bold cursor-pointer"
                              >
                                Save
                              </button>
                              <button
                                type="button"
                                onClick={() => setAddingInModule(null)}
                                className="p-1 text-slate-400 hover:text-slate-600 rounded text-[10px] cursor-pointer"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          )}

                          {/* List of Permissions with Checkbox and Trash Icon */}
                          <div className="space-y-1.5 mt-1.5">
                            {group.permissions.map((p) => (
                              <div
                                key={p.id}
                                className="flex items-center justify-between gap-2 group/item text-xs text-slate-700 hover:text-slate-900 hover:bg-slate-50/80 px-1 py-0.5 rounded transition-colors"
                              >
                                <label className="flex items-start gap-2 cursor-pointer select-none min-w-0 flex-1">
                                  <input
                                    type="checkbox"
                                    defaultChecked={true}
                                    className="w-3.5 h-3.5 rounded mt-0.5 text-blue-600 focus:ring-blue-500 border-slate-300"
                                  />
                                  <span className="leading-tight text-[11px] truncate">{p.label}</span>
                                </label>

                                {/* Delete Permission (Trash Icon) */}
                                <button
                                  type="button"
                                  onClick={() => handleDeletePermission(group.module, p.id)}
                                  title="Delete Permission"
                                  className="p-1 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors cursor-pointer shrink-0 opacity-40 group-hover/item:opacity-100"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
              <button
                type="button"
                onClick={() => setSelectedAppForConfig(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200/60 rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedAppForConfig(null)
                  showToast(`${selectedAppForConfig.name} permissions matrix saved!`)
                }}
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold rounded-xl shadow-md shadow-emerald-600/25 transition-all cursor-pointer active:scale-[0.99]"
              >
                <Check className="w-4 h-4" />
                <span>Save Changes & Done</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* REGISTER NEW APP MODAL */}
      {/* ========================================================================= */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs font-sans animate-in fade-in duration-200">
          <div className="bg-white rounded-[24px] w-full max-w-lg shadow-2xl flex flex-col overflow-hidden border border-slate-200">
            <div className="px-5 sm:px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-between shrink-0">
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Register New Enterprise App
                </h3>
                <p className="text-xs text-blue-100 mt-0.5">
                  Connect a new business software service to central access management
                </p>
              </div>
              <button
                onClick={() => setIsRegisterModalOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/20 transition-colors text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleRegisterApp} className="p-5 sm:p-6 space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Application Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. InventorySoft, Helpdesk, DispatchSoft"
                  value={newAppForm.name}
                  onChange={(e) => setNewAppForm({ ...newAppForm, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl outline-none focus:border-blue-500 font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Application Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. INVENTORY, HELPDESK"
                  value={newAppForm.code}
                  onChange={(e) => setNewAppForm({ ...newAppForm, code: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl outline-none focus:border-blue-500 font-mono uppercase"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
                <textarea
                  rows="2"
                  placeholder="Brief summary of what this application manages..."
                  value={newAppForm.description}
                  onChange={(e) => setNewAppForm({ ...newAppForm, description: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">App URL / Endpoint</label>
                <input
                  type="url"
                  placeholder="https://app.company.com"
                  value={newAppForm.url}
                  onChange={(e) => setNewAppForm({ ...newAppForm, url: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl outline-none focus:border-blue-500 font-mono text-xs"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsRegisterModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/25 transition-all cursor-pointer"
                >
                  Register Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
