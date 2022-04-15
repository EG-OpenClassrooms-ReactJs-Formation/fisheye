import { Component, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { StyledLink, PublicationContentImage, PublicationContentVideo, breakPointTablet } from '../utils/style/Atoms'

import data from '../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

const sizePublication = 300;    

const PublicationCardWrapper = styled.article`
  min-width: 320px;
  width: 30%;
  display: flex;
  flex-direction: column;
  overflow:hidden;
  &:after{
    content: "";
    max-width: 30%;
  }
  
  @media (max-width: ${breakPointTablet}px) {
    width: 100%;
  }
`
const PublicationContentContainer = styled.div`
  height: ${sizePublication}px;
  //width: ${sizePublication}px;
  border-radius: 40px 40px 0% 0%;
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
  margin-left: 5px;
`
const StyledLikeInput = styled.input`
    display: none;
    flex: auto;
    position: relative;
`


export function PublicationCard({ id, photographerId, title, image, video, likes, date, price, onClick, onClickLike, likeCounter }) {
    
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
        //console.log(listMatch)
        //console.log(image)
        //console.log(video)
        if (listMatch.length == 0){
            return ""
        }
        else{
            var name = listMatch[0].name.split(' ')[0]
            return name
        }
    }
    
    const [checked, setChecked] = useState(false);
    const icon = checked ? faHeart : farHeart;
    const photographerName = getPhotographerNameFromId(data, photographerId)
    //console.log(photographerName)
    function onCheck(){
      setChecked(!checked)
      if(checked){
        onClickLike(likeCounter - 1)
      }
      else{
        onClickLike(likeCounter + 1)
      }
    }
    return (
      <PublicationCardWrapper >
        
        <PublicationContentContainer 
          onClick={onClick} 
          tabIndex='0'
          onKeyDown={(e)=>{
            console.log(e)
            if(e.code === "Enter"){
              onClick()
            }
          }}
        >
            {
            photographerName != ""?
                (image != null ?
                <PublicationContentImage 
                  src={require(`../assets/photographers/${photographerName}/${image}`)} 
                  alt={title}
                
                />:
                <PublicationContentVideo
                 
                src={require(`../assets/photographers/${photographerName}/${video}`)}
                alt={title}
                />)
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
                    {checked ?
                    likes+1
                    :
                    likes
                  }
                </PublicationTextStyled>
                <PublicationTextStyled>
                    
                    <FontAwesomeIcon 
                      icon={icon} 
                      onClick={onCheck} 
                      tabIndex='0' 
                      onKeyDown={(e)=>{
                        console.log(e)
                        if(e.code === "Enter"){
                          onCheck()
                        }
                      }}
                    
                    />
                </PublicationTextStyled>
            </PublicationLikeSection>
        </PublicationTextSection>
      </PublicationCardWrapper>
    )
  }