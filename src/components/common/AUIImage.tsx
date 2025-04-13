import {imageStyles} from '../../theme/Styles';
import React from 'react';
import {Image} from 'react-native';
import no_Image from '@assets/Images/no_Image.png';

const AUIImage = ({path, style, preview, icon, ...props}: any) => {
  let source = null;

  if (typeof path === 'object') {
    if (path?.uri) {
      source = path?.uri;
    } else if (path?.localUri) {
      source = path?.localUri;
    } else {
      source = null;
    }
  } else {
    source = path;
  }

  return (
    <Image
      source={source}
      defaultSource={no_Image}
      style={
        icon
          ? [imageStyles.defaultIcon, style]
          : [imageStyles.defaultPreview, style]
      }
      {...props}
    />
  );
};

export default AUIImage;
