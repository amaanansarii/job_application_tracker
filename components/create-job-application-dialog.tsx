"use client"

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import {Label} from './ui/label'
import {Input} from './ui/input'
import { Textarea } from './ui/textarea';
interface CreateJobApplicationProps {
    columnId: string;
    boardId: string;
}
export default function CreateJobApplicationDialog({ columnId, boardId }: CreateJobApplicationProps) {

    const [open, setOpen] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        company: "",
        position: "",
        location: "",
        notes: "",
        salary: "",
        jobUrl: "",
        tags: "",
        description: "",
    }) 

    async function handleSubmit(e: React.FormEvent){

        e.preventDefault()

        try {
            
        } catch (err) {
            console.error(err);
        }

    }
    return (
        // dialog for job application
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button variant={"outline"} className='w-full mb-4 justify-start text-muted-foreground border-dashed border-2 hover:border-solid hover:bg-muted/50'>
                    <Plus className='mr-2 h-4 w-4'/>
                    Add Job
                </Button>
            </DialogTrigger>

            <DialogContent className='max-w-2xl'>
                <DialogHeader>
                    <DialogTitle> Add Job Application</DialogTitle>
                    <DialogDescription>Track a new job application</DialogDescription>
                </DialogHeader>

                <form action="" className='space-y-4' onSubmit={handleSubmit}>
                    <div className='space-y-4'>
                        <div className='grid grid-cols gap-4'>
                            <div className='space-y-2'>
                                <Label htmlFor="company">Company *</Label>
                                <Input id="company" required value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})}/>
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor="position">Position *</Label>
                                <Input id="position" required value={formData.position} onChange={(e) => setFormData({...formData, position: e.target.value})}/>
                            </div>
                        </div>

                        <div>
                            <div className='space-y-2'>
                                <Label htmlFor="location">Location </Label>
                                <Input id="location" required value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})}/>
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor="salary">Salary </Label>
                                <Input id="salary" placeholder='e.g., $100k - $200k' required value={formData.salary} onChange={(e) => setFormData({...formData, salary: e.target.value})}/>
                            </div>
                        </div>

                        <div>
                        <div className='space-y-2'>
                                <Label htmlFor="joburl">Job URL </Label>
                                <Input id="joburl" placeholder='https://...' required value={formData.jobUrl} onChange={(e) => setFormData({...formData, jobUrl: e.target.value})}/>
                            </div>

                            <div className='space-y-2'>
                                <Label htmlFor="tags">Tags (comma-separated) </Label>
                                <Input id="tags" placeholder='React, Tailwind, CSS' required value={formData.tags} onChange={(e) => setFormData({...formData, tags: e.target.value})}/>
                            </div>

                            <div className='space-y-2'>
                                <Label htmlFor="description">Description  </Label>
                                <Textarea id="description" rows={3} placeholder='Brief description of the role...' required value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}/>
                            </div>

                            <div className='space-y-2'>
                                <Label htmlFor="notes">Notes </Label>
                                <Textarea rows={4} id="notes" required value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})}/>
                            </div>
                        </div>
                    </div>

                    <DialogFooter>
                        <Button type='button' variant={"outline"} onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type='submit'>Add Application</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}