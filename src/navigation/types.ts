import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  Auth: undefined;
  App: NavigatorScreenParams<AppTabParamList>;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type AppTabParamList = {
  Home: undefined;
  Cart: undefined;
};

// Combine all param list types for useNavigation hook
export type AppNavigationProps = RootStackParamList &
  AuthStackParamList &
  AppTabParamList;
