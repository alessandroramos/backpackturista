import React, { useEffect, useContext, useState } from 'react';
import { Container, LoadingIcon, IcoBackPackArea } from '../Styles/styles';
import AsyncStorage from  '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import IcoBackPack from '../../assets/icoBackPack.svg';
import Api from '../../Api';
import { UserContext } from '../../contexts/UserContext';

export default () => {
    const { dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();
    useEffect(()=>{
        checkToken();
    }, []);
    
    const checkToken = async () => {
        const token = await AsyncStorage.getItem('tokenUser');
        if(token) {
            const user = JSON.parse(token);                
            Api.addAuthListener((user)=>{
                if(user){
                    Api.getUsuario(user.uid).then((snapshot)=>{ 
                        userDispatch({
                            type: 'setAvatar',
                            payload:{
                                avatar: snapshot.val().avatar
                            }
                        });
                    });                    
                }
            })                         
        }
        navigation.reset({
            routes:[{name: 'MainTab'}]
        })

    }


    return (
        <Container>
            <LoadingIcon size= "large"  color/>
            <IcoBackPackArea></IcoBackPackArea>
            <IcoBackPack width="100%" height="232" />
        </Container>
    );
}


