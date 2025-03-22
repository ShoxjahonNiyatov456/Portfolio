import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Uy",
    hash: "#home",
  },
  {
    name: "Men haqimda",
    hash: "#about",
  },
  {
    name: "Loyihalarim",
    hash: "#projects",
  },
  {
    name: "Qobilyatlarim",
    hash: "#skills",
  },
  {
    name: "Tajribam",
    hash: "#experience",
  },
  {
    name: "Bog'lanish",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Maktabni tamomladim",
    location: "Uzbekistan,Jizzax",
    description:
      "11 yil o‘qib bitirganimdan so‘ng darhol front-end dasturchi sifatida ish topdim.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Front-End Dasturchi",
    location: "Uzbekistan , Tashkent",
    description:
      "1 yil davomida bitta ish joyida, yana 6 oy boshqa joyda front-end dasturchi bo‘lib ishladim. Shuningdek, full-stack dasturchi sifatida ko‘nikmalarimni oshirdim.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2025",
  },
  {
    title: "Full-Stack Dasturchi",
    location: "Uzbekistan , Jizzax",
    description:
      "Hozir men freelancer sifatida full-stack dasturchi bo‘lib ishlayapman. Mening texnologik to‘plamim React, Next.js, TypeScript, Tailwind va MongoDB dan iborat. To‘liq stavkali ish imkoniyatlariga ochiqman.",
    icon: React.createElement(FaReact),
    date: "2023 - hozirgacha",
  },
] as const;

export const projectsData = [
  {
    title: "TozaTelefon",
    description:
      "Men ushbu startap loyihasida 5 oy davomida full-stack dasturchi sifatida ishladim. Foydalanuvchilar kompaniyalarga ochiq fikr-mulohazalar bildirishlari mumkin.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "ManegeMe",
    description:
      "O'quv markazlarini integrallaydigan loyiha. Men front-end dasturchi sifatida ishladim. Unda saralash, filtrlash va sahifalash kabi funksiyalar mavjud.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "JomeShop",
    description:
      "Online do'kon qurilish mollarini sotadigan. Unda so'zlar soni, belgi soni va ijtimoiy tarmoqlardagi post chegaralarini ko'rsatish funksiyalari mavjud.",
    tags: ["React", "Next.js", "Tailwind"],
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
  "MongoDB",
  "Redux",
  "Express",
] as const;
