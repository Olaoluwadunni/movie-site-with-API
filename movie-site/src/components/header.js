import React from 'react'

function Header({value,searchFunction,onChangeFunction, ...props}) {
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            searchFunction()
        }}>
            <i class="fas fa-search"></i>
            <input type="search" onChange={onChangeFunction} value={value} placeholder="Search for movies"/>
            <button type='submit'>GO</button>
        </form>
    );
}

export default Header;
