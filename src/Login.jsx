import { useEffect, useState } from 'react'
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    ShieldCheck,
    Zap,
    Users2,
    BarChart3,
    Users,
} from 'lucide-react'

/*
  Layout is built on a fixed 1536 x 1024 stage (same size as the reference image)
  and scaled to fit any screen, so everything stays aligned exactly like the design.
  Put the CLEAN background (no UI on it, 3:2 ratio) at /public/login-bg.png
*/
const STAGE_W = 1536
const STAGE_H = 1024

function CompanyLogo({ className = '', variant = 'white' }) {
    const isWhite = variant === 'white'
    const left = isWhite ? '#ffffff' : '#3b82f6'
    const right = isWhite ? '#e6ecf8' : '#1d4ed8'
    const win = isWhite ? '#1e3a8a' : '#ffffff'
    return (
        <svg className={className} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 19L16 11V41H2V19Z" fill={left} />
            <path d="M19 3L40 14V41H19V3Z" fill={right} />
            <rect x="6" y="25" width="5" height="5" rx="1" fill={win} />
            <rect x="6" y="33" width="5" height="8" rx="1" fill={win} />
            <rect x="24" y="20" width="4" height="4" rx="1" fill={win} />
            <rect x="31" y="20" width="4" height="4" rx="1" fill={win} />
            <rect x="24" y="28" width="4" height="4" rx="1" fill={win} />
            <rect x="31" y="28" width="4" height="4" rx="1" fill={win} />
        </svg>
    )
}

const svgProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
}

function AccountIcon({ className = '' }) {
    return (
        <svg className={className} {...svgProps}>
            <rect x="4.5" y="3" width="15" height="18" rx="3.5" />
            <path d="M9 8h6M9 11h6M9 8c3.2 0 3.2 3 0 3l3.5 4" />
        </svg>
    )
}

function ProjectIcon({ className = '' }) {
    return (
        <svg className={className} {...svgProps}>
            <rect x="4" y="14" width="3.6" height="6" rx="1.2" />
            <rect x="10.2" y="12" width="3.6" height="8" rx="1.2" />
            <rect x="16.4" y="9.5" width="3.6" height="10.5" rx="1.2" />
            <path d="M5 10l4.5-3.5 4 1.5 5-4" />
            <circle cx="5" cy="10" r="1.2" fill="currentColor" />
            <circle cx="9.5" cy="6.5" r="1.2" fill="currentColor" />
            <circle cx="19" cy="4" r="1.2" fill="currentColor" />
        </svg>
    )
}

const apps = [
    {
        left: 91,
        title: 'Leads',
        lines: ['Manage leads, telecalling,', 'quotations and orders.'],
        grad: 'linear-gradient(135deg,#6a6cf5,#8b6cf6)',
        glow: 'rgba(99,102,241,.35)',
        icon: <Users className="w-[38px] h-[38px]" strokeWidth={1.8} />,
    },
    {
        left: 340,
        title: 'AccountSoft',
        lines: ['Handle PTDAs, payments,', 'invoices and accounts.'],
        grad: 'linear-gradient(135deg,#10b981,#34d399)',
        glow: 'rgba(16,185,129,.35)',
        icon: <AccountIcon className="w-[40px] h-[40px]" />,
    },
    {
        left: 589,
        title: 'ProjectSoft',
        lines: ['Plan, assign, track and', 'deliver your projects.'],
        grad: 'linear-gradient(135deg,#f97316,#fb923c)',
        glow: 'rgba(249,115,22,.35)',
        icon: <ProjectIcon className="w-[40px] h-[40px]" />,
    },
]

const badges = [
    { left: 90, title: 'Secure Access', sub: 'Your data is protected', Icon: ShieldCheck },
    { left: 265, title: 'Single Sign-On', sub: 'One login for all apps', Icon: Zap },
    { left: 452, title: 'Role Based Access', sub: 'Right access for right people', Icon: Users2 },
    { left: 672, title: 'Better Productivity', sub: 'All tools in one place', Icon: BarChart3 },
]

const autofillFix = { WebkitBoxShadow: '0 0 0 1000px #fff inset', WebkitTextFillColor: '#1e293b' }

