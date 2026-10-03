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
  CheckCircle2,
} from 'lucide-react'
import { LeadsLogoIcon, AssetProLogoIcon, AccountSoftLogoIcon } from '../admin/AddUserModal.jsx'

export default function UserDashboard({ user, onSignOut }) {
  const [activeApp, setActiveApp] = useState(null)

  const APPS = [
    {
      id: 'leads',
      name: 'Leads',
      category: 'Sales & Telecalling',
      desc: 'Access client raw data, log telecalling updates, generate quotes, and manage orders.',
      icon: LeadsLogoIcon,
      color: 'from-rose-600 to-red-600',
      badge: 'Sales',
      badgeBg: 'bg-red-50 text-red-700 border-red-200',
    },
    {
      id: 'projectsoft',
      name: 'ProjectSoft',
      category: 'Projects & Tasks',
      desc: 'Track sprint work orders, update task statuses, log man-hours, and submit daily reports.',
      icon: FolderKanban,
      color: 'from-amber-500 to-orange-600',
      badge: 'Engineering',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      id: 'accountsoft',
      name: 'Account Soft',
      category: 'Order · Delivery · Finance',
      desc: 'Manage company financial records, track client receipts, and review generated invoices.',
      icon: AccountSoftLogoIcon,
      color: 'from-emerald-500 to-teal-600',
      badge: 'Finance',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      id: 'timetracker',
      name: 'Time Tracker',
      category: 'Attendance & Leaves',
      desc: 'Check in / check out attendance logs, submit leave requests, and view monthly work times.',
      icon: Clock,
      color: 'from-emerald-500 to-green-600',
      badge: 'HR & Time',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      id: 'assetsoft',
      name: 'AssetPro',
      category: 'Assets & Devices',
      desc: 'View allocated hardware & furniture, request maintenance repairs, and audit office items.',
      icon: AssetProLogoIcon,
      color: 'from-cyan-500 to-teal-600',
      badge: 'Assets',
      badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    },
  ]

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 flex flex-col font-sans overflow-y-auto">
      {/* Compact Top Navigation */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src="/programers-logo-BLACCK.png"
              alt="PROGRAMMERS"
              className="h-7 w-auto max-w-[110px] object-contain"
            />
            <div>
              <h1 className="text-sm font-bold text-slate-900 leading-tight">PROGRAMMERS Workspace</h1>
              <p className="text-[10px] text-slate-400">Single Sign-On Portal</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-semibold text-[11px]">{user?.email || 'employee@company.com'}</span>
            </div>

            <button
              onClick={onSignOut}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-5 sm:py-6 flex flex-col justify-between space-y-4">
        {/* Sleek Minimal Welcome Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              Welcome back, {user?.name || user?.email?.split('@')[0] || 'Rahul'}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Launch your authorized enterprise applications below
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>5 Apps Ready</span>
            </span>
          </div>
        </div>

        {/* 5 Connected Apps in Responsive Grid (2 per row on mobile, 5 on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3.5">
          {APPS.map((app) => {
            const Icon = app.icon
            const isLaunched = activeApp === app.id

            return (
              <div
                key={app.id}
                className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all p-3 sm:p-4 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-tr ${app.color} text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span
                      className={`text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-md border ${app.badgeBg}`}
                    >
                      {app.badge}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight truncate sm:whitespace-normal">
                    {app.name}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] font-semibold text-slate-400 mt-0.5 truncate">
                    {app.category}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-1.5 leading-snug line-clamp-2 sm:line-clamp-3">
                    {app.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 sm:mt-4 sm:pt-3 border-t border-slate-100 flex items-center justify-between gap-1.5">
                  <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="hidden sm:inline">Active</span>
                  </span>

                  <button
                    onClick={() => setActiveApp(app.id)}
                    className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-900 hover:bg-blue-600 text-white rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
                  >
                    <span>{isLaunched ? 'Launched' : 'Launch'}</span>
                    <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer info note */}
        <div className="text-center text-[11px] text-slate-400 pt-1">
          Single Sign-On session active · Connected to SystemSoft IAM Directory
        </div>
      </main>
    </div>
  )
}
