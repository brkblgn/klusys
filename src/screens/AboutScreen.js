import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, IconButton, Paragraph } from 'react-native-paper';

export default function AboutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Title style={styles.titleText}>Hakkında</Title>
            <Paragraph>Burak BİLGİN- 1160505002</Paragraph>
            <Paragraph>Tansu ÇAM- 1170505001</Paragraph>
            <Paragraph>Hakan KÖKCEN- 1170505015</Paragraph>
            <Paragraph>Samet BİLİM- 1170505020</Paragraph>
            <Paragraph>M. Doğukan KAYHAN- 1170505050</Paragraph>
            <IconButton
                icon='keyboard-backspace'
                size={30}
                style={styles.navButton}
               color='blue'
               onPress={() => navigation.goBack()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 24,
        marginBottom: 10
    },
    navButton: {
        marginTop: 10
    }
});