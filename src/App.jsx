import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom'
import Login from './Login.jsx'
import AdminDashboard from './admin/AdminDashboard.jsx'
import UserManagement from './admin/UserManagement.jsx'
import Apps from './admin/Apps.jsx'
import DashboardOverview from './admin/DashboardOverview.jsx'
import UserDashboard from './user/UserDashboard.jsx'

function AppRoutes() {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('system_soft_auth_user')
      if (saved) return JSON.parse(saved)
    } catch (e) {
      console.error(e)
    }
    return null
  })

  const navigate = useNavigate()

  const handleAuthenticated = (user) => {
    setCurrentUser(user)
    try {
      localStorage.setItem('system_soft_auth_user', JSON.stringify(user))
    } catch (e) {
      console.error(e)
    }

    if (user?.role === 'admin') {
      navigate('/dashboard')
    } else {
      navigate('/dashboard')
    }
  }

  const handleSignOut = () => {
    setCurrentUser(null)
    try {
      localStorage.removeItem('system_soft_auth_user')
    } catch (e) {
      console.error(e)
    }
    navigate('/login')
  }

  return (
    <Routes>
      {/* 1. Root / and /login Routes -> Render Login Screen */}
      <Route
        path="/"
        element={<Login onAuthenticated={handleAuthenticated} />}
      />
      <Route
        path="/login"
        element={<Login onAuthenticated={handleAuthenticated} />}
      />

      {/* 2. Admin Workspace Layout with Nested Routes */}
      <Route
        element={
          currentUser?.role === 'admin' ? (
            <AdminDashboard user={currentUser} onSignOut={handleSignOut} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      >
        <Route path="/dashboard" element={<DashboardOverview />} />
        <Route path="/overview" element={<DashboardOverview />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/apps" element={<Apps />} />

        {/* Convenient Aliases */}
        <Route path="/admin" element={<Navigate to="/dashboard" replace />} />
        <Route path="/users" element={<Navigate to="/usermanagement" replace />} />
        <Route path="/user-management" element={<Navigate to="/usermanagement" replace />} />
        <Route index element={<Navigate to="/dashboard" replace />} />
      </Route>

      {/* 3. Employee User Portal */}
      <Route
        path="/dashboard"
        element={
          currentUser ? (
            <UserDashboard user={currentUser} onSignOut={handleSignOut} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="/user" element={<Navigate to="/dashboard" replace />} />

      {/* 4. Fallback Route */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}