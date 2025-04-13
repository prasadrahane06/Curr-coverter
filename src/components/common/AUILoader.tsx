import {APP_THEME} from '@theme/Colors';
import {loaderStyles} from '@theme/Styles';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {AUIThemedView} from '@components/common/AUIThemedView';

export default function AUILoader() {
  return (
    <AUIThemedView style={[loaderStyles.container, {display: 'flex'}]}>
      <ActivityIndicator
        size="large"
        color={APP_THEME.headerBackground}
        shouldRasterizeIOS
      />
    </AUIThemedView>
  );
}
