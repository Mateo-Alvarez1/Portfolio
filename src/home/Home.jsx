import "./home.css";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div id="home">
      <motion.h3
        initial={{
          color: "#08080843",
        }}
        animate={{
          y: 130,
          color: "#eded7c",
        }}
        transition={{
          duration: 0.5,
        }}
      >
        I , am
      </motion.h3>
      <motion.h1
        initial={{
          color: "#08080843",
        }}
        animate={{
          y: 130,
          color: "#FFF",
        }}
        transition={{
          duration: 0.5,
        }}
      >
        Mateo Alvarez
      </motion.h1>
      <motion.h4
        initial={{
          color: "#08080843",
        }}
        animate={{
          y: 130,
          color: "#eded7c",
        }}
        transition={{
          duration: 0.5,
        }}
      >
        FullStack Developer
      </motion.h4>
    </div>
  );
};

export default Home;
