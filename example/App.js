/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect, useRef} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import ByronVlc from 'react-native-byron-vlc';

const {width} = Dimensions.get('window');

const App = () => {
  const vlcRef = useRef();
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isDragSlider, setIsDragSlider] = useState(false);

  useEffect(() => {}, []);
  const onLoad = event => {
    console.log(' >> onLoad:', event);
    setDuration(event.duration);
    setCurrentTime(event.currentTime);
  };
  const onBuffer = event => {
    console.log(' >> onBuffer:', event);
  };
  const onError = event => {
    console.log(' >> onError:', event);
  };
  const onProgress = event => {
    console.log(' >> onProgress:', event);
    setCurrentTime(event.currentTime);
    if (paused) setPaused(false);
    if (!isDragSlider && progress) {
      setProgress(0);
    }
  };
  const onEnd = event => {
    console.log(' >> onEnd:', event);
  };
  const onSlidingStart = () => {
    setIsDragSlider(true);
  };
  const onValueChange = val => {
    setProgress(val);
  };
  const onSlidingComplete = val => {
    console.log(' >> onSlidingComplete:', val, progress);
    setIsDragSlider(false);
    vlcRef.current?.setNativeProps({
      seek: val,
    });
  };
  let _progress = 0;
  if (isDragSlider || progress) {
    _progress = progress;
  } else if (currentTime / duration) {
    _progress = currentTime / duration;
  }
  const nowTime = getDurationTime(
    progress ? (duration / 1000) * progress : currentTime / 1000,
  );
  const totalTime = getDurationTime(duration / 1000);
  return (
    <SafeAreaView style={styles.app}>
      <Text style={styles.text}>vlc {paused ? 'stoping' : 'playing'}</Text>
      <Text style={styles.text}>
        {nowTime.h
          ? `${nowTime.h}:${nowTime.m}:${nowTime.s}`
          : `${nowTime.m}:${nowTime.s}`}
        /
        {totalTime.h
          ? `${totalTime.h}:${totalTime.m}:${totalTime.s}`
          : `${totalTime.m}:${totalTime.s}`}
      </Text>
      <ByronVlc
        ref={vlcRef}
        style={styles.vlc}
        source={{
          // uri: 'https://juejin.cn',
          // uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
          uri: 'https://pan.baidu.com/api/streaming?app_id=250528&type=M3U8_AUTO_720&check_blue=1&fsid=1001947624368288&nopath=1&casttype=m3u8_auto_720&devuid=ef0dccb4ee31aa948425a74be91f99aa2c08fbe3&cuid=FFD6D1A31BFCCB51E38A48144E9F2F9A1FD637893OSGDRSLHDA&version=11.14.5&logid=MjAyMTExMDMxOTEwMTQ2ODEsMGY2MDcyNjRmYzYzMThhOTJiOWUxM2M2NWRiN2NkM2MsNDI2Ng==&network_type=wifi&vip=0&rand=37e4ee5f6f97bd50fbcc732673cf27e13ab1b449&time=1635937814&rand2=37dc83e7a2be0b073b176a652286f185063fd9ef&&freeisp=0&queryfree=0&apn_id=1_0&sign=3888FC5220767483C04365AB6B6F2AC893E3093B&timestamp=1635937814&channel=iPhone_14.8_iPhone8_chunlei_1099a_wifi&zid=P33qKPLt1GMHQOxxwQY1E1x1U5Taqv2_x33NJLEG2HL545iF3Kd9mKi_nJ8eTId5XKAzryRTx-tBNYhnNBTH8IA&clienttype=1&from=third&thirdtoken=jHu8Haenr5nKfi7nMmcIadjZ0/0EvPVLU9DuCjI0mFUm%2B/8ZfiwIYV26BodTETTHf6HP4kiffGM4tGvqIUr41XFhze%2BlSorjVGTE3I9Mq%2Bk%3D',
        }}
        onLoad={onLoad}
        onBuffer={onBuffer}
        onError={onError}
        onProgress={onProgress}
        onEnd={onEnd}
        paused={paused}
      />
      <Slider
        minimumValue={0}
        maximumValue={1}
        value={_progress}
        minimumTrackTintColor={'#8A6DFF'}
        maximumTrackTintColor="rgba(255, 255, 255, 0.66)"
        onSlidingComplete={onSlidingComplete}
        onValueChange={onValueChange}
        onSlidingStart={onSlidingStart}
        thumbTintColor={'#fff'}
        style={styles.slider}
      />
      <TouchableOpacity style={styles.start} onPress={() => setPaused(false)}>
        <Text style={[styles.text, {marginVertical: 0}]}>START</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.stop} onPress={() => setPaused(true)}>
        <Text style={[styles.text, {marginVertical: 0}]}>STOP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

function getDurationTime(time) {
  const h = Math.floor(time / 3600);
  const m = Math.floor((time / 60) % 60);
  const s = Math.floor(time % 60);

  return {h, m: m < 10 ? '0' + m : m, s: s < 10 ? '0' + s : s};
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#201A25',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 20,
  },
  vlc: {
    width,
    height: 240,
    backgroundColor: '#fff',
  },
  slider: {
    width: width - 80,
    height: 30,
    marginVertical: 20,
  },
  start: {
    width: width - 80,
    backgroundColor: '#7655FD',
    height: 44,
    borderRadius: 12,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stop: {
    width: width - 80,
    backgroundColor: '#FF3030',
    height: 44,
    borderRadius: 12,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
