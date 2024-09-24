import { motion } from "framer-motion";
import styled from "styled-components";

const Svg = styled.svg`
  width: 200px;
  height: 300px;
  margin-top: 120px;
  position: absolute;
`;

const Path = styled(motion.path)`
  fill: transparent;
  stroke: black;
  stroke-width: 7;
`;

const Mouth: React.FC = () => {
  return (
    <Svg viewBox="0 0 200 200">
      <Path
        initial={{ d: "M 50 100 L 150 100" }}
        animate={{ d: [
            "M 50 100 Q 100 50 150 100", 
            "M 50 100 Q 100 150 150 100"
        ] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </Svg>
  );
};

export default Mouth;
