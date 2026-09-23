"use client";

import { useSession } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

 

const UserProfile = () => {
      const { data: session, isPending } = useSession();
  const user = session?.user;
  return (
    <div className="   flex justify-center items-center  rounded-xl border bg-linear-to-br from-[#c9c9c9] to-[#E7F6F3] p-6 shadow-sm m-5">
      <div className="flex flex-col items-center text-center">
        
        <Avatar className="h-24 w-24">
          <Avatar.Image
            alt={user?.name || "User"}
            src={user?.image}
          />
          <Avatar.Fallback>
            {user?.name?.[0] || "U"}
          </Avatar.Fallback>
        </Avatar>

        <h2 className="mt-4 text-xl font-semibold">
          {user?.name || "User"}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {user?.email || "No email available"}
        </p>

        <Button className="mt-5 bg-[#00685F] text-white">
          Edit Profile
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;