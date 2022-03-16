import Image from "next/image";
import HeaderInput from "./header-input";
import logo from './../images/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLocationPin } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    return (
        <div className="w-full bg-slate-900 h-16  m-0 flex flex-row  p-4 justify-between  items-center">
         <div className="hover:ring-1 p-1 cursor-pointer rounded-sm hover:ring-white ">
         <Image  width={90} height={30} src={logo} alt="logo" />
         </div>
         <div className="hover:ring-1 p-1 cursor-pointer rounded-sm hover:ring-white flex flex-row items-end">
             <FontAwesomeIcon className="text-gray-300 m-1" icon={faLocationPin}/>
            <h4 className="text-white leading-4">Deliver to <br /><strong>Iran</strong></h4>
         </div>
            <HeaderInput />
            <h4 className="hover:ring-1 p-1 cursor-pointer rounded-sm hover:ring-white text-white leading-4">Returns <br /><strong>& order</strong></h4>
            <h4 className="hover:ring-1 p-1 cursor-pointer rounded-sm hover:ring-white text-white leading-4">Hello, sign in  <br /><strong>account & lists</strong></h4>
            <h4 className="hover:ring-1 p-1 cursor-pointer rounded-sm hover:ring-white text-white ">Card: <span className="text-orange-500">0</span></h4>
        </div>
    )
}
export default Header;