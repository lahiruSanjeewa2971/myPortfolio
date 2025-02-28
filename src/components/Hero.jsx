import React from "react";
import profilePic01 from "../assets/profilePic06.jpeg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1300px] w-full flex flex-col items-center p-3">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={["Frontend Developer", 1000, "Web designer", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-6"
          >
            HEY, I AM <br />
            <span className="text-purple-500">LAHIRU SANJEEWA</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-200 md:max-w-[500px] max-w-[300px] md:text-2xl text-lg mb-4"
          >
            I am a passionate frontend developer with over 2 years of
            experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/myCv.pdf";
                link.download = "Lahiru_Sanjeewa.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download CV
            </motion.button>

            <div className="flex flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                href="https://github.com/lahiruSanjeewa2971"
                whileHover={{ scale: 1.2 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGithub />
              </motion.a>
              {/* <motion.a href="#" whileHover={{ scale: 1.2 }}>
                <AiOutlineInstagram />
              </motion.a> */}
              <motion.a
                href="https://www.linkedin.com/in/lahirusanjeewa2971/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <AiOutlineLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilePic01}
          alt=""
          className="w-[300px] md:w-450px] rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex md:flex-row flex-col md:text-7xl text-5xl justify-center items-center md:px-1 px-12 w-full py-9 mt-5"
      >
        <p className="text-gray-200 md:mr-6 text-2xl">My Tech Stack</p>
        <div className="flex flex-row mt-4 md:mt-0">
          <DiHtml5 className="text-orange-600 mx-2" />
          <DiCss3 className="text-blue-600 mx-2" />
          <DiJavascript1 className="text-yellow-600 mx-2" />
          <DiReact className="text-blue-600 mx-2" />
          <DiNodejsSmall className="text-green-600 mx-2" />
        </div>
      </motion.div>

      {/* <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div> */}
    </div>
  );
};

export default Hero;
