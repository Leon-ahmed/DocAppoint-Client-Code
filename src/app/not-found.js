import Image from "next/image";
import not from "../.././public/notfound.svg"
import { Button } from "@heroui/react";
import Link from "next/link";
import { DiVim } from "react-icons/di";
 

const notfound = () => {
    return (
      <div className=" min-h-screen bg-accent/10 ">

          <div className="flex flex-col justify-center items-center  space-y-5 p-5 w-full ">
            <Image src={not} alt=""></Image>

            <div className="mt-4 text-2xl font-medium">404 Page Not Found</div>
            <Link href='/'><Button className='bg-[#00685F]'>Back to Home</Button></Link>
        </div>
      </div>
    );
};

export default notfound;