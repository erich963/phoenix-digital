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
  primary:
    'bg-[#0a0a0a] text-white hover:bg-[#2a2a2a] border border-[#0a0a0a] uppercase tracking-wider font-semibold rounded-none',
  secondary:
    'bg-white text-[#0a0a0a] border border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white uppercase tracking-wider font-semibold rounded-none',
  outline:
    'bg-transparent text-white border border-white hover:bg-white hover:text-[#0a0a0a] uppercase tracking-wider font-semibold rounded-none',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-none transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
