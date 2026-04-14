import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-slate-900 text-white hover:bg-slate-700 border border-slate-900 hover:border-slate-700 font-semibold',
  secondary: 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:text-slate-900 font-semibold',
  outline: 'bg-transparent text-slate-500 border border-slate-200 hover:border-slate-300 hover:text-slate-700 font-medium',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-sm',
}

export default function Button({
  children, href, variant = 'primary', size = 'md', onClick, type = 'button', className = '', disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  if (href) return <Link href={href} className={classes}>{children}</Link>

  return <button type={type} className={classes} onClick={onClick} disabled={disabled}>{children}</button>
}
