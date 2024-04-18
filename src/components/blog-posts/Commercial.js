




export default function Commercial() {



    const handleEmailButtonClick = () => {
        const email = 'contact@effectivemedia.ro';
        const subject = 'Digital Marketing Inquiry';
        const body = 'Hello,';

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };




    return (
        <div className="  text-white w-full rounded-md overflow-hidden bg-[#d3488d] max-w-[430px] shadow-lg xl:max-w-7xl xl:flex xl:flex-row-reverse xl:max-h-[400px] xl:mt-20">

            <img className="w-full  xl:max-w-[400px]" src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1712574333/blogimage_a6h8zx.jpg"></img>


            <div className=" flex flex-col gap-3 px-10 py-10 font-bold  xl:my-auto xl:mx-auto">
                <p className="text-xl leading-5 w-full xl:text-3xl">Elevate Your Digital Presence With Effective Expertise.</p>
                <button
                    onClick={handleEmailButtonClick}
                    className="flex items-center  text-lg justify-center xl:text-2xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-2 h-6 w-6">
                        <path
                            d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path
                            d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    contact@effectivemedia.ro
                </button>
            </div>

        </div>
    )
}