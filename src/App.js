import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Admin/Login/Login";
import Index from "./Admin/Page/Index";
import JodiDigitNumbers from "./Admin/panna/JodiDigitNumbers";
import SingleDigitNumbers from "./Admin/panna/SingleDigitNumbers";
import Unapproved from "./Admin/user/Unapproved";
import UserListTable from "./Admin/user/List";
import Result from "./Admin/Result/Result";
import AdminForm from "./Admin/Setting/AdminForm";
import SideBar from "./Admin/SiderBar/Sidebar";
import AddGameRates from "./Admin/MubaiManagement/AddGameRates";
import AddGameName from "./Admin/MubaiManagement/Index";
import { Toaster } from "react-hot-toast";
import MarketManagementForm from "./Admin/MubaiManagement/MarketManagementForm";
import UserCard from "./Admin/user/UserCard";
import Tripplepanna from "./Admin/panna/TripplePanna";
import FullSangam from "./Admin/panna/FullSangam";
import HalfSangam from "./Admin/panna/HalfSangam";
import SinglePanaNumbers from "./Admin/panna/SinglePanaNumbers";
import DoblePannaNumber from "./Admin/panna/DoblePannaNumber";
import BidHistoryReport from "./Admin/MubaiManagement/BidHistoryReport";
import WinningHistory from "./Admin/MubaiManagement/WinningHistory";
import BetListing from "./Admin/MubaiManagement/BetListing";
import Subadmin from "./Admin/subadmin/Subadmin";
import SubResult from "./Admin/subadmin/Result/Result";
import PrivacyPolicy from "./Admin/PrivacyPolicy";
import widthrawalPayment from "./Admin/widthrawal/List";




function App() {

  return (
    <div id="body-pd" className="App">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Index />} />
          <Route path="/sub_admin_login" element={<Subadmin />} />
          <Route path="/sub-admin-reult" element={<SubResult />} />
          <Route path="jodi-digit" element={<JodiDigitNumbers />} />
          <Route path="single-digit" element={<SingleDigitNumbers />} />
          <Route path="/single_pana" element={<SinglePanaNumbers />} />
          <Route path="/double_pana" element={<DoblePannaNumber />} />
          <Route path="/tripplepanna" element={<Tripplepanna />} />
          <Route path="/fullsangam" element={<FullSangam />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/widtrawal-list" element={<widthrawalPayment />} />
          <Route path="/halfsangam" element={<HalfSangam />} />
          <Route path="/un-approved-users-list" element={<Unapproved />} />
          <Route path="/users-list" element={<UserListTable />} />
          <Route path="/results" element={<Result />} />
          <Route path="/" element={<Login />} />
          <Route path="/settings" element={<AdminForm />} />
          <Route path="/slider" element={<SideBar />} />
          <Route path="/game-rate" element={<AddGameRates />} />
          <Route path="/game-name" element={<AddGameName />} />
          <Route path="/onOffMarket" element={<MarketManagementForm />} />
          <Route path="/user/:id" element={<UserCard />} />
          <Route path="/mumbai-user-bid-history" element={<BidHistoryReport />} />
          <Route path="/winning-report" element={<WinningHistory />} />
          <Route path="/betlist" element={<BetListing />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;