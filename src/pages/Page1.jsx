import { motion } from "framer-motion";
import React, { useState } from "react";
import AnimatedCharacters from "../components/AnimatedText";

const Page1 = () => {
  const placeholderText = [
    { type: "heading1", text: "Chào em, Kỳ Duyên" },
    {
      type: "heading2",
      text: "Chắc hẳn dạo này em đang mệt mỏi vì cuộc sống",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <motion.div
      className="h-screen w-screen"
      initial="hidden"
      whileInView="visible"
      //   animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedCharacters {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
};

export default Page1;
