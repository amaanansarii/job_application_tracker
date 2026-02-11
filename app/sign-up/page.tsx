"use client";
import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../../components/ui/card"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button";
import Link from "next/link";

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
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="johndow@example.com" required></Input>
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="****" required></Input>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit">
                        Sign Up
                    </Button>
                    <p>Already Have an account? <Link href="/sing-in">Sign In</Link></p>
                </CardFooter>
            </form>
        </Card>
    </div>
}

