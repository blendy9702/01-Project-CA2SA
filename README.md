# CA2SA

## 1. 서비스 소개

- 바쁜 사용자들이 간단하고 빠르게 커피를 주문하고, 원하는 시간에 픽업할 수 있는 편리한 테이크아웃 웹앱.

## 2.

## 3.

## 4.

## 5. UI Flow /

## 6. UI UX 글꼴, 주색상, 보조색상 등...

## 7. 일정관리

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
│     │  └─ 404.png
│     ├─ ca2saLogo.png
│     ├─ calendar
│     │  ├─ coffee-beans-completed.png
│     │  └─ coffee-beans-default.png
│     ├─ event
│     │  ├─ image-0.png
│     │  ├─ image-1.png
│     │  ├─ image-2.png
│     │  ├─ image-3.png
│     │  ├─ image-4.png
│     │  ├─ image-5.png
│     │  └─ image-6.png
│     ├─ event_banner.png
│     ├─ footerca2saLogo.png
│     ├─ Frame 307.png
│     ├─ main_visual_image-0.png
│     ├─ main_visual_image-1.png
│     ├─ main_visual_image-2.png
│     ├─ main_visual_image-3.png
│     ├─ main_visual_image-4.png
│     ├─ main_visual_image-5.png
│     ├─ main_visual_image-6.png
│     ├─ main_visual_image-7.png
│     ├─ NoSearch.png
│     ├─ order
│     │  ├─ cat.jpg
│     │  ├─ cat2.jpg
│     │  ├─ checkboxOff.png
│     │  ├─ CheckboxOn.png
│     │  └─ umjun.jpg
│     └─ qna_banner.png
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
