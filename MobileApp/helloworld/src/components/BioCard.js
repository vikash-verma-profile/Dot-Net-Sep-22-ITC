import { IonCard, IonCardContent, IonCardTitle, IonHeader } from '@ionic/react';
import React from 'react';
import dayjs from 'dayjs';
import BioChart from './BioChart';
import { calculateBios } from './calculations';
import './BioCard.css';

function formatDate(isoString) {
    return dayjs(isoString).format('D MMM YYYY');
}

function BioCard({ birthDate, targetDate }) {

    const { physical, emotional, intellectual } = calculateBios(birthDate, targetDate);
    return (<div>

        <IonCard className='bio-card ion-text-center'>
            <IonHeader>
                <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
            </IonHeader>
            <IonCardContent>
                <BioChart birthDate={birthDate} targetDate={targetDate} />
                <p className='physical'>Physical : {physical.toFixed(4)}</p>
                <p className='emotional'>Emotional :{emotional.toFixed(4)}</p>
                <p className='intellectual'>Intellectual :{intellectual.toFixed(4)}</p>
            </IonCardContent>

        </IonCard>

    </div>);
}

export default BioCard;