# webpack-boilerplate

웹팩 보일러플레이트입니다.

## 기능

- 개발, 배포를 위한 npm 스크립트

  - `npm run start`
  - `npm run build`

- 바벨을 이용해 ES5로 트랜스파일링

  - corejs3 pollyfill

- 스타일링 파일(css, scss)를 js에서 로딩해 사용 가능

  - `css-loader`에 의해 생성된 스타일 시트를 돔에 추가(style 태그)

- 작성한 index.html 불러오기
  - `HTMLWebpackPlugin` 이용
