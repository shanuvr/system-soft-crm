export default function UserDashboard({ user, onSignOut }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 select-none font-sans">
      <div className="bg-slate-800 border border-slate-700 rounded-3xl p-10 max-w-lg w-full text-center shadow-2xl">
        <div className="w-16 h-16 bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-5 font-bold text-2xl">
          👤
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">User Dashboard</h1>
        <p className="text-slate-400 text-sm mt-2">
          Signed in as <span className="text-emerald-400 font-medium">{user?.email || 'user'}</span> (Role: User)
        </p>

        <div className="mt-6 p-4 bg-slate-950/60 rounded-2xl border border-slate-700/50 text-left">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            User Application Portal
          </p>
          <p className="text-xs text-slate-300 mt-1">
            Static User View. Ready to display the application launcher or redirect to assigned business apps.
          </p>
        </div>

        <button
          onClick={onSignOut}
          className="mt-6 w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white rounded-xl text-sm font-semibold transition-all cursor-pointer shadow-lg shadow-emerald-600/25"
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}
