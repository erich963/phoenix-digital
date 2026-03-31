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
  // Primary: navy bg, white text, hover navy-hover (#013BA5)
  primary:
    'bg-[#000914] text-[#FBFBFB] hover:bg-[#013BA5] border border-[#000914] uppercase tracking-wider font-semibold',
  // Secondary: white bg, navy border + text, hover: navy bg white text
  secondary:
    'bg-white text-[#000914] border border-[#000914] hover:bg-[#000914] hover:text-[#FBFBFB] uppercase tracking-wider font-semibold',
  // Outline: transparent bg, white border + text (for dark backgrounds), hover: white bg navy text
  outline:
    'bg-transparent text-[#FBFBFB] border border-[#FBFBFB] hover:bg-white hover:text-[#000914] uppercase tracking-wider font-semibold',
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
