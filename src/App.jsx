import { useState } from 'react'
import Login from './Login.jsx'

export default function App() {
  const [currentUser, setCurrentUser] = useState(null)

  if (currentUser) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
            {currentUser.name?.[0]?.toUpperCase() || 'U'}
          </div>
          <h2 className="text-2xl font-bold text-white">Welcome, {currentUser.name}!</h2>
          <p className="text-slate-400 text-sm mt-1">{currentUser.email}</p>
          <div className="mt-6 p-3 bg-slate-900/60 rounded-xl text-left border border-slate-700/50">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Single Sign-On Authenticated
            </p>
            <p className="text-xs text-slate-300 mt-1">
              Ready to redirect to Application Launcher or assigned app dashboard.
            </p>
          </div>
          <button
            onClick={() => setCurrentUser(null)}
            className="mt-6 w-full py-2.5 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-sm font-medium transition-colors cursor-pointer"
          >
            Sign Out to Login Screen
          </button>
        </div>
      </div>
    )
  }

  return <Login onAuthenticated={setCurrentUser} />
}