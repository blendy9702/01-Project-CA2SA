# CA2SA

---

## 서비스 소개

바쁜 사용자들이 간단하고 빠르게 커피를 주문하고, **원하는 시간**에 픽업할 수 있는 편리한 테이크아웃 **웹앱**.

## 팀원 소개

| FE 주혜진          | FE 이수빈    | FE 이창호    |
| ------------------ | ------------ | ------------ |
| 프로필이미지       | 프로필이미지 | 프로필이미지 |
| 팀장               | 팀원         | 팀원         |
| 메인, 검색, 캘린더 | 담당         | 담당         |

## 개발 기간

**`2024/12/16 ~ 2025/01/08`**

- 기획 : **12/16 - 12/24**
- 디자인 : **12/16 - 12/30**
- 기능 구현 : **12/20 - 01/08**
- 스타일 : **12/30 - 01/08**
- 리팩토링 및 최종협의 : **01/04 - 01/08**

## 4.

## 5.

## 6.

## 7.

## 8.

## 9.

## 10.

## 11.

## 12.

## 13.

## 14. 브랜치 전략

```
main: 메인 서버 확인용
develop : 메인에 들어가기 전 서브 확인용
feature : 추가 기능 개발 확인용.
release : develop 을 release 로 옮긴 후 테스트를 진행용
hotfix : 버그를 수정용
```

#### Commit Convention

```
feat: 새로운 기능 구현
fix: 오류 수정
docs: readme.md, json 파일 등 수정, 라이브러리 설치(문서 관련)
refactor: 코드 리팩토링
chore: 빌드 부분 혹은 패키지 매니저 수정 사항
rename: 파일 혹은 폴더명 수정, 옮기기
remove: 파일 삭제
```

## 15. 폴더 구조

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
│     ├─ calendar
│     │  ├─ coffee-beans-completed.webp
│     │  └─ coffee-beans-default.webp
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
│     │  ├─ checkboxOff.webp
│     │  ├─ CheckboxOn.webp
│     │  └─ umjun.jpg
│     └─ qna_banner.webp
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
│  │  ├─ main
│  │  │  ├─ ListBox.jsx
│  │  │  ├─ ListMain.jsx
│  │  │  ├─ MapMain.jsx
│  │  │  └─ SlideItem.jsx
│  │  ├─ MapMarkrtItem.jsx
│  │  ├─ order
│  │  │  ├─ BucketModal.jsx
│  │  │  ├─ CafeMap.jsx
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
│     ├─ order
│     │  ├─ BucketModal.js
│     │  └─ orderpage.js
│     └─ orders
│        └─ orderspage.js
└─ vite.config.js

```
