import {APP_THEME, TEXT_THEME} from '../../theme/Colors';
import {imageStyles, inputFieldStyle} from '../../theme/Styles';

import {Text, TextInput, TextInputProps, View} from 'react-native';
import {AUIThemedText} from './AUIThemedText';
import AUIImage from './AUIImage';

interface CustomInputProps extends TextInputProps {
  label?: string;
  error?: string;
  inputStyle?: object;
  autoFocus?: boolean;
  style?: object;
  verifiedImage?: boolean;
  imageStyles?: object;
  TargetwordCount?: number;
  wordCount?: number;
  showWordCount?: boolean;
}

const AUIInputField: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  style,
  inputStyle,
  autoFocus,
  keyboardType,
  multiline,
  numberOfLines,
  verifiedImage = false,
  TargetwordCount,
  wordCount,
  imageStyles,
  showWordCount = false,

  ...props
}) => {
  // const theme = useSelector((state: RootState) => state.global.theme);

  return (
    <View style={[inputFieldStyle.container, style]}>
      {label && (
        <AUIThemedText
          style={[inputFieldStyle.label, {color: TEXT_THEME.light.primary}]}>
          {label}
        </AUIThemedText>
      )}
      <View style={inputFieldStyle.inputWrapper}>
        <TextInput
          style={[
            multiline || numberOfLines
              ? [inputFieldStyle.multilineInput]
              : inputFieldStyle.input,
            // @ts-ignore
            error && {borderWidth: 1, borderColor: 'red'},
            inputStyle,
            {color: TEXT_THEME.light.secondary, backgroundColor: '#fff'},
          ]}
          placeholder={placeholder}
          placeholderTextColor="#878E99"
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
          autoFocus={autoFocus}
          keyboardType={keyboardType}
          {...props}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
      </View>

      {error && <Text style={inputFieldStyle.error}>{error}</Text>}
    </View>
  );
};

export default AUIInputField;
