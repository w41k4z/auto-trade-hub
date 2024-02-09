import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import axios from 'axios';
import { FieldValues, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const Inscription: React.FC = () => {

    const history = useHistory();

    // const accueil = () => {
    //     history.push('/accueil');
    // };

    let url = import.meta.env.VITE_REACT_APP_URL;

    const { formState : {errors}  , register, handleSubmit, control, reset } = useForm();
    const [provinces, setProvinces] = useState([]);
    
    const onSubmit = async (data: FieldValues) => {
        try {
            data.province = {id : data.provinceId}
            console.log(data);
            const response = await axios.post(url + '/users', data);
            history.push('/accueil');
            console.log(response.data);
            reset()
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
            fetch(url+'/provinces')
            .then(response => response.json())
            .then(data => setProvinces(data.payload))
            .catch(error => console.error(error));
    }, []);
    
    return (
    <IonPage>
        <IonContent className="ion-padding">
            <IonTitle>Inscription</IonTitle>
            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                <IonInput placeholder="Nom" type="text" {...register("name")}></IonInput>
                <IonInput placeholder="Prenom" type="text" {...register("firstName")}></IonInput>
                <IonInput placeholder="Date de naissance" type="date" {...register("birthDate")}></IonInput>
                    {errors?.birthDate && <p>{errors?.birthDate.message?.toString()}</p>}
                <IonSelect placeholder="Genre" {...register("genre")}>
                    <IonSelectOption >Choisir</IonSelectOption>
                    <IonSelectOption value={1}>Homme</IonSelectOption>
                    <IonSelectOption value={2}>Femme</IonSelectOption>
                </IonSelect>
                <IonInput placeholder="Numero de telephone" type="number" {...register("phoneNumber")}></IonInput>
                <IonInput placeholder="Email" type="email" {...register("email")}></IonInput>
                <IonInput placeholder="Mot de Passe" type="password" {...register("password")}></IonInput>
                <IonInput placeholder="Veuillez confirmer votre mot de passe" type="password" {...register("mdp")}></IonInput>
                {provinces.map((province :any) => ( 
                <IonSelect key={province.id} placeholder="Province" {...register("provinceId")}>
                    <IonSelectOption >Choisir</IonSelectOption>
                    <IonSelectOption value={province.id}>{province.name}</IonSelectOption>
                </IonSelect>
                    ))}
                <IonButton expand="full" type="submit">S'inscrire</IonButton>
            </form>
        </IonContent>
    </IonPage>
    );
};

export default Inscription;
