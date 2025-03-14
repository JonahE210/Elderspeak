import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
/*For Nick only
    git add .
    git commit -m "(name)"
    git push -u origin main
 */
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Elderly Care</Text>
            <Button title="Find Facilities" onPress={() => navigation.navigate('Facilities')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold' },
});

export default HomeScreen;
