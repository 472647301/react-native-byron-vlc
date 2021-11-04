/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import ByronVlc from 'react-native-byron-vlc';

const {width} = Dimensions.get('window');

const App = () => {
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    // setTimeout(() => {
    //   setPaused(true)
    // }, 15000)
  }, []);
  const onLoad = event => {
    console.log(' >> onLoad:', event);
  };
  const onBuffer = event => {
    console.log(' >> onBuffer:', event);
  };
  const onError = event => {
    console.log(' >> onError:', event);
  };
  const onProgress = event => {
    console.log(' >> onProgress:', event);
  };
  const onEnd = event => {
    console.log(' >> onEnd:', event);
  };
  return (
    <SafeAreaView style={styles.app}>
      <Text style={styles.text}>react-native-byron-vlc</Text>
      <ByronVlc
        style={{width, height: 240, backgroundColor: '#000'}}
        source={{
          // uri: 'https://juejin.cn',
          uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
          // uri: 'https://pan.baidu.com/api/streaming?app_id=250528&type=M3U8_AUTO_720&check_blue=1&fsid=1001947624368288&nopath=1&casttype=m3u8_auto_720&devuid=ef0dccb4ee31aa948425a74be91f99aa2c08fbe3&cuid=FFD6D1A31BFCCB51E38A48144E9F2F9A1FD637893OSGDRSLHDA&version=11.14.5&logid=MjAyMTExMDMxOTEwMTQ2ODEsMGY2MDcyNjRmYzYzMThhOTJiOWUxM2M2NWRiN2NkM2MsNDI2Ng==&network_type=wifi&vip=0&rand=37e4ee5f6f97bd50fbcc732673cf27e13ab1b449&time=1635937814&rand2=37dc83e7a2be0b073b176a652286f185063fd9ef&&freeisp=0&queryfree=0&apn_id=1_0&sign=3888FC5220767483C04365AB6B6F2AC893E3093B&timestamp=1635937814&channel=iPhone_14.8_iPhone8_chunlei_1099a_wifi&zid=P33qKPLt1GMHQOxxwQY1E1x1U5Taqv2_x33NJLEG2HL545iF3Kd9mKi_nJ8eTId5XKAzryRTx-tBNYhnNBTH8IA&clienttype=1&from=third&thirdtoken=jHu8Haenr5nKfi7nMmcIadjZ0/0EvPVLU9DuCjI0mFUm%2B/8ZfiwIYV26BodTETTHf6HP4kiffGM4tGvqIUr41XFhze%2BlSorjVGTE3I9Mq%2Bk%3D'
        }}
        onLoad={onLoad}
        onBuffer={onBuffer}
        onError={onError}
        onProgress={onProgress}
        onEnd={onEnd}
        paused={paused}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 16,
    marginVertical: 30,
  },
});

export default App;
