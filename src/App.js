import './App.css';
import { Main } from './Components/Main/Main'
import { AboutMe } from './Components/AboutMe/AboutMe';
import { Contact } from './Components/Contact/Contact';
import { Pricing } from './Components/Pricing/Pricing';
import { Projects } from './Components/Projects/Projects';
import { Skills } from './Components/Skills/Skills';
import { GoBack } from './Components/GoBack/GoBack';
import { BrowserRouter as Route, Switch } from 'react-router-dom';




function App() {
  return (

    <div>
      <GoBack />
      <div id="background"></div>
      <Switch>
        <Route path='/aboutme'>
          <AboutMe />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/pricing'>
          <Pricing />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Main />
      </Switch>
    </div>


  );
}

export default App;
