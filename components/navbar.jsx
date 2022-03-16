import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return ( <ul className="flex flex-row bg-slate-700 text-white h-9 gap-5 items-center pl-6 text-sm ">
        <li className="hover:ring-1 p-1 cursor-pointer rounded-sm hover:ring-white">
            <FontAwesomeIcon icon={faBars}/>
            {' '}
            All
        </li>
        <li className="hover:ring-1 p-1 cursor-pointer rounded-sm hover:ring-white">Today's Deals</li>
        <li className="hover:ring-1 p-1 cursor-pointer rounded-sm hover:ring-white">Custpmer Service</li>
        <li className="hover:ring-1 p-1 cursor-pointer rounded-sm hover:ring-white">Registry</li>
        <li className="hover:ring-1 p-1 cursor-pointer rounded-sm hover:ring-white">Gift Card's</li>
        <li className="hover:ring-1 p-1 cursor-pointer rounded-sm hover:ring-white">Sell</li>
    </ul> );
}
 
export default Navbar;