import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import DockBar from "./components/DockBar";
import { OrderContextProvider } from "./contexts/OrderContext";
import AdminPage from "./pages/ceoadmin/AdminPage";
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
import OedersDetails from "./pages/order/OedersDetails";
import OrderPage from "./pages/order/OrderPage";
import Payment from "./pages/order/Payment";
import OrdersPage from "./pages/orders/OrdersPage";
import SearchPage from "./pages/search/SearchPage";
import Marketing from "./pages/terms/Marketing";
import Privacy from "./pages/terms/Privacy";
import Service from "./pages/terms/Service";
import PaymentService from "./pages/terms/PaymentService";

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
          <Route path="/login" element={<LoginPage />}>
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>
          {/* 검색 */}
          <Route path="/search">
            <Route index element={<SearchPage />} /> {/* SearchPage */}
          </Route>
          {/* 주문 */}
          <Route path="/order">
            <Route index element={<OrderPage />} /> {/* OrderPage */}
            <Route path="menu" element={<MenuList />} />
            <Route path="menu/:menuId/options" element={<MenuDetail />} />
            <Route path="payment" element={<Payment />} />
            <Route path="confirmation/:orderId" element={<Confirmation />} />
          </Route>
          {/* 주문 내역 */}
          <Route path="/orders" element={<OrdersPage />}>
            <Route path="/orders/:menuId/details" element={<OedersDetails />} />
          </Route>
          {/* 마이페이지 */}
          <Route path="/mypage" element={<UserPage />} />
          {/*약관페이지*/}
          <Route path="/terms/service" element={<Service />} />
          <Route path="/terms/privacy" element={<Privacy />} />
          <Route path="/terms/marketing" element={<Marketing />} />
          <Route path="/terms/payment" element={<PaymentService />} />
          {/* 사장님페이지 */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <DockBar />
      </Router>
    </div>
  );
}

export default App;
