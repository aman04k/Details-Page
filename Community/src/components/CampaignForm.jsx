import React, { useState } from "react";
import "../components/CampaignForm.css";

const CampaignForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nftType: "new", // "new" or "existing"
    nftFile: null,
    contractAddress: "",
    blockchain: "",
    fractionalAmount: "",
    tokenSymbol: "",
    fundraisingGoal: "",
    fractionPrice: "",
    fundraisingModel: "",
    campaignDuration: "",
    buyoutOption: false,
    rewardsDescription: "",
    votingRights: "no", // "yes" or "no"
    kycDocument: null,
    amlDeclaration: false,
    termsAgreed: false,
    digitalSignature: "",
  });
  const [errors, setErrors] = useState({});

  const steps = [
    "NFT & Fractionalization",
    "Fundraising Details",
    "Incentives & Rewards",
    "Security & Compliance",
    "Terms and Conditions",
  ];

  const validateStep = () => {
    let newErrors = {};

    switch (currentStep) {
      case 1:
        if (!formData.nftFile) newErrors.nftFile = "NFT file is required.";
        if (!formData.contractAddress) newErrors.contractAddress = "Contract address is required.";
        if (!formData.blockchain) newErrors.blockchain = "Blockchain selection is required.";
        if (!formData.fractionalAmount) newErrors.fractionalAmount = "Fractional amount is required.";
        if (!formData.tokenSymbol) newErrors.tokenSymbol = "Token symbol is required.";
        break;
      case 2:
        if (!formData.fundraisingGoal) newErrors.fundraisingGoal = "Fundraising goal is required.";
        if (!formData.fractionPrice) newErrors.fractionPrice = "Fraction price is required.";
        if (!formData.fundraisingModel) newErrors.fundraisingModel = "Fundraising model is required.";
        if (!formData.campaignDuration) newErrors.campaignDuration = "Campaign duration is required.";
        break;
      case 3:
        if (!formData.rewardsDescription) newErrors.rewardsDescription = "Rewards description is required.";
        break;
      case 4:
        if (!formData.kycDocument) newErrors.kycDocument = "KYC document is required.";
        if (!formData.amlDeclaration) newErrors.amlDeclaration = "AML declaration is required.";
        break;
      case 5:
        if (!formData.termsAgreed) newErrors.termsAgreed = "You must agree to the terms and conditions.";
        if (!formData.digitalSignature) newErrors.digitalSignature = "Digital signature is required.";
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < steps.length) setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h3>NFT & Fractionalization</h3>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="nftType"
                  value="new"
                  checked={formData.nftType === "new"}
                  onChange={handleInputChange}
                />
                Mint a New NFT
              </label>
              <label>
                <input
                  type="radio"
                  name="nftType"
                  value="existing"
                  checked={formData.nftType === "existing"}
                  onChange={handleInputChange}
                />
                Use Existing NFT
              </label>
            </div>
            <div>
              <label>Upload NFT File</label>
              <input type="file" name="nftFile" onChange={handleInputChange} />
              {errors.nftFile && <p className="error">{errors.nftFile}</p>}
            </div>
            <div>
              <label>Enter Contract Address</label>
              <input
                type="text"
                name="contractAddress"
                value={formData.contractAddress}
                onChange={handleInputChange}
              />
              {errors.contractAddress && <p className="error">{errors.contractAddress}</p>}
            </div>
            <div>
              <label>Blockchain Selection</label>
              <select
                name="blockchain"
                value={formData.blockchain}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="Ethereum">Ethereum</option>
                <option value="Polygon">Polygon</option>
              </select>
              {errors.blockchain && <p className="error">{errors.blockchain}</p>}
            </div>
            <div>
              <label>Fractionalization Amount</label>
              <input
                type="number"
                name="fractionalAmount"
                value={formData.fractionalAmount}
                onChange={handleInputChange}
              />
              {errors.fractionalAmount && <p className="error">{errors.fractionalAmount}</p>}
            </div>
            <div>
              <label>Token Symbol</label>
              <input
                type="text"
                name="tokenSymbol"
                value={formData.tokenSymbol}
                onChange={handleInputChange}
              />
              {errors.tokenSymbol && <p className="error">{errors.tokenSymbol}</p>}
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Fundraising Details</h3>
            <div>
              <label>Fundraising Goal</label>
              <input
                type="number"
                name="fundraisingGoal"
                value={formData.fundraisingGoal}
                onChange={handleInputChange}
              />
              {errors.fundraisingGoal && <p className="error">{errors.fundraisingGoal}</p>}
            </div>
            <div>
              <label>Fraction Price</label>
              <input
                type="number"
                name="fractionPrice"
                value={formData.fractionPrice}
                onChange={handleInputChange}
              />
              {errors.fractionPrice && <p className="error">{errors.fractionPrice}</p>}
            </div>
            <div>
              <label>Fundraising Model</label>
              <select
                name="fundraisingModel"
                value={formData.fundraisingModel}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="Fixed Price">Fixed Price</option>
                <option value="Auction">Auction</option>
                <option value="Bonding Curve">Bonding Curve</option>
              </select>
              {errors.fundraisingModel && <p className="error">{errors.fundraisingModel}</p>}
            </div>
            <div>
              <label>Campaign Duration</label>
              <input
                type="date"
                name="campaignDuration"
                value={formData.campaignDuration}
                onChange={handleInputChange}
              />
              {errors.campaignDuration && <p className="error">{errors.campaignDuration}</p>}
            </div>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="buyoutOption"
                  checked={formData.buyoutOption}
                  onChange={handleInputChange}
                />
                Enable Buyout Option
              </label>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>Incentives & Rewards</h3>
            <div>
              <label>Investor Rewards Description</label>
              <textarea
                name="rewardsDescription"
                value={formData.rewardsDescription}
                onChange={handleInputChange}
              />
              {errors.rewardsDescription && <p className="error">{errors.rewardsDescription}</p>}
            </div>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="votingRights"
                  value="yes"
                  checked={formData.votingRights === "yes"}
                  onChange={handleInputChange}
                />
                Voting Rights: Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="votingRights"
                  value="no"
                  checked={formData.votingRights === "no"}
                  onChange={handleInputChange}
                />
                Voting Rights: No
              </label>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h3>Security & Compliance</h3>
            <div>
              <label>Upload KYC Documents</label>
              <input type="file" name="kycDocument" onChange={handleInputChange} />
              {errors.kycDocument && <p className="error">{errors.kycDocument}</p>}
            </div>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="amlDeclaration"
                  checked={formData.amlDeclaration}
                  onChange={handleInputChange}
                />
                AML Declaration
              </label>
              {errors.amlDeclaration && <p className="error">{errors.amlDeclaration}</p>}
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <h3>Terms and Conditions</h3>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleInputChange}
                />
                Agree to Platform Terms
              </label>
              {errors.termsAgreed && <p className="error">{errors.termsAgreed}</p>}
            </div>
            <div>
              <label>Digital Signature</label>
              <input
                type="text"
                name="digitalSignature"
                value={formData.digitalSignature}
                onChange={handleInputChange}
              />
              {errors.digitalSignature && <p className="error">{errors.digitalSignature}</p>}
            </div>
          </div>
        );
      default:
        return <div>Step not found.</div>;
    }
  };

  return (
    <div className="campaign-form">
      {/* <h2>Create New Campaign</h2> */}
      <div className="progress-bar">
        <span>
          Step {currentStep} of {steps.length}
        </span>
        <div className="progress-bar-indicator">
          <div
            style={{
              width: `${(currentStep / steps.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <form>{renderStep()}</form>

      <div className="form-navigation">
        <button
          type="button"
          className="secondary"
          onClick={handlePrevious}
          disabled={currentStep === 1}
        >
          Previous
        </button>
        <button
          type="button"
          className="primary"
          onClick={handleNext}
          disabled={currentStep === steps.length}
        >
          {currentStep === steps.length ? "Submit Campaign" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default CampaignForm;
