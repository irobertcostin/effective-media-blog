
import SinglePost from "./SinglePost";
import { Empty } from 'antd';

export default function PostsSection({ displayedItems, choosePost, fetch, setCategories }) {





    return (
        <div className=" w-full flex flex-col xl:px-10 xl:py-10 min-h-[60vh]">
            {
                displayedItems && displayedItems.length > 0 ?
                    <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10  pt-10   lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {
                            displayedItems.map((post) => <SinglePost post={post} key={post._id} choosePost={choosePost} />)
                        }
                    </div>
                    :
                    <div className=" w-full flex justify-center">
                        <Empty
                            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                            imageStyle={{
                                height: 180,
                            }}
                            description={
                                <div className="flex flex-col gap-10 w-full items-center">
                                    <span className="text-xl xl:text-2xl fredoka-font text-indigo-800">
                                        No posts available
                                    </span>

                                    <button onClick={() => { setCategories([]); }} className="bg-blue-500 text-white rounded-full w-40 py-1 fredoka-font hover:bg-blue-400">Show all posts</button>
                                </div>
                            }
                        >

                        </Empty>
                    </div>
            }
        </div>
    )
}