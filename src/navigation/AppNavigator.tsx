import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import HomeScreen from '../screens/home/HomeScreen';
import {RootStackParamList, RootStackScreenProps} from './RootNavigator';
import CartScreen from '../screens/cart/CartScreen';

export type AppTabParamList = {
  Home: undefined;
  Cart: undefined;
};

const TabsStack = createBottomTabNavigator<AppTabParamList>();

export type TabsStackScreenProps<T extends keyof AppTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppTabParamList, T>,
    RootStackScreenProps<'TabsStack'>
  >;

const AppNavigator = () => {
  return (
    <TabsStack.Navigator
      screenOptions={{tabBarShowLabel: false, tabBarHideOnKeyboard: true}}>
      <TabsStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}></TabsStack.Screen>
      <TabsStack.Screen
        name="Cart"
        component={CartScreen}
        options={{headerShown: false}}></TabsStack.Screen>
    </TabsStack.Navigator>
  );
};

export default AppNavigator;
