import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
    return (
        <div className=" bg-white w-full shadow-lg m-2 p-6 flex flex-col gap-4 h-auto ">
            <h3 className=" text-2xl font-bold ">{props.title}</h3>
            <img className=" h-80 object-cover object-center  " src={props.src} alt={props.alt} />
           
                <p className=" text-blue-500 hover:text-red-500 hover:underline cursor-pointer ">see more</p>
            
        </div>);
}

export default Card;