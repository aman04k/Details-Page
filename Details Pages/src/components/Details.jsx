import React, { useState } from "react";
import "../components/Details.css";
import Faq from "../pages/Faq";
import Community from "../pages/Community";
import Offering from "../pages/Offering";
import FundraisingStats from "../components/FundraisingStats";
import { IoMenu } from "react-icons/io5";

const Details = () => {
  const [tabs, setTabs] = useState([
    "Overview",
    "Statistics",
    "Community",
    "Faq",
    "Offering",
    "Discussions",
  ]);
  const [activeTabs, setActiveTabs] = useState([
    "Community",
    "Faq",
    "Offering",
    "Discussions",
  ]);
  const [selectedTab, setSelectedTab] = useState("Overview");
  const [newTabName, setNewTabName] = useState("");
  const [isCreatorUser, setIsCreatorUser] = useState(false); // Default to user mode

  const toggleTab = (tab) => {
    if (activeTabs.includes(tab)) {
      setActiveTabs(activeTabs.filter((t) => t !== tab));
      if (selectedTab === tab) {
        setSelectedTab("Overview");
      }
    } else {
      setActiveTabs([...activeTabs, tab]);
    }
  };

  const addTab = () => {
    if (newTabName.trim() && !tabs.includes(newTabName)) {
      setTabs([...tabs, newTabName]);
      setActiveTabs([...activeTabs, newTabName]);
      setNewTabName("");
    }
  };

  const handleToggleMode = (mode) => {
    setIsCreatorUser(mode === "creator");
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Toggle icon */}
        <div className="toggle-icon">
          <IoMenu className="menu-icon" />
          <div className="toggle-menu">
            <button
              onClick={() => handleToggleMode("creator")}
              className={isCreatorUser ? "active" : ""}
            >
              Creator
            </button>
            <button
              onClick={() => handleToggleMode("user")}
              className={!isCreatorUser ? "active" : ""}
            >
              User
            </button>
          </div>
        </div>
        <h3>Manage Tabs</h3>

        {/* Manage Tabs Section */}
        <ul className="manage-tabs">
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => setSelectedTab(tab)} // Open tab on click
              className={
                selectedTab === tab
                  ? "tab-item active-tab-item"
                  : "tab-item"
              }
            >
              {isCreatorUser && (
                <label className="tab-checkbox">
                  <input
                    type="checkbox"
                    checked={activeTabs.includes(tab)}
                    onChange={() => toggleTab(tab)}
                  />
                  <span
                    className={
                      activeTabs.includes(tab)
                        ? "checkbox-label active"
                        : "checkbox-label"
                    }
                  >
                    {tab}
                  </span>
                </label>
              )}
              {!isCreatorUser && activeTabs.includes(tab) && <span>{tab}</span>}
            </li>
          ))}
        </ul>

        {/* Only show the input and button in creator mode */}
        {isCreatorUser && (
          <div className="add-tab-container">
            <input
              type="text"
              placeholder="New Tab Name"
              value={newTabName}
              onChange={(e) => setNewTabName(e.target.value)}
            />
            <button onClick={addTab} className="add-tab-btn">
              Add Tab
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="main-content">
        {/* Tab Navigation */}
        <div className="tabs">
          <button
            className={selectedTab === "Overview" ? "tab active" : "tab"}
            onClick={() => setSelectedTab("Overview")}
          >
            Overview
          </button>
          {activeTabs.map((tab) => (
            <button
              key={tab}
              className={selectedTab === tab ? "tab active" : "tab"}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {selectedTab === "Overview" && (
            <div className="overview">
              <h3>Overview</h3>
              <div className="row">
                <div className="card">
                  <h4>Raise Info</h4>
                  <p>Target Raise: ETH</p>
                  <p>Actual Raise:</p>
                </div>

                {/* fundraising */}
                <div className="card">
                  <FundraisingStats />
                </div>
              </div>

              <div className="row">
                <div className="card">
                  <h4>Rounds</h4>
                  <p>Details about funding rounds...</p>
                </div>
                <div className="card">
                  <h4>Project Details</h4>
                  <p>Description of the project...</p>
                </div>
                <div className="card">
                  <h4>Token Metrics</h4>
                  <p>Initial Supply: 730,000,000</p>
                  <p>Total Supply: /</p>
                  <p>Symbol: DTOC</p>
                  <p>Blockchain: Ethereum</p>
                </div>
              </div>

              <div className="row">
                <div className="card">
                  <h4>Calendar</h4>
                  <p>Upcoming events and deadlines...</p>
                </div>
              </div>
            </div>
          )}
          {selectedTab === "Statistics" && (
            <div className="statistics">
              <h3>Statistics</h3>
              <p>Statistics content goes here...</p>
            </div>
          )}
          {selectedTab === "Community" && (
            <div className="community">
              <Community />
            </div>
          )}
          {selectedTab === "Faq" && (
            <div className="Faq">
              <Faq />
            </div>
          )}
          {selectedTab === "Offering" && (
            <div className="offering">
              <Offering />
            </div>
          )}
          {selectedTab === "Discussions" && (
            <div className="Discussions">
              <h1>Chat application</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
