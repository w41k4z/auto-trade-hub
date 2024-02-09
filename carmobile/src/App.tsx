import { Redirect, Route } from 'react-router-dom';
import {  IonApp,  IonIcon,  IonLabel,  IonRouterOutlet,  IonTabBar,  IonTabButton,  IonTabs,  setupIonicReact} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/Login';
import Inscription from './pages/Inscription';
import Accueil from './pages/Accueil';
import Annoucement from './pages/Annoucement';
import Insertion from './pages/Insertion';
import Status from './pages/Status';
import Notification from './pages/Notification';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Details from './pages/Details';
import Option from './components/Option';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/">
            <Login />
          </Route>
          <Route exact path="/accueil">
            <Accueil />
          </Route>
          <Route exact path="/annoucement">
            <Annoucement />
          </Route>
          <Route exact path="/details">
            <Details />
          </Route> 
          <Route exact path="/inscription">
            <Inscription />
          </Route>
          <Route exact path="/notification">
            <Notification />
          </Route>
          <Route exact path="/status">
            <Status />
          </Route>
          <Route exact path="/insertion">
            <Insertion />
          </Route>
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
