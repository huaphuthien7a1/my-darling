import { motion } from "framer-motion";
import React, { useState } from "react";
import AnimatedCharacters from "../components/AnimatedText";

const Page3 = () => {
  const placeholderText = [
    // {
    //   type: "heading2",
    //   text: "Đừng bỏ cuộc. Đừng buông xuôi. Giông bão nào cũng sẽ qua đi và bầu trời sẽ lại tươi sáng.",
    // },
    {
      type: "heading1",
      text: "Cố lên em nhé....",
    },
    // {
    //   type: "heading2",
    //   text: "Hoàng hôn cho chúng ta ít ngày hơn để sống, nhưng mặt trời cho chúng ta thêm một ngày hi vọng vì vậy hãy vui lên và hy vọng những điều tốt đẹp nhất.",
    // },
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
      className="h-screen w-screen flex items-center"
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

export default Page3;
