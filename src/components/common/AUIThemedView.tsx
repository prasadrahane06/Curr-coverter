import {BACKGROUND_THEME} from '../../theme/Colors';
import {View, type ViewProps} from 'react-native';

export type ThemedViewProps = ViewProps & {};

export function AUIThemedView({style, ...otherProps}: ThemedViewProps) {
  return (
    <View
      style={[
        {
          backgroundColor: BACKGROUND_THEME.light.primary,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}
