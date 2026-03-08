"use client"

import { Column, JobApplication } from "@/lib/models/models.types"
import { Card, CardContent } from "./ui/card";
import { Edit2, ExternalLink, MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

interface JobApplicationCardProps{
    job: JobApplication;
    columns: Column[];
}

export default function JobApplicationCard({job, columns} : JobApplicationCardProps){

    return (
        <>
            <Card>
                <CardContent>
                    <div>
                        <div>
                            <h3>{job.position}</h3>
                            <p>{job.company}</p>
                            {job.description && (
                                <p>{job.description}</p>
                            )}
                            {job.tags && job.tags.length > 0 && (
                                <div>{job.tags.map((tag, key) => (
                                    <span key={key}>{tag}</span>
                                ))}</div>

                            )}
                            {job.jobUrl && (
                                <a target="_blannk" href={job.jobUrl} onClick={(e) => e.stopPropagation()}><ExternalLink /></a>
                            )}
                        </div>
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button variant="ghost" size={"icon"}>
                                        <MoreVertical></MoreVertical>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        <Edit2></Edit2>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
    }