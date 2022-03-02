import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabStack from './routes/tabNavigator';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <Stack.Navigator
        initialRouteName="Submit"
        screenOptions={{
          headerStyle: { backgroundColor: '#fff' },
          headerTintColor: '#444',
          headerTitleStyle: { fontWeight: 'normal' }
        }}>
        <Stack.Screen name="TabStack" component={TabStack} options={{ title: 'Checkins' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
