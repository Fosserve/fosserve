import { Fingerprint, MapPin, CreditCard, Scan } from 'lucide-react'

export default function Page() {
  return (
    <div className="bg-[#2A2B5F] text-white">
      <div className="container mx-auto md:px-20 px-6  py-16">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight">
              CampX NXT
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Step into the future of campus management with our innovative 
              IoT-based solutions that brings real-time monitoring and 
              automation to various operations. Say goodbye to manual 
              processes and embrace the power of technology as your campus 
              transforms into a smart, connected ecosystem
            </p>
            <button 
              className="rounded-full font-semibold"
            >
              Know more
            </button>
          </div>

          {/* Right Column */}
          <div className="flex justify-evenly gap-8">
            <FeatureIcon
              icon={Scan}
              label="Facial Recognition"
              className="animate-fade-in [--animation-delay:200ms]"
            />
            <FeatureIcon
              icon={CreditCard}
              label="RF ID Cards"
              className="animate-fade-in [--animation-delay:400ms]"
            />
            <FeatureIcon
              icon={MapPin}
              label="GPS Tracking"
              className="animate-fade-in [--animation-delay:600ms]"
            />
            <FeatureIcon
              icon={Fingerprint}
              label="Smart Security"
              className="animate-fade-in [--animation-delay:800ms]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureIcon({ 
  icon: Icon, 
  label, 
  className 
}: { 
  icon: React.ElementType
  label: string
  className?: string
}) {
  return (
    <div className={className} style={{display:'flex',flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
      <div className="group relative">
        <div className="absolute h-[100px] w-[100px] -inset-0.5 rounded-full bg-blue-500 opacity-75 blur transition duration-1000 group-hover:opacity-100" />
        <div className="relative flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white p-6 animate-bounce-slow">
          <Icon className="h-12 w-12 text-blue-600 animate-pulse" />
        </div>
      </div>
      <p className="mt-4 text-center font-medium">{label}</p>
    </div>
  )
}

