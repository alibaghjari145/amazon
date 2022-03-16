import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState,useEffect } from "react";

function HeaderInput() {

const [category, setCategory] = useState([])
const [optionWidth,setOptionWidth]= useState(3)

useEffect(() => {
   try {
    fetch('https://api.rainforestapi.com/categories?api_key=379E9DCB46A94634BC138F55DDA591B7&domain=amazon.com&type=standard')
    .then((res) => res.json())
    .then((data) => {
      setCategory(data.categories)
      console.log(data.categories)
    })
   } catch (error) {
       throw error
   }
     
  }, [])

  const lengthCalculator=()=>{
      const str = document.getElementById('category').value.trim()
    setOptionWidth(str.length)
  }

    return (
    <div className="w-1/2 flex flex-row h-10 ">
        <select onClick={lengthCalculator}  style={{width:`${(optionWidth*10)+9}px`}} className="bg-gray-200 focus:outline-orange-500 text-sm  rounded-l-md w-fit " name="category" id="category">
            <option className="w-fit " value="All">All</option>
            {category.map(cat=>(
                <option  key={cat.id} className="w-fit " value={cat.name}>{cat.name}</option>

            ))}
    

        </select>
        <input type="text" className="focus:outline-orange-500 border-none px-4 w-full"/>
        <div className="w-14 items-center cursor-pointer justify-center flex rounded-r-md bg-orange-400 hover:bg-orange-500 ">
            <FontAwesomeIcon className="text-gray-800" icon={faSearch} />
        </div>
    </div>
    );
}

export default HeaderInput;