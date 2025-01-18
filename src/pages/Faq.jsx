import React, { useState } from "react";
import "../pages/Faq.css";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is FNFT?",
      answer:
        "FNFT stands for Fractional NFT, which allows ownership of a digital asset to be divided into smaller fractions, enabling multiple investors to hold a portion of it.",
      isOpen: false,
    },
    {
      question: "How does FNFT differ from traditional NFTs?",
      answer:
        "FNFTs allow fractional ownership, making them more accessible compared to traditional NFTs that require full ownership.",
      isOpen: false,
    },
    {
      question: "What is a Launchpad?",
      answer:
        "A Launchpad is a platform that helps projects raise funds by offering their assets to early-stage investors.",
      isOpen: false,
    },
    {
      question: "How do I participate in a Launchpad?",
      answer:
        "You can participate by signing up on a Launchpad platform, completing the KYC process, and investing in listed projects.",
      isOpen: false,
    },
    {
      question: "What is F-NFT and how does it work?",
      answer:
        "F-NFT refers to Fractional NFT. It works by dividing ownership into fractions, which are represented as tokens.",
      isOpen: false,
    },
    {
      question: "What are the benefits of F-NFTs?",
      answer:
        "F-NFTs increase accessibility, provide liquidity, and allow multiple investors to co-own an asset.",
      isOpen: false,
    },
    {
      question: "What is the Launchpad fundraising process?",
      answer:
        "The process involves listing a project, setting a funding goal, and allowing investors to contribute in exchange for assets.",
      isOpen: false,
    },
    {
      question: "How can I mint a new FNFT?",
      answer:
        "To mint an FNFT, you need a compatible platform where you can upload your asset and specify the number of fractions.",
      isOpen: false,
    },
  ]);

  const [newFaq, setNewFaq] = useState({ question: "", answer: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(faqs.length / itemsPerPage);

  const handleAddFaq = () => {
    if (newFaq.question && newFaq.answer) {
      setFaqs([{ ...newFaq, isOpen: false }, ...faqs]); // Add new FAQ to the top
      setNewFaq({ question: "", answer: "" });
      setCurrentPage(1); // Reset to the first page
    }
  };

  const handleToggle = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].isOpen = !updatedFaqs[index].isOpen;
    setFaqs(updatedFaqs);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentFaqs = faqs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="faq-container">
      <h1>FAQs</h1>
      <input
        type="text"
        placeholder="Search FAQs..."
        className="search-input"
      />

      {/* FAQ List */}
      <div className="faq-list">
        {currentFaqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-header">
              <span className="faq-question">{faq.question}</span>
              <span
                className={`icon ${faq.isOpen ? "icon-minus" : "icon-plus"}`}
                onClick={() =>
                  handleToggle((currentPage - 1) * itemsPerPage + index)
                }
              ></span>
            </div>
            {faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`pagination-btn ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Add New FAQ */}
      <div className="add-faq">
        <h2>Add a new FAQ</h2>
        <input
          type="text"
          placeholder="Enter question..."
          value={newFaq.question}
          onChange={(e) =>
            setNewFaq({ ...newFaq, question: e.target.value })
          }
        />
        <textarea
          placeholder="Enter answer..."
          value={newFaq.answer}
          onChange={(e) =>
            setNewFaq({ ...newFaq, answer: e.target.value })
          }
        />
        <button onClick={handleAddFaq}>Add FAQ</button>
      </div>
    </div>
  );
};

export default Faq;
