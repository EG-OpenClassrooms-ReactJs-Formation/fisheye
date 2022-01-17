import { Component } from 'react'
import styled from 'styled-components'
import './index.css';
export function DropDownFilter() {
    
    

    return (
        <div class="select-wrapper">
            <div class="select">
                <div class="select__trigger"><span>Popularité</span>
                    <div class="arrow"></div>
                </div>
                <div class="custom-options">
                    {/* <span class="custom-option selected" data-value="popularité">Popularité</span> */}
                    
                    <div class="custom-option" data-value="date"><p>Date</p></div>
                    <div class="custom-option" data-value="titre"><p>Titre</p></div>
                </div>
            </div>
        </div>
    )
  }