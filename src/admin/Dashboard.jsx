import DashboardOverview from './DashboardOverview.jsx'

export default function Dashboard({ users = [], apps = [] }) {
  return <DashboardOverview users={users} apps={apps} />
}
