import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonItem } from '@ionic/react';
import { heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, person, settings, warningOutline, warningSharp } from 'ionicons/icons';
import { Redirect, Route, useHistory, useLocation } from 'react-router';
import Annoucement from '../pages/Annoucement';
import Insertion from '../pages/Insertion';
import Status from '../pages/Status';
import Notification from '../pages/Notification';

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

const appPages :AppPage[] = [
    {
        title: 'Annoucement', url: '/annoucement', iosIcon: mailOutline, mdIcon: mailSharp },
    {
        title: 'Insertion', url: '/insertion', iosIcon: paperPlaneOutline, mdIcon: paperPlaneSharp},
    {
        title: 'Status', url: '/status', iosIcon: heartOutline, mdIcon: heartSharp },
    {
        title: 'Notification', url: '/notification', iosIcon: warningOutline, mdIcon: warningSharp },
];

const Option: React.FC = () => {
    const location = useLocation();
    const history = useHistory();
    const click = (url: string) => {
        history.push(url);
    }
    return (
        <IonTabs>
            <IonRouterOutlet></IonRouterOutlet>
            <IonTabBar slot="bottom">
                {appPages.map((appPage) => (
                    <IonTabButton className={location.pathname === appPage.url ? 'selected' : ''} key={appPage.url} tab={appPage.title} onClick={() => click(appPage.url)}>
                        <IonIcon icon={appPage.iosIcon} />
                        <IonLabel>{appPage.title}</IonLabel>
                    </IonTabButton>
                ))}
            </IonTabBar>
        </IonTabs>
    );
};

export default Option;
