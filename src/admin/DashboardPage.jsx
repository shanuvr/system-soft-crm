import DashboardOverview from './DashboardOverview.jsx'

export default function DashboardPage({ users = [], apps = [] }) {
  return <DashboardOverview users={users} apps={apps} />
}
