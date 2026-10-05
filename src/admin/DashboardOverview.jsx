import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Users,
  UserCheck,
  UserPlus,
  ShieldCheck,
  Layers,
  Briefcase,
  Clock,
  TrendingUp,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  FolderKanban,
  Building,
  DollarSign,
  Calendar,
  Sparkles,
  Zap,
  Award,
  PieChart as PieIcon,
  MapPin,
  Compass,
} from 'lucide-react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

import { LeadsLogoIcon, AssetProLogoIcon, AccountSoftLogoIcon } from './AddUserModal.jsx'

// Official App Metadata
const APP_CONFIG = {
  Leads: {
    name: 'Leads',
    subtitle: 'CRM & Calling',
    color: '#ef4444',
    bg: 'bg-red-50',
    text: 'text-red-700',
    border: 'border-red-200',
    badge: 'Sales',
    icon: LeadsLogoIcon,
  },
  ProjectSoft: {
    name: 'ProjectSoft',
    subtitle: 'Tasks & Sprints',
    color: '#f59e0b',
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
    badge: 'Engineering',
    icon: FolderKanban,
  },
  'Account Soft': {
    name: 'Account Soft',
    subtitle: 'Order · Delivery · Finance',
    color: '#10b981',
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200',
    badge: 'Finance',
    icon: AccountSoftLogoIcon,
  },
  'Time Tracker': {
    name: 'Time Tracker',
    subtitle: 'Attendance & Leaves',
    color: '#14b8a6',
    bg: 'bg-teal-50',
    text: 'text-teal-700',
    border: 'border-teal-200',
    badge: 'HR & Time',
    icon: Clock,
  },
  AssetPro: {
    name: 'AssetPro',
    subtitle: 'Office Assets & Devices',
    color: '#06b6d4',
    bg: 'bg-cyan-50',
    text: 'text-cyan-700',
    border: 'border-cyan-200',
    badge: 'Assets',
    icon: AssetProLogoIcon,
  },
}

// Custom Glassmorphic Tooltip for Recharts
function CustomChartTooltip({ active, payload, label, unit = '' }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/95 backdrop-blur-md text-white px-3.5 py-2.5 rounded-xl shadow-xl border border-slate-700/80 text-xs">
        <p className="font-semibold text-slate-300 text-[11px] mb-1">{label}</p>
        {payload.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color || item.fill }}
              />
              <span className="capitalize">{item.name}:</span>
            </span>
            <span className="font-bold text-white">
              {item.value} {unit}
            </span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

// Custom Pie Tooltip
function CustomPieTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const data = payload[0]
    return (
      <div className="bg-slate-900/95 backdrop-blur-md text-white px-3 py-2 rounded-xl shadow-xl border border-slate-700/80 text-xs">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: data.payload.fill || data.color }}
          />
          <span className="font-semibold text-slate-200">{data.name}:</span>
          <span className="font-bold text-white">{data.value} users</span>
        </div>
      </div>
    )
  }
  return null
}

