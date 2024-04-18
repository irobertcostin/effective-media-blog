import facebook from "../../images/facebook.webp"
import instagram from "../../images/insta.webp"



export default function ShareFunction() {


    return (
        <div className="w-full max-w-[430px]  flex flex-col items-center gap-5 border-y py-5 border-blue-500 xl:border-y-4 xl:mb-[40px] xl:pt-0 ">

            <p className="text-2xl text-blue-700 xl:text-3xl xl:font-bold">Share this article</p>

            <div className="flex justify-center items-center gap-10">

                <a href="https://www.facebook.com/effectivemediaro" target="_blank" rel="noreferrer" className="  text-neutral-600 dark:text-neutral-200">
                    <img className=" h-10 w-10 bg-[#2563eb] p-[1px] rounded-md" src={facebook} alt="facebook"></img>
                </a>



                <a href="https://www.instagram.com/effectivemedia.ro/" target="_blank" rel="noreferrer" className=" text-neutral-600 dark:text-neutral-200">
                    <img className="h-10 w-10 p-[1px] bg-[#2563eb] rounded-md" src={instagram} alt="instagram"></img>
                </a>

                <a href="https://linkedin.com/company/effective-media-ro/" alt="linkedin.com" target="_blank" rel="noreferrer" className=" rounded-md ">
                    <svg alt="linkedin" enableBackground="new 0 0 56.693 56.693" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" className="p-[1px] h-10 w-10 pb-[3px] rounded-md text-white bg-[#2563eb]" xmlns="http://www.w3.org/2000/svg">
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