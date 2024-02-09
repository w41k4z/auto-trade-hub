import React from 'react';
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, warningOutline, warningSharp } from 'ionicons/icons';
import { Redirect, Route, useHistory, useLocation } from 'react-router';

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

const appPages :AppPage[] = [
    {
        title: 'Annoucement', url: '/accueil', iosIcon: mailOutline, mdIcon: mailSharp },
    {
        title: 'Insertion', url: '/insertion', iosIcon: paperPlaneOutline, mdIcon: paperPlaneSharp},
    {
        title: 'Status', url: '/status', iosIcon: heartOutline, mdIcon: heartSharp },
    {
        title: 'Profile', url: '/profile', iosIcon: warningOutline, mdIcon: warningSharp },
];

const Option: React.FC = () => {
    const location = useLocation();
    const history = useHistory();
    const click = (url: string) => {
        history.push(url);
    }

    return (
        // <IonTabs>
            <IonTabBar slot="bottom">       
            {appPages.map((appPage) => (
                    <IonTabButton className={location.pathname === appPage.url ? 'selected' : ''} key={appPage.url} tab={appPage.title} onClick={() => click(appPage.url)}>
                        <IonIcon icon={appPage.iosIcon} />
                        <IonLabel>{appPage.title}</IonLabel>
                    </IonTabButton>
                ))}
            </IonTabBar>
        // </IonTabs>
    );
};

export default Option;
