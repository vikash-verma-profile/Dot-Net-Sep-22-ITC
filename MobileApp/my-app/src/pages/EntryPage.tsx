import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router-dom';

import ExploreContainer from '../components/ExploreContainer';

const EntryPage: React.FC = () => {

    let {userID}  = useParams();
    console.log(userID);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Entry </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                This is an Entry Page
            </IonContent>
        </IonPage>
    );
};

export default EntryPage;
