import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppTabParamList} from '../../navigation/type';

const HomeScreen = () => {
  const navigation = useNavigation<AppTabParamList>();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};

export default HomeScreen;
