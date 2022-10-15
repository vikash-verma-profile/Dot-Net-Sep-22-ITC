import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import EntryPage from './pages/EntryPage';

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

import { home as homeIcon, settings as settingsIcon } from 'ionicons/icons';

/* Theme variables */
import './theme/variables.css';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';

setupIonicReact();

const App: React.FC = () => {
  const [loggedIn, SetLoggedIn] = useState(false);
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/login">
              {loggedIn ? 
              <Redirect to="/entries" /> : 
              <LoginPage onLogin={()=>SetLoggedIn(true)}/>}
            </Route>
            <Route exact path="/entries">
            {loggedIn ? 
              <HomePage /> : 
              <Redirect to="/login" />}
            </Route>
            <Route exact path="/entries/:id">
              <EntryPage />
            </Route>
            <Route exact path="/settings">
              <SettingsPage />
            </Route>
            {/* <Route exact path="/">
            <Redirect to="/home" />
          </Route> */}
            <Redirect exact path="/" to="/entries" />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/entries">
              <IonIcon icon={homeIcon}></IonIcon>
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/settings">
              <IonIcon icon={settingsIcon}></IonIcon>
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );

}

export default App;
