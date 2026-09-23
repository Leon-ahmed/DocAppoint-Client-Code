import Sidebar from "@/components/Sidebar";

 

const DashBoardlayout = ({children}) => {
    return (
        <div className="md:flex md:min-h-screen">

            <aside className=" shadow-sm border-t rounded bg-white md:w-50 border-r-2 border-gray-200 p-2">
                <Sidebar></Sidebar>
            </aside>

            <main>
                {children}
            </main>
            
        </div>
    );
};

export default DashBoardlayout;