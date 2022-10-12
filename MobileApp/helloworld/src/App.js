import React, { useState } from 'react';
import { IonApp, IonContent, IonHeader, IonToolbar, IonButton, IonToast, useIonToast, IonTitle, IonInput, IonItem, IonLabel, IonDatetime, IonCard, IonCardTitle, IonCardContent } from '@ionic/react';
import BioCard from './components/BioCard';
import {useLocalStorage} from './hooks';


function App() {
  // const [showToast,setShowToast]=useState(false);
  // const handleClick=()=>{
  //   setShowToast(true);
  //   setTimeout(()=>setShowToast(false),1500);
  // }
  const [name,setName]=useState('');
  const targetDate=new Date().toISOString();
  // const [birthDate,setBirthDate]=useState('2020-01-31');
  const [birthDate,setBirthDate]=useLocalStorage('birthDate','');
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>First App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        {/* <IonItem>
          <IonLabel position='stacked'>Name :</IonLabel>
          <IonInput value={name} onIonChange={(event)=>setName(event.detail.value)}/>
        </IonItem> */}
        <IonItem>
          <IonLabel position='stacked'>Date of Birth :</IonLabel>
          <IonDatetime showDefaultButtons={true}  presentation="date" displayFormat="D MMM YYYY" value={birthDate} 
            onIonChange={(event)=>setBirthDate(event.detail.value)}
          />
        </IonItem>


        {/* <p>Name: {name}</p> */}
        {/* <p>Date of Birth: {birthDate}</p> */}
        <BioCard targetDate={targetDate}/>
      </IonContent>
    </IonApp>
  );
}


{/* <IonButton onClick={handleClick}>Click Me</IonButton>
<IonToast isOpen={showToast} message="Hello I am Test" /> */}
export default App;