const SIZES = {
    desktop: {
        pad: 'px-[68px] py-[54px]',
        logo: 'w-[64px] h-[64px]',
        name: 'mt-2 text-[30px] leading-[36px]',
        portal: 'text-[18px] leading-[22px]',
        welcome: 'mt-[38px] text-[32px] leading-[38px]',
        sub: 'mt-1 text-[18px] leading-[24px]',
        form: 'mt-[32px]',
        label: 'text-[19px] leading-[26px] mb-[10px] font-semibold text-[#1e293b]',
        inputH: 'h-[76px] px-[26px] rounded-[18px]',
        inputText: '21px',
        icon: 'w-[28px] h-[28px] mr-[18px]',
        gap: 'mt-[24px]',
        check: 'w-[24px] h-[24px]',
        remember: 'text-[18px]',
        button: 'h-[72px] rounded-[18px] text-[22px] mt-[32px]',
        terms: 'mt-[28px] text-[16px] leading-[20px]',
    },
    mobile: {
        pad: 'px-6 py-10',
        logo: 'w-[52px] h-[52px]',
        name: 'mt-2 text-[26px] leading-[32px]',
        portal: 'text-[15px] leading-[20px]',
        welcome: 'mt-8 text-[26px] leading-[32px]',
        sub: 'mt-1 text-[15px] leading-[20px]',
        form: 'mt-7',
        label: 'text-[16px] leading-[22px] mb-2 font-semibold text-[#1e293b]',
        inputH: 'h-[62px] px-4 rounded-[14px]',
        inputText: '17px',
        icon: 'w-[24px] h-[24px] mr-3',
        gap: 'mt-5',
        check: 'w-[20px] h-[20px]',
        remember: 'text-[15px]',
        button: 'h-[60px] rounded-[14px] text-[18px] mt-7',
        terms: 'mt-6 text-[13px] leading-[18px]',
    },
}

