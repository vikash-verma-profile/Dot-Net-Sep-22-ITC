import { IonCard, IonCardContent, IonCardTitle, IonHeader } from '@ionic/react';
import React from 'react';
import dayjs from 'dayjs';
import BioChart from './BioChart';
import { calculateBios } from './calculations';
function formatDate(isoString) {
    return dayjs(isoString).format('D MMM YYYY');
}

function BioCard({ birthDate, targetDate }) {

    const { physical, emotional, intellectual } = calculateBios(birthDate, targetDate);
    return (<div>

        <IonCard className='ion-text-center'>
            <IonHeader>
                <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
            </IonHeader>
            <IonCardContent>
                <BioChart birthDate={birthDate} targetDate={targetDate} />
                <p>Physical : {physical}</p>
                <p>Emotional :{emotional}</p>
                <p>Intellectual :{intellectual}</p>
            </IonCardContent>

        </IonCard>

    </div>);
}

export default BioCard;