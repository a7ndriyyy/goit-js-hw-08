import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector(`iframe`);
const player = new Player(iframe);


const CurrentTimeKey = `video-player-timekey`;
function getCurrentTimeKey(timeKey){
    localStorage.setItem(CurrentTimeKey,timeKey.second);
}
player.on('timeupdate', throttle(getCurrentTimeKey, 1000));

const CurrentTimeValue =  localStorage.setItem(CurrentTimeKey) || 0;
player.setCurrentTime(CurrentTimeValue);

