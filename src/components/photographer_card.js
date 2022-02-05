import { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { StyledLink, Picture } from '../utils/style/Atoms'

const PhotographerCardWrapper = styled.div`
  display: flex;
  
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  
`

const LocationText = styled.p`
  color: #901C1C;
  font-size: 1.5em;
  margin: 0px;
`
const CitationText = styled.p`
font-size: 1.1em;
  margin: 5px;
`

const PriceText = styled.p`
  color: #525252;
  margin: 2px;
`

export function PhotographerCard({ portrait, name, location, citation, price, id }) {
    
    return (
      <StyledLink to={`/fisheye/profile/${id}`}>
        <article>
            
          <Picture 
            src={require(`../assets/photographers/Photographers_ID_Photos/${portrait}`)}
            alt={name}
            />
          <h2>{name}</h2>
          <TextContainer >
            <LocationText>{location}</LocationText>
            <CitationText>{citation}</CitationText>
            <PriceText>{price}</PriceText>
          </TextContainer>
        </article>
      </StyledLink>
    )
  }