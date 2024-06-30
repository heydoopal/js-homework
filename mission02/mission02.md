# mission02 과제 내용

**썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직을 작성해주세요.**

---

![](https://velog.velcdn.com/images/zidoopal/post/cf6b8f83-9060-4ded-a845-06df38e94ef4/image.gif)

# main.js

```javascript
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
```

- `nav` 에 이벤트 위임
- `handleClick` 함수는 클릭된 썸네일을 기반으로 배경 색상, 이미지, 텍스트, 오디오를 변경함
  - 클릭된 `li` 요소를 찾고 모든 `li`요소에서 `is-active` 클래스를 제거한 후 클릭된 요소에 추가
  - `setBgColor` / `setImage` / `setNameText` 함수를 호출해서 각 요소를 업데이트 함
  - 오디오 파일 경로를 설정하고 재생

<br>

## 유틸리티 함수

```javascript
// setBgColor.js
export function setBgColor(color) {
  document.body.style.background = `linear-gradient(to bottom, ${color[0]},${color[1]})`;
}
```

```javascript
// setImage.js
export function setImage(target, data) {
  target.src = `./assets/${data.name.toLowerCase()}.jpeg`;
  target.alt = data.alt;
}
```

```javascript
// setNameText.js
export function setNameText(target, name) {
  target.textContent = name;
}
```

- 각 유틸리티 함수는 따로 파일을 분리하여 import 해오는 모듈 방식 사용

<br>

## 회고

이번 과제를 통해 다시 한 번 함수 분리와 이벤트 위임에 대한 복습이 이루어져서 좋은 기회라고 생각이 들면서도 여전히 많은 복습이 필요하고 연습이 정말 많이 필요한 것 같다는 생각이 들었습니다. 아직도 반 이상 이해가 되지 않아서 지난 수업 코드를 계속 뜯어보면서 겨우 해결했습니당
오디오 파일 첨부하는 부분에서는 꽤나 헤맸습니다 ㅎㅎ.ㅠ