export default function DashboardOverview() {
  const [timeRange, setTimeRange] = useState('6M')
  const [chartMetric, setChartMetric] = useState('growth') // 'growth' | 'velocity'

  // Comprehensive mock data
  const users = useMemo(
    () => [
      {
        id: 'EMP001',
        name: 'Rahul Sharma',
        email: 'rahul.sharma@programers.com',
        branch: 'Thrissur Office',
        department: 'Projects',
        designation: 'Senior Developer',
        role: 'Staff',
        status: 'Active',
        employeeStatus: 'Live',
        joiningDate: '2023-04-10',
        incrementDate: '2024-04-10',
        basicSalary: '75000.00',
        source: 'LinkedIn',
        apps: ['Leads', 'ProjectSoft', 'Time Tracker'],
      },
      {
        id: 'EMP002',
        name: 'Ananya Varma',
        email: 'ananya.v@programers.com',
        branch: 'Kochi Office',
        department: 'Marketing',
        designation: 'Marketing Lead',
        role: 'Manager',
        status: 'Active',
        employeeStatus: 'Live',
        joiningDate: '2023-06-15',
        incrementDate: '2024-06-15',
        basicSalary: '68000.00',
        source: 'Referral',
        apps: ['Leads', 'Time Tracker'],
      },
      {
        id: 'EMP003',
        name: 'Siddharth Menon',
        email: 'siddharth.m@programers.com',
        branch: 'Thrissur Office',
        department: 'Projects',
        designation: 'Project Manager',
        role: 'Manager',
        status: 'Active',
        employeeStatus: 'Live',
        joiningDate: '2023-09-01',
        incrementDate: '2024-09-01',
        basicSalary: '85000.00',
        source: 'LinkedIn',
        apps: ['ProjectSoft', 'Account Soft', 'Time Tracker', 'AssetPro'],
      },
      {
        id: 'EMP004',
        name: 'Pooja Hegde',
        email: 'pooja.h@programers.com',
        branch: 'Bangalore Office',
        department: 'HR',
        designation: 'HR Executive',
        role: 'Staff',
        status: 'Active',
        employeeStatus: 'Live',
        joiningDate: '2024-01-12',
        incrementDate: '2025-01-12',
        basicSalary: '52000.00',
        source: 'Campus',
        apps: ['Time Tracker', 'AssetPro'],
      },
      {
        id: 'EMP005',
        name: 'Vikram Joshi',
        email: 'vikram.j@programers.com',
        branch: 'Calicut Office',
        department: 'Marketing',
        designation: 'Sales Executive',
        role: 'Staff',
        status: 'Active',
        employeeStatus: 'Live',
        joiningDate: '2024-03-20',
        incrementDate: '2025-03-20',
        basicSalary: '48000.00',
        source: 'Referral',
        apps: ['Leads', 'Time Tracker'],
      },
      {
        id: 'EMP006',
        name: 'Neha Nair',
        email: 'neha.nair@programers.com',
        branch: 'Thrissur Office',
        department: 'Projects',
        designation: 'UI/UX Designer',
        role: 'Staff',
        status: 'Inactive',
        employeeStatus: 'Probation',
        joiningDate: '2024-06-05',
        incrementDate: '2025-06-05',
        basicSalary: '55000.00',
        source: 'Direct',
        apps: ['ProjectSoft', 'Time Tracker'],
      },
      {
        id: 'EMP007',
        name: 'Arjun Pillai',
        email: 'arjun.p@programers.com',
        branch: 'Trivandrum Office',
        department: 'Projects',
        designation: 'Software Engineer',
        role: 'Staff',
        status: 'Active',
        employeeStatus: 'Live',
        joiningDate: '2024-08-18',
        incrementDate: '2025-08-18',
        basicSalary: '58000.00',
        source: 'LinkedIn',
        apps: ['ProjectSoft', 'Time Tracker', 'AssetPro'],
      },
      {
        id: 'EMP008',
        name: 'Kavya Suresh',
        email: 'kavya.s@programers.com',
        branch: 'Thrissur Office',
        department: 'HR',
        designation: 'Operations Lead',
        role: 'Staff',
        status: 'Active',
        employeeStatus: 'Live',
        joiningDate: '2024-10-01',
        incrementDate: '2025-10-01',
        basicSalary: '62000.00',
        source: 'Referral',
        apps: ['Leads', 'ProjectSoft', 'Account Soft', 'Time Tracker', 'AssetPro'],
      },
    ],
    []
  )

  // Aggregations
  const stats = useMemo(() => {
    const total = users.length
    const active = users.filter((u) => u.status === 'Active').length
    const inactive = users.filter((u) => u.status === 'Inactive').length
    const totalGrants = users.reduce((acc, u) => acc + (u.apps?.length || 0), 0)
    const avgApps = total ? (totalGrants / total).toFixed(1) : '0'

    // Department Distribution
    const deptCounts = {
      Projects: users.filter((u) => u.department === 'Projects').length,
      Marketing: users.filter((u) => u.department === 'Marketing').length,
      HR: users.filter((u) => u.department === 'HR').length,
    }

    const deptChartData = [
      { name: 'Projects', count: deptCounts.Projects, fill: '#3b82f6' },
      { name: 'Marketing', count: deptCounts.Marketing, fill: '#8b5cf6' },
      { name: 'HR', count: deptCounts.HR, fill: '#ec4899' },
    ]

    // App User Counts
    const appCounts = {
      Leads: users.filter((u) => u.apps?.includes('Leads')).length,
      ProjectSoft: users.filter((u) => u.apps?.includes('ProjectSoft')).length,
      'Account Soft': users.filter((u) => u.apps?.includes('Account Soft')).length,
      'Time Tracker': users.filter((u) => u.apps?.includes('Time Tracker')).length,
      AssetPro: users.filter((u) => u.apps?.includes('AssetPro')).length,
    }

    const appChartData = [
      { name: 'Leads', users: appCounts.Leads, fill: '#ef4444' },
      { name: 'ProjectSoft', users: appCounts.ProjectSoft, fill: '#f59e0b' },
      { name: 'Account Soft', users: appCounts['Account Soft'], fill: '#10b981' },
      { name: 'Time Tracker', users: appCounts['Time Tracker'], fill: '#14b8a6' },
      { name: 'AssetPro', users: appCounts.AssetPro, fill: '#06b6d4' },
    ]

    // Role Hierarchy per App (Managers vs Staff)
    const roleHierarchy = [
      {
        app: 'Leads',
        icon: LeadsLogoIcon,
        color: 'text-red-600 bg-red-50 border-red-200',
        total: appCounts.Leads,
        roles: [
          { name: 'Manager', count: 1, color: 'bg-red-600' },
          { name: 'Staff', count: appCounts.Leads - 1, color: 'bg-red-400' },
        ],
      },
      {
        app: 'ProjectSoft',
        icon: FolderKanban,
        color: 'text-amber-600 bg-amber-50 border-amber-200',
        total: appCounts.ProjectSoft,
        roles: [
          { name: 'Project Lead', count: 1, color: 'bg-amber-600' },
          { name: 'Developers', count: appCounts.ProjectSoft - 1, color: 'bg-amber-400' },
        ],
      },
      {
        app: 'Account Soft',
        icon: AccountSoftLogoIcon,
        color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
        total: appCounts['Account Soft'],
        roles: [
          { name: 'Manager', count: 1, color: 'bg-emerald-600' },
          { name: 'Exec', count: appCounts['Account Soft'] - 1, color: 'bg-emerald-400' },
        ],
      },
      {
        app: 'Time Tracker',
        icon: Clock,
        color: 'text-teal-600 bg-teal-50 border-teal-200',
        total: appCounts['Time Tracker'],
        roles: [
          { name: 'HR Lead', count: 1, color: 'bg-teal-600' },
          { name: 'Staff', count: appCounts['Time Tracker'] - 1, color: 'bg-teal-400' },
        ],
      },
      {
        app: 'AssetPro',
        icon: AssetProLogoIcon,
        color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
        total: appCounts.AssetPro,
        roles: [
          { name: 'Asset Mgr', count: 1, color: 'bg-cyan-600' },
          { name: 'Staff', count: appCounts.AssetPro - 1, color: 'bg-cyan-400' },
        ],
      },
    ]

    // Branch Distribution
    const branchCounts = {
      'Thrissur HQ': users.filter((u) => u.branch.includes('Thrissur')).length,
      'Kochi Office': users.filter((u) => u.branch.includes('Kochi')).length,
      'Calicut Office': users.filter((u) => u.branch.includes('Calicut')).length,
      'Trivandrum Office': users.filter((u) => u.branch.includes('Trivandrum')).length,
      'Bangalore Office': users.filter((u) => u.branch.includes('Bangalore')).length,
    }

    // Payroll totals
    const totalPayroll = users.reduce((acc, u) => acc + parseFloat(u.basicSalary || 0), 0)
    const avgSalary = total ? Math.round(totalPayroll / total) : 0

    // Hiring Sources
    const sourceCounts = {}
    users.forEach((u) => {
      const src = u.source || 'Direct'
      sourceCounts[src] = (sourceCounts[src] || 0) + 1
    })

    // Status Pie Data
    const statusData = [
      { name: 'Active Users', value: active, fill: '#10b981' },
      { name: 'Inactive Users', value: inactive, fill: '#f59e0b' },
    ]

    // Growth Timeline Data
    const growthTimeline = [
      { month: 'May', users: 24, grants: 48 },
      { month: 'Jun', users: 28, grants: 58 },
      { month: 'Jul', users: 33, grants: 71 },
      { month: 'Aug', users: 37, grants: 82 },
      { month: 'Sep', users: 42, grants: 94 },
      { month: 'Oct', users: 48, grants: 110 },
    ]

    return {
      total,
      active,
      inactive,
      totalGrants,
      avgApps,
      deptChartData,
      appChartData,
      statusData,
      growthTimeline,
      appCounts,
      roleHierarchy,
      branchCounts,
      totalPayroll,
      avgSalary,
      sourceCounts,
    }
  }, [users])

  return (
    <div className="space-y-4 sm:space-y-5 pb-6">
      {/* 1. Slim Top Action Bar (Clean single-line header without bulky vertical air) */}
      <div className="bg-white rounded-xl border border-slate-200/90 px-4 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-2.5">
          <h1 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
            Workspace Overview &amp; Analytics
          </h1>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Sync
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Time range selector */}
          <div className="bg-slate-100 p-1 rounded-lg flex items-center gap-1 border border-slate-200/70 text-xs">
            {['1M', '3M', '6M', '1Y'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                  timeRange === range
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          <Link
            to="/usermanagement"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Add User</span>
          </Link>
        </div>
      </div>

      {/* 2. Key KPI Metric Cards (Rich, properly proportioned) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
        {/* Card 1: Total Users */}
        <div className="bg-white rounded-xl border border-slate-200/80 p-3.5 shadow-2xs hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Total Employees
            </span>
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-1.5 flex items-baseline gap-1.5">
            <span className="text-xl font-bold text-slate-900">{stats.total}</span>
            <span className="inline-flex items-center text-[10.5px] font-semibold text-emerald-600">
              <ArrowUpRight className="w-3 h-3" />
              +14% MoM
            </span>
          </div>
          <p className="text-[10.5px] text-slate-400 mt-0.5">Across 5 office branches</p>
        </div>

        {/* Card 2: Active Users */}
        <div className="bg-white rounded-xl border border-slate-200/80 p-3.5 shadow-2xs hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Active Users
            </span>
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <UserCheck className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-1.5 flex items-baseline gap-1.5">
            <span className="text-xl font-bold text-slate-900">{stats.active}</span>
            <span className="text-[11px] font-semibold text-slate-500">
              ({Math.round((stats.active / stats.total) * 100)}% live)
            </span>
          </div>
          <p className="text-[10.5px] text-slate-400 mt-0.5">
            {stats.inactive} inactive / on probation
          </p>
        </div>

        {/* Card 3: App Grants */}
        <div className="bg-white rounded-xl border border-slate-200/80 p-3.5 shadow-2xs hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              App Access Grants
            </span>
            <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <Layers className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-1.5 flex items-baseline gap-1.5">
            <span className="text-xl font-bold text-slate-900">{stats.totalGrants}</span>
            <span className="inline-flex items-center text-[10.5px] font-semibold text-purple-600">
              avg {stats.avgApps} / user
            </span>
          </div>
          <p className="text-[10.5px] text-slate-400 mt-0.5">5 active workspace systems</p>
        </div>

        {/* Card 4: Monthly Payroll Pulse */}
        <div className="bg-white rounded-xl border border-slate-200/80 p-3.5 shadow-2xs hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Monthly Payroll Run
            </span>
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <DollarSign className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-1.5 flex items-baseline gap-1.5">
            <span className="text-xl font-bold text-slate-900">
              ₹{(stats.totalPayroll / 100000).toFixed(2)}L
            </span>
            <span className="text-[10.5px] font-semibold text-slate-500">
              avg ₹{Math.round(stats.avgSalary / 1000)}k/emp
            </span>
          </div>
          <p className="text-[10.5px] text-slate-400 mt-0.5">Automated payroll ledger</p>
        </div>
      </div>

      {/* 3. Primary Charts Section (Growth Area Chart + Status Donut) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {/* Left (2 Cols): Growth Velocity Area Chart */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 sm:p-5 lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h2 className="text-sm font-bold text-slate-900">User Growth &amp; Access Velocity</h2>
                <p className="text-xs text-slate-500">
                  Monthly progression of active workspace users and application access grants
                </p>
              </div>

              {/* Metric Toggle */}
              <div className="inline-flex rounded-lg bg-slate-100 p-0.5 text-xs font-semibold self-start sm:self-auto">
                <button
                  onClick={() => setChartMetric('growth')}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                    chartMetric === 'growth'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Total Users
                </button>
                <button
                  onClick={() => setChartMetric('velocity')}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                    chartMetric === 'velocity'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  App Grants
                </button>
              </div>
            </div>

            {/* Area Chart Container */}
            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={stats.growthTimeline}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="userGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="grantGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="4 4" stroke="#f1f5f9" vertical={false} />
                  <XAxis
                    dataKey="month"
                    axisLine={{ stroke: '#e2e8f0' }}
                    tickLine={false}
                    tick={{ fontSize: 11, fill: '#64748b' }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11, fill: '#64748b' }}
                  />
                  <Tooltip content={<CustomChartTooltip />} />
                  {chartMetric === 'growth' ? (
                    <Area
                      type="monotone"
                      name="Active Users"
                      dataKey="users"
                      stroke="#2563eb"
                      strokeWidth={2.5}
                      fillOpacity={1}
                      fill="url(#userGrad)"
                      dot={{ r: 3, fill: '#2563eb', strokeWidth: 1.5, stroke: '#fff' }}
                      activeDot={{ r: 5, fill: '#1d4ed8' }}
                    />
                  ) : (
                    <Area
                      type="monotone"
                      name="Total Grants"
                      dataKey="grants"
                      stroke="#7c3aed"
                      strokeWidth={2.5}
                      fillOpacity={1}
                      fill="url(#grantGrad)"
                      dot={{ r: 3, fill: '#7c3aed', strokeWidth: 1.5, stroke: '#fff' }}
                      activeDot={{ r: 5, fill: '#6d28d9' }}
                    />
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Solid +24% workforce expansion over the last 6 months
            </span>
            <span className="font-semibold text-slate-700">Live Telemetry</span>
          </div>
        </div>

        {/* Right (1 Col): User Health & Status Donut Chart */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-sm font-bold text-slate-900">User Status Health</h2>
                <p className="text-xs text-slate-500">Active vs Inactive workforce</p>
              </div>
              <PieIcon className="w-4 h-4 text-slate-400" />
            </div>

            {/* Donut Chart with Center Metric */}
            <div className="h-44 relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stats.statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={68}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {stats.statusData.map((entry, idx) => (
                      <Cell key={idx} fill={entry.fill} stroke="#ffffff" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomPieTooltip />} />
                </PieChart>
              </ResponsiveContainer>

              {/* Central Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-black text-slate-900">{stats.active}</span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
                  Active
                </span>
              </div>
            </div>

            {/* Legend List */}
            <div className="mt-2 space-y-1.5">
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-slate-700">Active / Live</span>
                </div>
                <span className="font-bold text-slate-900">
                  {stats.active}{' '}
                  <span className="text-slate-400 font-normal">
                    ({Math.round((stats.active / stats.total) * 100)}%)
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="font-semibold text-slate-700">Inactive / Probation</span>
                </div>
                <span className="font-bold text-slate-900">
                  {stats.inactive}{' '}
                  <span className="text-slate-400 font-normal">
                    ({Math.round((stats.inactive / stats.total) * 100)}%)
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Overall Account Health</span>
            <span className="font-bold text-emerald-600">98.5% Optimal</span>
          </div>
        </div>
      </div>

      {/* 4. Role Hierarchy per Application (Directly under the first two graphs) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-600" />
              Role Hierarchy per Application (Managers vs. Staff / Developers)
            </h2>
            <p className="text-xs text-slate-500">
              Live authorization distribution cards across all 5 connected systems
            </p>
          </div>
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 self-start sm:self-auto">
            5 Connected Systems Mapped
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {stats.roleHierarchy.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center border shrink-0 ${item.color}`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-slate-900 truncate">
                        {item.app}
                      </span>
                    </div>
                    <span className="text-[11px] font-extrabold px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-700 shrink-0">
                      {item.total} seats
                    </span>
                  </div>

                  {/* Role Breakdown Items */}
                  <div className="space-y-1.5 mt-3 pt-2 border-t border-slate-200/60">
                    {item.roles.map((r, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-center justify-between text-xs text-slate-700"
                      >
                        <span className="flex items-center gap-1.5 truncate">
                          <span className={`w-2 h-2 rounded-full ${r.color} shrink-0`} />
                          <span className="truncate">{r.name}:</span>
                        </span>
                        <span className="font-bold text-slate-900 shrink-0 pl-1">
                          {r.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ratio bar */}
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-1">
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden flex">
                    {item.roles.map((r, rIdx) => {
                      const pct = item.total ? (r.count / item.total) * 100 : 0
                      return (
                        <div
                          key={rIdx}
                          className={`h-full ${r.color}`}
                          style={{ width: `${pct}%` }}
                          title={`${r.name}: ${r.count}`}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 5. Secondary Breakdown: Branch Offices, App Usage & Department Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {/* Multi-Location Branch Breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                  Branch Locations
                </h2>
                <p className="text-xs text-slate-500">Headcount across physical facilities</p>
              </div>
              <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                5 Branches
              </span>
            </div>

            <div className="space-y-2 mt-2">
              {Object.entries(stats.branchCounts).map(([branch, count], idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors text-xs"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-indigo-600" />
                    <span className="font-semibold text-slate-800 truncate">{branch}</span>
                  </div>
                  <span className="font-bold text-slate-900">{count} staff</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-500 flex justify-between">
            <span>HQ Facility</span>
            <span className="font-bold text-slate-700">Thrissur Campus</span>
          </div>
        </div>

        {/* App-wise Access Distribution */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 sm:p-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-sm font-bold text-slate-900">Users per Application</h2>
              <p className="text-xs text-slate-500">Total authorized seats per app</p>
            </div>
            <Layers className="w-4 h-4 text-slate-400" />
          </div>

          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={stats.appChartData}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="4 4" stroke="#f1f5f9" horizontal={false} />
                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: '#64748b' }}
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: '#334155', fontWeight: 600 }}
                  width={95}
                />
                <Tooltip content={<CustomChartTooltip unit="users" />} />
                <Bar dataKey="users" radius={[0, 6, 6, 0]} barSize={14}>
                  {stats.appChartData.map((entry, idx) => (
                    <Cell key={idx} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Department Headcount */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 sm:p-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-sm font-bold text-slate-900">Department Distribution</h2>
              <p className="text-xs text-slate-500">Projects, Marketing, and HR</p>
            </div>
            <Briefcase className="w-4 h-4 text-slate-400" />
          </div>

          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={stats.deptChartData}
                margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="4 4" stroke="#f1f5f9" vertical={false} />
                <XAxis
                  dataKey="name"
                  axisLine={{ stroke: '#e2e8f0' }}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: '#334155', fontWeight: 600 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: '#64748b' }}
                  allowDecimals={false}
                />
                <Tooltip content={<CustomChartTooltip unit="employees" />} />
                <Bar dataKey="count" radius={[6, 6, 0, 0]} barSize={32}>
                  {stats.deptChartData.map((entry, idx) => (
                    <Cell key={idx} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 6. Connected Applications Hub */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 sm:p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Connected System Applications</h2>
            <p className="text-xs text-slate-500">
              Direct access status and authorized user volume per product
            </p>
          </div>
          <Link
            to="/apps"
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <span>View All Apps</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {Object.entries(APP_CONFIG).map(([key, app]) => {
            const count = stats.appCounts[key] || 0
            const Icon = app.icon
            return (
              <div
                key={key}
                className="p-3 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center ${app.bg} ${app.text} border ${app.border}`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                      {app.badge}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 truncate">{app.name}</h3>
                  <p className="text-[10px] text-slate-400 truncate">{app.subtitle}</p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-500 font-medium">Access</span>
                  <span className="font-bold text-slate-900">{count} Users</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 7. Recent Users Activity Table */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Recently Added Team Members</h2>
            <p className="text-xs text-slate-500">
              Latest employees registered across departments
            </p>
          </div>
          <Link
            to="/usermanagement"
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <span>Manage Users</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider border-b border-slate-100">
                <th className="py-2.5 pr-3">Employee</th>
                <th className="py-2.5 pr-3 hidden sm:table-cell">Branch</th>
                <th className="py-2.5 pr-3">Department</th>
                <th className="py-2.5 pr-3 hidden md:table-cell">Designation</th>
                <th className="py-2.5 pr-3">Apps</th>
                <th className="py-2.5 pr-3">Status</th>
                <th className="py-2.5 text-right">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {users.slice(0, 5).map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-2.5 pr-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-[10px] shadow-2xs">
                        {user.name?.[0]?.toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-900 truncate">{user.name}</p>
                        <p className="text-[10px] text-slate-400 truncate">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-2.5 pr-3 hidden sm:table-cell text-slate-600">
                    {user.branch}
                  </td>
                  <td className="py-2.5 pr-3">
                    <span
                      className={`inline-flex px-2 py-0.5 rounded-md text-[10px] font-semibold border ${
                        user.department === 'Projects'
                          ? 'bg-blue-50 text-blue-700 border-blue-200'
                          : user.department === 'Marketing'
                          ? 'bg-purple-50 text-purple-700 border-purple-200'
                          : 'bg-pink-50 text-pink-700 border-pink-200'
                      }`}
                    >
                      {user.department}
                    </span>
                  </td>
                  <td className="py-2.5 pr-3 hidden md:table-cell text-slate-600">
                    {user.designation}
                  </td>
                  <td className="py-2.5 pr-3">
                    <div className="flex items-center gap-1">
                      {(user.apps || []).map((appName, i) => {
                        const app = APP_CONFIG[appName]
                        if (!app) return null
                        const Icon = app.icon
                        return (
                          <span
                            key={i}
                            title={app.name}
                            className={`w-5 h-5 rounded-md flex items-center justify-center ${app.bg} ${app.text} border ${app.border}`}
                          >
                            <Icon className="w-2.5 h-2.5" />
                          </span>
                        )
                      })}
                    </div>
                  </td>
                  <td className="py-2.5 pr-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                        user.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full ${
                          user.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'
                        }`}
                      />
                      {user.status}
                    </span>
                  </td>
                  <td className="py-2.5 text-right text-slate-500 text-[11px]">
                    {user.joiningDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
