import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe'; 
import SampleWorks from './components/SampleWorks';

function App() {
  return(
    <div>
      <div className='App'>
          <LandingPage/>
          <AboutMe/>
          <SampleWorks/>
      </div>
    </div>
  );
}

export default App;
