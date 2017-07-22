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

const styles = {
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
  },
};

class StyleUtils {
  constructor() {
    this.setStyle = this.setStyle.bind(this);
    this._styles = {...styles};
    Object.keys(styles).forEach((k) => {
      this.setStyle(k, styles[k]);
    });
  }

  _styles: {}

  setStyle(name, style) {
    if (typeof style !== "object") throw new Error("Style must be an object");
    if (Object.keys(style).length <= 0) throw new Error("Style must have at least one key");
    this._styles = {...this._styles, [name]: style};
    this.styles = StyleSheet.create(this._styles);
    Object.defineProperty(this, name, { get: () => this.styles[name], configurable: true });
  }
}

export default StyleUtils;
