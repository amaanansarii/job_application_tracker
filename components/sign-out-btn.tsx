"use client"

import React from "react"
import { DropdownMenuItem } from "./ui/dropdown-menu"
import { signOut } from "../lib/auth/auth-client"

export default function SignOutButton() {
    return (
        <DropdownMenuItem onClick={async () => await signOut()}>
            Log Out
        </DropdownMenuItem>
    )
}