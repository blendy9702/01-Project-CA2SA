import { Route, Router, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import LoginPage from "./Login/LoginPage";
import ResetPassword from "./Login/ResetPassword";
import Menu from "./menu/Menu";
import MenuEdit from "./menu/MenuEdit";
import Options from "./menu/Options";
import LiveOrders from "./orders/LiveOrders";
import OrderDetail from "./orders/OrderDetail";
import Orders from "./orders/Orders";
import ReportDetail from "./reports/ReportDetail";
import Reports from "./reports/Reports";
import Hours from "./store/Hours";
import StoreInfo from "./store/StoreInfo";
import Stores from "./store/Stores";

const AdminPage = () => {
  const isLogin = false;

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          {/* 로그인 */}
          <Route path="/admin/login" element={<LoginPage />}>
            <Route path="/admin/reset-password" element={<ResetPassword />} />
          </Route>
          {/* 주문관리 */}
          <Route path="/admin/orders" element={<Orders />}>
            <Route path="/admin/live-orders" element={<LiveOrders />} />
            <Route path="/admin/detail/:orderId" element={<OrderDetail />} />
          </Route>
          {/* 메뉴관리 */}
          <Route path="/admin/menu" element={<Menu />}>
            <Route path="/admin/edit/:menuId" element={<MenuEdit />} />
            <Route path="/admin/customization/:menuId" element={<Options />} />
          </Route>
          {/* 매장관리 */}
          <Route path="/admin/store-info" element={<StoreInfo />}>
            <Route path="/admin/operating-hours" element={<Hours />} />
            <Route path="/admin/status" element={<Stores />} />
          </Route>
          {/* 매출보고서 */}
          <Route path="/admin/reports" element={<Reports />}>
            <Route path="/admin/detail/:period" element={<ReportDetail />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default AdminPage;
