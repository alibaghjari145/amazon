const SignRec = () => {
    return (
        <div className=" w-full bg-white h-60 flex items-center ">
            <div className=" ring-1 ring-gray-200 rounded-sm h-36 w-full m-1 flex items-center justify-center flex-col gap-1 ">
                <p>
                    See personalized recommendations
                </p>
                <button className=" bg-amber-400 w-60 rounded-sm ring-1 bold text-sm ring-amber-700 h-7 ">
                    Sign in
                </button>
                <p className="text-xs">New customer?
                    <span className="text-blue-500">Start here</span>
                </p>
            </div>
        </div>);
}

export default SignRec;