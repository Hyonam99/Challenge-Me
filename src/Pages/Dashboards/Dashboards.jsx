import React, { useState } from "react";
import "../../Stylesheets/Dashboard-styles/Dashboards.css";
import Navbar from "../../Components/Utility-components/Navbar";
import Sidebar from "../../Components/Utility-components/Sidebar";
import DashboardComponent from "../../Components/Pages-components/DashboardComponent";
import ChallengeSystem from "./ChallengeSystem";
import FundAccount from "../Accounts/FundAccount";
import Transactions from "../Accounts/Transactions";
import Withdrawal from "../Accounts/Withdrawal";
import UserProfile from "../Accounts/UserProfile";
import { DashboardContext } from "../../Contexts/DashboardContext";

const Dashboard = () => {
  const [viewUserDashboard, setViewUserDashboard] = useState(true);
  const [viewChallenges, setViewChallenges] = useState(false);
  const [viewFundAccount, setViewFundAccount] = useState(false);
  const [viewTransactions, setViewTransactions] = useState(false);
  const [viewWithdrawal, setViewWithdrawal] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);
  return (
    <>
      <DashboardContext.Provider
        value={{
          viewUserDashboard,
          setViewUserDashboard,
          viewChallenges,
          setViewChallenges,
          viewFundAccount,
          setViewFundAccount,
          viewTransactions,
          setViewTransactions,
          viewWithdrawal,
          setViewWithdrawal,
          viewProfile,
          setViewProfile,
        }}
      >
        <section className="main-dashboard">
          <Sidebar />
          <section className="dashboard-contents-container">
            <Navbar />
            <div className="dasboard-content-display">
              {viewUserDashboard && <DashboardComponent />}
              {viewChallenges && <ChallengeSystem />}
              {viewFundAccount && <FundAccount />}
              {viewTransactions && <Transactions />}
              {viewWithdrawal && <Withdrawal />}
              {viewProfile && <UserProfile />}
            </div>
          </section>
        </section>
      </DashboardContext.Provider>
    </>
  );
};

export default Dashboard;
