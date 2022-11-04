import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
    return (
          <View>
            <Text>Details Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
          </View>
        );
}

function AboutScreen({navigation}) {
    return (
          <View>
            <Text>About Screen</Text>
          </View>
        );
}

const Stack = createNativeStackNavigator();

function App() {
  const linking = {
      prefixes: ['https://mychat.com', 'mychat://'],
      config: {
              screens: {
                        Home: '/',
                Details: "/details",
                About: "/about",
                      },
            },
    };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
