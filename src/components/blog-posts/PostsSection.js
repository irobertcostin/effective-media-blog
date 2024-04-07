
import SinglePost from "./SinglePost";


export default function PostsSection({ displayedItems, choosePost }) {





    return (
        <div className=" w-full flex flex-col xl:px-10 xl:py-10">
            {
                displayedItems && displayedItems.length > 0 &&
                <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10  pt-10   lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {
                        displayedItems.map((post) => <SinglePost post={post} key={post._id} choosePost={choosePost} />)
                    }
                </div>
            }
        </div>
    )
}