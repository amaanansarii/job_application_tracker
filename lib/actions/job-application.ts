'use server';

import { error } from "console";
import { getSession } from "../auth/auth";
import connectDB from "../db";
import board from "../models/board";
import { Board, Column, JobApplication } from "../models";
import column from "../models/column";

interface JobApplicationData{
    company: string;
    position: string;
    location?: string;
    notes?: string;
    salary?: string;
    jobUrl?: string;
    columnId: string;
    boardId: string;
    tags?: string[];
    description?: string;
}
export default async function createJobApplication(data: JobApplicationData){
    const session = await getSession();
    
    if(!session?.user){
        return {error: "Unauthorized"};
    }

    await connectDB()

    const {
        company,
        position, 
        location,
        notes,
        salary,
        jobUrl,
        columnId,
        boardId,
        tags, 
        description
    } = data;

    if (!company || !position || !columnId || !boardId){
        return {error: "Missing required fields"};
    }

    // verify board ownership

    const board = await Board.findOne({
        _id: boardId,
        userId: session.user.id,
    });

    if(!board){
        return {error: "Board not found"};
    }

    //verify  column belongs to board

    const column = await Column.findOne({
        _id: columnId,
        boardId: boardId,;
    })

    if(!column){
        return {error: "Column not found"};
    }

    const jobApplication = await JobApplication.create({
        company,
        position,
        locations,
        notes,
        salary,
        jobUrl,
        columnId,
        boardId,
        tags: tags || [],
        description,
    })
    return
}