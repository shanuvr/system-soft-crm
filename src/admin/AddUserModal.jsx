import { useState, useEffect } from 'react'
import {
  X,
  User,
  Shield,
  Layers,
  Check,
  ChevronRight,
  ChevronLeft,
  Users,
  Briefcase,
  FileText,
  DollarSign,
  FolderKanban,
  CheckSquare,
  Square,
  Sparkles,
  Clock,
  Package,
  Pencil,
  Upload,
  Building,
} from 'lucide-react'

// Official Leads 3x3 rounded grid logo icon
export function LeadsLogoIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="5.2" height="5.2" rx="1.5" />
      <rect x="9.4" y="2" width="5.2" height="5.2" rx="1.5" />
      <rect x="16.8" y="2" width="5.2" height="5.2" rx="1.5" />
      <rect x="2" y="9.4" width="5.2" height="5.2" rx="1.5" />
      <rect x="9.4" y="9.4" width="5.2" height="5.2" rx="1.5" />
      <rect x="16.8" y="9.4" width="5.2" height="5.2" rx="1.5" />
      <rect x="2" y="16.8" width="5.2" height="5.2" rx="1.5" />
      <rect x="9.4" y="16.8" width="5.2" height="5.2" rx="1.5" />
      <rect x="16.8" y="16.8" width="5.2" height="5.2" rx="1.5" />
    </svg>
  )
}

// Official AssetPro cyan pixel cluster logo icon
export function AssetProLogoIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="2" width="3.2" height="3.2" rx="0.6" />
      <rect x="19.5" y="2" width="3.2" height="3.2" rx="0.6" />
      <rect x="18" y="6.5" width="4.8" height="4.8" rx="1" />
      <rect x="19.6" y="8.1" width="1.6" height="1.6" rx="0.3" fill="#0f172a" />
      <rect x="19.5" y="12.5" width="3.2" height="3.2" rx="0.6" />
      <path d="M3 7.5L11 3.5V13.5L3 17.5V7.5Z" opacity="0.95" />
      <path d="M11 3.5L19 7.5V10.5L11 6.5V3.5Z" opacity="0.75" />
      <path d="M11 13.5L19 9.5V17.5L11 21.5V13.5Z" opacity="0.85" />
    </svg>
  )
}

// Official Account Soft financial trending bracket logo icon
export function AccountSoftLogoIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h12a3 3 0 0 1 3 3v8" />
      <path d="M7 16l3-3.5 2.5 2.5 4.5-5.5" />
    </svg>
  )
}

// LEADS PERMISSION DEFINITIONS GROUPED BY MODULE
export const LEADS_PERMISSIONS_SCHEMA = [
  {
    module: 'Leads (Raw Data)',
    permissions: [
      { id: 'leads.raw.view', label: 'View leads' },
      { id: 'leads.raw.view_all_company', label: 'View all company leads' },
      { id: 'leads.raw.view_all_raw', label: 'View all raw leads' },
      { id: 'leads.raw.add', label: 'Add leads' },
      { id: 'leads.raw.edit_own', label: 'Edit own leads' },
      { id: 'leads.raw.edit_any', label: 'Edit any company lead' },
      { id: 'leads.raw.delete_own', label: 'Delete own leads' },
      { id: 'leads.raw.delete_any', label: 'Delete any company lead' },
      { id: 'leads.raw.assign', label: 'Assign leads to staff' },
      { id: 'leads.raw.reassign_unlock', label: 'Reassign / unlock locked leads' },
    ],
  },
  {
    module: 'Tele Call',
    permissions: [
      { id: 'leads.telecall.view', label: 'View tele-call list' },
      { id: 'leads.telecall.add', label: 'Add tele-call entries' },
      { id: 'leads.telecall.edit', label: 'Edit tele-call entries' },
      { id: 'leads.telecall.assign', label: 'Assign tele-call tasks to staff' },
    ],
  },
  {
    module: 'Quotations',
    permissions: [
      { id: 'leads.quotations.view', label: 'View quotations' },
      { id: 'leads.quotations.create', label: 'Create quotations' },
      { id: 'leads.quotations.edit', label: 'Edit quotations' },
      { id: 'leads.quotations.send', label: 'Send quotations' },
      { id: 'leads.quotations.send_no_approval', label: 'Send quotations without approval' },
      { id: 'leads.quotations.approve_reject', label: 'Approve / reject quotations' },
    ],
  },
  {
    module: 'Orders',
    permissions: [
      { id: 'leads.orders.view', label: 'View orders' },
      { id: 'leads.orders.create', label: 'Create orders' },
      { id: 'leads.orders.edit', label: 'Edit orders' },
      { id: 'leads.orders.delete', label: 'Delete orders' },
    ],
  },
  {
    module: 'Client Details',
    permissions: [
      { id: 'leads.clients.view', label: 'View client details' },
      { id: 'leads.clients.add', label: 'Add client details' },
      { id: 'leads.clients.edit', label: 'Edit client details' },
    ],
  },
  {
    module: 'Master Data',
    permissions: [
      { id: 'leads.master.branches_view', label: 'View branches' },
      { id: 'leads.master.branches_manage', label: 'Add / edit / delete branches' },
      { id: 'leads.master.categories_view', label: 'View categories' },
      { id: 'leads.master.categories_manage', label: 'Add / edit / delete categories' },
      { id: 'leads.master.sources_view', label: 'View sources' },
      { id: 'leads.master.sources_manage', label: 'Add / edit / delete sources' },
      { id: 'leads.master.locations_view', label: 'View locations' },
      { id: 'leads.master.locations_manage', label: 'Add / edit / delete locations' },
      { id: 'leads.master.company_profile_view', label: 'View company profile' },
      { id: 'leads.master.company_profile_edit', label: 'Edit company profile' },
    ],
  },
  {
    module: 'Staff & Roles',
    permissions: [
      { id: 'leads.staff.view', label: 'View staff list' },
      { id: 'leads.staff.manage', label: 'Add / edit / delete staff & reset passwords' },
      { id: 'leads.staff.roles_permissions', label: 'Manage roles & permissions' },
    ],
  },
  {
    module: 'Reports',
    permissions: [
      { id: 'leads.reports.view', label: 'View report registers' },
      { id: 'leads.reports.export', label: 'Export report data' },
    ],
  },
]

