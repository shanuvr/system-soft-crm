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
    AlertCircle,
    X,
} from 'lucide-react'

/*
  Layout is built on a fixed 1536 x 1024 stage (same size as the reference image)
  and scaled to fit any screen, so everything stays aligned exactly like the design.
  Put the CLEAN background (no UI on it, 3:2 ratio) at /public/login-bg.png
*/
const STAGE_W = 1536
const STAGE_H = 1024

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

function SystemSoftLogo({ className = '' }) {
    return (
        <div className={`flex items-center gap-4.5 select-none ${className}`}>
            <div className="w-[74px] h-[74px] rounded-[22px] bg-gradient-to-br from-slate-900/95 via-[#0e1f48]/95 to-slate-800/95 p-1 border border-sky-400/50 shadow-[0_16px_36px_rgba(14,165,233,0.5)] backdrop-blur-md flex items-center justify-center shrink-0 ring-1 ring-white/15">
                <svg viewBox="0 0 48 48" className="w-12 h-12 drop-shadow-[0_4px_16px_rgba(56,189,248,0.75)]" fill="none">
                    <defs>
                        <linearGradient id="ss-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#38bdf8" />
                            <stop offset="45%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#818cf8" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M14 17C14 12.5 18 9 25 9H31C33.2 9 35 10.8 35 13C35 15.2 33.2 17 31 17H25C21.8 17 20.5 18.2 20.5 20C20.5 21.8 21.8 23 25 24.2L30.5 26.2C35.8 28.2 38 31.5 38 36C38 41.5 34 45 27 45H20C17.8 45 16 43.2 16 41C16 38.8 17.8 37 20 37H27C30.2 37 31.5 35.8 31.5 34C31.5 32.2 30.2 31 27 29.8L21.5 27.8C16.2 25.8 14 22.5 14 17Z"
                        fill="url(#ss-logo-grad)"
                    />
                    <circle cx="33" cy="13" r="2.4" fill="#ffffff" />
                    <circle cx="18" cy="41" r="2.4" fill="#38bdf8" />
                </svg>
            </div>
            <div className="flex flex-col text-left">
                <div className="flex items-center gap-3">
                    <span className="text-[42px] font-black tracking-tight text-white leading-none font-sans drop-shadow-md">
                        System<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300">Soft</span>
                    </span>
                    <span className="px-3 py-1.5 text-[12.5px] font-black tracking-widest text-sky-200 bg-sky-500/25 border border-sky-400/50 rounded-lg uppercase leading-none shadow-[0_2px_12px_rgba(56,189,248,0.3)]">
                        CRM
                    </span>
                </div>
                <span className="text-[14px] font-bold tracking-[0.3em] text-slate-300/90 uppercase mt-2 leading-none">
                    Enterprise Suite
                </span>
            </div>
        </div>
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
        pad: 'px-[66px] pt-[38px] pb-[36px]',
        logo: 'w-[58px] h-[58px]',
        name: 'mt-1.5 text-[28px] leading-[34px]',
        portal: 'text-[16px] leading-[20px]',
        welcome: 'mt-[22px] text-[30px] leading-[36px]',
        sub: 'mt-0.5 text-[17px] leading-[22px]',
        form: 'mt-[22px]',
        label: 'text-[18px] leading-[24px] mb-[8px] font-semibold text-[#1e293b]',
        inputH: 'h-[74px] px-[24px] rounded-[18px]',
        inputText: '20px',
        icon: 'w-[26px] h-[26px] mr-[16px]',
        gap: 'mt-[18px]',
        check: 'w-[22px] h-[22px]',
        remember: 'text-[17px]',
        button: 'h-[68px] rounded-[18px] text-[20px] mt-[24px]',
        terms: 'mt-[24px] text-[15px] leading-[20px]',
    },
    mobile: {
        pad: 'px-6 py-8',
        logo: 'w-[50px] h-[50px]',
        name: 'mt-1.5 text-[24px] leading-[30px]',
        portal: 'text-[14px] leading-[18px]',
        welcome: 'mt-5 text-[24px] leading-[30px]',
        sub: 'mt-0.5 text-[14px] leading-[18px]',
        form: 'mt-5',
        label: 'text-[15px] leading-[20px] mb-1.5 font-semibold text-[#1e293b]',
        inputH: 'h-[58px] px-4 rounded-[14px]',
        inputText: '16px',
        icon: 'w-[22px] h-[22px] mr-3',
        gap: 'mt-4',
        check: 'w-[18px] h-[18px]',
        remember: 'text-[14px]',
        button: 'h-[56px] rounded-[14px] text-[17px] mt-5',
        terms: 'mt-6 text-[13px] leading-[18px]',
    },
}

