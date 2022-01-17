import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { ContactButton } from '../components/contact_button';
import { PhotographerCard } from '../components/photographer_card';
import data from '../data/data.json'
import logo from '../assets/images/logo.png'
import { PublicationCard } from '../components/publication_card';
import { Picture, StyledLink } from '../utils/style/Atoms';

import {useContactModal, useFocusModal} from '../utils/hooks/useModal';
import ContactFromModal from '../components/modals/contact_form_modal';
import { DropDownFilter } from '../components/dropdown_filter';
import FocusModal from '../components/modals/focus_publication_modal';


const TopSection = styled.div`
    display: grid;
    gap: 24px;
    
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    margin-bottom: 100px;
`

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  //grid-template-rows: 350px 350px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`

const FilterRow = styled.div`
  display: flex;
  margin-left: 10%;
  margin-bottom: 100px;
  width: 350px;
  justify-content: space-between;
`

export function Photographer() {
    
    const { id: queryId } = useParams()
    const [idPublication, setIdPublication] = useState(0)
    const {isShowingContact, toggleContact} = useContactModal()
    
    const {isShowingFocus, toggleFocus} = useFocusModal()
    //console.log(data.media.filter(x => x.photographerId == queryId))
    
    const photographerData = data.photographers.filter(x => x.id == queryId)[0]
    const listPublication = data.media.filter(x => x.photographerId == queryId)
    console.log(idPublication)
    function getPublicationId(id) {
        setIdPublication(id)
    }


    return (
        
        <div className="App">
            <header>
                <StyledLink to={"/fisheye/"}>
                    <img src={logo} className="logo" alt={"Fisheye logo"}/>
                </StyledLink>
            </header>
            <main id="main">
                <TopSection>
                    <div>
                        <p>{photographerData.name}</p>
                        <p>{photographerData.city}, {photographerData.country}</p>
                        <p>{photographerData.tagline}</p>
                    </div>

                    <ContactButton onClick={toggleContact}/>
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
                        
                    />

                    <Picture src={require(`../assets/photographers/Photographers_ID_Photos/${photographerData.portrait}`)}/>
                </TopSection>

                {/* TODO add a filter component */}
                <FilterRow>
                    <h3>Trier par</h3>
                    <DropDownFilter/>

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
                        />
                    ))
                }
                
                </CardsContainer>
                
            </main>
        </div>
    );
}

