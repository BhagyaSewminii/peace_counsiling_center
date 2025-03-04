// Example with React Router v6
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardSideBar from './DashboardSideBar';
import ProfileManagement from './ProfileManagement';

function DashboardClient() {
  return (
    <Router>
      <Routes>
        <Route path="/DashboardSideBar" element={<DashboardSideBar />}>
          <Route path="/ProfileManagement" element={<ProfileManagement />} />
        </Route>
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default DashboardClient;
