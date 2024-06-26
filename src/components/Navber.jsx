"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navber = () => {
    let activePath=usePathname()
    const router=useRouter()
    const navlinks=[
        {
            title:"Home",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Contact",
            path:"/contact"
        },
        {
            title:"Services",
            path:"/services"
        },
      
    ]
    const loginHandler=()=>{
        router.push("/about")
    }
    return (
        <nav className='flex justify-between px-2 py-1'>
            <h2 className='text-3xl'>Nex.js</h2>
            <ul className='flex gap-4'>
               {navlinks?.map(navlink=><Link key={navlink.path} href={navlink.path} className={`${navlink.path==activePath && "bg-green-400"}`}>{navlink.title}</Link>)}
               <button onClick={loginHandler} className='bg-gray-900 px-2'>Login</button>
            </ul>
        </nav>
    );
};

export default Navber;