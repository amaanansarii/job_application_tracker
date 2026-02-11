"use client";
import React from "react";
import {Card, CardDescription, CardHeader, CardTitle} from "../../components/ui/card"

export default async  function SignUp(){
    return <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
        <Card>
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
        </Card>
    </div>
}

