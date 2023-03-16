import './App.css'
import companies from "../src/api/CompanyAPI"
import Main from './components/Main/Main';

function App() {
  //fetch request to the backend by name to fetch the required company, here I'm using the demo api data I created 
  const company = companies[0];
  const companyMain = company.main;
  return (
    <Main logo={companyMain.logo} title={companyMain.title} location={companyMain.location} tags={companyMain.tags} />
  )
}

export default App
