import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { ContactButton } from '../components/contact_button';
import { PhotographerCard } from '../components/photographer_card';
import data from '../data/data.json'
import logo from '../assets/images/logo.png'
import { PublicationCard } from '../components/publication_card';
import { breakPointTablet, Picture, StyledLink } from '../utils/style/Atoms';

import {useContactModal, useFocusModal} from '../utils/hooks/useModal';
import ContactFromModal from '../components/modals/contact_form_modal';
import { DropDownFilter } from '../components/dropdown_filter';
import FocusModal from '../components/modals/focus_publication_modal';
import { LikeDisplay } from '../components/like_counter';


const TopSection = styled.div`

    /* display: grid;
    gap: 24px;
    
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 25px;
    padding-bottom: 25px;
    margin-left: 10%;
    margin-right: 10%;
    justify-content: space-between;
    background-color: #fafafa;
    align-items: center;
    margin-bottom: 100px;
    @media (max-width: ${breakPointTablet}px) {
        flex-direction: column-reverse;
        height: 500px;
        margin-bottom: 50px;
    }
`

const CardsContainer = styled.div`
  
  /* display: grid;
  gap: 24px;
  //grid-template-rows: 350px 350px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center; */
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  align-items: center;
  margin-left: 10%;
  margin-right: 10%;
  justify-content: space-between;
  @media (max-width: ${breakPointTablet}px) {
    flex-direction: column;
  }
 
`

const FilterRow = styled.div`
  display: flex;
  margin-left: 10%;
  margin-bottom: 100px;
  width: 350px;
  justify-content: space-between;
`

const TextPhotographerWrapper = styled.div`
  margin-left: 5%;
  @media (max-width: ${breakPointTablet}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const NameText = styled.p`
  color: #D3573C;
  font-size: 40px;
  margin: 0;
  
  padding-bottom: 5px;
`

const LocationText = styled.p`
  color: #901C1C;
  font-size: 1.5em;
  margin-top: 5px;
  margin-bottom: 10px;
`
const CitationText = styled.p`
font-size: 1.1em;
  margin-bottom: 5px;
`


export function Photographer() {
    
    const { id: queryId } = useParams()
    const [idPublication, setIdPublication] = useState(0)
    const [likeCounter, setLikeCounter] = useState(0)

    const [selectedOption, setSelectedOption] = useState("Popularité")

    const {isShowingContact, toggleContact} = useContactModal()
    
    const {isShowingFocus, toggleFocus} = useFocusModal()
    //console.log(data.media.filter(x => x.photographerId == queryId))
    
    const photographerData = data.photographers.filter(x => x.id == queryId)[0]
    const listPublicationUnsorted = data.media.filter(x => x.photographerId == queryId)
    var listPublication = listPublicationUnsorted
    // implement and use different sort methods

    // sort by alphabetic order for the title
    if(selectedOption === "Titre"){
        listPublication = listPublicationUnsorted.sort((a, b) => (a.title > b.title) ? 1 : -1)
    }
    if(selectedOption === "Popularité"){
        listPublication = listPublicationUnsorted.sort(function(a, b){return a.likes-b.likes}).reverse()
    }
    if(selectedOption === "Date"){
        listPublication = listPublicationUnsorted.sort(function(a, b){return Date(a.date)-Date(b.date)}).reverse()
    }

    console.log(listPublication)
    
    function getPublicationId(id) {
        setIdPublication(id)
    }

    function incrementPublicationId(id, listPublication) {
        if(id < listPublication.length-1) {
            setIdPublication(id + 1)
        } else {
            setIdPublication(0)
        }
    }
    function decrementPublicationId(id, listPublication) {
        if(id >= 1) {
            setIdPublication(id - 1)
        } else {
            setIdPublication(listPublication.length-1)
        }
    }
    /*
    function incrementLikeCounter(totalLikes) {
        setLikeCounter(totalLikes + 1);
    }*/
    

    useEffect(() => {
        setLikeCounter( listPublication
            .map(item => item.likes)
            .reduce((prev, curr) => prev + curr, 0))
    }, []);
    

    return (
        
        <div className="App">
            <header>
                <StyledLink to={"/fisheye/"}>
                    <img src={logo} className="logo" alt={"Fisheye logo"}/>
                </StyledLink>
                <div></div>
                <div></div>
            </header>
            <main id="main">
                <TopSection>
                    <TextPhotographerWrapper>
                        <NameText>{photographerData.name}</NameText>
                        <LocationText>{photographerData.city}, {photographerData.country}</LocationText>
                        <CitationText>{photographerData.tagline}</CitationText>
                    </TextPhotographerWrapper>

                    <ContactButton onClick={toggleContact} text={'Contactez-moi'}/>
                    {/* <button onClick={toggle}>Show Modal</button> */}
                    <ContactFromModal
                        isShowing={isShowingContact}
                        hide={toggleContact}
                        name={photographerData.name}
                    />
                    <FocusModal
                        isShowing={isShowingFocus}
                        hide={toggleFocus}
                        id={photographerData.id}
                        listPublication={listPublication}
                        idPublication={idPublication}
                        name={photographerData.name}
                        onClickRightChevron={incrementPublicationId}
                        onClickLeftChevron={decrementPublicationId}
                    />

                    <Picture 
                        src={require(`../assets/photographers/Photographers_ID_Photos/${photographerData.portrait}`)}
                        alt={photographerData.name}
                        sizes={170}
                    />
                </TopSection>

                {/* TODO add a filter component */}
                <FilterRow>
                    <h3>Trier par</h3>
                    <DropDownFilter selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
                    
                </FilterRow>
                <CardsContainer>
                {
                    //Perform a filter to map only on object with corresponding photographerId
                    
                    listPublication.map((publication, index) => (
                        <PublicationCard
                            key={publication.id}
                            id={publication.id}
                            photographerId={publication.photographerId} 
                            title={publication.title} 
                            image={publication.image}
                            video={publication.video}
                            likes={publication.likes} 
                            date={publication.date} 
                            price={publication.price}
                            onClick={function(event){
                                toggleFocus();
                                getPublicationId(index);
                            }}
                            onClickLike={setLikeCounter}
                            likeCounter={likeCounter}
                        />
                    ))
                }
                
                </CardsContainer>
                <LikeDisplay likeCounter={likeCounter} price={photographerData.price}/>
            </main>
        </div>
    );
}

