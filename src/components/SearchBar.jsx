import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"


export const SearchBar = () => {
    const [loaded,setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    },[])

    return(
        <>
            <div  className={`bg-[url('/testing3.jpg')] bg-cover bg-center w-full min-h-screen py-20 mb-8 px-4 mx-auto container rounded-2xl flex flex-col justify-center items-center`}>
                <div className={`font-semibold text-white mb-6 ml-20 w-full justify-start transition-opacity duration-[3000ms] ease-in-out ${loaded ? "opacity-100":"opacity-0"}`}>
                    <p className="text-5xl mb-6">Hey you! Hungry?</p>
                    <p className="text-5xl mb-6"><span>EatsOn</span> delivers happiness to your home!</p>
                </div>
                <div className="w-full flex justify-start ml-20 ">
                    <input className="bg-white w-3/4 p-4 text-xl rounded-md outline-none" type="text"  placeholder="Search for your favorite dishes,restaurants,..."/>
                    <button className="bg-white border text-gray-400 w-40 p-4 ml-4 text-xl rounded-md  outline-none hover:text-orange-400 cursor-pointer">Search<FontAwesomeIcon className="ml-4 text-orange-500 opacity-75" icon={faSearch}/></button>
                </div>

            </div>
        </>

    )
}