import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const screenWidth = Dimensions.get('screen').width;

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <View style={styles.container}>
            <Title style={styles.titleText}>Kırklareli Üniversitesi Sınıf Yönetim Sistemi</Title>
            <Paragraph style={styles.paragraph}>
                KLUSYS Kırklareli Üniversitesi öğrencilerine özel bir platformdur. 
                Sisteme giriş yapmak için öğrenci e-posta adresinizi ve şifrenizi kullanmanız gerekmektedir.
            </Paragraph>
            <FormInput
                labelName='E-posta'
                value={email}
                autoCapitalize='none'
                onChangeText={userEmail => setEmail(userEmail)}
            />
            <FormInput
                labelName='Şifre'
                value={password}
                secureTextEntry={true}
                onChangeText={userPassword => setPassword(userPassword)}
            />
            <FormButton
                title='Giriş Yap'
                modeValue='contained'
                labelStyle={styles.loginButtonLabel}
                onPress={() => alert('Test')}
            />
            <FormButton
                title='Hakkında'
                modeValue='text'
                labelStyle={styles.loginButtonLabel}
                onPress={() => navigation.navigate('About')}
            />
            <Image style={{width: screenWidth/3, height: screenWidth/3}} source={require('../../assets/logo.png')} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5f5f5',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      fontSize: 24,
      marginBottom: 10,
      textAlign: "center"
    },
    paragraph: {
        textAlign: "center"
    },
    loginButtonLabel: {
      fontSize: 22,
    },
});