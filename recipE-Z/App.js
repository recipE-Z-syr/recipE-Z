import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { Text, View, Component } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

//imports of screens

import StartScreen from './src/screens/StartScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import UploadRecipeScreen from './src/screens/UploadRecipeScreen';
import RecipeBookScreen from './src/screens/RecipeBookScreen';
import SearchScreen from './src/screens/SearchScreen';
import RecipeScreen from './src/screens/RecipeScreen';
import ResultsScreen from './src/screens/ResultsScreen';

function Separator() {
  return <View style={styles.separator}/>;
}

const fetchFonts = () => {
  return Font.loadAsync({
  'nunito-black': require('./assets/fonts/Nunito-Black.ttf'),
  'nunito-blackitalic': require('./assets/fonts/Nunito-BlackItalic.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'nunito-bolditalic': require('./assets/fonts/Nunito-BoldItalic.ttf'),
  'nunito-extrabold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
  'nunito-extrabolditalic': require('./assets/fonts/Nunito-ExtraBoldItalic.ttf'),
  'nunito-italic': require('./assets/fonts/Nunito-Italic.ttf'),
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf'),
  'nunito-semibolditalic': require('./assets/fonts/Nunito-SemiBoldItalic.ttf')
  });
};

const Stack = createStackNavigator();

const AuthContext = React.createContext();


export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'LOAD_FONT':
          return{
            ...prevState,
            fontLoaded: true,
          };
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            username: action.user,
            password: action.pass,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            username: action.user,
            password: action.pass,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            username: null,
            password: null,
          };
      }
    },
    {
      fontLoaded: false,
      isSignout: false,
      username: null,
      password: null,
    }
  );


  React.useEffect(() => {
    const bootstrapAsync = async () => {

    await Font.loadAsync({
      'nunito-black': require('./assets/fonts/Nunito-Black.ttf'),
      'nunito-blackitalic': require('./assets/fonts/Nunito-BlackItalic.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
      'nunito-bolditalic': require('./assets/fonts/Nunito-BoldItalic.ttf'),
      'nunito-extrabold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
      'nunito-extrabolditalic': require('./assets/fonts/Nunito-ExtraBoldItalic.ttf'),
      'nunito-italic': require('./assets/fonts/Nunito-Italic.ttf'),
      'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf'),
      'nunito-semibolditalic': require('./assets/fonts/Nunito-SemiBoldItalic.ttf')
    });

    dispatch({ type: 'LOAD_FONT' });
    };

    bootstrapAsync();
  }, []);



  React.useEffect(() => {
    // Fetch the info from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let username, password;

      try {
        username = await AsyncStorage.getItem('username');
        password = await AsyncStorage.getItem('password');
      } catch (e) {
        // Restoring info failed
      }

      // After restoring, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', user: username, pass: password });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // After getting info, we need to persist the info using `AsyncStorage`

        dispatch({ type: 'SIGN_IN', user: 'username', pass: 'password' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // After getting info, we need to persist the info using `AsyncStorage`

        dispatch({ type: 'SIGN_IN', user: 'username', pass: 'password' });
      },
    }),
    []
  );

/*export default class App extends React.Component {
  state = {
    fontLoaded: false,
    logged_in: false,
  };


  async componentDidMount() {
    await Font.loadAsync({
      'nunito-black': require('./assets/fonts/Nunito-Black.ttf'),
      'nunito-blackitalic': require('./assets/fonts/Nunito-BlackItalic.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
      'nunito-bolditalic': require('./assets/fonts/Nunito-BoldItalic.ttf'),
      'nunito-extrabold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
      'nunito-extrabolditalic': require('./assets/fonts/Nunito-ExtraBoldItalic.ttf'),
      'nunito-italic': require('./assets/fonts/Nunito-Italic.ttf'),
      'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf'),
      'nunito-semibolditalic': require('./assets/fonts/Nunito-SemiBoldItalic.ttf')
    });
    this.setState({ fontLoaded: true });
  }
  */


  // added AuthContext.Provider
  // render() {
  return (
    state.fontLoaded ? (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {state.username == null ? (
            <Stack.Navigator initialRouteName="Start">
              <Stack.Screen name="Start" component={StartScreen} />
              <Stack.Screen name="Sign-Up" component={SignupScreen} />
              <Stack.Screen name="Log-In" component={LoginScreen} />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator initialRouteName="Search">
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="Upload" component={UploadRecipeScreen} />
              <Stack.Screen name="RecipeBook" component={RecipeBookScreen} />
              <Stack.Screen name="Search" component={SearchScreen} />
              <Stack.Screen name="Recipe" component={RecipeScreen} />
              <Stack.Screen name="Results" component={ResultsScreen} />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </AuthContext.Provider> 
    ) : null
  );
}
