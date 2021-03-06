import styled from 'styled-components'
import { Link } from 'react-router-dom'
const borderRadiusValue = 5;
const pictureSize = 300;
export const breakPointTablet = 830;

export const StyledLink = styled(Link)`
padding: 10px 15px;
color: black;
text-decoration: none;

`

export const Picture = styled.img`
  //height: ${pictureSize}px;
  //width: ${pictureSize}px;
  min-height: 100%;
  width: 100%;
  object-fit: cover;
  //border-radius: ${pictureSize}px;
  ${(props) =>
    props.sizes &&
    `
    height: ${props.sizes}px;
    width: ${props.sizes}px;
    margin-right: 5%;
    margin-left: 10%;
    `}
`

export const PictureContainer = styled.div`
  height: ${pictureSize}px;
  width: ${pictureSize}px;
  border-radius: ${pictureSize}px;
  overflow: hidden;
  
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