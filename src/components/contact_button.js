import { PhotographerCard } from './photographer_card';
import styled from 'styled-components'

const ButtonStyled = styled.button`
    font-size: 20px;
    font-weight: bold;
    color: white;
    padding: 11px;
    width: 170px;
    height: 70px;
    border: none;
    background-color: #901C1C;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        color: black;
        background-color: #D3573C;
  }
`

export function ContactButton({onClick, text}) {
    
    return (
        <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
    );
}

