import { Link, useLocation } from 'react-router-dom'
import { Users, LayoutGrid, LayoutDashboard, LogOut, X, ShieldCheck } from 'lucide-react'

export default function Sidebar({ isOpen, onClose, onSignOut, user }) {
  const location = useLocation()

  const navItems = [
    {
      id: 'dashboard',
      path: '/dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      description: 'Overview & analytics',
    },
    {
      id: 'usermanagement',
      path: '/usermanagement',
      label: 'User Management',
      icon: Users,
      description: 'Manage employees & access',
    },
    {
      id: 'apps',
      path: '/apps',
      label: 'Apps',
      icon: LayoutGrid,
      description: 'Connected applications',
    },
  ]

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden transition-opacity duration-300"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-60 shrink-0 bg-white border-r border-slate-200/90 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0 shadow-2xl lg:shadow-none' : '-translate-x-full'
        }`}
      >
        {/* Top Header & Branding */}
        <div>
          <div className="flex items-center justify-between px-4.5 py-4 border-b border-slate-100">
            <div className="flex flex-col items-start gap-0.5">
              <img
                src="/programers-logo-BLACCK.png"
                alt="PROGRAMERS"
                className="h-7 w-auto max-w-[130px] object-contain shrink-0"
              />
              <p className="text-[9.5px] font-bold text-blue-600 tracking-wider uppercase flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-blue-600 inline" />
                Admin Portal
              </p>
            </div>

            {/* Mobile Close Button */}
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            <p className="px-2.5 text-[10.5px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Main Navigation
            </p>
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive =
                item.id === 'dashboard'
                  ? (location.pathname === '/dashboard' || location.pathname === '/overview' || location.pathname === '/admin')
                  : item.id === 'usermanagement'
                  ? (location.pathname === '/usermanagement' || location.pathname === '/users' || location.pathname === '/user-management')
                  : location.pathname.startsWith(item.path)

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => {
                    if (onClose) onClose()
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-sm shadow-blue-500/25 active:scale-[0.99]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500 group-hover:text-slate-700'
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-semibold tracking-tight ${isActive ? 'text-white' : 'text-slate-800'}`}>
                      {item.label}
                    </p>
                    <p className={`text-[10.5px] truncate ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                      {item.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Bottom User Info & Sign Out */}
        <div className="p-3 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200/70 shadow-2xs mb-2.5">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-2xs shrink-0">
                {user?.name?.[0]?.toUpperCase() || 'A'}
              </div>
              <div className="min-w-0 flex-1 text-left">
                <p className="text-xs font-bold text-slate-900 truncate">{user?.name || 'Administrator'}</p>
                <p className="text-[10.5px] text-slate-500 truncate">{user?.email || 'admin@company.com'}</p>
              </div>
            </div>
          </div>

          <button
            onClick={onSignOut}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-slate-200 text-slate-600 hover:text-red-600 hover:bg-red-50 hover:border-red-200 text-xs font-semibold transition-all cursor-pointer shadow-2xs active:scale-[0.99]"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  )
}
