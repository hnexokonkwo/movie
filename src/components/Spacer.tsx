import React, {Fragment} from 'react';
import {View, Text} from 'react-native';

interface ISpacer {
    height?: number,
    width?: number,
}

const Spacer =({height, width = 0}: ISpacer) => {
  return (
    <Fragment>
      <View style={{height, width}} />
    </Fragment>
  );
};

export default Spacer;
