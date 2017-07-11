import {
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';

var {height, width} = Dimensions.get('window');
if (Platform.OS === 'android') {
  height = height - StatusBar.currentHeight;
}

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  fullWidth: {
    width: width,
  },
  fullHeight: {
    height: height,
  },
  fullScreen: {
    width: width,
    height: height,
  },
  alignCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignStartCenter: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  alignEndCenter: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  alignCenterStart: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  alignCenterEnd: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  alignStartStart: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  absoluteBottom: {
    position: 'absolute',
    bottom: 0,
  },
  absoluteTop: {
    position: 'absolute',
    top: 0,
  },
  line: {
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
});
