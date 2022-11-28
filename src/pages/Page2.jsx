import { motion } from "framer-motion";
import React, { useState } from "react";
import AnimatedCharacters from "../components/AnimatedText";

const Page2 = () => {
  const placeholderText = [
    { type: "heading1", text: "Nhưng..." },
    {
      type: "heading2",
      text: "Hoàng hôn cho chúng ta ít ngày hơn để sống, nhưng mặt trời cho chúng ta thêm một ngày hi vọng vì vậy hãy vui lên và hy vọng những điều tốt đẹp nhất.",
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

export default Page2;
