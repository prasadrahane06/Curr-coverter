import AUIImage from '@components/common/AUIImage';
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
} from 'react-native';

interface Item {
  icon: ImageSourcePropType;
  label: string;
}

interface FeatureGridSectionProps {
  title?: string;
  items?: Item[];
  bannerImage?: any; // Replace 'any' with proper type for AUIImage path if available
  bannerStyle?: ImageStyle;
}

const FeatureGridSection: React.FC<FeatureGridSectionProps> = ({
  title = 'Sanchar',
  items = [],
  bannerImage,
  bannerStyle = {},
}) => {
  // Default items if none provided
  const defaultItems: Item[] = [
    {icon: require('@assets/Icons/Recharge.png'), label: 'dth'},
    {icon: require('@assets/Icons/Recharge.png'), label: 'dth'},
    {icon: require('@assets/Icons/Recharge.png'), label: 'dth'},
    {icon: require('@assets/Icons/Recharge.png'), label: 'dth'},
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.contentContainer}>
        {/* Left Column */}
        <View style={styles.column}>
          {displayItems.slice(0, 2).map((item, index) => (
            <View key={`left-${index}`}>
              <Image
                source={item.icon}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.label}>{item.label}</Text>
            </View>
          ))}
        </View>

        {/* Right Column */}
        <View style={styles.column}>
          {displayItems.slice(2, 4).map((item, index) => (
            <View key={`right-${index}`}>
              <Image
                source={item.icon}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.label}>{item.label}</Text>
            </View>
          ))}
        </View>
        {/* Banner */}
        {bannerImage && (
          <View style={styles.bannerContainer}>
            <AUIImage
              path={bannerImage}
              style={[styles.banner, bannerStyle]}
              resizeMode="center"
            />
          </View>
        )}
      </View>
    </View>
  );
};

// Define styles with TypeScript
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
  } as ViewStyle,
  column: {
    flexDirection: 'column',
  } as ViewStyle,
  icon: {
    width: 69,
    height: 67,
    marginBottom: 4,
  } as ImageStyle,
  label: {
    fontSize: 12,
    textAlign: 'center',
  } as TextStyle,
  bannerContainer: {
    width: 120,
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
