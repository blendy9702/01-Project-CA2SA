import { Navigate, Route, Router, Routes } from "react-router-dom";
import LiveOrders from "./orders/LiveOrders";
import Orders from "./orders/Orders";
import OrderDetail from "./orders/OrderDetail";
import LoginPage from "./Login/LoginPage";
import ResetPassword from "./Login/ResetPassword";
import Menu from "./menu/Menu";
import MenuEdit from "./menu/MenuEdit";
import Options from "./menu/Options";
import StoreInfo from "./store/StoreInfo";
import Hours from "./store/Hours";
import Stores from "./store/Stores";
import Reports from "./reports/Reports";
import ReportDetail from "./reports/ReportDetail";
import Dashboard from "./Dashboard";

const AdminPage = () => {
  isLogin = false;

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={isLogin ? <Dashboard /> : <Navigate to="/login" replace />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* 로그인 */}
          <Route path="/login" element={<LoginPage />}>
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>
          {/* 주문관리 */}
          <Route path="/orders" element={<Orders />}>
            <Route path="/live-orders" element={<LiveOrders />} />
            <Route path="/detail/:orderId" element={<OrderDetail />} />
          </Route>
          {/* 메뉴관리 */}
          <Route path="/menu" element={<Menu />}>
            <Route path="/edit/:menuId" element={<MenuEdit />} />
            <Route path="/customization/:menuId" element={<Options />} />
          </Route>
          {/* 매장관리 */}
          <Route path="/store-info" element={<StoreInfo />}>
            <Route path="/operating-hours" element={<Hours />} />
            <Route path="/status" element={<Stores />} />
          </Route>
          {/* 매출보고서 */}
          <Route path="/reports" element={<Reports />}>
            <Route path="/detail/:period" element={<ReportDetail />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default AdminPage;
