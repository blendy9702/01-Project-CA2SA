import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Event from "./components/terms/Event";
import { OrderContextProvider } from "./contexts/OrderContext";
import { UserPageProvider } from "./contexts/UserPageContext";
import Index from "./pages/HomePage";
import ConfirmForm from "./pages/join/ConfirmForm";
import JoinPage from "./pages/join/JoinPage";
import SignUpPage from "./pages/join/SignUpPage";
import LoginPage from "./pages/login/LoginPage";
import ResetPassword from "./pages/login/ResetPassword";
import UserPage from "./pages/mypage/UserPage";
import NotFound from "./pages/NotFound";
import Confirmation from "./pages/order/Confirmation";
import MenuDetail from "./pages/order/MenuDetail";
import MenuList from "./pages/order/MenuList";
import OrderPage from "./pages/order/OrderPage";
import Payment from "./pages/order/Payment";
import OedersDetails from "./pages/orders/OedersDetails";
import OrdersPage from "./pages/orders/OrdersPage";
import SearchPage from "./pages/search/SearchPage";
import FAQ from "./pages/terms/FAQ";
import Marketing from "./pages/terms/Marketing";
import PaymentService from "./pages/terms/PaymentService";
import Privacy from "./pages/terms/Privacy";
import Service from "./pages/terms/Service";
import Attendance from "./pages/calendar/Attendance ";
import Notice from "./pages/terms/Notice";
import Loading from "./components/Loading";
function App() {
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(null);
  useEffect(() => {
    const userDatas = sessionStorage.getItem("userData");
    setIsLogin(!!userDatas);
    setLoading(false);
  }, []);
  const handleLoginSuccess = userData => {
    sessionStorage.setItem("userData", JSON.stringify(userData));
    setIsLogin(true);
  };
  if (loading) {
    return;
  }
  return (
    <div
      className="mainWrap"
      style={{ maxWidth: "640px", width: "100%", margin: "0 auto" }}
    >
      <Loading />
      <Router>
        <OrderContextProvider>
          <UserPageProvider>
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
              <Route
                path="/login"
                element={<LoginPage onLoginSuccess={handleLoginSuccess} />}
              />
              <Route path="/reset-password" element={<ResetPassword />} />
              {/* 검색 */}
              <Route path="/search">
                <Route index element={<SearchPage />} /> {/* SearchPage */}
              </Route>
              {/* 주문 */}
              <Route path="/order">
                <Route index element={<OrderPage />} /> {/* OrderPage */}
                <Route path="menu" element={<MenuList />} />
                <Route path="menu/detail" element={<MenuDetail />} />
                <Route path="payment" element={<Payment />} />
                <Route path="confirmation" element={<Confirmation />} />
              </Route>
              {/* 주문 내역 */}
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/orders/detail" element={<OedersDetails />} />
              {/* 마이페이지 */}
              <Route path="/mypage" element={<UserPage />} />
              {/*약관페이지*/}
              <Route path="/terms/service" element={<Service />} />
              <Route path="/terms/privacy" element={<Privacy />} />
              <Route path="/terms/marketing" element={<Marketing />} />
              <Route path="/terms/payment" element={<PaymentService />} />
              <Route path="/terms/notice" element={<Notice />} />
              <Route path="/terms/FAQ" element={<FAQ />} />
              <Route path="/terms/event" element={<Event />} />
              {/* 사장님페이지 */}
              <Route path="/calendar" element={<Attendance />} />
              {/* 404 */}
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </UserPageProvider>
        </OrderContextProvider>
      </Router>
    </div>
  );
}
export default App;