function LoginCard({ mobile, onAuthenticated }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const z = mobile ? SIZES.mobile : SIZES.desktop

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            if (onAuthenticated) {
                onAuthenticated({
                    email: email || 'user@company.com',
                    name: email ? email.split('@')[0] : 'Rahul',
                })
            }
        }, 600)
    }

    const inputWrap = `relative flex items-center w-full border-2 border-[#cbd5e1] bg-slate-50/70 hover:bg-white hover:border-[#94a3b8] focus-within:bg-white focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-500/20 shadow-[0_3px_10px_rgba(15,23,42,0.06)] focus-within:shadow-[0_4px_16px_rgba(37,99,235,0.16)] transition-all ${z.inputH}`
    const inputCls =
        'w-full h-full text-slate-900 placeholder:text-[#94a3b8] font-medium bg-transparent outline-none select-text min-w-0'
    const inputStyle = { ...autofillFix, fontSize: z.inputText }

    return (
        <div
            className={
                mobile
                    ? 'relative w-full max-w-[460px] overflow-hidden shadow-2xl rounded-3xl'
                    : 'absolute right-[280px] top-1/2 -translate-y-1/2 w-[630px] rounded-[34px] bg-white overflow-hidden shadow-[0_30px_90px_rgba(5,12,40,.4)] border border-slate-100'
            }
        >
            {/* decorative circles */}
            <div
                className="absolute rounded-full bg-[#eef5ff]"
                style={mobile ? { width: 260, height: 260, left: -110, top: -110 } : { width: 400, height: 400, left: -263, top: -164 }}
            />
            <div
                className="absolute rounded-full bg-[#efecfd]"
                style={mobile ? { width: 200, height: 200, right: -120, bottom: 60 } : { width: 280, height: 280, right: -140, bottom: 110 }}
            />

            <div className={`relative z-10 flex flex-col items-center text-center ${z.pad}`}>
                <CompanyLogo variant="blue" className={z.logo} />
                <h2 className={`font-bold tracking-tight text-[#0f1b3d] ${z.name}`}>Your Company</h2>
                <p className={`text-[#64748b] ${z.portal}`}>Employee Portal</p>

                <h3 className={`font-bold tracking-tight text-[#0f1b3d] ${z.welcome}`}>Welcome Back</h3>
                <p className={`text-[#64748b] ${z.sub}`}>Sign in to access your applications</p>

                <form onSubmit={handleSubmit} className={`w-full text-left ${z.form}`}>
                    <label className={`block font-medium text-[#334155] ${z.label}`}>Email Address</label>
                    <div className={inputWrap}>
                        <Mail className={`${z.icon} text-[#6b7280] shrink-0`} strokeWidth={1.7} />
                        <input
                            type="email"
                            required
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@company.com"
                            className={inputCls}
                            style={inputStyle}
                        />
                    </div>

                    <label className={`block font-medium text-[#334155] ${z.gap} ${z.label}`}>Password</label>
                    <div className={inputWrap}>
                        <Lock className={`${z.icon} text-[#6b7280] shrink-0`} strokeWidth={1.7} />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            required
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className={inputCls}
                            style={inputStyle}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="ml-2 shrink-0 text-[#6b7280] hover:text-slate-700 transition-colors cursor-pointer"
                            title={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? (
                                <EyeOff className={z.icon.split(' ').slice(0, 2).join(' ')} strokeWidth={1.7} />
                            ) : (
                                <Eye className={z.icon.split(' ').slice(0, 2).join(' ')} strokeWidth={1.7} />
                            )}
                        </button>
                    </div>

                    <div className={`flex items-center justify-between ${z.gap}`}>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className={`${z.check} rounded-[5px] border-[#cbd5e1] text-blue-600 focus:ring-blue-500`}
                            />
                            <span className={`text-[#475569] ${z.remember}`}>Remember me</span>
                        </label>
                        <a
                            href="#forgot-password"
                            className={`font-medium text-[#1d6ff2] hover:underline ${z.remember}`}
                        >
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full text-white font-semibold flex items-center justify-center gap-[10px] cursor-pointer active:scale-[0.99] transition disabled:opacity-70 ${z.button}`}
                        style={{
                            background: 'linear-gradient(90deg,#1b8cf7 0%,#2f6df1 60%,#3b5fee 100%)',
                            boxShadow: '0 10px 24px rgba(37,99,235,.28)',
                        }}
                    >
                        {isLoading ? (
                            <span className="inline-block w-6 h-6 border-[3px] border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>
                                <span>Sign In</span>
                                <ArrowRight className="w-[22px] h-[22px]" strokeWidth={2} />
                            </>
                        )}
                    </button>
                </form>

                <p className={`text-center text-[#64748b] ${z.terms}`}>
                    By signing in, you agree to our{' '}
                    <a href="#terms" className="text-[#1d6ff2] hover:underline">
                        Terms &amp; Privacy Policy
                    </a>
                    .
                </p>
            </div>
        </div>
    )
}

const MOBILE_BREAKPOINT = 900

