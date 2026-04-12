interface ImagePlaceholderProps {
  label?: string
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide' | 'hero'
  className?: string
  variant?: 'green' | 'amber' | 'stone' | 'dark'
}

const aspectMap = {
  square:   'aspect-square',
  video:    'aspect-video',
  portrait: 'aspect-[3/4]',
  wide:     'aspect-[16/7]',
  hero:     'aspect-[4/3] md:aspect-[16/9]',
}

const variantMap = {
  green:  'bg-gradient-to-br from-primary-100 to-primary-200 text-primary-600',
  amber:  'bg-gradient-to-br from-amber-50 to-amber-100 text-amber-dark',
  stone:  'bg-gradient-to-br from-stone-100 to-stone-200 text-stone-400',
  dark:   'bg-gradient-to-br from-primary-800 to-primary-900 text-primary-200',
}

export default function ImagePlaceholder({
  label = '写真',
  aspectRatio = 'video',
  className = '',
  variant = 'green',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspectMap[aspectRatio]} ${variantMap[variant]} ${className}
        rounded-lg overflow-hidden flex items-center justify-center
        relative select-none`}
      aria-hidden="true"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative z-10 text-center px-4">
        <div className="text-2xl mb-2 opacity-40">□</div>
        <p className="text-xs font-medium tracking-jp opacity-60">{label}</p>
      </div>
    </div>
  )
}
