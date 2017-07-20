import 'react-native';

import React from 'react';
import {
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import S from 'react-native-style-utils';
import anotherS from 'react-native-style-utils';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

var {height, width} = Dimensions.get('window');
if (Platform.OS === 'android') {
  height = height - StatusBar.currentHeight;
}

describe('styles', () => {
  it('should return container', () => {
    expect(S.container).toEqual({"flex": 1});
  });

  it('should return fullWidth', () => {
    expect(S.fullWidth).toEqual({
      width: width,
    });
  });

  it('should return fullHeight', () => {
    expect(S.fullHeight).toEqual({
      height: height,
    });
  });

  it('should return fullScreen', () => {
    expect(S.fullScreen).toEqual({
      width: width,
      height: height,
    });
  });

  it('should return alignCenter', () => {
    expect(S.alignCenter).toEqual({
      justifyContent: 'center',
      alignItems: 'center',
    });
  });

  it('should return alignStartCenter', () => {
    expect(S.alignStartCenter).toEqual({
      justifyContent: 'flex-start',
      alignItems: 'center',
    });
  });

  it('should return alignEndCenter', () => {
    expect(S.alignEndCenter).toEqual({
      justifyContent: 'flex-end',
      alignItems: 'center',
    });
  });

  it('should return alignCenterStart', () => {
    expect(S.alignCenterStart).toEqual({
      justifyContent: 'center',
      alignItems: 'flex-start',
    });
  });

  it('should return alignCenterEnd', () => {
    expect(S.alignCenterEnd).toEqual({
      justifyContent: 'center',
      alignItems: 'flex-end',
    });
  });

  it('should return alignStartStart', () => {
    expect(S.alignStartStart).toEqual({
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    });
  });

  it('should return row', () => {
    expect(S.row).toEqual({
      flexDirection: 'row',
    });
  });

  it('should return column', () => {
    expect(S.column).toEqual({
      flexDirection: 'column',
    });
  });

  it('should return absoluteBottom', () => {
    expect(S.absoluteBottom).toEqual({
      position: 'absolute',
      bottom: 0,
    });
  });

  it('should return absoluteTop', () => {
    expect(S.absoluteTop).toEqual({
      position: 'absolute',
      top: 0,
    });
  });

  it('should return line', () => {
    expect(S.line).toEqual({
      alignSelf: 'stretch',
    });
  });
});

describe('define styles', () => {
  it('shoud throw an Error when style is not defined', () => {
    expect(() => S.setStyle('someStyle')).toThrowError("Style must be an object");
  });

  it('shoud throw an Error when style is an empty object', () => {
    expect(() => S.setStyle('someStyle', {})).toThrowError("Style must have at least one key");
  });

  it('shoud return the style defined', () => {
    S.setStyle('someStyle', {
      margin: 10,
    })
    expect(S.someStyle).toEqual({
      margin: 10,
    });
  });

  it('shoud share styles among instances', () => {
    S.setStyle('someStyle', {
      margin: 10,
    })
    expect(anotherS.someStyle).toEqual({
      margin: 10,
    });
  });
});
