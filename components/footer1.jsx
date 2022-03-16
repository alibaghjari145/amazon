import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from './../images/logo.png'
import Image from "next/image";

const Footer1 = () => {
    return (
        <>
            <div className="h-72 bg-gray-800 flex flex-row justify-around pt-14 ">
                <ul >
                    <li className=" text-white bold  ">Make Money with Us</li>
                    {footerArr.map(item => (
                        <li className="text-gray-200 cursor-pointer hover:underline" key={item.id}>{item.text}</li>
                    ))
                    }
                </ul >
                <ul >
                    <li className=" text-white bold  ">Make Money with Us</li>
                    {footerArr.map(item => (
                        <li className="text-gray-200 cursor-pointer hover:underline" key={item.id}>{item.text}</li>
                    ))
                    }
                </ul >
                <ul >
                    <li className=" text-white bold  ">Make Money with Us</li>
                    {footerArr.map(item => (
                        <li className="text-gray-200 cursor-pointer hover:underline" key={item.id}>{item.text}</li>
                    ))
                    }
                </ul >
                <ul >
                    <li className=" text-white bold  ">Make Money with Us</li>
                    {footerArr.map(item => (
                        <li className="text-gray-200 cursor-pointer hover:underline" key={item.id}>{item.text}</li>
                    ))
                    }
                </ul >
            </div>
           <div className="ring-1 ring-gray-500 h-0"></div>
            <div className="bg-gray-800  flex flex-row justify-center gap-6 h-32 py-8">
                <div className="h-12">
                    <Image width={90} height={30} className='h-20' src={logo} alt="logo" />
                    
                </div>
                <div className="text-white flex flex-row gap-4 ">
                    <div className="rounded-sm ring-1 ring-slate-400 h-10 w-32 gap-2 flex justify-center items-center"> <FontAwesomeIcon icon={faGlobe} /> English</div>
                    <div className="rounded-sm ring-1 ring-slate-400 h-10 w-32 gap-2 flex justify-center items-center">$ USD-US.Dollar</div>
                    <div className="rounded-sm ring-1 ring-slate-400 h-10 w-32 gap-2 flex justify-center items-center">United States</div>
                </div>
            </div>
        </>
    );
}

export default Footer1;

export const footerArr = [
    {
        id: 1,
        text: 'Sell on Amazon Business'
    }, {
        id: 2,
        text: 'Sell apps on Amazon'
    }, {
        id: 3,
        text: 'Become an Affiliate'
    }, {
        id: 4,
        text: 'Advertise Your Products'
    }, {
        id: 5,
        text: 'Self-Publish with Us'
    }, {
        id: 6,
        text: 'Host an Amazon Hub'
    }, {
        id: 7,
        text: 'See More Make Money'
    },
]