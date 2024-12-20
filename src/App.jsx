import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AdminPage from "./pages/ceoadmin/AdminPage";
import Index from "./pages/HomePage";
import ConfirmForm from "./pages/join/ConfirmForm";
import JoinPage from "./pages/join/JoinPage";
import SignUpPage from "./pages/join/SignUpPage";
import LoginPage from "./pages/login/LoginPage";
import UserPage from "./pages/mypage/UserPage";
import NotFound from "./pages/NotFound";
import MenuDetail from "./pages/order/MenuDetail";
import MenuList from "./pages/order/MenuList";
import OrderPage from "./pages/order/OrderPage";
import Payment from "./pages/order/Payment";
import OrdersPage from "./pages/orders/OrdersPage";
import SearchList from "./pages/search/SearchList";
import SearchPage from "./pages/search/SearchPage";
import DockBar from "./components/DockBar";

function App() {
  const isLogin = false;

  return (
    <div style={{ maxWidth: "640px", width: "100%", margin: "0 auto" }}>
      <Router>
        <Routes>
          {/* 홈 */}
          <Route
            path="/"
            element={isLogin ? <Index /> : <Navigate to="/login" replace />}
          />
          {/* 회원가입 */}
          <Route path="/join">
            <Route index element={<JoinPage />} /> {/* JoinPage */}
            <Route path="signup" element={<SignUpPage />} />
            <Route path="confirmform" element={<ConfirmForm />} />
          </Route>
          {/* 로그인 */}
          <Route path="/login" element={<LoginPage />} />
          {/* 검색 */}
          <Route path="/search">
            <Route index element={<SearchPage />} /> {/* SearchPage */}
            <Route path="searchlist" element={<SearchList />} />
          </Route>
          {/* 주문 */}
          <Route path="/order">
            <Route index element={<OrderPage />} /> {/* OrderPage */}
            <Route path="menulist" element={<MenuList />} />
            <Route path="menudetail" element={<MenuDetail />} />
            <Route path="payment" element={<Payment />} />
          </Route>
          {/* 주문 내역 */}
          <Route path="/orders" element={<OrdersPage />} />
          {/* 마이페이지 */}
          <Route path="/mypage" element={<UserPage />} />
          {/* 사장님페이지 */}
          <Route path="/ceoadmin" element={<AdminPage />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <DockBar />
      </Router>
    </div>
  );
}

export default App;
