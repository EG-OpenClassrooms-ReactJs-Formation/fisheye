import styled from 'styled-components'
import { Link } from 'react-router-dom'
const borderRadiusValue = 5;

export const StyledLink = styled(Link)`
padding: 10px 15px;
color: black;
text-decoration: none;

`

export const Picture = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 140px;
`

export const PublicationContentImage = styled.img`
  height: 100%;
  min-width: 100%;
  object-fit: cover;
  border-radius: ${borderRadiusValue}px ${borderRadiusValue}px ${borderRadiusValue}px ${borderRadiusValue}px;
`

export const PublicationContentVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${borderRadiusValue}px ${borderRadiusValue}px ${borderRadiusValue}px ${borderRadiusValue}px;
`