import AUIImage from '@components/common/AUIImage';
import {AUIThemedText} from '@components/common/AUIThemedText';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';

interface Item {
  icon: ImageSourcePropType;
  title: string;
}

interface FeatureGridSectionProps {
  title?: string;
  items?: Item[];
  bannerImage?: any;
  bannerStyle?: ImageStyle;
  onItemPress?: (item: Item) => void;
}

const FeatureGridSection: React.FC<FeatureGridSectionProps> = ({
  title = 'Sanchar',
  items = [],
  bannerImage,
  bannerStyle = {},
  onItemPress,
}) => {
  const defaultItems: Item[] = [
    {icon: require('@assets/Images/no_Image.png'), title: 'noImage'},
    {icon: require('@assets/Images/no_Image.png'), title: 'noImage'},
    {icon: require('@assets/Images/no_Image.png'), title: 'noImage'},
    {icon: require('@assets/Images/no_Image.png'), title: 'noImage'},
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <View style={styles.container}>
      <AUIThemedText type="defaultSemiBold" style={{marginBottom: 4}}>
        {title}
      </AUIThemedText>
      <View style={styles.contentContainer}>
        <View style={styles.column}>
          {displayItems.slice(0, 2).map((item, index) => (
            <View key={`left-${index}`}>
              <TouchableOpacity
                key={item.title}
                onPress={() => onItemPress?.(item)}>
                <Image
                  source={item.icon}
                  style={styles.icon}
                  resizeMode="contain"
                />

                <AUIThemedText
                  type="title"
                  style={{fontFamily: 'Poppins-Regular', textAlign: 'center'}}>
                  {item.title}
                </AUIThemedText>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.column}>
          {displayItems.slice(2, 4).map((item, index) => (
            <View key={`right-${index}`}>
              <TouchableOpacity
                key={item.title}
                onPress={() => onItemPress?.(item)}>
                <Image
                  source={item.icon}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <AUIThemedText
                  type="title"
                  style={{fontFamily: 'Poppins-Regular', textAlign: 'center'}}>
                  {item.title}
                </AUIThemedText>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        {bannerImage && (
          <View style={styles.bannerContainer}>
            <AUIImage
              path={bannerImage}
              style={[styles.banner, bannerStyle]}
              resizeMode="contain"
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 27,
  } as ViewStyle,
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 7,
  } as TextStyle,
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  } as ViewStyle,
  column: {
    flexDirection: 'column',
  } as ViewStyle,
  icon: {
    width: 69,
    height: 67,
    marginBottom: 4,
  } as ImageStyle,
  itemContainer: {
    width: '23%',
    alignItems: 'center',
  },

  bannerContainer: {
    width: '100%',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  } as ViewStyle,
  banner: {
    width: '100%',
    height: 200,
  } as ImageStyle,
});

export default FeatureGridSection;
