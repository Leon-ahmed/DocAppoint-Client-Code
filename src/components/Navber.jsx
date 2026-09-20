 'use client'
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { Button } from "@heroui/react";
import Navlink from "@/components/Navlink"
  import { HiMenuAlt1 } from "react-icons/hi";
  import { useState } from "react";

const Navber = () => {

   const [click,setClick]= useState(false);
   const Closemenu=()=>{
      setClick(false)
   }



    return (
    
 <div>



     <div className="hidden   md:flex    justify-between items-center px-1 py-2 border border-b-2 border-gray-100">
            <div className="flex gap-1 items-center ">
              <Image src={logo}  alt=''></Image>
             <p className="  text-2xl font-bold">Doc<span className="text-[#00685F]">Appoint</span> </p>
         </div>

         <div className=" space-x-2 font-medium">

          <Navlink href="/">Home</Navlink>
          <Navlink href="/appointment">All Appointments </Navlink>
          <Navlink href="/dashboard">Dashboard</Navlink>
     

         </div> 

         <div>
            <Link href='/register' className="text-[#00685F] text-[16px]">Sign In / Register</Link>
             
         </div>
      
   </div>





{/* small device */}
  
<div>
    <div className="flex  justify-between items-center px-1 py-2 border border-b-2 border-gray-100  md:hidden">

            <div className="flex gap-1 items-center ">
              <Image src={logo}  alt=''></Image>
             <p className="  text-2xl font-bold">Doc<span className="text-[#00685F]">Appoint</span> </p>
         </div>


  




    <div  onClick={()=>setClick(prev => !prev)}>
      <HiMenuAlt1 size={22}/>
    </div>
</div>



             {
      click && (
            <div className=" flex flex-col  md:hidden justify-center bg-gray-50/50 py-2 border border-gray-50 items-center space-y-2 font-medium overflow-hidden transition-all duration-300 ease-in-out">

          <Navlink href="/" onClick={ Closemenu}>Home</Navlink>
          <Navlink href="/appointment" onClick={ Closemenu}>All Appointments </Navlink>
          <Navlink href="/dashboard" onClick={ Closemenu}>Dashboard</Navlink>
        
            <div>
            <Link href='/register' className="text-[#00685F] text-[16px]">Sign In / Register</Link>
             
         </div>

         </div> 
      )
    }
 




   </div>

   



 </div>

      
      
 
    );
};

export default Navber;