import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/placeholder.svg?height=40&width=40"
        alt="Metal Cabinet Solutions Logo"
        width={40}
        height={40}
      />
      <span className="font-bold text-xl">MCS</span>
    </div>
  )
}

