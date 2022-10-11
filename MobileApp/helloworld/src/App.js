import React, { useState } from 'react';
import { IonButton,IonToast,useIonToast  } from '@ionic/react';

function App() {
  const [showToast,setShowToast]=useState(false);
  const handleClick=()=>{
    setShowToast(true);
  }
  return (
    <div>
      <header>
        <h1>Myapp</h1>
      </header>
      <main>
      <IonButton onClick={handleClick}>Click Me</IonButton>
      <IonToast isOpen={showToast} message="Hello I am Test" />
      </main>
    </div>
  );
}

export default App;
