import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component, useState } from 'react'
import styled from 'styled-components'
import './index.css';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
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
    const [show, setShow] = useState(false)
    const listOfOptions = choiceFilterList.filter(x => x.name !== selectedOption)
    
    function handleChange(name){
        setSelectedOption(name)
    }

    const coloredText = {
        color:'white',
        fontSize: "18px",
        borderColor: "white",
        
    }


    // Logical code behind dropdown
    
    console.log(selectedOption)
    return (
        
        <div className="select-wrapper" role="listbox" aria-labelledby="Drop down filter" >
            <ul>
            <li className="first-li">
                {selectedOption}
            </li>
            {
                show ?
                listOfOptions.map((choice, index) =>(
                    
                    <li key={choice.id} className={"not-first-li"} value={choice.name} onClick={() =>handleChange(choice.name)}>{choice.name}</li>
                ))
                :
                null
            }
            {
            /*
            <select style={{color:'white'}} className="select__trigger" value={selectedOption} onChange={handleChange} >
                
                <option style={{display:'none'}} className={"custom-options"} value={selectedOption}>{selectedOption}</option>
                {
                listOfOptions.map((choice, index) =>(
                    <option style={{...coloredText}} key={choice.id} className={"custom-options"} value={choice.name}>{choice.name}</option>
                ))
                }
            </select>
            */
            }
            </ul>
            {
                show ?
                <FontAwesomeIcon size={'lg'} icon={faAngleDown} className="arrow" onClick ={() => setShow(!show)}></FontAwesomeIcon>
                :
                <FontAwesomeIcon size={'lg'} icon={faAngleUp} className="arrow" onClick ={() => setShow(!show)}></FontAwesomeIcon>
            }
            
        </div>
        
        
    )
  }