function LoginCard({ mobile, onAuthenticated }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const z = mobile ? SIZES.mobile : SIZES.desktop

    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => setErrorMessage(''), 4500)
            return () => clearTimeout(timer)
        }
    }, [errorMessage])

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrorMessage('')
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
            const inputUser = email.trim().toLowerCase()
            const inputPass = password.trim()

            if ((inputUser === 'admin' || inputUser === 'admin@company.com') && inputPass === 'admin') {
                if (onAuthenticated) {
                    onAuthenticated({
                        email: inputUser.includes('@') ? inputUser : 'admin@company.com',
                        name: 'Admin',
                        role: 'admin',
                    })
                }
            } else if ((inputUser === 'user' || inputUser === 'user@company.com') && inputPass === 'user') {
                if (onAuthenticated) {
                    onAuthenticated({
                        email: inputUser.includes('@') ? inputUser : 'user@company.com',
                        name: 'Rahul',
                        role: 'user',
                    })
                }
            } else {
                setErrorMessage('Invalid credentials. Please use admin / admin or user / user')
            }
        }, 500)
    }

    const inputWrap = `relative flex items-center w-full border-2 border-[#cbd5e1] bg-slate-50/70 hover:bg-white hover:border-[#94a3b8] focus-within:bg-white focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-500/20 shadow-[0_3px_10px_rgba(15,23,42,0.06)] focus-within:shadow-[0_4px_16px_rgba(37,99,235,0.16)] transition-all ${z.inputH}`
    const inputCls =
        'w-full h-full text-slate-900 placeholder:text-[#94a3b8] font-medium bg-transparent outline-none select-text min-w-0'
    const inputStyle = { ...autofillFix, fontSize: z.inputText }

    return (
        <>
            {/* Top-Right Extra Large Floating Error Toast Popup */}
            {errorMessage && (
                <div className="fixed top-4 right-4 sm:top-8 sm:right-8 z-50 flex items-center gap-4 sm:gap-5 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white px-5 py-4 sm:px-8 sm:py-5.5 rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(220,38,38,0.55)] backdrop-blur-md border-2 border-red-300/50 transition-all duration-300 animate-in fade-in slide-in-from-right-8 w-[calc(100vw-32px)] sm:w-[480px]">
                    <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center shrink-0 shadow-inner">
                        <AlertCircle className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                        <p className="font-extrabold text-[15px] sm:text-[19px] tracking-wide text-white">Authentication Failed</p>
                        <p className="text-xs sm:text-[15px] text-red-100 font-medium mt-0.5 sm:mt-1 leading-snug">{errorMessage}</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => setErrorMessage('')}
                        className="p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl hover:bg-white/25 transition-colors text-white cursor-pointer shrink-0 ml-1 sm:ml-2"
                        title="Dismiss"
                    >
                        <X className="w-4 h-4 sm:w-6 sm:h-6" />
                    </button>
                </div>
            )}

            <div
                className={
                    mobile
                        ? 'relative w-full min-h-[100dvh] flex flex-col justify-between px-6 py-8 sm:px-10 overflow-hidden bg-white'
                        : 'absolute right-[280px] top-1/2 -translate-y-1/2 w-[630px] rounded-[34px] bg-white overflow-hidden shadow-[0_30px_90px_rgba(5,12,40,.4)] border border-slate-100'
                }
            >
                {/* decorative circles */}
                <div
                    className="absolute rounded-full bg-[#eef5ff] pointer-events-none"
                    style={mobile ? { width: 280, height: 280, left: -100, top: -100 } : { width: 400, height: 400, left: -263, top: -164 }}
                />
                <div
                    className="absolute rounded-full bg-[#efecfd] pointer-events-none"
                    style={mobile ? { width: 240, height: 240, right: -100, bottom: -50 } : { width: 280, height: 280, right: -140, bottom: 110 }}
                />

                <div className={`relative z-10 flex flex-col items-center text-center ${mobile ? 'w-full max-w-md mx-auto my-auto' : z.pad}`}>
                    <img
                        src="/programers-logo-BLACCK.png"
                        alt="PROGRAMERS"
                        className="h-11 sm:h-13 w-auto max-w-[220px] object-contain mb-1.5 drop-shadow-xs"
                    />
                    <p className={`text-[#64748b] ${z.portal}`}>Employee Portal</p>

                    <h3 className={`font-bold tracking-tight text-[#0f1b3d] ${z.welcome}`}>Welcome Back</h3>
                    <p className={`text-[#64748b] ${z.sub}`}>Sign in to access your applications</p>

                    <form onSubmit={handleSubmit} autoComplete="off" className={`w-full text-left ${z.form}`}>
                        <label className={`block font-medium text-[#334155] ${z.label}`}>Email Address / Username</label>
                        <div className={inputWrap}>
                            <Mail className={`${z.icon} text-[#6b7280] shrink-0`} strokeWidth={1.7} />
                            <input
                                type="text"
                                name="login_id_field"
                                required
                                autoComplete="off"
                                autoCapitalize="none"
                                spellCheck="false"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    if (errorMessage) setErrorMessage('')
                                }}
                                className={inputCls}
                                style={inputStyle}
                            />
                        </div>

                        <label className={`block font-medium text-[#334155] ${z.gap} ${z.label}`}>Password</label>
                        <div className={inputWrap}>
                            <Lock className={`${z.icon} text-[#6b7280] shrink-0`} strokeWidth={1.7} />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="login_key_field"
                                required
                                autoComplete="new-password"
                                spellCheck="false"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    if (errorMessage) setErrorMessage('')
                                }}
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

                    <p className={`w-full text-center text-[#64748b] ${z.terms}`}>
                        By signing in, you agree to our{' '}
                        <a href="#terms" className="text-[#1d6ff2] hover:underline font-medium">
                            Terms &amp; Privacy Policy
                        </a>
                        .
                    </p>
                </div>
            </div>
        </>
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

    // Mobile / small tablets: clean full-height mobile layout
    if (view.mobile) {
        return <LoginCard mobile onAuthenticated={onAuthenticated} />
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

                    {/* Top-left SystemSoft CRM logo (Vector/Code-based) */}
                    <SystemSoftLogo className="absolute left-[92px] top-[32px]" />

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