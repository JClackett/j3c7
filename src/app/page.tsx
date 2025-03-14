import Image from "next/image"
import Link from "next/link"
import mixer from "../../public/mixer.png"
import rateMyNext from "../../public/rate-my-next.png"
import synth from "../../public/synth.png"
export default function Page() {
  return (
    <div className="w-screen h-dvh bg-orange-50/20">
      <div className="flex max-w-7xl mx-auto flex-wrap items-center h-full justify-center p-4 gap-4">
        <Link
          href="https://mixer.j3c7.dev"
          className="group text-2xl flex relative font-bold border hover:mix-blend-difference"
          target="_blank"
        >
          <Image src={mixer} alt="Mixer" className="h-[300px] w-[400px] object-cover" />
          <div className="absolute hidden group-hover:flex top-4 left-0 right-0 items-center justify-center">
            <p>Mixer</p>
          </div>
        </Link>
        <Link
          href="https://synth.j3c7.dev"
          className="group text-2xl flex relative font-bold border hover:mix-blend-difference"
          target="_blank"
        >
          <Image src={synth} alt="Synth" className="h-[300px] w-[400px] object-cover" />
          <div className="absolute hidden group-hover:flex top-4 left-0 right-0 items-center justify-center">
            <p>Synth</p>
          </div>
        </Link>
        <Link
          href="https://rate-my-next.j3c7.dev"
          className="group text-2xl flex relative font-bold border hover:mix-blend-difference"
          target="_blank"
        >
          <Image src={rateMyNext} alt="Rate My Next" className="h-[300px] w-[400px] object-cover" />
          <div className="absolute hidden group-hover:flex top-4 left-0 right-0 items-center justify-center">
            <p>Rate My Next</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
