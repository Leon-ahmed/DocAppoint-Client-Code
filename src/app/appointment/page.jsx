

import Image from "next/image";
import doctors from "../../../public/doctor.json"
import { IoIosStar } from "react-icons/io";

const AllDoctors = () => {




    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {doctors.map((doctor) => (
                <div key={doctor.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200" >
                    <div className=" flex justify-center items-center   ">
                        <Image
                            src={doctor.image}
                            alt={doctor.name}
                            width={400}
                            height={300}
                            className="rounded-md mt-3"
                        />
                    </div>
                    <div className="p-5"> <div className="flex justify-between items-start">
                        <div> <h2 className="text-xl font-bold text-gray-800"> {doctor.name} </h2>
                            <p className="text-[#058075] font-medium"> {doctor.specialty} </p>
                        </div>
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-lg text-sm flex items-center gap-0.5"> <IoIosStar /> {doctor.rating} </span> </div>
                        <p className="text-gray-500 mt-3"> {doctor.hospital} </p> <p className="text-gray-500 text-sm mt-1">  {doctor.location} </p>
                        <div className="flex justify-between items-center mt-4"> <span className="font-semibold text-gray-800"> &#2547;{doctor.fee} </span> <span className="text-sm text-gray-500"> {doctor.experience} experience </span> </div>
                       <div className="  flex justify-center    mt-5  "> <button className="  px-8 py-2  bg-[#00685F]   text-white    rounded-lg hover:bg-[#00685F]/90  transition active:scale-95 " > View Details </button></div>

                    </div>
                </div>
            ))}

        </div>
    );
};

export default AllDoctors;