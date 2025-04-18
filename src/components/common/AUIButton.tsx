import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import {buttonStyle} from '../../theme/Styles';
import {AUIThemedText} from './AUIThemedText';
import {AUIThemedView} from './AUIThemedView';
import {TEXT_THEME} from '../../theme/Colors';

interface CustomButtonProps {
  style?: object;
  extraStyles?: object;
  onPress: () => void;
  disabled?: boolean;
  background: string;
  title?: string;
  loadingDuration?: any;
  AddImage?: boolean;
}

const AIButton: React.FC<CustomButtonProps> = ({
  style,
  onPress,
  disabled = false,
  background,
  title,
  loadingDuration = 100,
  AddImage = false,
  extraStyles,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);

  const handlePress = () => {
    setButtonPressed(true);
    setLoading(true);

    setTimeout(() => {
      onPress();

      setLoading(false);
      setButtonPressed(false);
    }, loadingDuration);
  };

  const buttonOpacity = disabled || buttonPressed ? 0.5 : 1;
  const textOpacity = disabled || buttonPressed ? 0.5 : 1;

  return (
    <TouchableOpacity
      style={[
        buttonStyle.button,
        style,
        {backgroundColor: background, opacity: buttonOpacity},
      ]}
      onPress={handlePress}
      disabled={disabled || buttonPressed}>
      <AUIThemedView
        style={{
          backgroundColor: 'transparent',
          flex: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          ...extraStyles,
        }}>
        <AUIThemedText
          style={[
            buttonStyle.buttonText,
            {color: TEXT_THEME.light.gray},
            {opacity: textOpacity},
          ]}
          type="defaultSemiBold">
          {title}
        </AUIThemedText>
        {loading && (
          <ActivityIndicator
            size="small"
            style={{
              position: 'absolute',
              zIndex: 1,
              alignSelf: 'center',
              opacity: 0.7,
            }}
          />
        )}
      </AUIThemedView>
    </TouchableOpacity>
  );
};

export default AIButton;
