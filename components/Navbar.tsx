import { Briefcase } from "lucide-react";
import Link from "next/link";

export default function NavBar(){
    return (
        <nav className="border-b bordder-gray-200 bg-white">
            <div className="container mx-auto flex h-16 items-center px-4">
                <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary"></Link>
                <Briefcase/>
                Job Tracker
            </div>
        </nav>
    )
}