import { PhotographerCard } from '../components/photographer_card';
import data from '../data/data.json'
import logo from '../assets/images/logo.png' // relative path to image
import styled from 'styled-components'
const PhotographerSection = styled.div`
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 100px;
    align-items: center;
    margin-left: 10%;
    margin-right: 10%;
    justify-content: space-between;
    @media (max-width: 830px) {
        flex-direction: column;
    }
`

export function Welcome() {
    
    return (
        <div className="App">
            <header className=".header-welcome">
                <img src={logo} className="logo" alt="fisheye logo"/>
                <div>
                    
                </div>
                <h1>Nos photographes</h1>
            </header>
            <main id="main">
                <div className="photographer_section">
                    {
                    data.photographers.map((profile) => (
                        <PhotographerCard
                            key={profile.id}
                            name={profile.name}
                            location={`${profile.city}, ${profile.country}`}
                            citation={profile.tagline}
                            portrait={profile.portrait}
                            price={`${profile.price}/jours`}
                            id={profile.id}
                        />
                    ))
                    }
                </div>
            </main>
        </div>
    );
}

