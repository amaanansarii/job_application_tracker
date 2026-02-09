import React from "react";
import {Button} from "../components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link";
import Image from "next/image"

export default function Home() {
  return <div className="flex min-h-screen flex-col bg-white">
    <main className="flex-1">
      {/* {hero section} */}

      <section className="container mx-auto px-4 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-black mb-6 text-6xl font-bold">A Better way to track you job application</h1>
          <p className="text-muted-foreground mb-10 text-xl">Capture, organise you job search in one place</p>
          <div className="flex flex-col items-center gap-4">
            <Link href={"/sign-up"}><Button size={"lg"} className="h-12 px-8 text-lg font-medium">Start for free <ArrowRight className="ml-2"/></Button></Link>
            <p className="text-sm text-muted-foreground">Free Forever, No credit card required.</p>
          </div>
        </div>
      </section>

      {/* hero images section with tag */}
      <section className="border-t bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {/* tabs */}
            <div className="flex gap-2 justify-center b-8">
              <Button>Organise Application</Button>
              <Button>Get Hired</Button>
              <Button>Manage Boards</Button>
            </div>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border">
              <Image src={"/hero-images/hero1.png"} alt="Organise Applications" width={1200} height={800}></Image>
              <Image src={"/hero-images/hero2.png"} alt="Get Hired" width={1200} height={800}></Image>
              <Image src={"/hero-images/hero3.png"} alt="Manage Boards" width={1200} height={800}></Image>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
}
