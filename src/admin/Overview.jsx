import DashboardOverview from './DashboardOverview.jsx'

export default function Overview({ users = [], apps = [] }) {
  return <DashboardOverview users={users} apps={apps} />
}
