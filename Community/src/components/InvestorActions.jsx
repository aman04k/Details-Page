import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./InvestorActions.css";

const InvestorActions = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tokensOwned, setTokensOwned] = useState(5); // Example tokens owned

  // Connect Wallet
  const connectWallet = () => {
    setWalletConnected(true);
    setShowModal(false);
    toast.success("Wallet connected successfully!");
  };

  // Buy Action
  const handleBuyAction = () => {
    if (!walletConnected) {
      setShowModal(true);
    } else {
      toast.info("Redirecting to buy...");
    }
  };

  // Sell Action
  const handleSellAction = () => {
    toast.info("Opening sell/transfer modal...");
  };

  // Voting Action
  const handleVoteAction = () => {
    if (walletConnected) {
      toast.info("Redirecting to voting platform...");
    } else {
      toast.error("Please connect your wallet to vote.");
    }
  };

  return (
    <div className="app-container">
      <div className="card-container">
        {/* Action Buttons */}
        <div className="card-actions">
          <button className="action-button buy" onClick={handleBuyAction}>
            Buy
          </button>
          <button className="action-button sell" onClick={handleSellAction}>
            Sell
          </button>
        </div>

        {/* Voting Section */}
        <div className="voting-section">
          <h3>Vote & Governance</h3>
          {walletConnected ? (
            <button className="action-button vote" onClick={handleVoteAction}>
              Vote Now
            </button>
          ) : (
            <p>Please connect your wallet to participate in voting.</p>
          )}
        </div>
      </div>

      {/* Modal for Wallet Connection */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Connect Your Wallet</h3>
            <p>Please connect your wallet to proceed with the action.</p>
            <button className="connect-button" onClick={connectWallet}>
              Connect Wallet
            </button>
            <button className="close-button" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default InvestorActions;
