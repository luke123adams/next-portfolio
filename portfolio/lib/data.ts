import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import foodmapscreenshot from "@/public/foodmapscreenshot.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Debt Management consultant",
    location: "Birmingham",
    description:
      "I spent 5 years as a civil servant in a telephony-based role, where I conducted thousands of conversations with taxpayers with a diverse range of backgrounds, from sole traders to directors with thousands of employees on their payroll. This taught me great communication skills as well as how to work within a strict compliance/GDPR framework.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2022",
  },
  {
    title: "School of Code",
    location: "Birmingham",
    description:
      "I completed an intensive full-stack web development course designed to take me from zero coding experience to job-ready in 4 months. The course focused heavily on collaboration, culminating in a month-long group project to design and deploy a React application.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Express, MongoDB ElephantSQL. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Foodmap",
    description:
      "Final project for the bootcamp; a web app designed to help people with specific dietary requirements using a webcam to scan product barcodes.",
    tags: ["React", "React-Router", "Cypress", "React Testing library", "Jest"],
    imageUrl: foodmapscreenshot,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Cypress",
  "Jest",
  "Supertest",
] as const;