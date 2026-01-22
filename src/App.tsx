import { Routes, Route } from "react-router-dom";

import Calendar from "./pages/Calender";
import ChatMessenger from "./pages/Chat-messenger";
import ColumnFeed from "./pages/Column_Feed";
import CRMRecordDetail from "./pages/CRM_Record_Detaills";
import DashboardKPI from "./pages/DashBoard_KPI";
import DataTable from "./pages/Data_Table";
import EcommercePDP from "./pages/E-commerce_PDP";
import FilterAndGrid from "./pages/FilterAndGrid";
import FormBuilder from "./pages/Form_Builder";
import KanbanBoard from "./pages/Kanban_board";
import LiveScore from "./pages/Live_Score";
import MapListSplit from "./pages/Map_ListSplit";
import ProfileAndFeed from "./pages/ProfileAndFeed";
import SearchResults from "./pages/Search_Results";
import Settings from "./pages/Settings";
import SidebarContent from "./pages/Sidebar_Content";
import VideoPlayer from "./pages/VideoPlayer";

function App() {
  return (
    <Routes>
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/chat-messenger" element={<ChatMessenger />} />
      <Route path="/" element={<ColumnFeed />} />
      <Route path="/crm-record-detail" element={<CRMRecordDetail />} />
      <Route path="/dashboard-kpi" element={<DashboardKPI />} />
      <Route path="/data-table" element={<DataTable />} />
      <Route path="/ecommerce-pdp" element={<EcommercePDP />} />
      <Route path="/filter-grid" element={<FilterAndGrid />} />
      <Route path="/form-builder" element={<FormBuilder />} />
      <Route path="/kanban-board" element={<KanbanBoard />} />
      <Route path="/live-score" element={<LiveScore />} />
      <Route path="/map-list-split" element={<MapListSplit />} />
      <Route path="/profile-feed" element={<ProfileAndFeed />} />
      <Route path="/search-results" element={<SearchResults />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/sidebar-content" element={<SidebarContent />} />
      <Route path="/video-player" element={<VideoPlayer />} />

      {/* fallback */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
