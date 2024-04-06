import logo from "../../images/logo.webp"
import niceform from "../../images/3dform.webp"
import facebook from "../../images/facebook.webp"
import instagram from "../../images/insta.webp"




export default function Navbar() {





    return (
        <div className="  flex flex-col justify-center gap-4 sm:gap-6 xl:gap-0   bg-gradient-to-b from-blue-900 to-blue-600 py-4 sm:h-48  relative xl:flex-row  xl:px-20 xl:pb-5">

            <div className="w-full flex justify-center  xl:justify-start items-center xl:pt-4">
                <img alt="logo" src={logo} className="h-8  sm:h-10 xl:h-16 w-auto"></img>
            </div>



            <div className="w-full flex justify-center font-bold items-center   xl:text-[90px] xl:justify-center xl:absolute xl:h-48 xl:pb-10 z-50">
                <p className="text-center text-white text-7xl xl:text-[90px]"> <span className="bg-gradient-to-r from-yellow-300 to-pink-500  bg-clip-text text-transparent">THE BLOG</span></p>
            </div>


            <div className="hidden sm:flex  absolute -right-6 top-20 xl:-right-10 xl:top-36 rotate-45 ">
                <img alt="3d-form" className="w-60 h-60 xl:h-80 xl:w-80" src={niceform}></img>
            </div>

            <div className="w-full -mt-0.5 xl:mt-0 flex gap-4 justify-end px-4 sm:absolute  sm:justify-start sm:top-8 xl:justify-end xl:pr-20 xl:h-48 xl:items-center xl:z-50 xl:top-2 xl:pb-5">

                <a href="https://www.facebook.com/effectivemediaro" target="_blank" rel="noreferrer" className="  text-neutral-600 dark:text-neutral-200">
                    <img className=" h-6 w-6 sm:w-8 sm:h-8 xl:h-10 xl:w-10" src={facebook} alt="facebook"></img>
                </a>



                <a href="https://www.instagram.com/effectivemedia.ro/" target="_blank" rel="noreferrer" className=" text-neutral-600 dark:text-neutral-200">
                    <img className="h-6 w-6 sm:w-8 sm:h-8 xl:h-10 xl:w-10" src={instagram} alt="instagram"></img>
                </a>

                <a href="https://linkedin.com/company/effective-media-ro/" alt="linkedin.com" target="_blank" rel="noreferrer" className=" text-neutral-600 dark:text-neutral-200">
                    <svg alt="linkedin" enableBackground="new 0 0 56.693 56.693" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" className="h-6 w-6 sm:w-8 sm:h-8 xl:h-10 xl:w-10  text-white" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path fill="#ffffff" d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z" />
                            <path fill="#ffffff" d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z" />
                        </g>
                    </svg>
                </a>


            </div>


        </div>
    )
}