// PROJECTSOFT PERMISSIONS SCHEMA
export const PROJECT_PERMISSIONS_SCHEMA = [
  {
    module: 'Projects & Work Orders',
    permissions: [
      { id: 'project.projects.view', label: 'View Assigned Projects' },
      { id: 'project.projects.create', label: 'Create Projects' },
      { id: 'project.projects.edit', label: 'Edit Projects' },
      { id: 'project.projects.archive', label: 'Archive Projects' },
      { id: 'project.projects.work_orders', label: 'Create & Manage Work Orders' },
    ],
  },
  {
    module: 'Task Management',
    permissions: [
      { id: 'project.tasks.view', label: 'View Assigned Tasks' },
      { id: 'project.tasks.details', label: 'View Task Details' },
      { id: 'project.tasks.update_status', label: 'Update Task Status' },
      { id: 'project.tasks.comments', label: 'Add Task Comments' },
      { id: 'project.tasks.create', label: 'Create & Assign Tasks' },
    ],
  },
  {
    module: 'Reports & Man-Hours',
    permissions: [
      { id: 'project.reports.submit_daily', label: 'Submit Daily Work Report' },
      { id: 'project.reports.man_hours', label: 'Record Man-Hours' },
      { id: 'project.reports.review_reports', label: 'Review Team Daily Reports' },
      { id: 'project.reports.view_progress', label: 'View Developer Progress' },
      { id: 'project.reports.export', label: 'Export Project Reports' },
    ],
  },
  {
    module: 'Files & Communication',
    permissions: [
      { id: 'project.files.upload', label: 'Upload Files' },
      { id: 'project.files.download', label: 'Download Files' },
      { id: 'project.files.request', label: 'Request Files' },
      { id: 'project.files.approve_reject', label: 'Approve / Reject Files' },
      { id: 'project.chat.participate', label: 'Participate in Project Chat' },
    ],
  },
]

// ACCOUNTSOFT PERMISSIONS SCHEMA
export const ACCOUNTS_PERMISSIONS_SCHEMA = [
  {
    module: 'Orders & PTDA',
    permissions: [
      { id: 'accounts.orders.view', label: 'View Orders' },
      { id: 'accounts.ptda.create', label: 'Create PTDA' },
      { id: 'accounts.ptda.edit', label: 'Edit PTDA' },
    ],
  },
  {
    module: 'Master Items & Invoices',
    permissions: [
      { id: 'accounts.items.view', label: 'View Master Items' },
      { id: 'accounts.items.manage', label: 'Add & Edit Master Items' },
      { id: 'accounts.invoices.generate', label: 'Generate Invoices' },
      { id: 'accounts.invoices.edit', label: 'Edit Invoices' },
    ],
  },
  {
    module: 'Payments & Reports',
    permissions: [
      { id: 'accounts.payments.record', label: 'Record Client Payments' },
      { id: 'accounts.payments.edit', label: 'Edit Payment Entries' },
      { id: 'accounts.reports.view', label: 'View Financial Reports' },
      { id: 'accounts.reports.export', label: 'Export Financial Reports' },
    ],
  },
]

// TIMETRACKER PERMISSIONS SCHEMA
export const TIMETRACKER_PERMISSIONS_SCHEMA = [
  {
    module: 'Attendance & Clocking',
    permissions: [
      { id: 'time.clock.checkin_checkout', label: 'Check-in & Check-out' },
      { id: 'time.clock.view_own_logs', label: 'View own attendance logs' },
      { id: 'time.clock.view_all_logs', label: 'View all employee logs' },
      { id: 'time.clock.manual_entry', label: 'Mark manual attendance' },
    ],
  },
  {
    module: 'Leave Management',
    permissions: [
      { id: 'time.leave.apply', label: 'Apply for leaves' },
      { id: 'time.leave.view_own', label: 'View own leave status' },
      { id: 'time.leave.approve_reject', label: 'Approve / reject leaves' },
      { id: 'time.leave.manage_quotas', label: 'Assign leave quotas' },
    ],
  },
  {
    module: 'Attendance Reports',
    permissions: [
      { id: 'time.reports.view', label: 'View attendance registers' },
      { id: 'time.reports.export', label: 'Export monthly time reports' },
    ],
  },
]

// ASSETSOFT PERMISSIONS SCHEMA
export const ASSETSOFT_PERMISSIONS_SCHEMA = [
  {
    module: 'Asset Inventory',
    permissions: [
      { id: 'asset.inventory.view', label: 'View asset inventory' },
      { id: 'asset.inventory.add', label: 'Add new asset (PC, Table, Chair)' },
      { id: 'asset.inventory.edit', label: 'Edit asset details' },
      { id: 'asset.inventory.delete', label: 'Retire / delete asset' },
    ],
  },
  {
    module: 'Asset Allocation',
    permissions: [
      { id: 'asset.allocation.view_own', label: 'View assigned assets' },
      { id: 'asset.allocation.assign', label: 'Allocate asset to staff' },
      { id: 'asset.allocation.revoke', label: 'Revoke & return assets' },
      { id: 'asset.allocation.history', label: 'View allocation history' },
    ],
  },
  {
    module: 'Maintenance & Audit',
    permissions: [
      { id: 'asset.maintenance.request', label: 'Request asset repair' },
      { id: 'asset.maintenance.approve_log', label: 'Approve repair & log costs' },
      { id: 'asset.maintenance.audit', label: 'Conduct physical asset audit' },
    ],
  },
  {
    module: 'Asset Reports',
    permissions: [
      { id: 'asset.reports.view', label: 'View asset register' },
      { id: 'asset.reports.export', label: 'Export asset reports' },
    ],
  },
]

// ROLE PRESETS MAP FOR AUTO SELECTION
const LEADS_PRESETS = {
  Manager: [
    'leads.raw.view',
    'leads.raw.view_all_company',
    'leads.raw.view_all_raw',
    'leads.raw.add',
    'leads.raw.edit_own',
    'leads.raw.edit_any',
    'leads.raw.delete_own',
    'leads.raw.assign',
    'leads.raw.reassign_unlock',
    'leads.telecall.view',
    'leads.telecall.add',
    'leads.telecall.edit',
    'leads.telecall.assign',
    'leads.quotations.view',
    'leads.quotations.create',
    'leads.quotations.edit',
    'leads.quotations.send',
    'leads.quotations.send_no_approval',
    'leads.quotations.approve_reject',
    'leads.orders.view',
    'leads.orders.create',
    'leads.orders.edit',
    'leads.clients.view',
    'leads.clients.add',
    'leads.clients.edit',
    'leads.master.branches_view',
    'leads.master.categories_view',
    'leads.master.sources_view',
    'leads.master.locations_view',
    'leads.master.company_profile_view',
    'leads.staff.view',
    'leads.staff.manage',
    'leads.staff.roles_permissions',
    'leads.reports.view',
    'leads.reports.export',
  ],
  Staff: [
    'leads.raw.view',
    'leads.raw.add',
    'leads.raw.edit_own',
    'leads.telecall.view',
    'leads.telecall.add',
    'leads.telecall.edit',
    'leads.quotations.view',
    'leads.quotations.create',
    'leads.quotations.edit',
    'leads.quotations.send',
    'leads.orders.view',
    'leads.orders.create',
    'leads.clients.view',
    'leads.clients.add',
    'leads.clients.edit',
    'leads.reports.view',
  ],
}

