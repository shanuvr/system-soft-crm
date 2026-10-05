import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import { Menu } from 'lucide-react'

export default function AdminDashboard({ user, onSignOut }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const isApps = location.pathname.startsWith('/apps')
  const isDashboard = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/overview') || location.pathname.startsWith('/admin')
  const pageTitle = isDashboard ? 'Dashboard' : (isApps ? 'Apps' : 'User Management')

  return (
    <div className="h-screen w-screen bg-slate-50 flex font-sans select-none overflow-hidden">
      {/* Sidebar Component */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onSignOut={onSignOut}
        user={user}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 bg-white border-b border-slate-200/80 px-3.5 sm:px-4 py-2 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
            >
              <Menu className="w-4.5 h-4.5" />
            </button>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-tight">
                {pageTitle}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1.5 px-2 py-0.5 bg-blue-50 border border-blue-200/60 rounded-md text-[11px] font-semibold text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              Auth Server Active
            </div>
            <div className="w-6.5 h-6.5 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-[11px] shadow-2xs">
              {user?.name?.[0]?.toUpperCase() || 'A'}
            </div>
          </div>
        </header>

        {/* Dynamic Route Content */}
        <main className="p-2 sm:p-2.5 max-w-full w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

