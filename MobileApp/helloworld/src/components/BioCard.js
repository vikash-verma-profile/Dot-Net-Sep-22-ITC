import { IonCard, IonCardContent, IonCardTitle, IonHeader } from '@ionic/react';
import React from 'react';
import dayjs from 'dayjs';
function formatDate(isoString){
    return dayjs(isoString).format('D MMM YYYY');
}

function BioCard({targetDate}) {
    return (<div>

        <IonCard className='ion-text-center'>
            <IonHeader>
                <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
            </IonHeader>
            <IonCardContent>

                <p>Physical :83 %</p>
                <p>Physical :83 %</p>
                <p>Physical :83 %</p>
            </IonCardContent>

        </IonCard>

    </div>);
}

export default BioCard;