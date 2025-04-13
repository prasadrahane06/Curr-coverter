import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import React from 'react';
import AUIImage from '@components/common/AUIImage';
import {AUIThemedText} from '@components/common/AUIThemedText';
import {APP_THEME} from '../../theme/Colors';

type HeaderCardProps = {
  greetingText: string;
  userNameText: string;
  profileImage: any;
  walletImage: any;
  notificationImage: any;
  shoppingCartImage: any;
  onProfilePress?: () => void;
  onWalletPress?: () => void;
  onShoppingCartPress?: () => void;
  onNotificationPress?: () => void;
  containerStyle?: ViewStyle;
};

const HeaderCard: React.FC<HeaderCardProps> = ({
  greetingText,
  userNameText,
  profileImage,
  walletImage,
  notificationImage,
  shoppingCartImage,
  onProfilePress,
  onWalletPress,
  onShoppingCartPress,
  onNotificationPress,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.ImageWrapper} onPress={onProfilePress}>
          <AUIImage
            path={profileImage}
            style={{width: 52, height: 52}}
            contentFit="contain"
          />
        </TouchableOpacity>
        <View>
          <AUIThemedText type="default">{greetingText}</AUIThemedText>
          <AUIThemedText type="default">{userNameText}</AUIThemedText>
        </View>
      </View>
      <View style={styles.ImageContainer}>
        <TouchableOpacity style={styles.ImageWrapper} onPress={onWalletPress}>
          <AUIImage
            path={walletImage}
            contentFit="contain"
            style={{width: 32, height: 32}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ImageWrapper}
          onPress={onNotificationPress}>
          <AUIImage
            path={notificationImage}
            contentFit="contain"
            style={{width: 32, height: 32}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ImageWrapper}
          onPress={onShoppingCartPress}>
          <AUIImage
            path={shoppingCartImage}
            contentFit="contain"
            style={{width: 32, height: 32}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: APP_THEME.headerBackground,
  },
  profileContainer: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  ImageWrapper: {
    // flex: 1,
  },
  ImageContainer: {
    flexDirection: 'row',
    gap: 1,
    alignItems: 'center',
  },
});
