import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import { Menu } from 'lucide-react'

export default function AdminDashboard({ user, onSignOut }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const isApps = location.pathname.startsWith('/apps')
  const pageTitle = isApps ? 'Apps' : 'User Management'

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
        <header className="sticky top-0 z-30 bg-white border-b border-slate-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                {pageTitle}
              </h2>
              <p className="text-xs text-slate-500 hidden sm:block">
                Centralized Authentication & Authorization Control
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200/60 rounded-xl text-xs font-semibold text-blue-700">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Auth Server Active
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              {user?.name?.[0]?.toUpperCase() || 'A'}
            </div>
          </div>
        </header>

        {/* Dynamic Route Content */}
        <main className="p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

