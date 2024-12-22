import { Route, Router, Routes } from "react-router-dom";

const AdminPage = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<대시보드 />} />
          <Route path="/orders" element={<주문 관리 />}>
            <Route path="/live" element={<실시간 주문 목록 />} />
            <Route path="/detail/:orderId" element={<주문 상세 보기 />} />
          </Route>
          <Route path="/login" element={<LoginPage />}>
            <Route path="/reset-password" element={<비밀번호 찾기 />} />
          </Route>
          <Route path="/menu" element={<메뉴 관리 />}>
            <Route path="/edit/:menuId" element={<메뉴추가수정 />} />
            <Route
              path="/customization/:menuId"
              element={<커스터마이징 옵션 관리 />}
            />
          </Route>
          <Route path="/store-info" element={<매장 정보 관리 />}>
            <Route path="/operating-hours" element={<운영 시간 설정 />} />
            <Route path="/status" element={<매장 상태 관리 />} />
          </Route>
          <Route path="/reports" element={<매출 보고서 />}>
            <Route path="/detail/:period" element={<매출 상세 보기 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default AdminPage;
