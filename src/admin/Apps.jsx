import { Plus, CheckCircle2, ChevronRight } from 'lucide-react'

export default function Apps() {
  const appsList = [
    {
      id: 'leads',
      name: 'Leads',
      code: 'LEADS',
      description: 'Lead management, telecalling workflow, quotations & customer orders.',
      url: 'https://leads.company.com',
      status: 'Active',
      rolesCount: 4,
      permissionsCount: 28,
      gradient: 'from-indigo-600 to-violet-600',
    },
    {
      id: 'accountsoft',
      name: 'AccountSoft',
      code: 'ACCOUNTS',
      description: 'PTDAs, client payments, invoice generation and accounting registers.',
      url: 'https://accounts.company.com',
      status: 'Active',
      rolesCount: 4,
      permissionsCount: 16,
      gradient: 'from-emerald-600 to-teal-600',
    },
    {
      id: 'projectsoft',
      name: 'ProjectSoft',
      code: 'PROJECT',
      description: 'Project planning, task status tracking, daily work reports and man-hours.',
      url: 'https://project.company.com',
      status: 'Active',
      rolesCount: 6,
      permissionsCount: 22,
      gradient: 'from-orange-500 to-amber-600',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Central Application Registry
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Connect and manage organization-wide applications and their granular RBAC permissions
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/25 transition-all cursor-pointer">
          <Plus className="w-4 h-4" />
          <span>Register Application</span>
        </button>
      </div>

      {/* Connected Apps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {appsList.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${app.gradient} text-white flex items-center justify-center font-bold text-lg shadow-sm`}
                >
                  {app.name[0]}
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  {app.status}
                </span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 tracking-tight">{app.name}</h4>
              <p className="text-xs font-mono text-slate-400 mt-0.5">{app.code}</p>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed">{app.description}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="grid grid-cols-2 gap-2 text-center mb-4">
                <div className="p-2 bg-slate-50 rounded-xl">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Roles</p>
                  <p className="text-sm font-bold text-slate-800 mt-0.5">{app.rolesCount}</p>
                </div>
                <div className="p-2 bg-slate-50 rounded-xl">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Permissions</p>
                  <p className="text-sm font-bold text-slate-800 mt-0.5">{app.permissionsCount}</p>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-slate-100 hover:bg-slate-200/80 text-slate-800 rounded-xl text-xs font-semibold transition-colors cursor-pointer">
                <span>Configure Roles & Matrix</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
