import { useState } from 'react'
import Login from './Login.jsx'
import AdminDashboard from './admin/AdminDashboard.jsx'
import UserDashboard from './user/UserDashboard.jsx'

export default function App() {
  const [currentUser, setCurrentUser] = useState(null)

  if (currentUser?.role === 'admin') {
    return <AdminDashboard user={currentUser} onSignOut={() => setCurrentUser(null)} />
  }

  if (currentUser?.role === 'user') {
    return <UserDashboard user={currentUser} onSignOut={() => setCurrentUser(null)} />
  }

  return <Login onAuthenticated={setCurrentUser} />
}