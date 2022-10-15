import { IonContent,IonButtons, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton } from '@ionic/react';
import { useParams } from 'react-router-dom';
import { entries } from '../data';


const EntryPage: React.FC = () => {

    let userID: any = {}
    userID= useParams();
    console.log(userID.id);
    const entry=entries.find((entry)=>entry.id===userID.id);
    if(!entry){
        throw new Error(`No such entry: ${userID.id} `);
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton/>
                    </IonButtons>
                    <IonTitle>{entry.title} </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
               { entry.description}
            </IonContent>
        </IonPage>
    );
};

export default EntryPage;
