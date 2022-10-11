import React, { useState } from 'react';
import { IonApp, IonContent, IonHeader, IonToolbar, IonButton, IonToast, useIonToast, IonTitle, IonInput, IonItem, IonLabel, IonDatetime } from '@ionic/react';

function App() {
  // const [showToast,setShowToast]=useState(false);
  // const handleClick=()=>{
  //   setShowToast(true);
  //   setTimeout(()=>setShowToast(false),1500);
  // }

  const [name,setName]=useState('');
  const [birthDate,setBirthDate]=useState('2020-01-31');
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>First App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonItem>
          <IonLabel position='stacked'>Name :</IonLabel>
          <IonInput value={name} onIonChange={(event)=>setName(event.detail.value)}/>
        </IonItem>
        <IonItem>
          <IonLabel position='stacked'>Date of Birth :</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY" value={birthDate} 
            onIonChange={(event)=>setBirthDate(event.detail.value)}
          />
        </IonItem>
        <p>Name: {name}</p>
        <p>Date of Birth: {birthDate}</p>
      </IonContent>
    </IonApp>
  );
}


{/* <IonButton onClick={handleClick}>Click Me</IonButton>
<IonToast isOpen={showToast} message="Hello I am Test" /> */}
export default App;
