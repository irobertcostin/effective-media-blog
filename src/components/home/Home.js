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
    const [noFetch, setNoFetch] = useState(false)

    const [searchOngoing, setSearchOngoing] = useState(false)

    const choosePost = (article) => {
        setReadPost(article)
    }




    const fetch = async (page) => {
        setSearchOngoing(false)
        setSearchString("")
        setNoFetch(false)
        setLoading(true)
        let data = await service.getAllPosts(page);
        if (data) {
            setDisplayedItems(data.posts)
            setLength(data.count)
        }
        setLoading(false)
    }


    const handleCategories = (item) => {
        setSearchOngoing(false)
        setSearchString("")
        setNoFetch(false)
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
        setLength(data.count)
        setDisplayedItems(data.posts)
        setLoading(false)
    }



    const handleChangePage = (page) => {
        setCurrentPage(page);
    };




    const handleSearch = (e) => {
        e.preventDefault()
        setSearchString(e.target.value.toLowerCase().trim());
    }


    const search = async () => {
        setSearchOngoing(true)
        setLoading(true)
        setNoFetch(true)
        setCategories([])
        setLength(0)
        setResetPage(true)
    }

    const resetSearch = () => {
        setNoFetch(false)
        document.getElementById("search-bar").value = ""
        setSearchString("")

        setResetPage(true);
        setSearchOngoing(false)
        if (currentPage === 1) {
            fetch()
        } else {
            setCurrentPage(1)
        }

    }

    const searchFunction = async (string, page) => {

        const data = await service.search(string, page);
        setDisplayedItems(data.posts)
        setLength(data.count)
        setLoading(false)
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
            if (!noFetch) {
                fetch(currentPage);
            } else if (noFetch && searchString !== "") {
                searchFunction(searchString, currentPage)
            }
        }

        else if (categories.length > 0) {
            filterByCategory();
        }
    }, [categories, currentPage]);



    useEffect(() => {
        if (readPost) {
            changePage()
        }
    }, [readPost])



    return (
        <div className="w-full relative py-2 px-2">


            <UtilityBar searchString={searchString} searchOngoing={searchOngoing} resetSearch={resetSearch} search={search} readPost={readPost} currentPage={currentPage} categories={categories} length={length} itemsPerPage={itemsPerPage} handleChangePage={handleChangePage} handleSearch={handleSearch} handleCategories={handleCategories} />


            {
                loading ?
                    <div className="w-full   h-[70vh] flex justify-center py-40">
                        <ClipLoader />
                    </div>
                    :

                    <div className="w-full">
                        {(() => {
                            switch (page) {



                                case POSTS:
                                    return <PostsSection fetch={fetch} displayedItems={displayedItems} choosePost={choosePost} setCategories={setCategories} />;

                                case SINGLEPOST:
                                    return <ReadPost readPost={readPost} changePage={changePage} />

                                default:
                                    return <PostsSection fetch={fetch} displayedItems={displayedItems} choosePost={choosePost} setCategories={setCategories} />;

                            }
                        })()}

                    </div>


            }
        </div>
    )
}