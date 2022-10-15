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

interface Props{
    loggedIn:Boolean
}
const AppTabs: React.FC<Props> = ({loggedIn}) => {
if(!loggedIn){
    return <Redirect to="/login" />
}

    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route exact path="/my/entries">
                    <HomePage /> 
                </Route>
                <Route exact path="/my/entries/:id">
                    <EntryPage />
                </Route>
                <Route exact path="/my/settings">
                    <SettingsPage />
                </Route>
                {/* <Redirect exact path="/" to="/my/entries" /> */}
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/my/entries">
                    <IonIcon icon={homeIcon}></IonIcon>
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="settings" href="/my/settings">
                    <IonIcon icon={settingsIcon}></IonIcon>
                    <IonLabel>Settings</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );

}

export default AppTabs;
