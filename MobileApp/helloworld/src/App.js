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
  // const targetDate=new Date().toISOString();
  // const [birthDate,setBirthDate]=useState('2020-01-31');
  //const [birthDate,setBirthDate]=useLocalStorage('birthDate','');
  const [birthDate,setBirthDate]=useState(new Date().toISOString());
  const [targetDate,setTargetDate]=useState(new Date().toISOString());
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
          <IonLabel position='fixed'>Date of Birth :</IonLabel>
          <IonDatetime  displayFormat="D MMM YYYY" value={birthDate} 
            onIonChange={(event)=>setBirthDate(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position='fixed'>Target Date :</IonLabel>
          <IonDatetime  displayFormat="D MMM YYYY" value={targetDate} 
            onIonChange={(event)=>setTargetDate(event.detail.value)}
          />
        </IonItem>

        {/* <p>Name: {name}</p> */}
        {/* <p>Date of Birth: {birthDate}</p> */}
        <BioCard  birthDate={birthDate} targetDate={targetDate}/>
      </IonContent>
    </IonApp>
  );
}


{/* <IonButton onClick={handleClick}>Click Me</IonButton>
<IonToast isOpen={showToast} message="Hello I am Test" /> */}
export default App;
