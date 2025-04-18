import {BACKGROUND_THEME, TEXT_THEME} from '../..//theme/Colors';
// import { RootState } from "@/redux/store";
import React, {useState} from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
// import { useSelector } from "react-redux";
import {AUIThemedText} from './AUIThemedText';
import {AUIThemedView} from './AUIThemedView';
import AUIImage from './AUIImage';
// import { t } from "i18next";

interface DropdownItem {
  label: string;
  value: string | number;
}
type Props = {
  label: string;
  list: DropdownItem[];
  value: string | number | any | null | undefined;
  setValue: Function;
  labelField?: string;
  valueField?: string;
  style?: any;
  placeholder?: string;
  position?: 'auto' | 'bottom' | 'top';
  listWithIcon?: boolean;
  iconField?: string;
  renderLeftIcon?: any;
  labelStyles?: TextStyle;
  itemLabelStyle?: TextStyle;
  isSearchable?: boolean;
  extrastyle?: StyleProp<ViewStyle>;
};

const DropdownComponent = ({
  label,
  list,
  value,
  setValue,
  labelField = 'label',
  valueField = 'value',
  style,
  listWithIcon,
  placeholder,
  position = 'bottom',
  iconField = 'iconUri',
  renderLeftIcon,
  labelStyles,
  itemLabelStyle,
  extrastyle,
  isSearchable = true,
}: Props) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={style}>
      {label && (
        <AUIThemedText
          numberOfLines={1}
          style={[
            styles.label,
            labelStyles,
            {color: TEXT_THEME.light.primary},
          ]}>
          {label}
        </AUIThemedText>
      )}
      <Dropdown
        style={[
          styles.dropdown,
          extrastyle,
          {backgroundColor: '#ffffff'},
          isFocus && {borderColor: '#CDD2D9'},
        ]}
        placeholderStyle={[
          styles.placeholderStyle,
          {color: TEXT_THEME.light.secondary},
        ]}
        selectedTextStyle={[
          styles.selectedTextStyle,
          {color: TEXT_THEME.light.secondary},
        ]}
        inputSearchStyle={[
          styles.inputSearchStyle,
          {
            // backgroundColor: BACKGROUND_THEME[theme].background,
            color: TEXT_THEME.light.secondary,
          },
        ]}
        iconStyle={styles.iconStyle}
        data={list}
        search={isSearchable}
        maxHeight={200}
        labelField={labelField || 'label'}
        valueField={valueField || 'value'}
        placeholder={!isFocus ? placeholder || ` ${'select'}` : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item: any) => {
          setValue(item);
          setIsFocus(false);
        }}
        mode="modal"
        keyboardAvoiding={true}
        // dropdownPosition={position}
        renderLeftIcon={
          renderLeftIcon
            ? () => (
                <AUIImage
                  style={{
                    borderRadius: 50,
                    width: 30,
                    height: 30,
                    marginRight: 3,
                  }}
                  source={{
                    // @ts-ignore
                    uri: list.find((x: any) => x[valueField] === value)[
                      iconField
                    ],
                  }}
                />
              )
            : () => null
        }
        renderItem={item =>
          listWithIcon ? (
            <RenderItemWithIcon
              item={item}
              labelField={labelField}
              iconField={iconField}
              itemLabelStyle={itemLabelStyle}
            />
          ) : (
            <RenderDefaultItem item={item} labelField={labelField} />
          )
        }
        containerStyle={{
          height: 300,
          borderWidth: 1,
          borderColor: '#CDD2D9',
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default DropdownComponent;

interface RenderItemWithIconProps {
  item: any;
  labelField: any;
  iconField: any;
  itemLabelStyle: any;
  theme?: any;
}

const RenderItemWithIcon = ({
  item,
  labelField,
  iconField,
  itemLabelStyle,
  theme,
}: RenderItemWithIconProps) => (
  <AUIThemedView
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      gap: 3,
      paddingVertical: 5,
      paddingHorizontal: 15,
      backgroundColor: 'white',
    }}>
    <AUIThemedText style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
      {item[labelField]}
    </AUIThemedText>
  </AUIThemedView>
);

const RenderDefaultItem = ({item, labelField}: any) => (
  <AUIThemedText style={styles.renderDefaultItem}>
    {item[labelField]}
  </AUIThemedText>
);
const styles = StyleSheet.create({
  dropdown: {
    paddingHorizontal: 5,
    paddingVertical: 10,

    // flex: 1,
  },

  icon: {
    marginRight: 5,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Montserrat-bold',
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  placeholderStyle: {
    fontSize: 16,
    fontFamily: 'Montserrat-regular',
    color: '#576780',
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: 'Montserrat-regular',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 50,
    fontSize: 16,
    borderColor: '#CDD2D9',
    fontFamily: 'Montserrat-regular',
    // borderWidth: 1,
  },
  renderDefaultItem: {
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
