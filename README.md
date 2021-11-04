# react-native-byron-vlc

## Getting started

`$ npm install react-native-byron-vlc --save`

#### iOS

[ijkplayer from https://github.com/iOSDevLog/ijkplayer](https://github.com/iOSDevLog/ijkplayer)
1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-byron-vlc` and add `RNByronVlc.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNByronVlc.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.byronvlc.RNByronVlcPackage;` to the imports at the top of the file
  - Add `new RNByronVlcPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-byron-vlc'
  	project(':react-native-byron-vlc').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-byron-vlc/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-byron-vlc')
  	```


## Usage
```javascript
import RNByronVlc from 'react-native-byron-vlc';

// TODO: What to do with the module?
RNByronVlc;
```
