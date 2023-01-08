import React, { useState, useContext } from "react";
import { Dropdown } from "rsuite";
import { HiOutlinePuzzle } from "react-icons/hi";
import { ImStack } from "react-icons/im";
import { BiUserCircle } from "react-icons/bi";
import { BiCreditCardFront } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";
import { FiTag } from "react-icons/fi";
import { BiDollarCircle } from "react-icons/bi";

import { Link } from "react-router-dom";
import "../../Stylesheets/Component-styles/Components.css";
import Logo from "./Logo";
import { DashboardContext } from "../../Contexts/DashboardContext";

const Sidebar = () => {
  const [eventFilter, setEventFilter] = useState("Challenges");
  const {
    setViewUserDashboard,
    setViewChallenges,
    setViewFundAccount,
    setViewTransactions,
    setViewWithdrawal,
    setViewProfile,
  } = useContext(DashboardContext);

  const Dashboard = () => {
    setViewUserDashboard(true),
    setViewChallenges(false),
    setViewFundAccount(false),
    setViewTransactions(false),
    setViewWithdrawal(false),
    setViewProfile(false)
  }
  const Challenge = () => {
    setViewUserDashboard(false),
    setViewChallenges(true),
    setViewFundAccount(false),
    setViewTransactions(false),
    setViewWithdrawal(false),
    setViewProfile(false)
  }
  const FundAccount = () => {
    setViewUserDashboard(false),
    setViewChallenges(false),
    setViewFundAccount(true),
    setViewTransactions(false),
    setViewWithdrawal(false),
    setViewProfile(false)
  }
  const Transactions = () => {
    setViewUserDashboard(false),
    setViewChallenges(false),
    setViewFundAccount(false),
    setViewTransactions(true),
    setViewWithdrawal(false),
    setViewProfile(false)
  }
  const Withdrawal = () => {
    setViewUserDashboard(false),
    setViewChallenges(false),
    setViewFundAccount(false),
    setViewTransactions(false),
    setViewWithdrawal(true),
    setViewProfile(false)
  }
  const Profile = () => {
    setViewUserDashboard(false),
    setViewChallenges(false),
    setViewFundAccount(false),
    setViewTransactions(false),
    setViewWithdrawal(false),
    setViewProfile(true)
  }

  return (
    <section className="main-sidebar-container">
      <div className="sidebar-logo-holder">
        <Logo />
      </div>
      <div className="sidebar-contents">
        <ul className="sidebar-navigation">
          <li>
            <Link onClick={() => {Dashboard()}}>
              <ImStack /> Dashboard
            </Link>
          </li>
          <li>
            <Dropdown
              title={eventFilter}
              activeKey={eventFilter}
              icon={<HiOutlinePuzzle />}
            >
              <Dropdown.Item onClick={() => {Challenge()}}>
                <Link>Challenge system</Link>
              </Dropdown.Item>
            </Dropdown>
          </li>
          <li>
            <Link onClick={() => {FundAccount()}}>
              <BiDollarCircle /> Fund Account{" "}
            </Link>
          </li>
          <li>
            <Link onClick={() => {Transactions()}}>
              <BiCreditCardFront /> Transactions
            </Link>
          </li>
          <li>
            <Link onClick={() => {Withdrawal()}}>
              <FiTag /> Withdraw
            </Link>
          </li>
          <li>
            <Link onClick={() => {Profile()}}>
              <BiUserCircle />
              Account
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
