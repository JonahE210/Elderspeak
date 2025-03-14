import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.jsx';
import FacilitiesScreen from '../screens/FacilitiesScreen.jsx';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Facilities" component={FacilitiesScreen} />
        </Stack.Navigator>
    );
}
