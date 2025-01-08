import {ReactNode} from 'react';
import SideBar from "../components/SideBar.tsx";

const HomeLayout = ({children}: { children: ReactNode }) => {
    return (
        <div className={`grid min-h-screen  grid-cols-[15rem_1fr]`}>
            <div className=" relative">
                <SideBar/>
            </div>
            <div className="p-3 overflow-y-scroll h-screen max-h-screen min-h-screen overflow-x-hidden">
                {children}
            </div>
        </div>
    );
};

export default HomeLayout;