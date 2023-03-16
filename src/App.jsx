import './App.css'
import companies from "../src/api/CompanyAPI"
import Main from './components/Main/Main';
import Pitch from './components/Display/Display';

function App() {
  //fetch request to the backend by name to fetch the required company, here I'm using the demo api data I created 
  const company = companies[0];
  const companyMain = company.main;
  const companyPitch = company.display;
  const companyEvent = company.event;
  const companyOffers = company.offers;
  return (
    <>
      <Main logo={companyMain.logo} title={companyMain.title} location={companyMain.location} tags={companyMain.tags} />
      <div>
        <Pitch motto={companyPitch.motto} websiteUrl={companyPitch.websiteUrl} youtubeVideoID={companyPitch.youtubeVideoID} card={companyPitch.card}
          goal={companyEvent.goal}
          investors={companyEvent.investors}
          length={companyEvent.length}
          dateStart={companyEvent.dates.start}
          dateEnd={companyEvent.dates.end}
          companyOffers={companyOffers}
        />
      </div>
    </>
  )
}

export default App
