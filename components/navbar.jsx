import { useState } from "react";

const Navbar = () => {

    const [open , setOpen] = useState(false)

    return (  
        <>
            <nav className="flex font-Overpass justify-between max-md:px-16 md:px-32 py-20">
            <div className="gap-12 lg:flex">
            <img src="/logo.svg" />
                <div className="max-lg:hidden flex gap-12">             
                    <ul className="flex gap-6 py-2 text-white">
                    <li className="hover:underline">Product</li>
                    <li className="hover:underline">Company</li>
                    <li className="hover:underline">Connect</li>
                    </ul>
                </div>
            </div>
                
                <div className={!open ? "max-lg:hidden" : null}>
            <div className="lg:hidden shadow-xl opacity-100 absolute left-80 top-32 bg-white  w-2/5 text-center ">
                    <ul className="gap-6 py-5 text-black">
                        <li className="py-3 hover:underline">Product</li>
                        <li className="py-3 hover:underline">Company</li>
                        <li className="py-3 hover:underline">Connect</li>
                    </ul>
                    <button className="px-6 py-1">Login</button>
                    <button className="px-7 mb-8 py-2 bg-white text-red-600 signUp-btn transition ease-in duration-300 rounded-3xl font-medium hover:text-white">Sign Up</button>
                </div>
            </div>
                
                <div className="max-lg:hidden text-white">
                    <button className="px-6 py-1">Login</button>
                    <button className="px-7 py-2 bg-white text-red-600 signUp-btn transition ease-in duration-300 rounded-3xl font-medium hover:text-white">Sign Up</button>
                </div>
                <img className="h-6 lg:hidden" onClick={() => setOpen(!open)} src={open ? "/icon-close.svg" : "/icon-hamburger.svg"} />
            </nav>
        </>
    );
}

export default Navbar;