import { Component, useState } from 'react'
import styled from 'styled-components'
import './index.css';
export function DropDownFilter({selectedOption, setSelectedOption}) {
    
    const choiceFilterList = [
        {
            id: 1,
            name:"Popularité"
        },
        {
            id: 2,
            name:"Date"
        },
        {
            id: 3,
            name:"Titre"
        },
    ]
    const listOfOptions = choiceFilterList.filter(x => x.name !== selectedOption)
    
    function handleChange(e){
        setSelectedOption(e.target.value)
    }
    
    console.log(selectedOption)
    return (
        <div className="select-wrapper">
            <select className="select__trigger" value={selectedOption} onChange={handleChange} >
                
            <option style={{display:'none'}} className={"custom-options"} value={selectedOption}>{selectedOption}</option>
                {
                listOfOptions.map((choice, index) =>(
                    <option key={choice.id} className={"custom-options"} value={choice.name}>{choice.name}</option>
                ))
                }
            </select>
            <div className={"arrow"}></div>
        </div>
    )
  }