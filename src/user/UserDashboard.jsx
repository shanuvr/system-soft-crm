import { useState } from 'react'
import {
  Layers,
  FolderKanban,
  DollarSign,
  Clock,
  Package,
  ExternalLink,
  LogOut,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

export default function UserDashboard({ user, onSignOut }) {
  const [activeApp, setActiveApp] = useState(null)

  const APPS = [
    {
      id: 'leads',
      name: 'Leads CRM',
      category: 'Sales & Telecalling',
      desc: 'Access client raw data, log telecalling updates, generate quotes, and manage orders.',
      icon: Layers,
      color: 'from-indigo-600 to-violet-600',
      badge: 'Sales Suite',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    {
      id: 'projectsoft',
      name: 'ProjectSoft',
      category: 'Projects & Work Orders',
      desc: 'Track sprint work orders, update task statuses, log man-hours, and submit daily reports.',
      icon: FolderKanban,
      color: 'from-amber-500 to-orange-600',
      badge: 'Engineering',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      id: 'accountsoft',
      name: 'AccountSoft',
      category: 'Invoicing & PTDA',
      desc: 'Manage company financial records, track client receipts, and review generated invoices.',
      icon: DollarSign,
      color: 'from-teal-600 to-cyan-700',
      badge: 'Finance',
      badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
    },
    {
      id: 'timetracker',
      name: 'Time Tracker',
      category: 'Attendance & Leaves',
      desc: 'Check in / check out attendance logs, submit leave requests, and view monthly work times.',
      icon: Clock,
      color: 'from-emerald-500 to-green-600',
      badge: 'HR & Work Time',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      id: 'assetsoft',
      name: 'AssetSoft',
      category: 'Office Assets & Hardware',
      desc: 'View allocated hardware & furniture, request maintenance repairs, and audit office items.',
      icon: Package,
      color: 'from-blue-600 to-indigo-600',
      badge: 'Asset Registry',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-lg shadow-sm">
              S
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-900 leading-tight">SystemSoft Workspace</h1>
              <p className="text-[11px] text-slate-400">Employee Single Sign-On Portal</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold">{user?.email || 'employee@company.com'}</span>
            </div>

            <button
              onClick={onSignOut}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-blue-700/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Enterprise Single Sign-On Active</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Welcome back, {user?.name || user?.email?.split('@')[0] || 'Employee'}
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              Launch your authorized company applications below. Your session and role permissions are automatically synchronized.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/20 text-center shrink-0 w-full sm:w-auto">
            <p className="text-xs text-blue-200 uppercase font-semibold tracking-wider">Assigned Apps</p>
            <p className="text-2xl font-black text-white mt-0.5">5 of 5</p>
          </div>
        </div>

        {/* Apps Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">Connected Enterprise Applications</h3>
            <span className="text-xs text-slate-500">Click an app to launch into work session</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {APPS.map((app) => {
              const Icon = app.icon
              const isLaunched = activeApp === app.id

              return (
                <div
                  key={app.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all p-5 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${app.color} text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${app.badgeBg}`}
                      >
                        {app.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {app.name}
                      </h4>
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">{app.category}</p>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{app.desc}</p>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Ready to Launch
                    </span>

                    <button
                      onClick={() => setActiveApp(app.id)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
                    >
                      <span>{isLaunched ? 'Launched' : 'Launch'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

