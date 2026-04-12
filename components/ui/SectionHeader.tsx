import React from 'react'

interface SectionHeaderProps {
  label?: string
  labelEn?: string
  title: string
  titleEn?: string
  description?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  label,
  labelEn,
  title,
  titleEn,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : ''} ${className}`}>
      {label && (
        <div className={`flex items-center gap-3 mb-4 ${isCenter ? 'justify-center' : ''}`}>
          <span className="block w-8 h-px bg-primary/60" />
          <span className="label-text">{label}</span>
          {labelEn && (
            <span className="text-[10px] text-muted/60 tracking-label hidden sm:inline">
              {labelEn}
            </span>
          )}
        </div>
      )}
      <h2 className="section-title text-balance mb-3">{title}</h2>
      {titleEn && (
        <p className="text-sm text-muted tracking-wide mt-1 mb-4">{titleEn}</p>
      )}
      {description && (
        <p className={`prose-jp mt-4 ${isCenter ? 'mx-auto' : ''}`}>{description}</p>
      )}
    </div>
  )
}
