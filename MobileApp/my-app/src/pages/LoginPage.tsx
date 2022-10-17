import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth} from '../auth';
import {auth } from '../firebase';

interface Props{
    onLogin:()=>void;
}

const LoginPage: React.FC<Props> = ({onLogin}) => {
    const {loggedIn}=useAuth();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    if(loggedIn){
        return <Redirect to="/my/entries"  />
    }
const handleLogin= async()=>{
  const credential=await auth.signInWithEmailAndPassword(email,password);
  onLogin();
}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonList>
        <IonItem>
          <IonLabel position='stacked'>Email</IonLabel>
          <IonInput type="email" value={email} onIonChange={(event)=>setEmail(event.detail.value as string)}/>
        </IonItem>
        <IonItem>
          <IonLabel position='stacked'>Password</IonLabel>
          <IonInput type="password" value={password} onIonChange={(event)=>setPassword(event.detail.value as string)}/>
        </IonItem>
        </IonList>
       <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
