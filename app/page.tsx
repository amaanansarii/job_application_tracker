import Image from "next/image";

export default function Home() {
  return <div className="flex min-h-screen flex-col bg-white">
    <main className="flex-1">
      {/* {hero section} */}

      <section className="container mx-auto px-4 py-32">
        <div>
          <h1 className="text-black">A Better way to track you job application</h1>
          <p className="text-gray--700">Capture, organise you job search in one place</p>
        </div>
      </section>
    </main>
  </div>
}
