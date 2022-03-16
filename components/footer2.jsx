const Footer2 = () => {
    return (
        <>
            <div className=" bg-gray-900 h-auto flex flex-wrap justify-center gap-x-14 gap-y-4 px-44 pt-20">
                {arr.map(item => (
                    <div className="text-xs w-20 hover:underline  text-white" key={item}>
                        <h6 className="text-white">AmazonGlobal</h6>
                        <p className="text-3xs text-gray-400">Ship Orders
                            Internationally</p>
                    </div>
                ))}
            </div>
            <div className="bg-gray-900 h-32 flex justify-center items-center ">
                <ul className="text-gray-400 text-sm flex flex-row gap-4">
                    <li className="hover:underline cursor-pointer">
                    Conditions of Use
                    </li>
                    <li className="hover:underline cursor-pointer">Privacy </li>
                    <li className="hover:underline cursor-pointer">NoticeInterest-Based Ads</li>
                    <li className="hover:underline cursor-pointer">1996-2022, Amazon.com, Inc. or its affiliates</li>
                </ul></div>
        </>);
}

export default Footer2;

export const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33
]