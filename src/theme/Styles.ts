import {StatusBar, StyleSheet} from 'react-native';
export const initialPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  iosIndexHeader: {
    top: -71,
    width: '100%',
    height: 208,
    backgroundColor: 'transparent',
    borderRadius: 104,
  },
  iosTitle: {
    marginLeft: -87,
    top: 150,
    fontSize: 18,
    fontWeight: '700',

    lineHeight: 21,
    left: '50%',
    position: 'absolute',
  },
  title: {
    top: 120,
    fontSize: 18,
    fontWeight: '700',

    lineHeight: 21,
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
  },
});
export const defaultStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
  },
});
export const imageStyles = StyleSheet.create({
  defaultIcon: {
    height: 50,
    width: 50,
  },
  defaultPreview: {
    height: 300,
    width: '100%',
  },
});
export const loaderStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'gray',
    width: '100%',
    opacity: 0.5,
    display: 'none',
    zIndex: 1000,
  },
});
