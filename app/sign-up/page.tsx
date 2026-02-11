"use client";
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../../components/ui/card"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"

export default async  function SignUp(){
    return <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
        <Card>
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Create an account to start tracking your job applications.</CardDescription>
            </CardHeader>

            <form action="">
                <CardContent>
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" placeholder="John doe" required></Input>
                    </div>
                </CardContent>
            </form>
        </Card>
    </div>
}

