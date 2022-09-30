import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './Pages/Categories/Categories';
import Detail from './Pages/Details.js/Detail';
import Meal from './Pages/Meals/Meal';
const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Categories"
          component={Categories}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Detail"
          component={Detail}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Meal"
          component={Meal}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
