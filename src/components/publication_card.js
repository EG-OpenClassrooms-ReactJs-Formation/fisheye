import { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { StyledLink } from '../utils/style/Atoms'

import data from '../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

const PublicationCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`
const PublicationContentContainer = styled.div`
  height: 150px;
  width: 150px;
  
`
const PublicationContentImage = styled.img`
  height: 150px;
  width: 150px;
  
`
const PublicationContentVideo = styled.video`
  height: 150px;
  width: 150px;
  
`
const PublicationTextSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const PublicationLikeSection = styled.div`
    display: flex;
`
const PublicationTextStyled = styled.p`
  color: #901C1C;
`



export function PublicationCard({ id, photographerId, title, image, video, likes, date, price }) {
    
    /*
    data for a publication:
    "id": 342550,
    "photographerId": 82,
    "title": "Fashion Yellow Beach",
    "image": "Fashion_Yellow_Beach.jpg",
    "likes": 62,
    "date": "2011-12-08",
    "price": 55
    */
    function getPhotographerNameFromId(data, selectedId, image, video){
        var listMatch = data.photographers.filter(x => x.id == selectedId)
        console.log(listMatch)
        console.log(image)
        console.log(video)
        if (listMatch.length == 0){
            return ""
        }
        else{
            var name = listMatch[0].name.split(' ')[0]
            return name
        }
        
    }
    const photographerName = getPhotographerNameFromId(data, photographerId)
    console.log(photographerName)
    return (
      <PublicationCardWrapper>
        
        <PublicationContentContainer>
            {
            photographerName != ""?
                (image != null ?
                <PublicationContentImage src={require(`../assets/photographers/${photographerName}/${image}`)}/>:
                <PublicationContentVideo src={require(`../assets/photographers/${photographerName}/${video}`)}/>)
                :
                null
            }
        </PublicationContentContainer>
        <PublicationTextSection>
            <PublicationTextStyled>
            {title}
            </PublicationTextStyled>

            <PublicationLikeSection>
                <PublicationTextStyled>
                    {likes}
                </PublicationTextStyled>
                <PublicationTextStyled>
                    <FontAwesomeIcon icon={faHeart} />
                </PublicationTextStyled>
            </PublicationLikeSection>
        </PublicationTextSection>

        

      </PublicationCardWrapper>
    )
  }