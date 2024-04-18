
import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid"
import { useEffect, useState } from "react"
import ScrollToTop from "./ScrollToTop";
import Commercial from "./Commercial";
import Contact from "./Contact";
import ShareFunction from "./ShareSection";




export default function ReadPost({ changePage, readPost }) {


    const [date, setDate] = useState()


    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        setDate(date.toLocaleDateString('en-GB', options))
    }





    useEffect(() => {
        if (readPost) {
            formatDate(readPost.createdAt)
        }
    }, [readPost])

    return (
        <div className=" bg-transparent flex flex-col items-center min-h-[40vh] z-50 py-5  text-indigo-900 ">
            <ScrollToTop />
            <div className="w-full relative  ">
                <button onClick={changePage} className=" -top-4 left-3 xl:top-0 text-black absolute flex items-center"><ArrowLeftCircleIcon color="#2563eb" className="w-8 h-8 sm:h-10 sm:w-10" /></button>
            </div>


            <div className="w-full flex flex-col items-center xl:flex-row xl:items-start xl:justify-center xl:max-w-7xl relative ">


                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 0 xl:mx-0" >
                    <div className="max-w-3xl mx-auto ">

                        <div className="py-8 xl:py-0">
                            <h1 className="text-3xl font-bold mb-2">{readPost.title}</h1>
                            <p className="text-sky-600  mb-4 text-xl">{readPost.short_description}</p>
                            <p className="text-gray-500 text-sm">Published on <time dateTime={`${readPost.createdAt}`}>{date}</time></p>
                            <p className="text-gray-500 text-sm">Author: <span className="text-sky-600">{readPost.author}</span></p>
                            <p className="text-sky-600 text-sm mb-4">{readPost.category}</p>
                        </div>


                        <img src={`${readPost.image_url}`} alt="Featured image" className="w-full h-auto mb-8 rounded-lg"></img>


                        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto flex flex-col gap-5 xl:hidden">
                            <p>{readPost.description_1}</p>
                            <p>{readPost.description_2}</p>
                            <p>{readPost.description_3}</p>
                            <p>{readPost.description_4}</p>
                            <p>{readPost.description_5}</p>
                        </div>
                    </div>
                </div>

                <div className="my-5 mt-20 flex flex-col items-center gap-5 w-full max-w-[430px] xl:mt-0  ">
                    <ShareFunction />
                    <Contact />
                </div>


            </div>

            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto  flex-col gap-5 hidden xl:flex max-w-7xl xl:items-start  xl:pl-10">
                <p>{readPost.description_1}</p>
                <p>{readPost.description_2}</p>
                <p>{readPost.description_3}</p>
                <p>{readPost.description_4}</p>
                <p>{readPost.description_5}</p>
            </div>

            <div className="w-full flex justify-center xl:px-20 xl:pl-36">
                <Commercial />
            </div>
        </div>
    )
}