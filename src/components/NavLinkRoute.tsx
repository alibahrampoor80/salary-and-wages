import {NavLink} from "react-router-dom";
import {ReactNode} from "react";

type NavLinkRouteType = {
    // title: string;
    to: string;
    className?: string
    children: ReactNode;
}

const NavLinkRoute = ({to, className, children}: NavLinkRouteType) => {
    const navLinkClass = "listItemSideBarActive";

    return <NavLink to={to}
                    className={({isActive}) => isActive ? `${navLinkClass} text-white ${className}` : `listItemSideBar`}>
        {children}
    </NavLink>
};

export default NavLinkRoute;