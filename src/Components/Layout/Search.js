import React, { useState } from 'react';
import { BiSearch } from "react-icons/bi";

const Search = ({history}) => {
    // console.log(history)
    const [keyword,setKeyword]=useState('');
    
    const handleSearch=(e)=>{
       

        if(keyword.trim()){
            console.log(keyword)
            history.push(`/search/${keyword}`);
        }
        else{
            history.push('/');
        }
        
        // e.preventDefault();

    }
    return (
        <form onSubmit={handleSearch} action="">
            <div className=" py-4">
                <input onChange={(e)=>setKeyword(e.target.value)} className="input-box " type="text" name="" id="" value={keyword} placeholder="Search" />
                <button className=" search-btn  bg-red-600 "><BiSearch className=" ml-2 relative text-2xl" /></button>
            </div>
        </form>
    );
};

export default Search;