import image from "../../assets/WhatsApp Image 2024-02-09 at 14.19.08_6adcd389.jpg";
import "./About.css";
import Download from "../../assets/icons8-download-48.png";
import { motion,useScroll,useTransform } from "framer-motion";
function About({ scroll }) {
  const {scrollY}=useScroll()
  // const divPlace=useTransform(scrollY,[-100,0,300,301],[0,1,0])
  return (
    <motion.div
      className={`about `}
      id="about"
      initial={{ opacity: 1 }}
      transition={{ duration :1}}
    >
      <img src={image} alt="" />
      <div className="des">
        <span>who am i</span>
        <p>about me</p>
        <p>
          I code, therefore I am
          <br />
          ''
          <br />
          I am a young enthusiast who is keen on IT and anything about it since
          my first steps to High School. During the past few years, I gained
          lots of experience in this field due to the strong desire of becoming
          an expert.
          <br />
          <br />
          “For me, web development is more than coding. It's a canvas with a
          blank page and I am the artist to paint it with colors of coding
        </p>
        <a href="">
          {" "}
          <img src={Download} alt="" />
          download cv
        </a>
      </div>
    </motion.div>
  );
}

export default About;
