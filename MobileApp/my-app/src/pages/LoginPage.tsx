import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link, Redirect } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';

interface Props{
    loggedIn:boolean;
    onLogin:()=>void;
}

const LoginPage: React.FC<Props> = ({loggedIn,onLogin}) => {
    if(loggedIn){
        return <Redirect to="/my/entries"  />
    }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
       <IonButton expand="block" onClick={onLogin}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
