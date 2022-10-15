import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="ion-padding">
                Page not found
            </IonContent>
        </IonPage>
    );
};

export default NotFoundPage;
