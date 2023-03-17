import './App.css'
import companies from "../src/api/CompanyAPI"
import Main from './components/Main/Main';
import Display from './components/Display/Display';
import Pitch from './components/Pitch/Pitch';
import { useState } from 'react';
import Details from './components/Details/Details';

function App() {
  //fetch request to the backend by name to fetch the required company, here I'm using the demo api data I created 
  const company = companies[0];
  const companyMain = company.main;
  const companyPitch = company.display;
  const companyEvent = company.event;
  const companyOffers = company.offers;
  const companyDetails = company.details;

  const [current, setCurrent] = useState(1);
  return (
    <div className=''>
      <Main logo={companyMain.logo} title={companyMain.title} location={companyMain.location} tags={companyMain.tags} />
      <div>
        <Display motto={companyPitch.motto} websiteUrl={companyPitch.websiteUrl} youtubeVideoID={companyPitch.youtubeVideoID} card={companyPitch.card}
          goal={companyEvent.goal}
          investors={companyEvent.investors}
          length={companyEvent.length}
          dateStart={companyEvent.dates.start}
          dateEnd={companyEvent.dates.end}
          companyOffers={companyOffers}
        />
        <div className='p-5 flex flex-wrap gap-2 text-white font-bold'>
          <button onClick={() => setCurrent(1)} className='px-5 py-2 rounded-3xl bg-slate-600'>Pitch</button>
          <button onClick={() => setCurrent(2)} className='px-5 py-2 rounded-3xl bg-slate-600'>Details</button>
          <button onClick={() => setCurrent(3)} className='px-5 py-2 rounded-3xl bg-slate-600'>Discussions</button>
          <button onClick={() => setCurrent(4)} className='px-5 py-2 rounded-3xl bg-slate-600'>Updates</button>
        </div>
      </div>
      <div className='h-screen p-5 m-5 border overflow-scroll flex flex-col md:p-10'>
        {current === 1 && <Pitch pdfUrl={company.pitch.pdfUrl} sections={company.pitch.sections} />}
        {current === 2 && <Details companyDetails={companyDetails} />}
      </div>

    </div>
  )
}

export default App