export default function Login({ onAuthenticated }) {
    const [view, setView] = useState(() => ({
        scale: 1,
        W: STAGE_W,
        H: STAGE_H,
        mobile: typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT,
    }))

    useEffect(() => {
        const fit = () => {
            const vw = window.innerWidth
            const vh = window.innerHeight
            const scale = Math.min(vw / STAGE_W, vh / STAGE_H)
            setView({ scale, W: vw / scale, H: vh / scale, mobile: vw < MOBILE_BREAKPOINT })
        }
        fit()
        window.addEventListener('resize', fit)
        return () => window.removeEventListener('resize', fit)
    }, [])

    // Mobile / small tablets: just the white card, no background image
    if (view.mobile) {
        return (
            <div className="min-h-[100dvh] w-full bg-white flex items-center justify-center overflow-x-hidden font-sans">
                <LoginCard mobile onAuthenticated={onAuthenticated} />
            </div>
        )
    }

    return (
        <div className="fixed inset-0 overflow-hidden bg-[#0b1530] font-sans select-none">
            {/* Fill for any space around the image on wide / tall screens */}
            <div
                className="absolute inset-0 scale-110 blur-2xl"
                style={{
                    backgroundImage: "url('/login-bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <div className="absolute inset-0 bg-[#0b1530]/50" />

            {/* Design stage: height fixed at 1024 units, width stretches to the screen */}
            <div
                className="absolute text-left"
                style={{
                    width: view.W,
                    height: view.H,
                    left: 0,
                    top: 0,
                    transform: `scale(${view.scale})`,
                    transformOrigin: 'top left',
                }}
            >
                <div
                    className="absolute left-0"
                    style={{ top: (view.H - STAGE_H) / 2, width: view.W, height: STAGE_H }}
                >
                    {/* Background image at its exact reference size, anchored left */}
                    <div
                        className="absolute left-0 top-0"
                        style={{
                            width: STAGE_W,
                            height: STAGE_H,
                            backgroundImage: "url('/login-bg.png')",
                            backgroundSize: '100% 100%',
                            WebkitMaskImage: 'linear-gradient(to right, #000 0, #000 90%, transparent 100%)',
                            maskImage: 'linear-gradient(to right, #000 0, #000 90%, transparent 100%)',
                        }}
                    >
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    'linear-gradient(90deg, rgba(10,24,68,.38) 0%, rgba(10,24,68,.22) 55%, rgba(10,24,68,.12) 100%)',
                            }}
                        />
                    </div>

                    {/* Top-left logo */}
                    <CompanyLogo variant="white" className="absolute left-[92px] top-[47px] w-[48px] h-[52px]" />
                    <span className="absolute left-[156px] top-[58px] text-white text-[27px] leading-[38px] font-semibold tracking-tight">
                        Your Company
                    </span>

                    {/* Hero */}
                    <p className="absolute left-[91px] top-[170px] text-[16px] leading-[20px] font-medium tracking-[0.2em] text-[#a9b6d4] whitespace-nowrap">
                        ONE LOGIN. MULTIPLE SOLUTIONS.
                    </p>
                    <h1 className="absolute left-[91px] top-[207px] text-[64px] leading-[65px] font-bold tracking-tight text-white whitespace-nowrap">
                        Your Work,
                        <br />
                        <span
                            style={{
                                background: 'linear-gradient(90deg,#38bdf8 0%,#5fa8fa 45%,#a78bfa 100%)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            All in One Place
                        </span>
                    </h1>
                    <p className="absolute left-[91px] top-[354px] text-[22px] leading-[31px] text-[#d6ddef] whitespace-nowrap">
                        Access all your business applications with a single,
                        <br />
                        secure login. Work faster, smarter, and together.
                    </p>

                    {/* App cards */}
                    {apps.map((a) => (
                        <div
                            key={a.title}
                            className="absolute top-[448px] w-[226px] h-[215px] rounded-[24px] border border-white/15 bg-white/[0.08] backdrop-blur-md shadow-[0_20px_40px_rgba(5,12,40,.25)]"
                            style={{ left: a.left }}
                        >
                            <div
                                className="absolute left-[27px] top-[26px] w-[73px] h-[73px] rounded-[20px] flex items-center justify-center text-white"
                                style={{ background: a.grad, boxShadow: `0 10px 22px ${a.glow}` }}
                            >
                                {a.icon}
                            </div>
                            <h3 className="absolute left-[27px] top-[110px] text-[22px] leading-[30px] font-bold text-white tracking-tight">
                                {a.title}
                            </h3>
                            <p className="absolute left-[27px] top-[148px] text-[15.5px] leading-[21px] text-[#dbe2f2] whitespace-nowrap">
                                {a.lines[0]}
                                <br />
                                {a.lines[1]}
                            </p>
                        </div>
                    ))}

                    {/* Bottom badges */}
                    {badges.map(({ left, title, sub, Icon }) => (
                        <div key={title} className="absolute top-[905px] h-[46px]" style={{ left }}>
                            <Icon className="absolute left-0 top-[8px] w-[26px] h-[26px] text-[#5da4f7]" strokeWidth={1.6} />
                            <p className="absolute left-[40px] top-[2px] text-[14px] leading-[20px] font-semibold text-white whitespace-nowrap">
                                {title}
                            </p>
                            <p className="absolute left-[40px] top-[27px] text-[12px] leading-[16px] text-[#aab6d3] whitespace-nowrap">
                                {sub}
                            </p>
                        </div>
                    ))}

                    <LoginCard onAuthenticated={onAuthenticated} />
                </div>
            </div>
        </div>
    )
}