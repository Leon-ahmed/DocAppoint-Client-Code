import React from 'react';
import Navlink from './Navlink';

const Sidebar = () => {
    return (
        <div className="  md:flex flex-col gap-2 ">
             <h2 className="text-2xl font-bold flex justify-center mb-4  md:hidden">DashBoard</h2>
          <div className="flex justify-center items-center gap-2 bg-gray-100 rounded-xl py-2 font-medium md:flex-col md:py-3 md:mt-3">
              <Navlink href={'/dashboard'}>My appointments</Navlink>
             <Navlink href={'/dashboard/profile'}>My profile</Navlink>
          </div>
        </div>
    );
};

export default Sidebar;