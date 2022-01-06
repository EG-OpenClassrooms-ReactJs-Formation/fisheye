import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { ContactButton } from '../components/contact_button';
import { PhotographerCard } from '../components/photographer_card';
import data from '../data/data.json'
import logo from '../assets/images/logo.png'
import { PublicationCard } from '../components/publication_card';
import { Picture, StyledLink } from '../utils/style/Atoms';

import useModal from '../utils/hooks/useModal';
import ContactFromModal from '../components/modals/contact_form_modal';


const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

export function Photographer() {
    const portraitPath = 'assets/photographers'
    const { id: queryId } = useParams()

    const {isShowing, toggle} = useModal()
    //console.log(queryId)
    //console.log(data.media.filter(x => x.photographerId == queryId))
    
    const photographerData = data.photographers.filter(x => x.id == queryId)[0]
    return (
        
        <div className="App">
            <header>
                <StyledLink to={"/fisheye/"}>
                    <img src={logo} className="logo" />
                </StyledLink>
            </header>
            <main id="main">
                <TopSection>
                    <div>
                        <p>{photographerData.name}</p>
                        <p>{photographerData.city}, {photographerData.country}</p>
                        <p>{photographerData.tagline}</p>
                    </div>
                    <ContactButton onClick={toggle}/>
                    {/* <button onClick={toggle}>Show Modal</button> */}
                    <ContactFromModal
                        isShowing={isShowing}
                        hide={toggle}
                        name={photographerData.name}
                    />
                    <Picture src={require(`../assets/photographers/Photographers_ID_Photos/${photographerData.portrait}`)}/>
                </TopSection>

                {/* TODO add a filter component */}

                <CardsContainer>
                {
                    //Perform a filter to map only on object with corresponding photographerId
                    data.media.filter(x => x.photographerId == queryId).map((publication) => (
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
                        />
                    ))
                    }
                </CardsContainer>
                
            </main>
        </div>
    );
}

