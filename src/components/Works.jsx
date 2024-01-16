import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constands";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";

// TODO change project details

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) =>{

  const [showMore, setShowMore] = useState(false)
   
  return(
      <motion.div
      variants={fadeIn("up","spring", index * 0.5, 0.75)}
      >
        <Tilt
        options={{
          max:45,
          scale:1,
          speed:450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px] ">
              <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div 
                  onClick={()=> window.open(source_code_link, "_blank")} 
                  className="black-gradient rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
                  >
                      <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                  </div>
              </div>
          </div>

          <div className="mt-5" style={{height: showMore ? "auto" : "105px", overflow:"hidden"}}>
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
            <p 
            onClick={()=> setShowMore(!showMore)}
            className="text-white text-[10px] text-right mt-2 cursor-pointer"
            >
            show {showMore ? "less" : "more"}
            </p>
          <div className="mt-4 flex flex-wrap gap-2"> 
            {tags.map((tag, index)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p> 
            ))}
          </div>
        </Tilt>
      </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div
      variants={textVariant()}
      >
      <p className={styles.sectionSubText}>My Work</p>
      <h2 className={styles.sectionHeadText} >Projects.</h2>
    </motion.div>

    <div className="w-full flex">
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
        Following projects showcases my skills and experience through
        real-world examples of my work. It reflects my ability 
        to solve complex problems, work with different technologies, and manage projects effectively.
        <p 
        onClick={()=> window.open("https://github.com/sankar-666", "_blank") }
        className="text-[15px] text-green-500 cursor-pointer underline"
        >Explore more projects here</p>
        </motion.p>
    </div>

    <div className="mt-20 flex flex-wrap gap-7 ">
      {projects.map((project, index)=>(
          <ProjectCard 
          key={`project-${index}`} 
          index={index}
          {...project}
          />
      ))}
    </div>

    </>
  )
}

export default SectionWrapper(Works, "")