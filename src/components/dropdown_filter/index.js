import { Component } from 'react'
import styled from 'styled-components'
import './index.css';
export function DropDownFilter() {
    
    

    return (
        <div className="select-wrapper">
            <div className="select">
                <div className="select__trigger"><span>Popularité</span>
                    <div className="arrow"></div>
                </div>
                <div className="custom-options">
                    {/* <span class="custom-option selected" data-value="popularité">Popularité</span> */}
                    
                    <div className="custom-option" data-value="date"><p>Date</p></div>
                    <div className="custom-option" data-value="titre"><p>Titre</p></div>
                </div>
            </div>
        </div>
    )
  }