import Image from "next/image"
import Link from "next/link"
import mixer from "../../public/mixer.png"
import rateMyNext from "../../public/rate-my-next.png"

export default function Page() {
  return (
    <div className="w-screen h-dvh bg-orange-50/20">
      <div className="flex md:flex-row max-w-4xl flex-col mx-auto items-center justify-center h-dvh p-4 gap-4">
        <Link href="https://mixer.j3c7.dev" className="text-2xl font-bold border hover:mix-blend-difference" target="_blank">
          <Image src={mixer} alt="Mixer" className="h-[300px] object-cover" />
        </Link>
        <Link
          href="https://rate-my-next.j3c7.dev"
          className="text-2xl font-bold border hover:mix-blend-difference"
          target="_blank"
        >
          <Image src={rateMyNext} alt="Rate My Next" className="h-[300px] object-cover" />
        </Link>
      </div>
    </div>
  )
}
