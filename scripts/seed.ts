import connectDB from "../lib/db";
import "@/lib/models";
import { Board, Column, JobApplication } from "@/lib/models";

const USER_ID = "6929e34361b6f083d154859d";

const SAMPLE_JOBS = [
  // Wish List
  {
    company: "MU Company",
    position: "Software Developer",
    location: "San Francisco, CA",
    tags: ["React", "Tailwind", "High Pay"],
    description: "Build modern web applications using React and Tailwind CSS",
    jobUrl: "https://example.com/jobs/1",
    salary: "$120k - $150k",
  },
  {
    company: "Stripe",
    position: "Front End Developer",
    location: "Remote",
    tags: ["TypeScript", "React", "Next.js"],
    description: "Work on payment infrastructure frontend",
    jobUrl: "https://example.com/jobs/2",
    salary: "$130k - $160k",
  },