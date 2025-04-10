// RegisterScreen.tsx
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../navigation/type';

const RegisterScreen = () => {
  const navigation = useNavigation<AuthStackParamList>();

  return (
    <View>
      <Text>Register Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default RegisterScreen;