const PROJECT_PRESETS = {
  'Project Manager': [
    'project.projects.view',
    'project.projects.create',
    'project.projects.edit',
    'project.projects.archive',
    'project.projects.work_orders',
    'project.tasks.view',
    'project.tasks.details',
    'project.tasks.update_status',
    'project.tasks.comments',
    'project.tasks.create',
    'project.reports.submit_daily',
    'project.reports.man_hours',
    'project.reports.review_reports',
    'project.reports.view_progress',
    'project.reports.export',
    'project.files.upload',
    'project.files.download',
    'project.files.request',
    'project.files.approve_reject',
    'project.chat.participate',
  ],
  Developer: [
    'project.projects.view',
    'project.tasks.view',
    'project.tasks.details',
    'project.tasks.update_status',
    'project.tasks.comments',
    'project.reports.submit_daily',
    'project.reports.man_hours',
    'project.files.upload',
    'project.files.download',
    'project.files.request',
    'project.chat.participate',
  ],
}

const ACCOUNTS_PRESETS = {
  'Accounts Manager': [
    'accounts.orders.view',
    'accounts.ptda.create',
    'accounts.ptda.edit',
    'accounts.items.view',
    'accounts.items.manage',
    'accounts.invoices.generate',
    'accounts.invoices.edit',
    'accounts.payments.record',
    'accounts.payments.edit',
    'accounts.reports.view',
    'accounts.reports.export',
  ],
  'Accounts Executive': [
    'accounts.orders.view',
    'accounts.items.view',
    'accounts.invoices.generate',
    'accounts.payments.record',
    'accounts.reports.view',
  ],
}

const TIMETRACKER_PRESETS = {
  'HR Manager': [
    'time.clock.checkin_checkout',
    'time.clock.view_own_logs',
    'time.clock.view_all_logs',
    'time.clock.manual_entry',
    'time.leave.apply',
    'time.leave.view_own',
    'time.leave.approve_reject',
    'time.leave.manage_quotas',
    'time.reports.view',
    'time.reports.export',
  ],
  Employee: [
    'time.clock.checkin_checkout',
    'time.clock.view_own_logs',
    'time.leave.apply',
    'time.leave.view_own',
  ],
}

const ASSETSOFT_PRESETS = {
  'Asset Manager': [
    'asset.inventory.view',
    'asset.inventory.add',
    'asset.inventory.edit',
    'asset.inventory.delete',
    'asset.allocation.view_own',
    'asset.allocation.assign',
    'asset.allocation.revoke',
    'asset.allocation.history',
    'asset.maintenance.request',
    'asset.maintenance.approve_log',
    'asset.maintenance.audit',
    'asset.reports.view',
    'asset.reports.export',
  ],
  Staff: [
    'asset.inventory.view',
    'asset.allocation.view_own',
    'asset.maintenance.request',
  ],
}

function FloatingInput({
  id,
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  required = false,
  min,
  max,
  className = '',
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false)
  const isFilled = value !== undefined && value !== null && String(value).trim().length > 0
  const isFloating = isFocused || isFilled || type === 'date'

  return (
    <div className={`relative ${className}`}>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        min={min}
        max={max}
        placeholder={isFocused ? placeholder : ''}
        className={`w-full px-3 pt-2.5 pb-1.5 text-xs bg-white border rounded-lg outline-none font-medium text-slate-800 transition-all duration-150 ${
          isFocused
            ? 'border-blue-600 ring-2 ring-blue-500/15 shadow-xs'
            : isFilled
            ? 'border-slate-300 hover:border-slate-400'
            : 'border-slate-300 hover:border-slate-400'
        }`}
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute left-2.5 px-1 transition-all duration-150 pointer-events-none rounded bg-white leading-none z-10 select-none ${
          isFloating
            ? '-top-2 text-[10.5px] font-semibold ' + (isFocused ? 'text-blue-600' : 'text-slate-600')
            : 'top-2.5 text-xs text-slate-400 font-normal'
        }`}
      >
        {label} {required && <span className="text-red-500 font-bold">*</span>}
      </label>
    </div>
  )
}

function FloatingSelect({
  id,
  label,
  value,
  onChange,
  options,
  required = false,
  className = '',
}) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={`relative ${className}`}>
      <select
        id={id}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-3 pt-2.5 pb-1.5 text-xs bg-white border rounded-lg outline-none font-medium text-slate-800 transition-all duration-150 appearance-none cursor-pointer ${
          isFocused
            ? 'border-blue-600 ring-2 ring-blue-500/15 shadow-xs'
            : 'border-slate-300 hover:border-slate-400'
        }`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {/* Custom Chevron icon */}
      <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <label
        htmlFor={id}
        className={`absolute left-2.5 -top-2 px-1 text-[10.5px] font-semibold transition-all duration-150 pointer-events-none rounded bg-white leading-none z-10 select-none ${
          isFocused ? 'text-blue-600' : 'text-slate-600'
        }`}
      >
        {label} {required && <span className="text-red-500 font-bold">*</span>}
      </label>
    </div>
  )
}

