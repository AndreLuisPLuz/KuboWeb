import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import kubo from "../../../assets/kubo.png";
import kubofeliz from "../../../assets/kubofeliz.png";

const Square = styled(motion.div)`
    background-image: url(${kubo});
    background-size: 100% 90%;
    height: 40%;
    width: 40%;
    border-radius: 30px;
    position: absolute;
    bottom: 80%;
    left: 0;
    right: 0;
    margin: auto;
    cursor: pointer;
    &:hover {
        background-image: url(${kubofeliz});
    }
`;


const bounceVariants = {
  initial: { y: 0 },
  animate: { 
    y: [0,-50, 0],
    transition: {
      duration: 0.9,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop" // Loop contínuo
    }
  }
};

const BouncingSquare: React.FC = () => {
  return (
    <Square
      initial="initial"
      animate="animate"
      variants={bounceVariants}
    />
  );
}

export default BouncingSquare;
