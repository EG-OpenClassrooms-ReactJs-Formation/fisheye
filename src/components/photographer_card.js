import { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { StyledLink, Picture } from '../utils/style/Atoms'

const PhotographerCardWrapper = styled.div`
  display: flex;
  
`



export function PhotographerCard({ portrait, name, location, citation, price, id }) {
    
    return (
      <StyledLink to={`/fisheye/profile/${id}`}>
        <article>
            
          <Picture src={require(`../assets/photographers/Photographers_ID_Photos/${portrait}`)}/>
          <h2>{name}</h2>
            
            <p>{location}</p>
            <p>{citation}</p>
            <p>{price}</p>
        </article>
      </StyledLink>
    )
  }