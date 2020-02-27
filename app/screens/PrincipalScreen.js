import React, { useContext, useEffect } from 'react'
import { Text, View, TouchableOpacity, StatusBar, Alert, BackHandler } from 'react-native'
import { mainStyles } from '@styles/styles'
import color from '@styles/colors'
import MyButton from '@components/MyButton'
import { UsuarioContext } from '@context/UsuarioContext'

function useBackButton(handler){
     useEffect(()=> {
         BackHandler.addEventListener("hardwareBackPress", handler)

         return() => {
             console.log('hardwareBackPress Close')
             BackHandler.removeEventListener("hardwareBackPress", handler)
         }
     }, [handler])
}

export default function PrincipalScreen(props) {

    useBackButton(desconectarse)
    const [login, loginAction] = useContext(UsuarioContext)

    return (
        <View style={{flex:1, alignItems:'center'}}>
            <StatusBar
                backgroundColor={color.BLUE}
                barStyle='dark-content'
                translucent={true}
            />
            <Text style={{ textAlign: 'center', fontSize:30, marginTop: 200, 
            fontFamily: 'Poppins-Bold' }}>Bienvenido{'\n' + login.usuario.email}</Text>
            <MyButton
                titulo='Cerrar Sesión'
                onPress={()=> desconectarse()}
            />
        </View>
    )

    function goToScreen(routeName){
        props.navigation.navigate(routeName)
    }

    function desconectarse(){

        Alert.alert(
            "Salir",
            "¿Está seguro que \ndesea cerrar sessión",
            [
                {
                    text:"Si", onPress: ()=>{
                        loginAction({
                            type:'sign-out',
                            data:{}
                        })
                        goToScreen('Login')
                    }
                },
                {
                    text:"No", onPress: ()=>{}, style:'cancel'
                }
            ]
        )
    }

}