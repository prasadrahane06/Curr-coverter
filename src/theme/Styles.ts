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
export const inputFieldStyle = StyleSheet.create({
  container: {
    // backgroundColor: "#ffffff",
  },

  label: {
    fontSize: 18,
    fontFamily: 'Montserrat-bold',
    color: '#576780',
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  input: {
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Montserrat-regular',
    width: '100%',
    height: 48,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CDD2D9',
    opacity: 1,
  },
  multilineInput: {
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Montserrat-regular',
    width: '100%',
    height: 372,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CDD2D9',
    opacity: 1,
    textAlignVertical: 'top',
  },
  errorContainer: {
    borderWidth: 1,
    borderColor: 'red',
    width: 85,
    height: 85,
    paddingHorizontal: 5,
    borderRadius: 5,
    opacity: 1,
  },
  wordCount: {
    alignSelf: 'flex-end',
    marginTop: 8,
    fontWeight: '500',
    fontSize: 12,
    fontFamily: 'Montserrat-regular',
  },
  error: {
    marginTop: 5,
    fontSize: 16,
    color: 'red',
    marginLeft: 5,
    fontFamily: 'Poppins-regular',
    letterSpacing: 1,
  },
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  verifiedIcon: {
    position: 'absolute',
    right: 35,
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
});

export const buttonStyle = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: 'rgba(205, 210, 217, 0.5)',
    shadowColor: '#031530',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.08,
    shadowRadius: 30,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    flex: 1,
    position: 'absolute',
    bottom: 0,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 56,
    borderRadius: 12,
    opacity: 1,
  },
  buttonInner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 5,
    width: 680,
    height: 40,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 20,
    // fontWeight: '800',
    justifyContent: 'center',
  },
  regularText: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'left',
    justifyContent: 'flex-start',
  },
});
