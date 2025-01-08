# CA2SA

<img src="https://github.com/ohdaeo/teamone/blob/main/%EB%A9%94%EC%9D%B8.png?raw=true">

> 바쁜 사용자들이 간단하고 빠르게 커피를 주문하고,
> **원하는 시간**에 픽업할 수 있는 편리한 테이크아웃 **웹앱**.

---

## 👥팀원 소개

| FE 주혜진                                                                                                             | FE 이수빈                                                                                             | FE 이창호                                                                                             |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <div align="center" valign="bottom"><img src="https://avatars.githubusercontent.com/u/102364334?v=4" width=150></div> | <div align="center"><img src="https://avatars.githubusercontent.com/u/181827243?v=4" width=150></div> | <div align="center"><img src="https://avatars.githubusercontent.com/u/186558654?v=4" width=150></div> |
| <div align="center">팀장 </div>                                                                                       | <div align="center">팀원 </div>                                                                       | <div align="center">팀원 </div>                                                                       |
| <div align="center">디자인, 메인, 지도, 검색, 캘린더, 404, 공지사항, 질문, 이벤트, 약관 </div>                        | <div align="center">가게, 주문, 지난주문내역, 주문 상세, 메뉴, 메뉴옵션, 결제</div>                   | <div align="center">로그인, 회원가입, 인증번호, 마이페이지, 시용금액</div>                            |

## 📅개발 기간

**`2024/12/16 ~ 2025/01/08`**

- 기획 : **12/16 - 12/24**
- 디자인 : **12/16 - 12/30**
- 기능 구현 : **12/20 - 01/08**
- 스타일 : **12/30 - 01/08**
- 리팩토링 및 최종협의 : **01/04 - 01/08**

## 🛠️ 기술 스택

### Language & Tools

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css&logoColor=white"/>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/emotion-cc6ac4?style=for-the-badge&logo=emotion&logoColor=white">
<img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"/>
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/>
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/>

### Cooperation

<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/> <a href="(https://brainy-vulcanodon-0b2.notion.site/CA2SA-164ce9c0e7998057bd75e18c47d930d2?pvs=4)" target="_blank"><img src="https://img.shields.io/badge/notion-000?style=for-the-badge&logo=notion&logoColor=white"/></a> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"/>

## 📋브랜치 전략

```
main: 메인 서버 확인용
develop : 메인에 들어가기 전 서브 확인용
feature : 추가 기능 개발 확인용.
release : develop 을 release 로 옮긴 후 테스트를 진행용
hotfix : 버그를 수정용
```

#### Commit Convention

```
feat : 새로운 기능 구현
fix : 오류 수정
docs : readme.md, json 파일 등 수정, 라이브러리 설치(문서 관련)
style : 공백, 세미콜론 등 스타일 수정
refactor : 코드 리팩토링
chore : 빌드 부분 혹은 패키지 매니저 수정 사항
rename : 파일 혹은 폴더명 수정, 옮기기
remove : 파일 삭제
```

## 🗂️ 폴더 구조

