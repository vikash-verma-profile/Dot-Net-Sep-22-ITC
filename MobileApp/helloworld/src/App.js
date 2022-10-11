import React, { useState } from 'react';
import { IonApp, IonContent, IonHeader, IonToolbar, IonButton, IonToast, useIonToast, IonTitle, IonInput, IonItem, IonLabel } from '@ionic/react';

function App() {
  // const [showToast,setShowToast]=useState(false);
  // const handleClick=()=>{
  //   setShowToast(true);
  //   setTimeout(()=>setShowToast(false),1500);
  // }

  const [name,setName]=useState('');
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>First App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonItem>
          <IonLabel>Name :</IonLabel>
          <IonInput value={name} onIonChange={(event)=>setName(event.detail.value)}/>
        </IonItem>
        <p>Name: {name}</p>
      </IonContent>
    </IonApp>
  );
}


{/* <IonButton onClick={handleClick}>Click Me</IonButton>
<IonToast isOpen={showToast} message="Hello I am Test" /> */}
export default App;
