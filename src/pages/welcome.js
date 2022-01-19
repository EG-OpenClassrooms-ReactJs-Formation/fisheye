import { PhotographerCard } from '../components/photographer_card';
import data from '../data/data.json'
import logo from '../assets/images/logo.png' // relative path to image
export function Welcome() {
    const portraitPath = 'assets/photographers'
    return (
        <div className="App">
            <header>
                <img src={logo} className="logo" />
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

