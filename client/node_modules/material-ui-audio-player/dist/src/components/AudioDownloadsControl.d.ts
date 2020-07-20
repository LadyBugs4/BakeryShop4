import * as React from 'react';
import { IAudioPlayerColors } from './AudioPlayer';
interface IAudioDownloadsControl {
    src: string | string[];
    playerColors: IAudioPlayerColors;
    classNames?: any;
}
export declare const AudioDownloadsControl: React.FunctionComponent<IAudioDownloadsControl>;
declare const _default: React.NamedExoticComponent<IAudioDownloadsControl>;
export default _default;
