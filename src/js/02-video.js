import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const setCurrentTime = e => {
  localStorage.setItem(LOCALSTORAGE_KEY, e.seconds);
};

player.on('timeupdate', throttle(setCurrentTime, 1000));

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY)
  ? localStorage.getItem(LOCALSTORAGE_KEY)
  : 0;
player.setCurrentTime(currentTime);
