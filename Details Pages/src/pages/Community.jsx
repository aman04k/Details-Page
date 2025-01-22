// import React, { useState } from "react";
// import "../pages/Community.css"
// const investors = [
//   { id: 1, name: "1st Investor", rank: 1, image: "https://miro.medium.com/v2/resize:fit:2400/1*pLoTLE7VOeRrtUlq0bLZEw.jpeg", color: "yellow" },
//   { id: 2, name: "2nd Investor", rank: 2, image: "https://img.freepik.com/vecteurs-libre/illustration-singe-style-nft-dessine-main_23-2149622021.jpg", color: "blue" },
//   { id: 3, name: "3rd Investor", rank: 3, image: "https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/14164044/mutant-975x1024-1.jpeg", color: "red" },
//   { id: 4, name: "4th Investor", rank: 4, image: "https://img.freepik.com/vecteurs-libre/illustration-singe-style-nft-dessine-main_23-2149622021.jpg", color: "purple" },
//   { id: 5, name: "5th Investor", rank: 5, image: "https://miro.medium.com/v2/resize:fit:2400/1*pLoTLE7VOeRrtUlq0bLZEw.jpeg", color: "green" },
// ];

// const testimonials = [
//   {
//     id: 1,
//     name: "john_doe",
//     role: "A passionate developer and tech enthusiast.",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
//     avatar: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1701090577/catalog/1729124222401699840/hzmm4zewhkqgwbaid4hi.jpg",
//   },
//   {
//     id: 2,
//     name: "jane_smith",
//     role: "UI/UX designer with a love for creativity.",
//     text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum ante ipsum primis.",
//     avatar: "https://img.freepik.com/vecteurs-libre/illustration-singe-style-nft-dessine-main_23-2149622021.jpg",
//   },
//   {
//     id: 3,
//     name: "alex_jones",
//     role: "Full-stack developer and open-source advocate.",
//     text: "Curabitur vitae turpis in est ullamcorper euismod. Proin tincidunt nisi.",
//     avatar: "https://miro.medium.com/v2/resize:fit:2400/1*pLoTLE7VOeRrtUlq0bLZEw.jpeg",
//   },
// ];

// function Community() {
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <div className="offering">
//       <h2>Lead Investors</h2>
//       <div className="investors-grid">
//         {investors.map((investor) => (
//           <div className="investor-card" key={investor.id}>
//             <img src={investor.image} alt={investor.name} />
//             <div className={`rank-badge rank-${investor.color}`}>
//               Top {investor.rank}
//             </div>
//             <p>{investor.name}</p>
//           </div>
//         ))}
//       </div>

//       <h2>What Our Investors Say</h2>
//       <div className="testimonials">
//         {testimonials.map((testimonial) => (
//           <div className="testimonial" key={testimonial.id}>
//             <img src={testimonial.avatar} alt={testimonial.name} />
//             <div>
//               <h3>{testimonial.name}</h3>
//               <p className="role">{testimonial.role}</p>
//               <p>{showMore ? testimonial.text : `${testimonial.text.substring(0, 50)}...`}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button className="toggle-button" onClick={() => setShowMore(!showMore)}>
//         {showMore ? "Show Less" : "Show More"}
//       </button>
//     </div>
//   );
// }

// export default Community;



import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../pages/Community.css"
const Community = () => {
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

export default Community;
