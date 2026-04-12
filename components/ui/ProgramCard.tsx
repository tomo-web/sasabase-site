import Link from 'next/link'

interface ProgramCardProps {
  icon?: string
  tag?: string
  title: string
  titleEn?: string
  description: string
  href?: string
  variant?: 'default' | 'outlined' | 'filled'
}

export default function ProgramCard({
  icon,
  tag,
  title,
  titleEn,
  description,
  href,
  variant = 'default',
}: ProgramCardProps) {
  const variantClasses = {
    default:  'bg-surface border border-border hover:border-primary/30 hover:shadow-md',
    outlined: 'bg-transparent border-2 border-primary/20 hover:border-primary hover:bg-primary/4',
    filled:   'bg-primary/8 border border-primary/15 hover:bg-primary/14',
  }

  const content = (
    <div
      className={`rounded-lg p-6 transition-all duration-300 h-full flex flex-col ${variantClasses[variant]}`}
    >
      {icon && (
        <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4 text-primary text-lg flex-shrink-0">
          {icon}
        </div>
      )}
      {tag && (
        <span className="label-text mb-3 block">{tag}</span>
      )}
      <h3 className="text-base font-bold text-foreground tracking-jp mb-1 leading-jp-tight">
        {title}
      </h3>
      {titleEn && (
        <p className="text-xs text-muted tracking-wide mb-3">{titleEn}</p>
      )}
      <p className="text-sm text-stone-600 leading-jp tracking-jp flex-1">{description}</p>
      {href && (
        <div className="mt-5 pt-4 border-t border-border/60">
          <span className="btn-ghost text-xs">
            詳しく見る
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      )}
    </div>
  )

  if (href) {
    return <Link href={href} className="block h-full group">{content}</Link>
  }
  return content
}
