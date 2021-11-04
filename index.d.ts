declare module "react-native-byron-vlc" {
  import { ViewProps } from "react-native";

  export interface ByronVlcSource {
    uri: string;
    headers: { [key: string]: string };
    userAgent: string;
    /**
     * VLCMedia options
     */
    options: Array<string>;
  }

  export interface ByronVlcEvent {
    /**
     * 已播时长（毫秒ms单位）
     */
    currentTime: number;
    /**
     * 剩余时长（毫秒ms单位）
     */
    remainingTime: number;
    /**
     * 总时长（毫秒ms单位）
     */
    duration: number;
  }
  export interface ByronVlcProps extends ViewProps {
    src: ByronVlcSource;
    seek: number;
    snapshotPath: string;

    source: Partial<ByronVlcSource> | number;
    muted: boolean;
    volume: number;
    onLoadStart: (event: { src: Partial<ByronVlcSource> }) => void;
    onLoad: (event: ByronVlcEvent) => void;
    onBuffer: (event: ByronVlcEvent) => void;
    onError: () => void;
    onProgress: (event: ByronVlcEvent) => void;
    onPause: () => void;
    onStop: () => void;
    onEnd: () => void;
    scaleX: number;
    scaleY: number;
    translateX: number;
    translateY: number;
    rotation: number;
  }
  export default class ByronVlc extends React.Component<
    Partial<ByronVlcProps>
  > {}
}
