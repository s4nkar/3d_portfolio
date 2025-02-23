import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn } from "../utils/motion";
import SweetAlert2 from 'react-sweetalert2';


const Contact = () => {

  const formRef = useRef();
  const [swalProps, setSwalProps] = useState({});


  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;
    setForm({...form, [name]: value});  

  }

  const handleSubmit = (e) => {
    
    e.preventDefault();
    setLoading(true);

    emailjs.send(
        'service_hc5we6a', 
        'template_zht2dsl', 
        {
          from_name: form.name,
          to_name: "Sankar",
          from_email: form.email,
          to_email: "s4nkar.connect@gmail.com",
          message: form.message,

        },
        'BsORalaLNeDLPo5TT'
        ).then(()=>{

          setLoading(false);
          setSwalProps({
            show: true,
            title: 'Thank you. I will get back to you as soon as possible.',
            icon: 'success',
        })
          setForm({
            name: "",
            email: "",
            message: "",
          })

        },
        (error) => {
          setLoading(false);
          console.log(error);
          setSwalProps({
            show: true,
            title: 'Something Went Wrong',
            icon: 'error',
        })
        }
        )
  }



  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <SweetAlert2 {...swalProps} />
        <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
            <p className={`${styles.sectionSubText}`}>Get in touch</p>
            <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

            <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col gap-8"
            >
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-2">your Name</span>
                  <input 
                    type="text" 
                    name="name" 
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="What's your name?"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none rounded-lg border-none font-medium"
                   />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-2">your Email</span>
                  <input 
                    type="email" 
                    name="email" 
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="What's your email?"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none rounded-lg border-none font-medium"
                   />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-2">your Message</span>
                  <textarea
                    rows={4} 
                    name="message" 
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="What do you want to say?"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none rounded-lg border-none font-medium"
                   />
                </label>

                <button
                  type="submit"
                  className="bg-tertiary py-3 px-8 outline-none w-fit text-white fold-bold shadow-md shadow-primary rounded-xl"
                >
                  { loading ? 'Sending...' : 'send' }
                </button>
            </form>
        </motion.div>

        <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
            <EarthCanvas />
        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")