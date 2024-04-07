import { useEffect, useState } from "react"








export default function SinglePost({ post, choosePost }) {



    const [date, setDate] = useState()


    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        setDate(date.toLocaleDateString('en-GB', options))
    }






    useEffect(() => {
        if (post) {
            formatDate(post.createdAt)
        }
    }, [])

    return (
        <article onClick={() => { choosePost(post) }} className="cursor-pointer rounded-lg py-2 p-1 flex max-w-2xl flex-col items-start justify-between xl:hover:scale-105 ease-in-out duration-300">
            <div className="flex items-center gap-x-4 text-xs">

                <p
                    className="relative z-10 rounded-full bg-sky-100 px-3 py-1.5 font-medium text-gray-600 "
                >
                    {post.category}
                </p>
                <time dateTime={date} className="text-gray-500">
                    {date}
                </time>
            </div>

            <h3 className="mt-3 text-lg font-semibold leading-6 text-indigo-900 ">
                <p href={post.href}>
                    <span className="" />
                    {post.title}
                </p>
            </h3>


            <div className=" w-full my-4">
                <img alt="post-picture" className="rounded-lg" src={`${post.image_url}`}></img>
            </div>

            <div className="group  relative">
                <p className=" line-clamp-3 text-sm leading-6 text-gray-600">{post.short_description}</p>
            </div>



            <div className="relative mt-4 flex items-center gap-x-4">
                <img src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                    <div className="font-semibold text-indigo-900">
                        <p href={post.author}>
                            <span className="absolute inset-0" />
                            {post.author}
                        </p>
                    </div>
                    <p className="text-gray-600">{post.author.role}</p>
                </div>
            </div>



        </article>
    )
}