import PostsSection from "../blog-posts/PostsSection"
import UtilityBar from "./UtilityBar"
import Data from "../../services/Api"
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ReadPost from "../blog-posts/ReadPost";




export default function Home() {


    const POSTS = 'posts';
    const SINGLEPOST = "single-post"


    const service = new Data();

    const [loading, setLoading] = useState();
    const [length, setLength] = useState()
    const [currentPage, setCurrentPage] = useState(1);
    const [displayedItems, setDisplayedItems] = useState([]);
    const [searchString, setSearchString] = useState("");
    const [categories, setCategories] = useState([]);
    const [resetPage, setResetPage] = useState(false)
    const [page, setPage] = useState(POSTS)

    const itemsPerPage = 15

    const [readPost, setReadPost] = useState(null)
    const choosePost = (article) => {
        setReadPost(article)
    }




    const fetch = async (page) => {
        setLoading(true)
        let data = await service.getAllPosts(page);
        if (data.length > 0) {
            console.log(data);
            setDisplayedItems(data)
            let count = await service.getCount()
            console.log(count);
            setLength(count)
        }
        setLoading(false)
    }


    const handleCategories = (item) => {


        if (!categories.includes(item)) {
            const newArr = [...categories, item];
            if (currentPage !== 1) {
                setResetPage(true);
            }
            setCategories(newArr);
            document.getElementById("search-bar").value = ""
            setSearchString("")
        } else {
            const newArr = categories.filter((el) => el !== item);
            if (currentPage !== 1) {
                setResetPage(true);
            }
            setCategories(newArr);
            document.getElementById("search-bar").value = ""
            setSearchString("")
        }
    };



    const filterByCategory = async () => {
        setLoading(true)
        let searchQuery = { categories: categories }
        const data = await service.filterCategories(searchQuery, currentPage)
        console.log(data);
        setLength(data.count)
        setDisplayedItems(data.posts)
        setLoading(false)
    }



    const handleChangePage = (page) => {
        setCurrentPage(page);
    };




    const handleSearch = (e) => {
        e.preventDefault()
        setSearchString(e.target.value.toLowerCase());
    }


    const changePage = () => {
        if (page === POSTS) {
            setPage(SINGLEPOST)
        } else {
            setPage(POSTS)
            setReadPost(null)
        }
    }




    useEffect(() => {
        if (resetPage) {
            setCurrentPage(1);
            setResetPage(false);
        }
    }, [categories]);

    useEffect(() => {
        if (categories.length === 0) {
            fetch(currentPage);
        } else {
            console.log(resetPage);
            filterByCategory();
        }
    }, [categories, currentPage]);


    useEffect(() => {
        if (displayedItems && displayedItems.length > 0) {
            console.log(`Current page items: ${displayedItems.length}`);
        }
    }, [displayedItems])


    useEffect(() => {
        // if (searchString !== "") {

        //     filterByString(posts, searchString)
        // }
        // else if (searchString == "") {
        //     changeItemsPerPage(posts)
        //     setLength(posts.length)
        // }
        console.log(searchString);

    }, [searchString])




    useEffect(() => {
        if (readPost) {
            changePage()
        }
    }, [readPost])



    return (
        <div className="w-full relative py-2 px-2">


            <UtilityBar readPost={readPost} currentPage={currentPage} categories={categories} length={length} itemsPerPage={itemsPerPage} handleChangePage={handleChangePage} handleSearch={handleSearch} handleCategories={handleCategories} />


            {
                loading ?
                    <div className="w-full   h-[40vh] flex justify-center items-center">
                        <ClipLoader />
                    </div>
                    :

                    <div className="w-full">
                        {(() => {
                            switch (page) {



                                case POSTS:
                                    return <PostsSection displayedItems={displayedItems} choosePost={choosePost} />;

                                case SINGLEPOST:
                                    return <ReadPost readPost={readPost} changePage={changePage} />

                                default:
                                    return <PostsSection displayedItems={displayedItems} choosePost={choosePost} />;

                            }
                        })()}

                    </div>


            }
        </div>
    )
}