export default function AddUserModal({ isOpen, onClose, onUserCreated, editingUser = null }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isEditingEmpCode, setIsEditingEmpCode] = useState(false)

  // Step 1: Comprehensive Employee Basic Information (22 Fields)
  const [basicInfo, setBasicInfo] = useState({
    fullName: '',
    email: '',
    branch: 'Thrissur Office',
    department: 'No Department',
    designation: 'No Designation',
    role: '',
    phone: '',
    emergencyPhone: '',
    address: '',
    state: 'Kerala',
    district: 'Thrissur',
    pincode: '',
    source: '',
    basicSalary: '0.00',
    joiningDate: '',
    incrementDate: '',
    status: 'Live',
    bloodGroup: 'Unknown / Not provided',
    empCode: '',
    photo: null,
    photoName: '',
    signature: null,
    signatureName: '',
    resume: null,
    resumeName: '',
  })

  // Step 2: Applications Selected
  const [selectedApps, setSelectedApps] = useState({
    leads: true,
    projectsoft: false,
    accountsoft: false,
    timetracker: false,
    assetsoft: false,
  })

  // Roles per app
  const [appRoles, setAppRoles] = useState({
    leads: 'Staff',
    projectsoft: 'Developer',
    accountsoft: 'Accounts Executive',
    timetracker: 'Employee',
    assetsoft: 'Staff',
  })

  // Granular permissions map: { [permissionId]: boolean }
  const [permissions, setPermissions] = useState({})

  // Active sub-tab in step 2 (e.g. leads, projectsoft, accountsoft, timetracker, assetsoft)
  const [activeAppTab, setActiveAppTab] = useState('leads')

  // Synchronize and reset state on modal open or when editingUser changes
  useEffect(() => {
    if (isOpen) {
      if (editingUser) {
        setCurrentStep(2)
        setBasicInfo({
          fullName: editingUser.name || '',
          email: editingUser.email || '',
          branch: editingUser.branch || 'Thrissur Office',
          department: editingUser.department || 'No Department',
          designation: editingUser.designation || 'No Designation',
          role: editingUser.role || 'Staff',
          phone: editingUser.phone || '',
          emergencyPhone: editingUser.emergencyPhone || '',
          address: editingUser.address || '',
          district: editingUser.district || 'Thrissur',
          state: editingUser.state || 'Kerala',
          pincode: editingUser.pincode || '',
          source: editingUser.source || '',
          basicSalary: editingUser.basicSalary || '0.00',
          joiningDate: editingUser.joiningDate || '',
          incrementDate: editingUser.incrementDate || '',
          status: editingUser.employeeStatus || (editingUser.status === 'Inactive' ? 'Inactive' : 'Live'),
          bloodGroup: editingUser.bloodGroup || 'Unknown / Not provided',
          empCode: editingUser.empCode || editingUser.id || `EMP${Math.floor(100 + Math.random() * 900)}`,
          photo: null,
          photoName: editingUser.photoName || '',
          signature: null,
          signatureName: editingUser.signatureName || '',
          resume: null,
          resumeName: editingUser.resumeName || '',
        })
        setIsEditingEmpCode(false)

        const hasLeads = editingUser.apps?.some((a) => a.name.toLowerCase() === 'leads') ?? false
        const hasProj = editingUser.apps?.some((a) => a.name.toLowerCase() === 'projectsoft') ?? false
        const hasAcc = editingUser.apps?.some((a) => a.name.toLowerCase() === 'accountsoft') ?? false
        const hasTime = editingUser.apps?.some((a) => a.name.toLowerCase().includes('time')) ?? false
        const hasAsset = editingUser.apps?.some((a) => a.name.toLowerCase().includes('asset')) ?? false

        setSelectedApps({
          leads: hasLeads,
          projectsoft: hasProj,
          accountsoft: hasAcc,
          timetracker: hasTime,
          assetsoft: hasAsset,
        })

        const leadsRole = editingUser.apps?.find((a) => a.name.toLowerCase() === 'leads')?.role || 'Staff'
        const projRole = editingUser.apps?.find((a) => a.name.toLowerCase() === 'projectsoft')?.role || 'Developer'
        const accRole = editingUser.apps?.find((a) => a.name.toLowerCase() === 'accountsoft')?.role || 'Accounts Executive'
        const timeRole = editingUser.apps?.find((a) => a.name.toLowerCase().includes('time'))?.role || 'Employee'
        const assetRole = editingUser.apps?.find((a) => a.name.toLowerCase().includes('asset'))?.role || 'Staff'

        setAppRoles({
          leads: leadsRole,
          projectsoft: projRole,
          accountsoft: accRole,
          timetracker: timeRole,
          assetsoft: assetRole,
        })

        if (editingUser.permissions && Object.keys(editingUser.permissions).length > 0) {
          setPermissions(editingUser.permissions)
        } else {
          const initial = {}
          if (hasLeads) (LEADS_PRESETS[leadsRole] || LEADS_PRESETS.Staff).forEach((p) => (initial[p] = true))
          if (hasProj) (PROJECT_PRESETS[projRole] || PROJECT_PRESETS.Developer).forEach((p) => (initial[p] = true))
          if (hasAcc) (ACCOUNTS_PRESETS[accRole] || ACCOUNTS_PRESETS['Accounts Executive']).forEach((p) => (initial[p] = true))
          if (hasTime) (TIMETRACKER_PRESETS[timeRole] || TIMETRACKER_PRESETS.Employee).forEach((p) => (initial[p] = true))
          if (hasAsset) (ASSETSOFT_PRESETS[assetRole] || ASSETSOFT_PRESETS.Staff).forEach((p) => (initial[p] = true))
          setPermissions(initial)
        }

        if (hasLeads) setActiveAppTab('leads')
        else if (hasProj) setActiveAppTab('projectsoft')
        else if (hasAcc) setActiveAppTab('accountsoft')
        else if (hasTime) setActiveAppTab('timetracker')
        else if (hasAsset) setActiveAppTab('assetsoft')
        else setActiveAppTab('leads')
      } else {
        // Reset to initial clean state for new user with auto-generated Emp Code
        setCurrentStep(1)
        setIsEditingEmpCode(false)
        setBasicInfo({
          fullName: '',
          email: '',
          branch: 'Thrissur Office',
          department: 'No Department',
          designation: 'No Designation',
          role: '',
          phone: '',
          emergencyPhone: '',
          address: '',
          state: 'Kerala',
          district: 'Thrissur',
          pincode: '',
          source: '',
          basicSalary: '0.00',
          joiningDate: '',
          incrementDate: '',
          status: 'Live',
          bloodGroup: 'Unknown / Not provided',
          empCode: `EMP${Math.floor(100 + Math.random() * 900)}`,
          photo: null,
          photoName: '',
          signature: null,
          signatureName: '',
          resume: null,
          resumeName: '',
        })
        setSelectedApps({
          leads: true,
          projectsoft: false,
          accountsoft: false,
          timetracker: false,
          assetsoft: false,
        })
        setAppRoles({
          leads: 'Staff',
          projectsoft: 'Developer',
          accountsoft: 'Accounts Executive',
          timetracker: 'Employee',
          assetsoft: 'Staff',
        })
        const initial = {}
        LEADS_PRESETS.Staff.forEach((p) => (initial[p] = true))
        PROJECT_PRESETS.Developer.forEach((p) => (initial[p] = true))
        ACCOUNTS_PRESETS['Accounts Executive'].forEach((p) => (initial[p] = true))
        TIMETRACKER_PRESETS.Employee.forEach((p) => (initial[p] = true))
        ASSETSOFT_PRESETS.Staff.forEach((p) => (initial[p] = true))
        setPermissions(initial)
        setActiveAppTab('leads')
      }
    }
  }, [isOpen, editingUser])

  if (!isOpen) return null

  // Handler for app checkbox toggle
  const toggleAppSelection = (appKey) => {
    setSelectedApps((prev) => {
      const updated = { ...prev, [appKey]: !prev[appKey] }
      if (!prev[appKey]) {
        setActiveAppTab(appKey)
      }
      return updated
    })
  }

  // Handler for Role Preset selection
  const handleRoleChange = (appKey, newRole) => {
    setAppRoles((prev) => ({ ...prev, [appKey]: newRole }))

    let presetPermissions = []
    let schemaToClear = []

    if (appKey === 'leads') {
      presetPermissions = LEADS_PRESETS[newRole] || []
      schemaToClear = LEADS_PERMISSIONS_SCHEMA
    } else if (appKey === 'projectsoft') {
      presetPermissions = PROJECT_PRESETS[newRole] || []
      schemaToClear = PROJECT_PERMISSIONS_SCHEMA
    } else if (appKey === 'accountsoft') {
      presetPermissions = ACCOUNTS_PRESETS[newRole] || []
      schemaToClear = ACCOUNTS_PERMISSIONS_SCHEMA
    } else if (appKey === 'timetracker') {
      presetPermissions = TIMETRACKER_PRESETS[newRole] || []
      schemaToClear = TIMETRACKER_PERMISSIONS_SCHEMA
    } else if (appKey === 'assetsoft') {
      presetPermissions = ASSETSOFT_PRESETS[newRole] || []
      schemaToClear = ASSETSOFT_PERMISSIONS_SCHEMA
    }

    setPermissions((prev) => {
      const next = { ...prev }
      schemaToClear.forEach((g) =>
        g.permissions.forEach((p) => {
          delete next[p.id]
        })
      )
      presetPermissions.forEach((p) => {
        next[p] = true
      })
      return next
    })
  }

  // Toggle single permission checkbox
  const togglePermission = (permId) => {
    setPermissions((prev) => ({
      ...prev,
      [permId]: !prev[permId],
    }))
  }

  // Toggle entire module group
  const toggleModuleGroup = (groupPermissions, shouldSelect) => {
    setPermissions((prev) => {
      const next = { ...prev }
      groupPermissions.forEach((p) => {
        next[p.id] = shouldSelect
      })
      return next
    })
  }

  // Validate step 1
  const handleNextStep = (e) => {
    e.preventDefault()
    if (!basicInfo.fullName.trim() || !basicInfo.email.trim()) {
      alert('Please fill in Full Name and Email Address.')
      return
    }
    if (!basicInfo.role) {
      alert('Please select a Role for the employee.')
      return
    }
    setCurrentStep(2)
  }

  // Final Form Submission
  const handleSubmitFinal = () => {
    const assignedApps = []
    if (selectedApps.leads) {
      assignedApps.push({
        name: 'Leads',
        role: appRoles.leads,
        color: 'bg-red-50 text-red-700 border-red-200',
      })
    }
    if (selectedApps.projectsoft) {
      assignedApps.push({
        name: 'ProjectSoft',
        role: appRoles.projectsoft,
        color: 'bg-amber-50 text-amber-700 border-amber-200',
      })
    }
    if (selectedApps.accountsoft) {
      assignedApps.push({
        name: 'AccountSoft',
        role: appRoles.accountsoft,
        color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      })
    }
    if (selectedApps.timetracker) {
      assignedApps.push({
        name: 'Time Tracker',
        role: appRoles.timetracker,
        color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      })
    }
    if (selectedApps.assetsoft) {
      assignedApps.push({
        name: 'AssetPro',
        role: appRoles.assetsoft,
        color: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      })
    }

    if (assignedApps.length === 0) {
      alert('Please select at least one application for the user.')
      return
    }

    if (editingUser) {
      const updatedUser = {
        ...editingUser,
        name: basicInfo.fullName,
        email: basicInfo.email,
        empCode: basicInfo.empCode,
        branch: basicInfo.branch,
        department: basicInfo.department,
        designation: basicInfo.designation,
        role: basicInfo.role,
        phone: basicInfo.phone,
        emergencyPhone: basicInfo.emergencyPhone,
        address: basicInfo.address,
        district: basicInfo.district,
        state: basicInfo.state,
        pincode: basicInfo.pincode,
        source: basicInfo.source,
        basicSalary: basicInfo.basicSalary,
        joiningDate: basicInfo.joiningDate,
        incrementDate: basicInfo.incrementDate,
        status: basicInfo.status === 'Inactive' ? 'Inactive' : 'Active',
        employeeStatus: basicInfo.status,
        bloodGroup: basicInfo.bloodGroup,
        photoName: basicInfo.photoName,
        signatureName: basicInfo.signatureName,
        resumeName: basicInfo.resumeName,
        apps: assignedApps,
        permissions: permissions,
      }
      if (onUserCreated) {
        onUserCreated(updatedUser, true)
      }
    } else {
      const newUser = {
        id: basicInfo.empCode || `EMP${Math.floor(100 + Math.random() * 900)}`,
        empCode: basicInfo.empCode,
        name: basicInfo.fullName,
        email: basicInfo.email,
        branch: basicInfo.branch,
        department: basicInfo.department,
        designation: basicInfo.designation,
        role: basicInfo.role,
        phone: basicInfo.phone,
        emergencyPhone: basicInfo.emergencyPhone,
        address: basicInfo.address,
        district: basicInfo.district,
        state: basicInfo.state,
        pincode: basicInfo.pincode,
        source: basicInfo.source,
        basicSalary: basicInfo.basicSalary,
        joiningDate: basicInfo.joiningDate,
        incrementDate: basicInfo.incrementDate,
        status: basicInfo.status === 'Inactive' ? 'Inactive' : 'Active',
        employeeStatus: basicInfo.status,
        bloodGroup: basicInfo.bloodGroup,
        photoName: basicInfo.photoName,
        signatureName: basicInfo.signatureName,
        resumeName: basicInfo.resumeName,
        apps: assignedApps,
        permissions: permissions,
      }
      if (onUserCreated) {
        onUserCreated(newUser, false)
      }
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-xs font-sans animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-2xl sm:max-w-3xl lg:max-w-[860px] max-h-[94vh] shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="px-5 py-3 bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 text-white flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold tracking-wide uppercase">
                Step {currentStep} of 2
              </span>
              <h2 className="text-base font-bold text-white tracking-tight">
                {editingUser ? `Manage Access: ${editingUser.name}` : 'Add New Employee User'}
              </h2>
            </div>
            <p className="text-[11px] text-blue-100 mt-0.5">
              {currentStep === 1
                ? 'Step 1: Enter employee personal, contact & organizational profile details'
                : 'Step 2: Assign application access, roles, and granular functional permissions'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/20 transition-colors text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-5">
          {/* STEP 1: COMPREHENSIVE EMPLOYEE INFORMATION (22 FIELDS) */}
          {currentStep === 1 && (
            <form id="step1-form" onSubmit={handleNextStep} className="space-y-3.5">
              {/* Section 1: Basic & Identity */}
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-600" />
                  Basic &amp; Identity Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-2.5">
                  {/* Full Name * */}
                  <FloatingInput
                    id="fullName"
                    label="Full Name"
                    required
                    value={basicInfo.fullName}
                    onChange={(e) => setBasicInfo({ ...basicInfo, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                  />

                  {/* Email Address * */}
                  <FloatingInput
                    id="email"
                    label="Email Address"
                    type="email"
                    required
                    value={basicInfo.email}
                    onChange={(e) => setBasicInfo({ ...basicInfo, email: e.target.value })}
                    placeholder="e.g. rahul@company.com"
                  />

                  {/* Emp Code * with Auto-generated indicator & Pencil Toggle */}
                  <div className="relative">
                    <div className="relative">
                      <input
                        id="empCode"
                        type="text"
                        required
                        readOnly={!isEditingEmpCode}
                        value={basicInfo.empCode}
                        onChange={(e) => setBasicInfo({ ...basicInfo, empCode: e.target.value })}
                        className={`w-full px-3 pt-2.5 pb-1.5 pr-8 text-xs rounded-lg outline-none font-medium transition-all duration-150 border ${
                          isEditingEmpCode
                            ? 'bg-white border-blue-600 ring-2 ring-blue-500/15 text-slate-900 shadow-xs'
                            : 'bg-slate-50/80 border-slate-300 text-slate-700 cursor-default'
                        }`}
                      />
                      <label
                        htmlFor="empCode"
                        className="absolute left-2.5 -top-2 px-1 text-[10.5px] font-semibold rounded bg-white leading-none z-10 text-slate-600"
                      >
                        Emp Code <span className="text-red-500 font-bold">*</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setIsEditingEmpCode(!isEditingEmpCode)}
                        className={`absolute right-1.5 top-1/2 -translate-y-1/2 p-1 rounded-md transition-colors cursor-pointer ${
                          isEditingEmpCode
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'text-slate-400 hover:text-slate-700 hover:bg-slate-200'
                        }`}
                        title={isEditingEmpCode ? 'Lock Emp Code' : 'Edit Emp Code'}
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-[9.5px] text-slate-400 mt-0.5 pl-0.5 leading-tight">
                      Auto-generated. Use the pencil to enter your own.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: Organizational Placement */}
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                  Organizational Placement &amp; Role
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-2.5">
                  {/* Branch * */}
                  <FloatingSelect
                    id="branch"
                    label="Branch"
                    required
                    value={basicInfo.branch}
                    onChange={(e) => setBasicInfo({ ...basicInfo, branch: e.target.value })}
                    options={[
                      { value: 'Thrissur Office', label: 'Thrissur Office' },
                      { value: 'Kochi Office', label: 'Kochi Office' },
                      { value: 'Calicut Office', label: 'Calicut Office' },
                      { value: 'Trivandrum Office', label: 'Trivandrum Office' },
                      { value: 'Bangalore Office', label: 'Bangalore Office' },
                    ]}
                  />

                  {/* Department */}
                  <FloatingSelect
                    id="department"
                    label="Department"
                    value={basicInfo.department}
                    onChange={(e) => setBasicInfo({ ...basicInfo, department: e.target.value })}
                    options={[
                      { value: 'No Department', label: 'No Department' },
                      { value: 'Marketing', label: 'Marketing' },
                      { value: 'Projects', label: 'Projects' },
                      { value: 'HR', label: 'HR' },
                    ]}
                  />

                  {/* Designation */}
                  <FloatingSelect
                    id="designation"
                    label="Designation"
                    value={basicInfo.designation}
                    onChange={(e) => setBasicInfo({ ...basicInfo, designation: e.target.value })}
                    options={[
                      { value: 'No Designation', label: 'No Designation' },
                      { value: 'Software Engineer', label: 'Software Engineer' },
                      { value: 'Senior Developer', label: 'Senior Developer' },
                      { value: 'Project Manager', label: 'Project Manager' },
                      { value: 'Marketing Executive', label: 'Marketing Executive' },
                      { value: 'Sales Executive', label: 'Sales Executive' },
                      { value: 'HR Executive', label: 'HR Executive' },
                      { value: 'Operations Lead', label: 'Operations Lead' },
                      { value: 'UI/UX Designer', label: 'UI/UX Designer' },
                      { value: 'Accountant', label: 'Accountant' },
                    ]}
                  />

                  {/* Role * */}
                  <FloatingSelect
                    id="role"
                    label="Role"
                    required
                    value={basicInfo.role}
                    onChange={(e) => setBasicInfo({ ...basicInfo, role: e.target.value })}
                    options={[
                      { value: '', label: 'Select Role' },
                      { value: 'Admin', label: 'Admin' },
                      { value: 'Manager', label: 'Manager' },
                      { value: 'Staff', label: 'Staff' },
                      { value: 'Employee', label: 'Employee' },
                      { value: 'Intern', label: 'Intern' },
                    ]}
                  />

                  {/* Status */}
                  <FloatingSelect
                    id="status"
                    label="Status"
                    value={basicInfo.status}
                    onChange={(e) => setBasicInfo({ ...basicInfo, status: e.target.value })}
                    options={[
                      { value: 'Live', label: 'Live' },
                      { value: 'Probation', label: 'Probation' },
                      { value: 'Notice Period', label: 'Notice Period' },
                      { value: 'Inactive', label: 'Inactive' },
                    ]}
                  />

                  {/* Blood Group */}
                  <FloatingSelect
                    id="bloodGroup"
                    label="Blood Group"
                    value={basicInfo.bloodGroup}
                    onChange={(e) => setBasicInfo({ ...basicInfo, bloodGroup: e.target.value })}
                    options={[
                      { value: 'Unknown / Not provided', label: 'Unknown / Not provided' },
                      { value: 'A+', label: 'A+' },
                      { value: 'A-', label: 'A-' },
                      { value: 'B+', label: 'B+' },
                      { value: 'B-', label: 'B-' },
                      { value: 'O+', label: 'O+' },
                      { value: 'O-', label: 'O-' },
                      { value: 'AB+', label: 'AB+' },
                      { value: 'AB-', label: 'AB-' },
                    ]}
                  />
                </div>
              </div>

              {/* Section 3: Contact & Address */}
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  Contact &amp; Location Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-2.5">
                  {/* Mobile Number * */}
                  <FloatingInput
                    id="phone"
                    label="Mobile Number"
                    type="tel"
                    required
                    value={basicInfo.phone}
                    onChange={(e) => setBasicInfo({ ...basicInfo, phone: e.target.value })}
                    placeholder="e.g. +91 9876543210"
                  />

                  {/* Emergency Contact Number * */}
                  <FloatingInput
                    id="emergencyPhone"
                    label="Emergency Contact Number"
                    type="tel"
                    required
                    value={basicInfo.emergencyPhone}
                    onChange={(e) => setBasicInfo({ ...basicInfo, emergencyPhone: e.target.value })}
                    placeholder="e.g. +91 9876501234"
                  />

                  {/* PIN Code * */}
                  <FloatingInput
                    id="pincode"
                    label="PIN Code"
                    required
                    value={basicInfo.pincode}
                    onChange={(e) => setBasicInfo({ ...basicInfo, pincode: e.target.value })}
                    placeholder="e.g. 560001"
                  />

                  {/* Street Address * (spans full width) */}
                  <FloatingInput
                    id="address"
                    label="Street Address"
                    required
                    className="sm:col-span-2 lg:col-span-3"
                    value={basicInfo.address}
                    onChange={(e) => setBasicInfo({ ...basicInfo, address: e.target.value })}
                    placeholder="123 Tech Park, Phase II"
                  />

                  {/* State * */}
                  <FloatingInput
                    id="state"
                    label="State"
                    required
                    value={basicInfo.state}
                    onChange={(e) => setBasicInfo({ ...basicInfo, state: e.target.value })}
                    placeholder="Kerala"
                  />

                  {/* District * */}
                  <FloatingInput
                    id="district"
                    label="District"
                    required
                    value={basicInfo.district}
                    onChange={(e) => setBasicInfo({ ...basicInfo, district: e.target.value })}
                    placeholder="Thrissur"
                  />

                  {/* Source * */}
                  <FloatingInput
                    id="source"
                    label="Source"
                    required
                    value={basicInfo.source}
                    onChange={(e) => setBasicInfo({ ...basicInfo, source: e.target.value })}
                    placeholder="e.g. Referral, LinkedIn"
                  />
                </div>
              </div>

              {/* Section 4: Compensation & Dates */}
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-blue-600" />
                  Employment Terms &amp; Compensation
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-3 gap-y-2.5">
                  {/* Basic Salary (₹) * */}
                  <FloatingInput
                    id="basicSalary"
                    label="Basic Salary (₹)"
                    required
                    value={basicInfo.basicSalary}
                    onChange={(e) => setBasicInfo({ ...basicInfo, basicSalary: e.target.value })}
                    placeholder="0.00"
                  />

                  {/* Joining Date * */}
                  <FloatingInput
                    id="joiningDate"
                    label="Joining Date"
                    type="date"
                    required
                    value={basicInfo.joiningDate}
                    onChange={(e) => setBasicInfo({ ...basicInfo, joiningDate: e.target.value })}
                  />

                  {/* Increment Date (optional) */}
                  <FloatingInput
                    id="incrementDate"
                    label="Increment Date (optional)"
                    type="date"
                    value={basicInfo.incrementDate}
                    onChange={(e) => setBasicInfo({ ...basicInfo, incrementDate: e.target.value })}
                  />
                </div>
              </div>

              {/* Section 5: Document & Media Uploads */}
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-blue-600" />
                  Employee Documents &amp; Media
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {/* Employee Photo */}
                  <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/50 flex flex-col justify-between space-y-1.5">
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block">Employee Photo</label>
                      <p className="text-[10px] text-slate-400 truncate">
                        {basicInfo.photoName || 'No file chosen'}
                      </p>
                    </div>
                    <label className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-600 text-slate-700 text-[11px] font-semibold rounded-md shadow-2xs transition-all cursor-pointer">
                      <Upload className="w-3 h-3" />
                      <span>Upload Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) {
                            setBasicInfo({
                              ...basicInfo,
                              photo: file,
                              photoName: file.name,
                            })
                          }
                        }}
                      />
                    </label>
                  </div>

                  {/* Signature */}
                  <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/50 flex flex-col justify-between space-y-1.5">
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block">Signature</label>
                      <p className="text-[10px] text-slate-400 truncate">
                        {basicInfo.signatureName || 'No file chosen'}
                      </p>
                    </div>
                    <label className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-600 text-slate-700 text-[11px] font-semibold rounded-md shadow-2xs transition-all cursor-pointer">
                      <Upload className="w-3 h-3" />
                      <span>Upload Signature</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) {
                            setBasicInfo({
                              ...basicInfo,
                              signature: file,
                              signatureName: file.name,
                            })
                          }
                        }}
                      />
                    </label>
                  </div>

                  {/* Biodata / Resume */}
                  <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/50 flex flex-col justify-between space-y-1.5">
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block">Biodata / Resume</label>
                      <p className="text-[10px] text-slate-400 truncate">
                        {basicInfo.resumeName || 'No file chosen'}
                      </p>
                    </div>
                    <label className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-600 text-slate-700 text-[11px] font-semibold rounded-md shadow-2xs transition-all cursor-pointer">
                      <Upload className="w-3 h-3" />
                      <span>Upload Resume</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) {
                            setBasicInfo({
                              ...basicInfo,
                              resume: file,
                              resumeName: file.name,
                            })
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </form>
          )}

          {/* STEP 2: APPLICATIONS & GRANULAR PERMISSIONS */}
          {currentStep === 2 && (() => {
            const APPS_CONFIG = [
              {
                key: 'leads',
                name: 'Leads',
                subtitle: 'CRM & Calling',
                icon: LeadsLogoIcon,
                roles: ['Staff', 'Manager'],
                schema: LEADS_PERMISSIONS_SCHEMA,
                accentBg: 'bg-red-600',
                accentText: 'text-red-600',
                lightBg: 'bg-red-50 text-red-700 border-red-200',
              },
              {
                key: 'projectsoft',
                name: 'ProjectSoft',
                subtitle: 'Tasks & Sprints',
                icon: FolderKanban,
                roles: ['Developer', 'Project Manager'],
                schema: PROJECT_PERMISSIONS_SCHEMA,
                accentBg: 'bg-amber-600',
                accentText: 'text-amber-600',
                lightBg: 'bg-amber-50 text-amber-700 border-amber-200',
              },
              {
                key: 'accountsoft',
                name: 'Account Soft',
                subtitle: 'Order · Delivery · Finance',
                icon: AccountSoftLogoIcon,
                roles: ['Accounts Executive', 'Accounts Manager'],
                schema: ACCOUNTS_PERMISSIONS_SCHEMA,
                accentBg: 'bg-emerald-600',
                accentText: 'text-emerald-600',
                lightBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
              },
              {
                key: 'timetracker',
                name: 'Time Tracker',
                subtitle: 'Attendance & Leaves',
                icon: Clock,
                roles: ['Employee', 'HR Manager'],
                schema: TIMETRACKER_PERMISSIONS_SCHEMA,
                accentBg: 'bg-emerald-600',
                accentText: 'text-emerald-600',
                lightBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
              },
              {
                key: 'assetsoft',
                name: 'AssetPro',
                subtitle: 'Office Assets & Devices',
                icon: AssetProLogoIcon,
                roles: ['Staff', 'Asset Manager'],
                schema: ASSETSOFT_PERMISSIONS_SCHEMA,
                accentBg: 'bg-cyan-500',
                accentText: 'text-cyan-600',
                lightBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
              },
            ]

            const currentApp = APPS_CONFIG.find((a) => a.key === activeAppTab) || APPS_CONFIG[0]
            const isCurrentAppEnabled = !!selectedApps[currentApp.key]
            const currentAppActivePermsCount = currentApp.schema
              .flatMap((g) => g.permissions)
              .filter((p) => permissions[p.id]).length

            return (
              <div className="space-y-4">
                {/* 1. Unified Application Selector Cards */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Select App To Configure
                    </p>
                    <span className="text-[11px] text-slate-400">
                      {Object.values(selectedApps).filter(Boolean).length} of 5 Apps Enabled
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {APPS_CONFIG.map((app) => {
                      const isEnabled = !!selectedApps[app.key]
                      const isSelectedTab = activeAppTab === app.key
                      const Icon = app.icon

                      return (
                        <div
                          key={app.key}
                          onClick={() => setActiveAppTab(app.key)}
                          className={`relative p-2.5 rounded-2xl border-2 transition-all cursor-pointer select-none ${
                            isSelectedTab
                              ? 'border-blue-600 bg-blue-50/40 shadow-sm ring-2 ring-blue-500/10'
                              : isEnabled
                              ? 'border-slate-200 bg-white hover:border-slate-300'
                              : 'border-slate-200/70 bg-slate-50/60 opacity-65 hover:opacity-100 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-1.5">
                            <div className="flex items-center gap-2">
                              <div
                                className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${
                                  isEnabled ? app.accentBg + ' text-white shadow-xs' : 'bg-slate-200 text-slate-500'
                                }`}
                              >
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs font-bold text-slate-900 leading-tight truncate">
                                  {app.name}
                                </p>
                                <p className="text-[10px] text-slate-400 truncate">
                                  {app.subtitle}
                                </p>
                              </div>
                            </div>

                            {/* Access Toggle Switch */}
                            <button
                              type="button"
                              role="switch"
                              aria-checked={isEnabled}
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleAppSelection(app.key)
                              }}
                              className={`relative inline-flex h-4 w-7 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus:outline-none ${
                                isEnabled ? 'bg-emerald-500' : 'bg-slate-300'
                              }`}
                            >
                              <span
                                className={`inline-block h-2.5 w-2.5 transform rounded-full bg-white shadow-xs transition-transform duration-200 ${
                                  isEnabled ? 'translate-x-3.5' : 'translate-x-0.5'
                                }`}
                              />
                            </button>
                          </div>

                          <div className="mt-2 pt-1.5 border-t border-slate-100/80 flex items-center justify-between text-[10px]">
                            <span
                              className={`font-semibold truncate ${
                                isEnabled ? 'text-slate-600' : 'text-slate-400 italic'
                              }`}
                            >
                              {isEnabled ? `${appRoles[app.key]}` : 'Disabled'}
                            </span>
                            {isEnabled && (
                              <span className="font-bold text-emerald-600 shrink-0">Active</span>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* 2. Dedicated Configuration Panel for the Selected App */}
                <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-4 space-y-3.5">
                  {/* Panel Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200/80">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl ${currentApp.lightBg}`}>
                        <currentApp.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                            {currentApp.name} Permissions
                          </h3>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              isCurrentAppEnabled
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-slate-200 text-slate-600'
                            }`}
                          >
                            {isCurrentAppEnabled ? `${currentAppActivePermsCount} Active` : 'Disabled'}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500">
                          {isCurrentAppEnabled
                            ? `Configure permissions & roles for ${currentApp.name}`
                            : `Enable access above to configure permissions for ${currentApp.name}`}
                        </p>
                      </div>
                    </div>

                    {/* Enable / Disable toggle button */}
                    <button
                      type="button"
                      onClick={() => toggleAppSelection(currentApp.key)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                        isCurrentAppEnabled
                          ? 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200/60'
                          : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs'
                      }`}
                    >
                      {isCurrentAppEnabled ? 'Disable Access' : 'Enable Access'}
                    </button>
                  </div>

                  {/* If App Access is Enabled */}
                  {isCurrentAppEnabled ? (
                    <div className="space-y-3.5">
                      {/* Role Preset Selector */}
                      <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shadow-2xs">
                        <div>
                          <p className="text-xs font-bold text-slate-800">
                            {currentApp.name} Role Preset
                          </p>
                          <p className="text-[11px] text-slate-500">
                            Auto-selects standard functional permissions
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {currentApp.roles.map((role) => (
                            <button
                              key={role}
                              type="button"
                              onClick={() => handleRoleChange(currentApp.key, role)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                appRoles[currentApp.key] === role
                                  ? `${currentApp.accentBg} text-white shadow-xs`
                                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                              }`}
                            >
                              {role}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Permissions Matrix by Modules */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {currentApp.schema.map((group) => {
                          const allChecked = group.permissions.every((p) => permissions[p.id])

                          return (
                            <div
                              key={group.module}
                              className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs space-y-2"
                            >
                              <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                                <span className="text-xs font-bold text-slate-800 tracking-tight">
                                  {group.module}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => toggleModuleGroup(group.permissions, !allChecked)}
                                  className={`text-[10px] font-bold ${currentApp.accentText} hover:underline cursor-pointer uppercase`}
                                >
                                  {allChecked ? 'Deselect All' : 'Select All'}
                                </button>
                              </div>

                              <div className="space-y-1.5">
                                {group.permissions.map((p) => (
                                  <label
                                    key={p.id}
                                    className="flex items-start gap-2 text-xs text-slate-700 cursor-pointer select-none hover:text-slate-900"
                                  >
                                    <input
                                      type="checkbox"
                                      checked={!!permissions[p.id]}
                                      onChange={() => togglePermission(p.id)}
                                      className="w-3.5 h-3.5 rounded mt-0.5 text-blue-600 focus:ring-blue-500 border-slate-300"
                                    />
                                    <span className="leading-tight text-[11px]">{p.label}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ) : (
                    /* If App Access is Disabled */
                    <div className="py-7 px-4 text-center bg-white rounded-xl border border-dashed border-slate-300">
                      <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-2">
                        <currentApp.icon className="w-5 h-5" />
                      </div>
                      <p className="text-xs font-bold text-slate-700">
                        {currentApp.name} Access is Turned Off
                      </p>
                      <p className="text-[11px] text-slate-400 max-w-xs mx-auto mt-0.5 mb-2.5">
                        This employee does not have access to {currentApp.name}. Click below to grant access and assign roles.
                      </p>
                      <button
                        type="button"
                        onClick={() => toggleAppSelection(currentApp.key)}
                        className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                      >
                        Grant {currentApp.name} Access
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )
          })()}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          {currentStep === 1 ? (
            <div>
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>{editingUser ? 'Edit Basic Info' : 'Back to Basic Info'}</span>
              </button>
            </div>
          )}

          <div className="flex items-center gap-2">
            {currentStep === 1 ? (
              <button
                type="submit"
                form="step1-form"
                className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-xs font-bold rounded-lg shadow-sm shadow-blue-500/20 transition-all cursor-pointer active:scale-[0.99]"
              >
                <span>Continue to Permissions</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmitFinal}
                className="flex items-center gap-1.5 px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold rounded-lg shadow-sm shadow-emerald-600/20 transition-all cursor-pointer active:scale-[0.99]"
              >
                <Check className="w-3.5 h-3.5" />
                <span>{editingUser ? 'Save Changes & Update Permissions' : 'Create User & Save Access'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
