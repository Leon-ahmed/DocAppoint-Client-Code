'use client'
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import Navlink from "@/components/Navlink"
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { useSession,authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation";
const Navber = () => {

  const { data: session, isPending } = useSession();
  const user = session?.user;
  const [click, setClick] = useState(false);
  const Closemenu = () => {
    setClick(false)
  }

  const router=useRouter();
const handleSignOut=async()=>{
await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/login");  
    },
  },
});

}

  return (

    <div>



      <div className="hidden   md:flex    justify-between items-center px-1 py-2 border border-b-2 border-gray-100">
        <div className="flex gap-1 items-center ">
          <Image src={logo} alt=''></Image>
          <p className="  text-2xl font-bold">Doc<span className="text-[#00685F]">Appoint</span> </p>
        </div>

        <div className=" space-x-2 font-medium">

          <Navlink href="/">Home</Navlink>
          <Navlink href="/appointment">All Appointments </Navlink>
          <Navlink href="/dashboard">Dashboard</Navlink>


        </div>

        <div>
          {!user &&
            <Link href='/register' className="text-[#00685F] text-[16px]">Sign In / Register</Link>}

          {
            user && <div className="flex gap-2 items-center">
               <Avatar>
                      <Avatar.Image alt="John Doe" src={user?.image} />
                      <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                    </Avatar>

                  <Button type="submit" variant="danger-soft" onClick={handleSignOut}>Sign Out</Button>
            </div>
          }

        </div>

      </div>





      {/* small device */}

      <div>
        <div className="flex  justify-between items-center px-1 py-2 border border-b-2 border-gray-100  md:hidden">

          <div className="flex gap-1 items-center ">
            <Image src={logo} alt=''></Image>
            <p className="  text-2xl font-bold">Doc<span className="text-[#00685F]">Appoint</span> </p>
          </div>







          <div onClick={() => setClick(prev => !prev)}>
            <HiMenuAlt1 size={22} />
          </div>
        </div>



        {
          click && (
            <div className=" flex flex-col  md:hidden justify-center bg-gray-50/50 py-2 border border-gray-50 items-center space-y-2 font-medium overflow-hidden transition-all duration-300 ease-in-out">

              <Navlink href="/" onClick={Closemenu}>Home</Navlink>
              <Navlink href="/appointment" onClick={Closemenu}>All Appointments </Navlink>
              <Navlink href="/dashboard" onClick={Closemenu}>Dashboard</Navlink>

              <div>
                {!user &&
                  <Link href='/register' className="text-[#00685F] text-[16px]">Sign In / Register</Link>
                }

                {
                  user && <div className="flex flex-col justify-center items-center gap-2">
                    <Avatar>
                      <Avatar.Image alt="John Doe" src={user?.image} />
                      <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                    </Avatar>
                     <Button type="submit" variant="danger-soft" onClick={handleSignOut}>Sign Out</Button>
                  </div>
                }

              </div>

            </div>
          )
        }





      </div>





    </div>




  );
};

export default Navber;