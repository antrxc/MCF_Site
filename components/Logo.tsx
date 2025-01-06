import Image from 'next/image'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
}

export function Logo({ size = 'medium' }: LogoProps) {
  const dimensions = {
    small: { width: 30, height: 30 },
    medium: { width: 40, height: 40 },
    large: { width: 80, height: 80 },
  }

  const { width, height } = dimensions[size]

  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/placeholder.svg?height=80&width=80"
        alt="Metal Cabinet Solutions Logo"
        width={width}
        height={height}
      />
      <span className={`font-bold ${size === 'large' ? 'text-3xl' : 'text-xl'}`}>MCS</span>
    </div>
  )
}