```
01-Project-CA2SA
├─ .prettierrc
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ images
│     ├─ 404
│     │  └─ 404.webp
│     ├─ ca2saLogo.webp
│     ├─ event
│     │  ├─ image-0.webp
│     │  ├─ image-1.webp
│     │  ├─ image-2.webp
│     │  ├─ image-3.webp
│     │  ├─ image-4.webp
│     │  ├─ image-5.webp
│     │  └─ image-6.webp
│     ├─ event_banner.webp
│     ├─ footerca2saLogo.webp
│     ├─ Frame 307.webp
│     ├─ main_visual_image-0.webp
│     ├─ main_visual_image-1.webp
│     ├─ main_visual_image-2.webp
│     ├─ main_visual_image-3.webp
│     ├─ main_visual_image-4.webp
│     ├─ main_visual_image-5.webp
│     ├─ main_visual_image-6.webp
│     ├─ main_visual_image-7.webp
│     ├─ NoSearch.webp
│     ├─ order
│     │  ├─ cat.jpg
│     │  ├─ cat2.jpg
│     │  ├─ checkboxOff.png
│     │  ├─ CheckboxOn.png
│     │  ├─ KakaoTalk_20250106_110429955_01.jpg
│     │  └─ umjun.jpg
│     ├─ qna_banner.webp
│     └─ user.webp
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ DockBar.jsx
│  │  ├─ Header.jsx
│  │  ├─ Icon.jsx
│  │  ├─ Layout.jsx
│  │  ├─ Loading.jsx
│  │  ├─ main
│  │  │  ├─ ListBox.jsx
│  │  │  ├─ ListMain.jsx
│  │  │  ├─ MapMain.jsx
│  │  │  └─ SlideItem.jsx
│  │  ├─ MapMarkrtItem.jsx
│  │  ├─ order
│  │  │  ├─ BucketModal.jsx
│  │  │  ├─ CafeMap.jsx
│  │  │  ├─ CanCleModal.jsx
│  │  │  ├─ DeleteMenuModal.jsx
│  │  │  ├─ Memo.jsx
│  │  │  ├─ Menu.jsx
│  │  │  ├─ NavBar.jsx
│  │  │  ├─ OrderProgress.jsx
│  │  │  ├─ PaymentOption.jsx
│  │  │  ├─ PickUpTime.jsx
│  │  │  └─ SearchMenu.jsx
│  │  ├─ orders
│  │  │  └─ OrderedMenu.jsx
│  │  ├─ search
│  │  │  └─ SearchList.jsx
│  │  ├─ Skeleton.jsx
│  │  └─ terms
│  │     ├─ Event.jsx
│  │     ├─ noticeContent.jsx
│  │     ├─ QnaList.jsx
│  │     └─ Questions.jsx
│  ├─ contexts
│  │  ├─ LoginContext.jsx
│  │  ├─ OrderContext.jsx
│  │  └─ UserPageContext.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ calendar
│  │  │  └─ Attendance .jsx
│  │  ├─ ceoadmin
│  │  │  ├─ AdminPage.jsx
│  │  │  ├─ Dashboard.jsx
│  │  │  ├─ Login
│  │  │  │  ├─ LoginPage.jsx
│  │  │  │  └─ ResetPassword.jsx
│  │  │  ├─ menu
│  │  │  │  ├─ Menu.jsx
│  │  │  │  ├─ MenuEdit.jsx
│  │  │  │  └─ Options.jsx
│  │  │  ├─ orders
│  │  │  │  ├─ LiveOrders.jsx
│  │  │  │  ├─ OrderDetail.jsx
│  │  │  │  └─ Orders.jsx
│  │  │  ├─ reports
│  │  │  │  ├─ ReportDetail.jsx
│  │  │  │  └─ Reports.jsx
│  │  │  └─ store
│  │  │     ├─ Hours.jsx
│  │  │     ├─ StoreInfo.jsx
│  │  │     └─ Stores.jsx
│  │  ├─ HomePage.jsx
│  │  ├─ join
│  │  │  ├─ ConfirmForm.jsx
│  │  │  ├─ JoinPage.jsx
│  │  │  ├─ JoinPageSpinner.jsx
│  │  │  └─ SignUpPage.jsx
│  │  ├─ login
│  │  │  ├─ LoginPage.jsx
│  │  │  └─ ResetPassword.jsx
│  │  ├─ mypage
│  │  │  └─ UserPage.jsx
│  │  ├─ NotFound.jsx
│  │  ├─ order
│  │  │  ├─ Confirmation.jsx
│  │  │  ├─ MenuDetail.jsx
│  │  │  ├─ MenuList.jsx
│  │  │  ├─ OrderPage.jsx
│  │  │  └─ Payment.jsx
│  │  ├─ orders
│  │  │  ├─ OedersDetails.jsx
│  │  │  └─ OrdersPage.jsx
│  │  ├─ search
│  │  │  └─ SearchPage.jsx
│  │  └─ terms
│  │     ├─ FAQ.jsx
│  │     ├─ Marketing.jsx
│  │     ├─ Notice.jsx
│  │     ├─ PaymentService.jsx
│  │     ├─ Privacy.jsx
│  │     └─ Service.jsx
│  ├─ server
│  │  ├─ notice.json
│  │  └─ qnaData.json
│  └─ styles
│     ├─ attendance.css
│     ├─ common.js
│     ├─ join
│     │  ├─ confirmform.js
│     │  ├─ joinpage.js
│     │  ├─ loginpage.js
│     │  └─ userpage.js
│     ├─ Loading.css
│     ├─ order
│     │  ├─ BucketModal.js
│     │  ├─ orderMemo.js
│     │  └─ orderpage.js
│     └─ orders
│        └─ orderspage.js
└─ vite.config.js

```
