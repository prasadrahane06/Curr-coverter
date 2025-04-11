import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TabsStackScreenProps} from '../../navigation/AppNavigator';

const HomeScreen = ({navigation, route}: TabsStackScreenProps<'Home'>) => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
