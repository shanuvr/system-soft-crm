import { useState } from 'react'
import { Search, Plus, Filter, CheckCircle2 } from 'lucide-react'
import AddUserModal from './AddUserModal.jsx'

const INITIAL_USERS = [
  {
    id: 'EMP101',
    name: 'Rahul Sharma',
    email: 'rahul@company.com',
    department: 'Sales & Engineering',
    status: 'Active',
    apps: [
      { name: 'Leads', role: 'Sales Executive', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
      { name: 'ProjectSoft', role: 'Developer', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    ],
  },
  {
    id: 'EMP102',
    name: 'Anu Varghese',
    email: 'anu@company.com',
    department: 'Sales',
    status: 'Active',
    apps: [
      { name: 'Leads', role: 'Sales Manager', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
    ],
  },
  {
    id: 'EMP103',
    name: 'Akhil Raj',
    email: 'akhil@company.com',
    department: 'Technology',
    status: 'Active',
    apps: [
      { name: 'ProjectSoft', role: 'Developer', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    ],
  },
  {
    id: 'EMP104',
    name: 'Sneha Patel',
    email: 'sneha@company.com',
    department: 'Finance & Accounts',
    status: 'Inactive',
    apps: [
      { name: 'AccountSoft', role: 'Accounts Manager', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    ],
  },
]

export default function UserManagement() {
  const [users, setUsers] = useState(INITIAL_USERS)
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [createdToast, setCreatedToast] = useState(null)

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

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Success Notification Toast */}
      {createdToast && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3 shadow-xs animate-in fade-in slide-in-from-top-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <p className="text-xs sm:text-sm font-semibold">{createdToast}</p>
        </div>
      )}

      {/* Action Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, email or ID..."
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button className="flex items-center gap-2 px-3.5 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            <span>Filter</span>
          </button>
          <button
            onClick={handleOpenAddUser}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 active:scale-[0.99] text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/25 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add User</span>
          </button>
        </div>
      </div>

      {/* Add / Edit User Wizard Modal */}
      <AddUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUserCreated={handleUserSaved}
        editingUser={editingUser}
      />

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50/75 text-slate-500 text-[11px] uppercase tracking-wider font-bold border-b border-slate-100">
              <tr>
                <th className="py-3.5 px-5">Employee</th>
                <th className="py-3.5 px-5">Department</th>
                <th className="py-3.5 px-5">Application Access & Roles</th>
                <th className="py-3.5 px-5">Status</th>
                <th className="py-3.5 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredUsers.map((u) => {
                const isActive = u.status === 'Active'

                return (
                  <tr key={u.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-xs shrink-0">
                          {u.name[0]}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 leading-tight">{u.name}</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            {u.email} · <span className="font-mono">{u.id}</span>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-slate-600 font-medium">{u.department}</td>
                    <td className="py-4 px-5">
                      <div className="flex flex-wrap gap-1.5">
                        {u.apps.map((app) => (
                          <span
                            key={app.name}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${app.color}`}
                          >
                            <span>{app.name}</span>
                            <span className="text-[9px] opacity-70">({app.role})</span>
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-5">
                      {/* Interactive Toggle Button */}
                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          role="switch"
                          aria-checked={isActive}
                          onClick={() => handleToggleStatus(u.id)}
                          className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                            isActive ? 'bg-emerald-500' : 'bg-slate-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow-xs transition-transform duration-200 ease-in-out ${
                              isActive ? 'translate-x-5' : 'translate-x-1'
                            }`}
                          />
                        </button>
                        <span
                          className={`text-[11px] font-bold ${
                            isActive ? 'text-emerald-600' : 'text-slate-400'
                          }`}
                        >
                          {isActive ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-right">
                      <button
                        onClick={() => handleManageAccess(u)}
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
                      >
                        Manage Access →
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
