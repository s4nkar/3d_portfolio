import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constands"
import { styles } from "../styles";
import { fadeIn, textVariant } from '../utils/motion';
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index)=>(
        <div className="w-28 h-28" key={index}>
            <BallCanvas  icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")