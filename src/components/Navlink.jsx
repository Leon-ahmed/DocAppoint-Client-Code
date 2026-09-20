'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

 

const Navlink = ({href,children}) => {
    let path = usePathname();
    let isActive = path===href;
    return (
       <Link href={href}
       className={`${isActive ? "bg-[#008378]  p-2 text-[#F4FFFC] rounded-xl":""}`}
       
       >{children} </Link>
    );
};

export default Navlink;