import {AUIThemedText} from '@components/common/AUIThemedText';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type FeatureItem = {
  title: string;
  icon: any;
  onPress?: () => void;
};

type Props = {
  sectionTitle: string;
  items: FeatureItem[];
  onItemPress?: (item: FeatureItem) => void;
  containerStyle?: ViewStyle;
};

const FeatureSection: React.FC<Props> = ({
  sectionTitle,
  items,
  onItemPress,
  containerStyle,
}) => {
  return (
    <View style={[styles.sectionContainer, containerStyle]}>
      <AUIThemedText type="defaultSemiBold" style={{marginBottom: 4}}>
        {sectionTitle}
      </AUIThemedText>
      <View style={styles.gridContainer}>
        {items.map(item => (
          <TouchableOpacity
            key={item.title}
            onPress={() => onItemPress?.(item)}
            style={styles.itemContainer}>
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
        ))}
      </View>
    </View>
  );
};

export default FeatureSection;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '23%',
    alignItems: 'center',
  },
  icon: {
    width: 69,
    height: 67,
    marginBottom: 4,
  },
});
