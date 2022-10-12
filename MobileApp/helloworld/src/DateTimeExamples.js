import { IonContent, IonDatetime, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
export const DateTimeExamples = () => {

    const [selectedDate, setSelectedDate] = useState('2012-12-15T13:47:20.789');
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>IonDatetime Examples</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem>
                    <IonLabel>MMMM</IonLabel>
                    <IonDatetime
                        displayFormat="MMMM"
                        min="1989-06-04"
                        max="2004-08-23"
                        value={selectedDate}
                        onIonChange={(e) => setSelectedDate(e.detail.value)}
                    ></IonDatetime>
                </IonItem>
            </IonContent>
        </IonPage>
    );
};