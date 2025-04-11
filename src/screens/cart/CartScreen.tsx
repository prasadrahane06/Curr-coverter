import {View, Text} from 'react-native';
import {TabsStackScreenProps} from '../../navigation/AppNavigator';

const CartScreen = ({navigation, route}: TabsStackScreenProps<'Cart'>) => {
  return (
    <View>
      <Text>Cart Screen</Text>
    </View>
  );
};

export default CartScreen;
