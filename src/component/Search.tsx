import React from 'react'
import styled from "../component/component.module.css"
import { IoSearch } from "react-icons/io5";
import { useState , useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchIcon = IoSearch as React.ComponentType<{ size?: number }>;

type SearchProps = {
  search: string
  onSearch: (value: string) => void
}

function Search () {

  const [searchParams, setSearchParams] = useSearchParams()
  const [inputValue, setInputValue] = useState(searchParams.get('name') || "")

  useEffect(() => {
    setInputValue(searchParams.get('name') || "")
  }, [searchParams])

  const handleSearch = () => {
    
    if (inputValue.trim() === "") {
      searchParams.delete('name')
    } else {
      searchParams.set('name', inputValue.trim())
    }
    
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }
  
  return (
    <div className={styled.search}>
      <input type="text" value={inputValue} placeholder='Search name ...' onChange={(e)=>{setInputValue(e.target.value)}}/>
      <button onClick={handleSearch}>
        <SearchIcon size={20} />
      </button>
    </div>
  )
}

export default Search