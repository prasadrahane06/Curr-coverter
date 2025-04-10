// LoginScreen.tsx
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../navigation/type';

const LoginScreen = () => {
  const navigation = useNavigation<AuthStackParamList>();

  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Login"
        onPress={() => navigation.reset({index: 0, routes: [{name: 'App'}]})}
      />
    </View>
  );
};

export default LoginScreen;
