import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonLoading, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../auth';
import { auth } from '../firebase';

interface Props {
  onLogin: () => void;
}

const LoginPage: React.FC<Props> = ({ onLogin }) => {
  const { loggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState({loading:false,error:false});
  // const [Loaing,setLoading]= useState(false);
  if (loggedIn) {
    return <Redirect to="/my/entries" />
  }
  const handleLogin = async () => {
    try {
      setStatus({loading:true,error:false});
      const credential = await auth.signInWithEmailAndPassword(email, password);
      setStatus({loading:false,error:false});
      console.log(credential);
      onLogin();
    } catch (error) {
      setStatus({loading:false,error:true});
      console.log('error occured');
    }
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
            <IonInput type="email" value={email} onIonChange={(event) => setEmail(event.detail.value as string)} />
          </IonItem>
          <IonItem>
            <IonLabel position='stacked'>Password</IonLabel>
            <IonInput type="password" value={password} onIonChange={(event) => setPassword(event.detail.value as string)} />
          </IonItem>
        </IonList>
        {
        status.error &&
        <IonText color="danger">Invalid Credentials</IonText>
        }
        <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
        <IonLoading isOpen={status.loading} />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
