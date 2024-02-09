import { IonButton, IonContent, IonHeader, IonInput, IonItemOption, IonLabel, IonPage, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Produit from './Produit';
import Option from '../components/Option';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import axios from 'axios';

const Insertion: React.FC = () => {
    let url = import.meta.env.VITE_REACT_APP_URL;

    const { formState: { errors }, register, handleSubmit, control, reset } = useForm();
    const [provinces, setProvinces] = useState([]);
    const [model, setModel] = useState([]);
    const [energie, setEnergie] = useState([]);


    const onSubmit = async (data: FieldValues) => {
        try {
            data.province = { id: data.provinceId }
            console.log(data);
            const response = await axios.post(url + '/annoucement', data);
            console.log(response.data);
            reset()
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetch(url + '/provinces')
            .then(response => response.json())
            .then(data => setProvinces(data.payload))
            .catch(error => console.error(error));
    }, []);
    useEffect(() => {
        fetch(url + '/car-models')
            .then(response => response.json())
            .then(data => setModel(data.name))
            .catch(error => console.error(error));
    }, []);
    useEffect(() => {
        fetch(url + '/powertrain-type')
            .then(response => response.json())
            .then(data => setEnergie(data.name))
            .catch(error => console.error(error));
    }, []);

    return (
        <IonPage>
            <IonContent>
                <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                    <IonLabel>Veuillez inserer votre donnees pour l'annonce</IonLabel>
                    {model.map((model: any) => (
                        <IonSelect placeholder="Model du voiture" {...register("")}> 
                            <IonSelectOption >Choisir</IonSelectOption>
                            <IonSelectOption value={model.id}>{model.name}</IonSelectOption>
                        </IonSelect>
                           ))}
                        {energie.map((energie: any) => (
                        <IonSelect placeholder="Type de Transmission" {...register("powertraintype")}>
                            <IonSelectOption >Choisir</IonSelectOption>
                            <IonSelectOption value={energie.id}>{energie.name}</IonSelectOption>
                        </IonSelect>
                        ))}
                            {provinces.map((province: any) => (
                                <IonSelect key={province.id} placeholder="Province" {...register("provinceId")}>
                                    <IonSelectOption >Choisir</IonSelectOption>
                                    <IonSelectOption value={province.id}>{province.name}</IonSelectOption>
                                </IonSelect>
                            ))}
                        <IonInput placeholder="Prix" type="number" {...register("price")}></IonInput>
                        <IonInput placeholder="Numero de telephone" type="number" {...register("phoneNumber")}></IonInput>
                        <IonInput placeholder="Annee" type="number" {...register("year")}></IonInput>
                </form>
            </IonContent>
            <Option />
        </IonPage>
    );
};

export default Insertion;