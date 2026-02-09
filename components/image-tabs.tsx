import { Button } from "./ui/button"
import { useState } from "react"
import Image from "next/image"

export default function ImageTab(){

  const [activeTab, setActiveTab] = useState("organize")


    return (
        <div>
            <section className="border-t bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {/* tabs */}
            <div className="flex gap-2 justify-center b-8">
              <Button className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "organize" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"} `}
                onClick={() => setActiveTab("organize")}>Organise Application</Button>
              <Button className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "hired" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"} `} onClick={() => setActiveTab("hired")}>Get Hired</Button>
              <Button className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "boards" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"} `} onClick={() => setActiveTab("boards")}>Manage Boards</Button>
            </div>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
              {activeTab === "organize" && <Image src={"/hero-images/hero1.png"} alt="Organise Applications" width={1200} height={800}></Image>}
              {activeTab === "hired" && <Image src={"/hero-images/hero2.png"} alt="Get Hired" width={1200} height={800}></Image>}
              {activeTab === "boards" && <Image src={"/hero-images/hero3.png"} alt="Manage Boards" width={1200} height={800}></Image>}
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}