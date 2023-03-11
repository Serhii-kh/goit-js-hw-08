import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const setCurrentTime = e => {
  localStorage.setItem('videoplayer-current-time', e.seconds);
};
player.on('timeupdate', throttle(setCurrentTime, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(currentTime);
