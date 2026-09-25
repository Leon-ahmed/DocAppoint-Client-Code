import doctor from "../../../../public/doctor.json";
import Image from "next/image";
import Link from "next/link";
import {
    IoStar,
    IoCalendarOutline,
    IoTimeOutline,
    IoLocationOutline,
    IoBriefcaseOutline,
    IoCashOutline,
} from "react-icons/io5";

const page = async ({ params }) => {
    const { id } = await params;

    const data = doctor.find((item) => item.id == id);


    return (
        <div className="min-h-screen bg-[#F4F7F7] py-10">
            <div className="max-w-6xl mx-auto px-4">
 
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="grid md:grid-cols-3">

                    
                        <div className="p-5">
                            <Image
                                src={data.image}
                                alt={data.name}
                                width={500}
                                height={500}
                                className="w-full h-80 md:h-full min-h-80 object-cover rounded-xl"
                            />
                        </div>

               
                        <div className="md:col-span-2 p-6 md:p-8">

                  
                            <span className="inline-block px-4 py-2 rounded-full bg-[#E6F5F3] text-[#00685F] text-sm font-medium">
                                {data.specialization}
                            </span>

               
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
                                {data.name}
                            </h1>

                     
                            <p className="text-gray-500 leading-7 mt-4 max-w-2xl">
                                {data.description}
                            </p>

                     
                            <div className="flex items-center gap-2 mt-5">
                               

                                <span className="text-gray-600 font-medium flex justify-center items-center gap-0.5">
                                      <IoStar
                                            
                                            className="text-yellow-400 text-xl"
                                        />{data.rating }
                                </span>
                            </div>

                      
                            <div className="grid sm:grid-cols-3 gap-4 mt-7">

                             
                                <div className="border border-gray-100 rounded-xl p-4">
                                    <div className="flex items-center gap-2 text-[#00685F]">
                                        <IoBriefcaseOutline className="text-xl" />

                                        <span className="text-sm">
                                            Experience
                                        </span>
                                    </div>

                                    <p className="font-semibold text-gray-700 mt-2">
                                        {data.experience }
                                    </p>
                                </div>

                      
                                <div className="border border-gray-100 rounded-xl p-4">
                                    <div className="flex items-center gap-2 text-[#00685F]">
                                        <IoCashOutline className="text-xl" />

                                        <span className="text-sm">
                                            Consultation Fee
                                        </span>
                                    </div>

                                    <p className="font-semibold text-gray-700 mt-2">
                                        ৳{data.fee }
                                    </p>
                                </div>

                       
                              

                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
 
                    <div className="bg-white rounded-2xl shadow-sm p-6">

                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-lg bg-[#E6F5F3] flex items-center justify-center">
                                <IoCalendarOutline className="text-xl text-[#00685F]" />
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Available Days
                                </h2>

                                <p className="text-sm text-gray-400">
                                    Doctor&apos; s weekly schedule
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {data.days?.map((day) => (
                                <span
                                    key={day}
                                    className="px-4 py-2 rounded-lg bg-[#E6F5F3] text-[#00685F] font-medium"
                                >
                                    {day}
                                </span>
                            ))}
                        </div>
                    </div>

                   
                    <div className="bg-white rounded-2xl shadow-sm p-6">

                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-lg bg-[#E6F5F3] flex items-center justify-center">
                                <IoTimeOutline className="text-xl text-[#00685F]" />
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Available Time
                                </h2>

                                <p className="text-sm text-gray-400">
                                    Consultation hours
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {data.availability?.map((time) => (
                                <div
                                    key={time}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50"
                                >
                                    <IoTimeOutline className="text-[#00685F]" />

                                    <span className="text-gray-600">
                                        {time}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

              
                <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

                    <div className="flex items-start gap-4">

                        <div className="w-12 h-12 rounded-xl bg-[#E6F5F3] flex items-center justify-center shrink-0">
                            <IoLocationOutline className="text-2xl text-[#00685F]" />
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">
                                Chamber Information
                            </h2>

                            <p className="text-gray-600 mt-2">
                                {data.hospital   }
                            </p>

                            <p className="text-gray-400 text-sm mt-1">
                                {data.location  }
                            </p>
                        </div>

                    </div>

                </div>

           
                <div className="bg-linear-to-r from-[#058075] to-[#00685F] rounded-2xl p-6 md:p-8 mt-6 text-white">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                        <div>
                            <h2 className="text-2xl font-bold">
                                Book an Appointment
                            </h2>

                            <p className="text-white/80 mt-2">
                                Choose a suitable date and time for your
                                consultation.
                            </p>
                        </div>

                        <Link
                            href={`/appointment/${data.id}`}
                            className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-white text-[#00685F] font-semibold transition-transform active:scale-95 hover:bg-gray-100"
                        >
                            Book Appointment
                        </Link>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default page;