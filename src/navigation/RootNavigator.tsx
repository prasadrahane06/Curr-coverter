import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator';
import {NavigatorScreenParams} from '@react-navigation/native';
import {AppTabParamList} from '../navigation/AppNavigator';

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<AppTabParamList>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabsStack" component={AppNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
