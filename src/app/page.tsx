import Image from "next/image"
import Link from "next/link"
import nokia from "../../public/3310.png"
import mixer from "../../public/mixer.png"
import mx from "../../public/mx.jpg"

export default function Page() {
  return (
    <div className="w-screen bg-background">
      <p className="text-center py-24 font-mono text-xl max-w-4xl mx-auto">
        Personal playground for tinkering with web audio tools and 3D environments, exploring the intersection of code, sound, and
        visual art through creative experiments.
      </p>
      <div className="flex max-w-7xl mx-auto flex-wrap items-center justify-center h-full p-4 gap-4">
        <Link
          href="https://mixer.j3c7.dev"
          className="group text-2xl flex relative font-bold border hover:mix-blend-difference"
          target="_blank"
        >
          <Image src={mixer} alt="Mixer" className="h-[250px] w-[400px] object-cover" />
          <div className="absolute hidden group-hover:flex top-4 left-0 right-0 items-center justify-center">
            <p>Mixer</p>
          </div>
        </Link>
        <Link
          href="https://3310.j3c7.dev"
          className="group text-2xl flex relative font-bold border hover:mix-blend-difference"
          target="_blank"
        >
          <Image src={nokia} alt="Nokia 3310" className="h-[250px] w-[400px] object-cover" />
          <div className="absolute hidden group-hover:flex top-4 left-0 right-0 items-center justify-center">
            <p>Nokia 3310</p>
          </div>
        </Link>
        <Link
          href="https://mx.j3c7.dev"
          className="group text-2xl flex relative font-bold border hover:mix-blend-difference"
          target="_blank"
        >
          <Image src={mx} alt="MX" className="h-[250px] w-[400px] object-cover" />
          <div className="absolute hidden group-hover:flex top-4 left-0 right-0 items-center justify-center">
            <p>MX</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
