import {APP_THEME} from '../../theme/Colors';
import {StyleSheet, View, Dimensions} from 'react-native';

interface UIBottomContainer {
  style?: object;
  children?: React.ReactNode;
}

export const AUIBottomContainer: React.FC<UIBottomContainer> = ({
  style,
  children,
  ...otherProps
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: APP_THEME.Background,
        },
        styles.container,
        style,
      ]}
      {...otherProps}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    bottom: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
