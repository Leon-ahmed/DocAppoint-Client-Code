import Link from "next/link";


const Footer = () => {
    return (
        < div className="bg-[#073B3A] text-white  ">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                
                
                    <div> <h2 className="text-2xl font-bold"> Doc<span className="text-[#00685F]">Appoint</span>
                    </h2>
                        <p className="mt-3 text-sm text-white/80 leading-6"> Book appointments with trusted doctors and manage your healthcare easily. </p>
                    </div>
                
                
                    <div>
                        <h3 className="font-semibold text-lg mb-3"> Quick Links </h3>
                        <div className="flex flex-col gap-2 text-sm text-white/80">
                            <Link href="/" className="hover:text-white"> Home </Link>
                            <Link href="/appointment" className="hover:text-white"> All Appointments </Link>
                            <Link href="/dashboard" className="hover:text-white"> Dashboard </Link>
                        </div>
                    </div>
              
              

                    <div>
                        <h3 className="font-semibold text-lg mb-3"> Support </h3>
                        <div className="flex flex-col gap-2 text-sm text-white/80">
                            <p  className="hover:text-white"> Contact Us </p>
                            <p  className="hover:text-white"> Privacy Policy </p>
                            <p className="hover:text-white"> Terms & Conditions </p>
                        </div> </div>
               


                    <div>
                        <h3 className="font-semibold text-lg mb-3"> Contact </h3>
                        <p className="text-sm text-white/80"> Email: support@docappoint.com </p>
                        <p className="text-sm text-white/80 mt-2"> Phone: +880 1234-567890 </p>
                        <p className="text-sm text-white/80 mt-2"> Dhaka, Bangladesh </p> </div>
                </div>
          
                <div className="border-t border-white/20 mt-8 pt-5 text-center text-sm text-white/70"> &copy; 2026 DocAppoint. All rights reserved. </div>
            </div>


        </div>
    );
};

export default Footer;