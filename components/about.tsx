"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Men haqimda");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Men haqimda</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">Buxgalteriya</span> yo‘nalishida oliy
        ma’lumotni tamomlaganimdan so‘ng, dasturlashga bo‘lgan ishtiyoqimni
        davom ettirishga qaror qildim. Kodlash bo‘yicha intensiv kursga yozildim
        va <span className="font-medium">full-stack web dasturlash</span>ni
        o‘rgandim.{" "}
        <span className="italic">Dasturlashdagi eng yoqtirgan qismim</span> – bu
        muammolarni hal qilish jarayoni. Muammoning yechimini topganimda
        <span className="underline">juda xursand bo‘laman</span>. Asosiy
        texnologik yo‘nalishim:{" "}
        <span className="font-medium">React, Next.js, Node.js va MongoDB</span>.
        Shuningdek, TypeScript bilan ham ishlay olaman. Doimo yangi
        texnologiyalarni o‘rganishga intilaman. Hozirda{" "}
        <span className="font-medium">to‘liq stavkali dasturchi</span>{" "}
        lavozimiga ish qidirmoqdaman.
      </p>

      <p>
        <span className="italic">Dasturlashdan tashqari</span> men video
        o‘yinlar o‘ynashni, filmlar tomosha qilishni va itim bilan vaqt
        o‘tkazishni yoqtiraman. Shuningdek,{" "}
        <span className="font-medium">yangi bilim olish</span> menga zavq
        bag‘ishlaydi. Hozirda{" "}
        <span className="font-medium">tarix va falsafa</span> bo‘yicha
        bilimlarimni oshirmoqdaman. Shu bilan birga, gitara chalishni ham
        o‘rganmoqdaman.
      </p>
    </motion.section>
  );
}
