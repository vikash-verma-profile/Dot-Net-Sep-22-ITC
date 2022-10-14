import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router-dom';

import ExploreContainer from '../components/ExploreContainer';

const EntryPage: React.FC = () => {

    let userID: any = {}
    userID= useParams();
    console.log(userID.id);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Entry {userID.id} </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                This is an Entry Page
            </IonContent>
        </IonPage>
    );
};

export default EntryPage;
