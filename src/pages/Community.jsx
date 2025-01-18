import React, { useState } from "react";
import "../pages/Community.css"
const investors = [
  { id: 1, name: "1st Investor", rank: 1, image: "https://miro.medium.com/v2/resize:fit:2400/1*pLoTLE7VOeRrtUlq0bLZEw.jpeg", color: "yellow" },
  { id: 2, name: "2nd Investor", rank: 2, image: "https://img.freepik.com/vecteurs-libre/illustration-singe-style-nft-dessine-main_23-2149622021.jpg", color: "blue" },
  { id: 3, name: "3rd Investor", rank: 3, image: "https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/14164044/mutant-975x1024-1.jpeg", color: "red" },
  { id: 4, name: "4th Investor", rank: 4, image: "https://img.freepik.com/vecteurs-libre/illustration-singe-style-nft-dessine-main_23-2149622021.jpg", color: "purple" },
  { id: 5, name: "5th Investor", rank: 5, image: "https://miro.medium.com/v2/resize:fit:2400/1*pLoTLE7VOeRrtUlq0bLZEw.jpeg", color: "green" },
];

const testimonials = [
  {
    id: 1,
    name: "john_doe",
    role: "A passionate developer and tech enthusiast.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
    avatar: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1701090577/catalog/1729124222401699840/hzmm4zewhkqgwbaid4hi.jpg",
  },
  {
    id: 2,
    name: "jane_smith",
    role: "UI/UX designer with a love for creativity.",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum ante ipsum primis.",
    avatar: "https://img.freepik.com/vecteurs-libre/illustration-singe-style-nft-dessine-main_23-2149622021.jpg",
  },
  {
    id: 3,
    name: "alex_jones",
    role: "Full-stack developer and open-source advocate.",
    text: "Curabitur vitae turpis in est ullamcorper euismod. Proin tincidunt nisi.",
    avatar: "https://miro.medium.com/v2/resize:fit:2400/1*pLoTLE7VOeRrtUlq0bLZEw.jpeg",
  },
];

function Community() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="offering">
      <h2>Lead Investors</h2>
      <div className="investors-grid">
        {investors.map((investor) => (
          <div className="investor-card" key={investor.id}>
            <img src={investor.image} alt={investor.name} />
            <div className={`rank-badge rank-${investor.color}`}>
              Top {investor.rank}
            </div>
            <p>{investor.name}</p>
          </div>
        ))}
      </div>

      <h2>What Our Investors Say</h2>
      <div className="testimonials">
        {testimonials.map((testimonial) => (
          <div className="testimonial" key={testimonial.id}>
            <img src={testimonial.avatar} alt={testimonial.name} />
            <div>
              <h3>{testimonial.name}</h3>
              <p className="role">{testimonial.role}</p>
              <p>{showMore ? testimonial.text : `${testimonial.text.substring(0, 50)}...`}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="toggle-button" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default Community;
