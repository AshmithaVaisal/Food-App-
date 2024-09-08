import { useState } from "react"


export const TopBar = () => {
    
    const [activeLink,setActiveLink] = useState("home")

   
    return(
        <>
        <div className='bg-white flex justify-around items-center p-4 mx-auto container'>
            <div>
                <span className="text-3xl font-semibold text-orange-400">EatsOn</span>
            </div>
            <div>
                <ul className="md:flex space-x-20 text-xl">
                    {['Home','Offers','Help','Cart','Sign In'].map((link) => (
                        <li key={link}className={`cursor-pointer ${activeLink === link ? 'text-orange-400' : 'text-black'} hover:text-orange-400`}
                      onClick={()=>setActiveLink(link)}>{link}</li>
                    ))}
                    {/* <li className="hover:text-orange-400 cursor-pointer"><span>About</span></li>
                    <li className="hover:text-orange-400 cursor-pointer"><span>Offers</span></li>
                    <li className="hover:text-orange-400 cursor-pointer"><span>Help</span></li>
                    <li className="hover:text-orange-400 cursor-pointer"><span>Cart</span></li>
                    <li className="hover:text-orange-400 cursor-pointer"><span>Sign In</span></li> */}
                    
                </ul>             
            </div>
         </div>
        </>
    )   
}


