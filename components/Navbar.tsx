import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import SignOutButton from "./sign-out-btn";
import {useSession} from "../lib/auth/auth-client"

export default async function NavBar() {
    const {data: session} = useSession();
    return (
        <nav className="border-b bordder-gray-200 bg-white">
            <div className="container mx-auto flex h-16 items-center px-4 justify-between">
                <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
                    <Briefcase />
                    Job Tracker
                </Link>
                <div className="flex items-center gap-4">
                    {session?.user ?
                        (<>
                            <Link href="/dashboard">
                                <Button
                                variant="ghost"
                                className="text-gray-700 hover:text-black"
                                >
                                    Dashboard
                                </Button>
                            </Link>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button variant="ghost">
                                        <Avatar>
                                            <AvatarFallback className="bg-primary text-white">
                                                {session?.user.name[0].toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                        <div>
                                            <p>{session.user.name}</p>
                                            <p>{session.user.email}</p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <SignOutButton/>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>)
                        :
                        (<>
                            <Link href={"/sign-up"} >
                                <Button variant={"ghost"} className="text-gray-700 hover:text-black">Log In</Button>
                            </Link>
                            <Link href={"/sign-in"}>
                                <Button className="bg-primary  hover:bg-primary/90">
                                    Start for Free
                                </Button>
                            </Link>
                        </>)}
                </div>
            </div>
        </nav>
    )
}