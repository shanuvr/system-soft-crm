import { useState, useRef, useEffect } from 'react'
import { Search, Plus, Filter, CheckCircle2, X, RotateCcw, ChevronDown, SlidersHorizontal } from 'lucide-react'
import AddUserModal from './AddUserModal.jsx'

const AVAILABLE_APPS = [
  { id: 'Leads', label: 'Leads', color: 'border-red-200 bg-red-50 text-red-700' },
  { id: 'ProjectSoft', label: 'ProjectSoft', color: 'border-amber-200 bg-amber-50 text-amber-700' },
  { id: 'Account Soft', label: 'Account Soft', color: 'border-emerald-200 bg-emerald-50 text-emerald-700' },
  { id: 'Time Tracker', label: 'Time Tracker', color: 'border-emerald-200 bg-emerald-50 text-emerald-700' },
  { id: 'AssetPro', label: 'AssetPro', color: 'border-cyan-200 bg-cyan-50 text-cyan-700' },
]

const DEPARTMENTS = [
  'Marketing',
  'Projects',
  'HR',
]

const INITIAL_USERS = [
  {
    id: 'EMP101',
    empCode: 'EMP101',
    name: 'Rahul Sharma',
    email: 'rahul@company.com',
    branch: 'Thrissur Office',
    department: 'Projects',
    designation: 'Senior Developer',
    role: 'Staff',
    phone: '+91 9876543210',
    emergencyPhone: '+91 9876501234',
    address: '123 Tech Park, Phase II, Thrissur',
    state: 'Kerala',
    district: 'Thrissur',
    pincode: '680001',
    source: 'Referral',
    basicSalary: '45000.00',
    joiningDate: '2023-04-10',
    incrementDate: '2024-04-10',
    status: 'Active',
    employeeStatus: 'Live',
    bloodGroup: 'O+',
    apps: [
      { name: 'Leads', role: 'Staff', color: 'bg-red-50 text-red-700 border-red-200' },
      { name: 'ProjectSoft', role: 'Developer', color: 'bg-amber-50 text-amber-700 border-amber-200' },
      { name: 'Time Tracker', role: 'Employee', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    ],
  },
  {
    id: 'EMP102',
    empCode: 'EMP102',
    name: 'Anu Varghese',
    email: 'anu@company.com',
    branch: 'Thrissur Office',
    department: 'Marketing',
    designation: 'Marketing Executive',
    role: 'Manager',
    phone: '+91 9845123456',
    emergencyPhone: '+91 9845109876',
    address: '45 MG Road, Round North, Thrissur',
    state: 'Kerala',
    district: 'Thrissur',
    pincode: '680001',
    source: 'LinkedIn',
    basicSalary: '42000.00',
    joiningDate: '2023-06-15',
    incrementDate: '2024-06-15',
    status: 'Active',
    employeeStatus: 'Live',
    bloodGroup: 'A+',
    apps: [
      { name: 'Leads', role: 'Manager', color: 'bg-red-50 text-red-700 border-red-200' },
      { name: 'Time Tracker', role: 'Employee', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    ],
  },
  {
    id: 'EMP103',
    empCode: 'EMP103',
    name: 'Akhil Raj',
    email: 'akhil@company.com',
    branch: 'Kochi Office',
    department: 'Projects',
    designation: 'Software Engineer',
    role: 'Staff',
    phone: '+91 9745632145',
    emergencyPhone: '+91 9745600012',
    address: '88 Cyber Park, Infopark Kochi',
    state: 'Kerala',
    district: 'Ernakulam',
    pincode: '682042',
    source: 'Naukri',
    basicSalary: '38000.00',
    joiningDate: '2023-09-01',
    incrementDate: '2024-09-01',
    status: 'Active',
    employeeStatus: 'Live',
    bloodGroup: 'B+',
    apps: [
      { name: 'ProjectSoft', role: 'Developer', color: 'bg-amber-50 text-amber-700 border-amber-200' },
      { name: 'AssetPro', role: 'Staff', color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
      { name: 'Time Tracker', role: 'Employee', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    ],
  },
  {
    id: 'EMP104',
    empCode: 'EMP104',
    name: 'Sneha Patel',
    email: 'sneha@company.com',
    branch: 'Thrissur Office',
    department: 'HR',
    designation: 'HR Executive',
    role: 'Manager',
    phone: '+91 9654123890',
    emergencyPhone: '+91 9654100112',
    address: '12 Palakkad Road, East Fort, Thrissur',
    state: 'Kerala',
    district: 'Thrissur',
    pincode: '680005',
    source: 'Campus Placement',
    basicSalary: '40000.00',
    joiningDate: '2023-02-20',
    incrementDate: '2024-02-20',
    status: 'Active',
    employeeStatus: 'Live',
    bloodGroup: 'AB+',
    apps: [
      { name: 'Account Soft', role: 'Accounts Manager', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      { name: 'Time Tracker', role: 'HR Manager', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      { name: 'AssetPro', role: 'Asset Manager', color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
    ],
  },
]

export default function UserManagement() {
  const [users, setUsers] = useState(INITIAL_USERS)
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [createdToast, setCreatedToast] = useState(null)

  // Filter states
  const [selectedApp, setSelectedApp] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const filterDropdownRef = useRef(null)

  // Close filter dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
        setIsFilterOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleToggleStatus = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.id === userId
          ? { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' }
          : u
      )
    )
  }

  const handleUserSaved = (savedUser, isEdit) => {
    if (isEdit) {
      setUsers((prev) => prev.map((u) => (u.id === savedUser.id ? savedUser : u)))
      setCreatedToast(`User "${savedUser.name}" access & permissions updated successfully!`)
    } else {
      setUsers((prev) => [savedUser, ...prev])
      setCreatedToast(`User "${savedUser.name}" added successfully with ${savedUser.apps.length} connected app(s)!`)
    }
    setTimeout(() => {
      setCreatedToast(null)
    }, 4500)
  }

  const handleOpenAddUser = () => {
    setEditingUser(null)
    setIsModalOpen(true)
  }

  const handleManageAccess = (user) => {
    setEditingUser(user)
    setIsModalOpen(true)
  }

  const handleResetFilters = () => {
    setSelectedApp('all')
    setSelectedStatus('all')
    setSelectedDepartment('all')
    setSearchTerm('')
  }

  const activeFiltersCount =
    (selectedApp !== 'all' ? 1 : 0) +
    (selectedStatus !== 'all' ? 1 : 0) +
    (selectedDepartment !== 'all' ? 1 : 0)

  const filteredUsers = users.filter((u) => {
    // Search match
    const matchesSearch =
      !searchTerm ||
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.department.toLowerCase().includes(searchTerm.toLowerCase())

    // Status match
    const matchesStatus =
      selectedStatus === 'all' ||
      u.status.toLowerCase() === selectedStatus.toLowerCase()

    // App match
    const matchesApp =
      selectedApp === 'all' ||
      u.apps.some((a) => {
        const appName = typeof a === 'string' ? a : a.name
        return appName.toLowerCase() === selectedApp.toLowerCase()
      })

    // Department match
    const matchesDept =
      selectedDepartment === 'all' ||
      u.department.toLowerCase() === selectedDepartment.toLowerCase()

    return matchesSearch && matchesStatus && matchesApp && matchesDept
  })

  return (
    <div className="space-y-4">
      {/* Success Notification Toast */}
      {createdToast && (
        <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-3 shadow-xs animate-in fade-in slide-in-from-top-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <p className="text-xs sm:text-sm font-semibold">{createdToast}</p>
        </div>
      )}

      {/* Add / Edit User Wizard Modal */}
      <AddUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUserCreated={handleUserSaved}
        editingUser={editingUser}
      />

      {/* Users Table Card with Integrated Header Toolbar */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        {/* Top Action & Search Bar */}
        <div className="p-3.5 sm:p-4 border-b border-slate-100 bg-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, email, department or ID..."
                className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end relative">
              {/* Filter Dropdown Toggle Button */}
              <div className="relative" ref={filterDropdownRef}>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`flex items-center gap-2 px-3.5 py-2 border rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeFiltersCount > 0 || isFilterOpen
                      ? 'border-blue-500 bg-blue-50/70 text-blue-700 shadow-xs'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Filter className={`w-3.5 h-3.5 ${activeFiltersCount > 0 ? 'text-blue-600' : 'text-slate-500'}`} />
                  <span>Filter</span>
                  {activeFiltersCount > 0 && (
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">
                      {activeFiltersCount}
                    </span>
                  )}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isFilterOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                </button>

                {/* Filter Popover Panel */}
                {isFilterOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white border border-slate-200/90 rounded-2xl shadow-xl z-50 p-4 animate-in fade-in zoom-in-95 duration-150">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3.5">
                      <div className="flex items-center gap-2">
                        <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-bold text-slate-900">Filter Employees</span>
                      </div>
                      {activeFiltersCount > 0 && (
                        <button
                          onClick={handleResetFilters}
                          className="text-[11px] font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Reset All</span>
                        </button>
                      )}
                    </div>

                    <div className="space-y-4">
                      {/* Status Filter */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                          Status
                        </label>
                        <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100/70 rounded-xl">
                          {['all', 'Active', 'Inactive'].map((status) => {
                            const isSelected = selectedStatus === status
                            return (
                              <button
                                key={status}
                                type="button"
                                onClick={() => setSelectedStatus(status)}
                                className={`py-1.5 text-xs font-bold rounded-lg transition-all capitalize cursor-pointer ${
                                  isSelected
                                    ? 'bg-white text-blue-700 shadow-xs'
                                    : 'text-slate-600 hover:text-slate-900'
                                }`}
                              >
                                {status === 'all' ? 'All' : status}
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Applications Filter */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            By Application Access
                          </label>
                          {selectedApp !== 'all' && (
                            <button
                              onClick={() => setSelectedApp('all')}
                              className="text-[10px] text-slate-400 hover:text-slate-600 font-medium"
                            >
                              Clear
                            </button>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          <button
                            type="button"
                            onClick={() => setSelectedApp('all')}
                            className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                              selectedApp === 'all'
                                ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            All Apps
                          </button>
                          {AVAILABLE_APPS.map((app) => {
                            const isSelected = selectedApp.toLowerCase() === app.id.toLowerCase()
                            return (
                              <button
                                key={app.id}
                                type="button"
                                onClick={() => setSelectedApp(isSelected ? 'all' : app.id)}
                                className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                                  isSelected
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                                    : `${app.color} hover:opacity-90`
                                }`}
                              >
                                {app.label}
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Department Filter */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            Department
                          </label>
                          {selectedDepartment !== 'all' && (
                            <button
                              onClick={() => setSelectedDepartment('all')}
                              className="text-[10px] text-slate-400 hover:text-slate-600 font-medium"
                            >
                              Clear
                            </button>
                          )}
                        </div>
                        <select
                          value={selectedDepartment}
                          onChange={(e) => setSelectedDepartment(e.target.value)}
                          className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer"
                        >
                          <option value="all">All Departments</option>
                          {DEPARTMENTS.map((dept) => (
                            <option key={dept} value={dept}>
                              {dept}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs">
                        <span className="text-slate-500 font-medium">
                          Showing <strong className="text-slate-900">{filteredUsers.length}</strong> of {users.length}
                        </span>
                        <button
                          onClick={() => setIsFilterOpen(false)}
                          className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs shadow-xs transition-colors cursor-pointer"
                        >
                          Apply Filters
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Add User Button */}
              <button
                onClick={handleOpenAddUser}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 active:scale-[0.99] text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/25 transition-all cursor-pointer shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Add User</span>
              </button>
            </div>
          </div>

          {/* Active Filter Chips / Pills Bar */}
          {(activeFiltersCount > 0 || searchTerm) && (
            <div className="flex flex-wrap items-center gap-2 pt-2.5 mt-2 border-t border-slate-100 text-xs">
              <span className="text-slate-400 font-medium text-[11px] uppercase tracking-wider">Active Filters:</span>

              {selectedApp !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-semibold text-xs">
                  <span>App: <strong>{selectedApp}</strong></span>
                  <button
                    onClick={() => setSelectedApp('all')}
                    className="hover:text-blue-900 cursor-pointer ml-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedStatus !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold text-xs">
                  <span>Status: <strong>{selectedStatus}</strong></span>
                  <button
                    onClick={() => setSelectedStatus('all')}
                    className="hover:text-emerald-900 cursor-pointer ml-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedDepartment !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold text-xs">
                  <span>Dept: <strong>{selectedDepartment}</strong></span>
                  <button
                    onClick={() => setSelectedDepartment('all')}
                    className="hover:text-indigo-900 cursor-pointer ml-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {searchTerm && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 font-semibold text-xs">
                  <span>Query: &ldquo;<strong>{searchTerm}</strong>&rdquo;</span>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="hover:text-slate-900 cursor-pointer ml-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              <button
                onClick={handleResetFilters}
                className="text-xs font-bold text-slate-500 hover:text-red-600 underline ml-auto transition-colors cursor-pointer"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
        <div className="w-full overflow-hidden">
          <table className="w-full text-left text-xs sm:text-sm table-fixed">
            <thead className="bg-slate-50/80 text-slate-500 text-[11px] uppercase tracking-wider font-bold border-b border-slate-100">
              <tr>
                <th className="py-2.5 pl-4 sm:pl-5 pr-2.5 w-[24%] font-bold">Employee</th>
                <th className="py-2.5 px-2.5 w-[14%] font-bold">Department</th>
                <th className="py-2.5 px-2.5 w-[40%] font-bold">Application Access & Roles</th>
                <th className="py-2.5 px-2.5 w-[10%] font-bold">Status</th>
                <th className="py-2.5 pl-2.5 pr-4 sm:pr-5 w-[12%] text-right font-bold whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-10 px-4 text-center text-slate-500">
                    <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-2.5 text-slate-400">
                        <Filter className="w-5 h-5" />
                      </div>
                      <p className="font-bold text-slate-800 text-xs sm:text-sm">No employees match your filter criteria</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Try adjusting your search query, application access, or status filters.</p>
                      <button
                        onClick={handleResetFilters}
                        className="mt-3 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Reset All Filters
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredUsers.map((u) => {
                  const isActive = u.status === 'Active'

                  return (
                    <tr key={u.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-2 pl-4 sm:pl-5 pr-2.5">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-xs shrink-0">
                            {u.name[0]}
                          </div>
                          <div className="min-w-0">
                            <p className="font-bold text-slate-900 leading-tight text-xs truncate">
                              {u.name}
                            </p>
                            <p className="text-[10.5px] text-slate-400 truncate">
                              {u.email} · <span className="font-mono">{u.id}</span>
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-2.5 text-slate-600 font-medium text-xs truncate">
                        {u.department}
                      </td>
                      <td className="py-2 px-2.5">
                        <div className="flex flex-wrap gap-1 items-center">
                          {u.apps.map((app) => {
                            const nameLower = app.name.toLowerCase()
                            const dotColor = nameLower.includes('lead')
                              ? 'bg-rose-500'
                              : nameLower.includes('project')
                              ? 'bg-amber-500'
                              : nameLower.includes('account')
                              ? 'bg-emerald-500'
                              : nameLower.includes('asset')
                              ? 'bg-cyan-500'
                              : nameLower.includes('time')
                              ? 'bg-teal-500'
                              : 'bg-blue-500'

                            return (
                              <span
                                key={app.name}
                                className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10.5px] bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80 transition-colors shrink-0"
                              >
                                <span className={`w-1.5 h-1.5 rounded-full ${dotColor} shrink-0`} />
                                <span className="font-semibold text-slate-800">{app.name}</span>
                                <span className="text-slate-400 text-[9.5px]">({app.role})</span>
                              </span>
                            )
                          })}
                        </div>
                      </td>
                      <td className="py-2 px-2.5">
                        {/* Interactive Toggle Button */}
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            role="switch"
                            aria-checked={isActive}
                            onClick={() => handleToggleStatus(u.id)}
                            className={`relative inline-flex h-4 w-7.5 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                              isActive ? 'bg-emerald-500' : 'bg-slate-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-3 w-3 transform rounded-full bg-white shadow-xs transition-transform duration-200 ease-in-out ${
                                isActive ? 'translate-x-3.5' : 'translate-x-0.5'
                              }`}
                            />
                          </button>
                          <span
                            className={`text-[10.5px] font-bold ${
                              isActive ? 'text-emerald-600' : 'text-slate-400'
                            }`}
                          >
                            {isActive ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                      </td>
                      <td className="py-2 pl-2.5 pr-4 sm:pr-5 text-right whitespace-nowrap">
                        <button
                          onClick={() => handleManageAccess(u)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
                        >
                          <span>Manage Access</span>
                          <span>→</span>
                        </button>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
