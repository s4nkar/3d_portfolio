import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import leetcode from '../assets/leetcode.png'

const Footer = () => {
  return (
    <div className='pb-10 z-50 w-full h-[auto] flex justify-center items-center gap-5'>
        <button 
        onClick={()=> window.open("https://www.linkedin.com/in/sankar-dev-s-06a9772a1/", "_blank")} 
        className='p-1 bg-tertiary rounded-2xl cursor-pointer w-[50px] h-[50px]'
        >
            <LinkedInIcon fontSize='large' />
        </button>

        <button 
        onClick={()=> window.open("https://www.instagram.com/s4nkar.__/", "_blank")} 
        className='p-1 bg-tertiary rounded-2xl cursor-pointer w-[50px] h-[50px]'
        >
            <InstagramIcon fontSize='large' />
        </button>

        <button 
        onClick={()=> window.open("https://github.com/sankar-666", "_blank")} 
        className='p-1 bg-tertiary rounded-2xl cursor-pointer w-[50px] h-[50px]'
        >
            <GitHubIcon fontSize='large' />
        </button>
        
        <button 
        onClick={()=> window.open("https://leetcode.com/s4nkar/", "_blank")} 
        className='p-1 bg-tertiary rounded-2xl cursor-pointer w-[50px] h-[50px] flex justify-center items-center'
        >
            <img className='w-6 h-6' src={leetcode} alt="LeetCode" />
        </button>
    </div>
  )
}

export default Footer
