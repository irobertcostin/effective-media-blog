import { Fragment, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {

    NewspaperIcon,
    Cog8ToothIcon,
    PencilIcon,
    PaintBrushIcon,
    PresentationChartLineIcon,
    HandThumbUpIcon,
    MegaphoneIcon,


} from '@heroicons/react/24/outline'



import { Pagination, ConfigProvider } from "antd"








export default function UtilityBar({ searchOngoing, resetSearch, search, readPost, currentPage, length, itemsPerPage, handleChangePage, handleSearch, handleCategories, categories }) {


    const solutions = [
        { name: 'App Development', description: 'Choosing the Right App for Your Business', icon: Cog8ToothIcon },
        { name: 'Branding & Design', description: 'Expert Insights for Branding & Design', icon: PaintBrushIcon },
        { name: 'Content Creation', description: "Tailored Business Content", icon: PencilIcon },
        { name: 'Marketing', description: 'Outreach & Conversion Strategies', icon: MegaphoneIcon },
        { name: 'News', description: 'Industry Insights & Trends', icon: NewspaperIcon },
        { name: 'SEO', description: 'Visibility & Organic Growth', icon: PresentationChartLineIcon },
        { name: 'Social Media', description: 'Connections & Advocacy Strategies', icon: HandThumbUpIcon },
    ]


    // useEffect(() => {
    //     console.log(categories);
    // }, [categories]);

    return (
        <div className={`  xl:flex w-full justify-start relative h-24 items-center z-50  xl:h-20`}>


            <div className={`${readPost !== null ? "hidden " : ""}  w-full flex justify-center md:justify-center gap-3 max-w-[400px] `}>

                <Popover className="pt-1 pl-1 ">
                    <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-blue-700">
                        <span className='sm:text-[17px] sm:mt-0.5'>Filters</span>
                        <ChevronDownIcon className="h-5 w-5 sm:mt-1" aria-hidden="true" />
                    </Popover.Button>


                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                        className=" flex absolute left-0 top-0 justify-start items-center  md:max-w-full md:justify-center md:w-[410px]  "
                    >
                        <Popover.Panel className=" w-full max-w-[410px] mt-10 xl:mt-16 z-50  flex ">
                            <div className="w-full flex-auto overflow-hidden rounded-lg  bg-white text-sm leading-6 shadow-lg border border-fuchsia-400">
                                <div className="sm:p-4">
                                    {solutions.map((item) => (
                                        <div onClick={() => {
                                            handleCategories(item.name)
                                        }}
                                            key={item.name} className={`${categories.includes(item.name) ? "bg-sky-100" : ""} group md:my-1  relative cursor-pointer flex gap-x-6 rounded-lg px-2 py-1 sm:py-2   text-xs sm:text-[15px]`}>
                                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-indigo-800 group-hover:text-fuchsia-500" aria-hidden="true" />
                                            </div>
                                            <div className=' flex flex-col justify-center'>
                                                <p className="font-semibold text-indigo-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </p>
                                                <p className="mt-1 text-gray-500">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>

                <div className=" flex items-center justify-end ">

                    <div className="relative rounded-md shadow-sm max-w-[375px]">

                        <input
                            onChange={handleSearch}
                            type="text"
                            name="search-bar"
                            id="search-bar"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-fuchsia-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                            placeholder="Search"
                        />
                        <button onClick={resetSearch} className={`${searchOngoing == "" ? "hidden" : "block"}    absolute top-1 right-9 py-1.5 bg-rose-400 text-white text-xs px-1.5 rounded-md hover:bg-rose-300 ease-in-out duration-500`}>Reset</button>
                        <button onClick={search} className="absolute right-1 rounded-md top-1 bg-sky-100 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>

                    </div>

                </div>
            </div>

            <div className={`${readPost !== null ? "hidden " : ""}  flex justify-center py-3 `}>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#c026d3',
                            borderRadius: 2,
                            colorBgBase: "transparent",
                            colorText: "#2563eb",
                            colorBorder: "#2563eb",
                            colorTextPlaceholder: "gray",
                            colorBgContainer: "transparent"
                        },
                    }}
                >
                    <Pagination
                        showSizeChanger={false}
                        defaultCurrent={1}
                        current={currentPage}
                        total={length}
                        hideOnSinglePage
                        onChange={handleChangePage}
                        pageSize={itemsPerPage}
                        size="small"
                        className=''
                    />

                </ConfigProvider>
            </div>

        </div>
    )
}