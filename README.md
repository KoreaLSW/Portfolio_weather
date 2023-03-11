# 날씨알리미 프로젝트

#### 📝 개요
+ KaKaoMap API와 OpenWeather API를 사용해서 날씨알리미 프로젝트를 해보았습니다.
+ 현재기온, 시간별 및 날짜별 기온, 위치별 기온의 기능을 만들었습니다.
+ TanStack Query라이브러리를 사용하여 상태관리를 하였습니다.

#### ⚒ 사용 기술
+ HTML, CSS, JAVASCRIPT, REACT
+ Axios, React-icons, TanStack Query

#### 🔗 공유 링크
https://friendly-torrone-28699c.netlify.app/

#### 📗  파일 구조
📦src <br/>
 ┣ 📂api <br/>
 ┃ ┗ 📜weatherAPIs.js <br/>
 ┣ 📂component <br/>
 ┃ ┣ 📂clock <br/>
 ┃ ┃ ┣ 📜Clock.jsx <br/>
 ┃ ┃ ┗ 📜Clock.module.css <br/>
 ┃ ┣ 📂navbar <br/>
 ┃ ┃ ┣ 📜Navbar.jsx <br/>
 ┃ ┃ ┗ 📜Navbar.module.css <br/>
 ┃ ┗ 📂notfound <br/>
 ┃ ┃ ┣ 📜NotFound.jsx <br/>
 ┃ ┃ ┗ 📜NotFound.module.css <br/>
 ┣ 📂hooks <br/>
 ┃ ┗ 📜useMapWeather.jsx <br/>
 ┣ 📂javascript <br/>
 ┃ ┣ 📜ui.js <br/>
 ┃ ┗ 📜unixTimeConvert.js <br/>
 ┣ 📂pages <br/>
 ┃ ┣ 📂home <br/>
 ┃ ┃ ┣ 📜Home.jsx <br/>
 ┃ ┃ ┗ 📜Home.module.css <br/>
 ┃ ┣ 📂location <br/>
 ┃ ┃ ┣ 📜Location.jsx <br/>
 ┃ ┃ ┣ 📜Location.module.css <br/>
 ┃ ┃ ┣ 📜LocationDetail.jsx <br/>
 ┃ ┃ ┗ 📜LocationDetail.module.css <br/>
 ┃ ┗ 📂weather <br/>
 ┃ ┃ ┣ 📜Weather.jsxv <br/>
 ┃ ┃ ┣ 📜Weather.module.css <br/>
 ┃ ┃ ┣ 📜WeatherDetail.jsx <br/>
 ┃ ┃ ┣ 📜WeatherDetail.module.css <br/>
 ┃ ┃ ┣ 📜WeatherItem.jsx <br/>
 ┃ ┃ ┗ 📜WeatherItem.module.css <br/>
 ┣ 📜App.css <br/>
 ┣ 📜App.js <br/>
 ┣ 📜App.test.js <br/>
 ┣ 📜index.css <br/>
 ┣ 📜index.js <br/>
 ┣ 📜logo.svg <br/>
 ┣ 📜reportWebVitals.js <br/>
 ┗ 📜setupTests.js <br/>
 
#### 🎥 프로젝트 영상

|웹페이지|
|------|
|![youtube (1) (1) (1)](https://user-images.githubusercontent.com/89916970/224364664-47e01a7a-70b7-4200-aa85-6d70bfa63ee2.gif)|
![날씨알리미01](https://user-images.githubusercontent.com/89916970/224506132-da3db601-c3a2-4b61-9dad-5783c15418e6.png)|
![날씨알리미02](https://user-images.githubusercontent.com/89916970/224506135-d959b19d-9f49-481d-98ef-128fe72a93f1.png)|
![날씨알리미03](https://user-images.githubusercontent.com/89916970/224506136-80fad40a-225c-4603-b2dd-f55d03c37592.png)|


#### ✨ 느낀점
+ OpenWeather API의 데이터를 TanStack Query를 사용하여 JSON형식으로 받아와서 






