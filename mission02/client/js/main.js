import { data } from './data.js';
import { AudioPlayer } from './audio.js';
import { setBgColor, setImage, setNameText } from '../lib/utils/index.js';

/* 
1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리


이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.
    1. 이벤트 위임
    2. 반복문
*/

const nav = document.querySelector('nav');
const poster = document.querySelector('.visual div img');
const nickName = document.querySelector('.nickName');
const audioPlayer = new AudioPlayer();

function handleClick(e) {
  const targetLi = e.target.closest('li');
  const liList = [...nav.querySelectorAll('li')];

  if (!targetLi) return;

  const index = targetLi.dataset.index - 1;
  const selectedData = data[index];

  liList.forEach((li) => li.classList.remove('is-active'));
  targetLi.classList.add('is-active');

  setBgColor(selectedData.color);
  setImage(poster, selectedData);
  setNameText(nickName, selectedData.name);

  const audioSrc = `./assets/audio/${selectedData.name.toLowerCase()}.m4a`;
  audioPlayer.setSource(audioSrc);
  audioPlayer.play();
}
nav.addEventListener('click', handleClick);
