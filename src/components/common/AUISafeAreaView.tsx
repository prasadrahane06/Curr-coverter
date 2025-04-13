import {defaultStyles} from '../../theme/Styles';
import {SafeAreaView, type ViewProps} from 'react-native';

export type ThemedViewProps = ViewProps & {
  style?: any;
  edges?: any;
};

export function AUISafeAreaView({
  style,
  edges = [],
  ...otherProps
}: ThemedViewProps) {
  return (
    <SafeAreaView style={[defaultStyles.safeAreaView, style]} {...otherProps} />
  );
}
