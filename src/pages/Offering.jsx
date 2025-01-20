import React, { useState, useEffect, useRef } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "../pages/Offering.css";

const Offering = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedUIs, setSavedUIs] = useState([]);  // State to store saved UIs
  const [isAlertVisible, setIsAlertVisible] = useState(false); // To control alert visibility
  const editorRef = useRef(null);

  useEffect(() => {
    if (isModalOpen) {
      const editor = grapesjs.init({
        container: "#gjs",
        height: "100vh",
        width: "auto",
        storageManager: {
          id: "gjs-",
          type: "local",
          autosave: true,
          autoload: true,
          stepsBeforeSave: 1,
        },
        blockManager: {
          appendTo: "#blocks",
          blocks: [
            {
              id: "header-block",
              label: "Header/Navbar",
              content: `
                <header style="background-color: #4caf50; color: white; padding: 20px;">
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h1 style="margin: 0;">My Website</h1>
                    <nav>
                      <ul style="list-style: none; display: flex; margin: 0; padding: 0; gap: 15px;">
                        <li><a href="#" style="color: white; text-decoration: none;">Home</a></li>
                        <li><a href="#" style="color: white; text-decoration: none;">About</a></li>
                        <li><a href="#" style="color: white; text-decoration: none;">Services</a></li>
                        <li><a href="#" style="color: white; text-decoration: none;">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </header>
              `,
              category: "Sections",
            },
            {
              id: "button-block",
              label: "Button",
              content: `
                <button style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
                  Click Me
                </button>
              `,
              category: "Components",
            },
            {
              id: "image-gallery-block",
              label: "Image Gallery",
              content: `
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                  <img src="https://via.placeholder.com/150" alt="Gallery Item" style="width: 100%; height: auto;" />
                  <img src="https://via.placeholder.com/150" alt="Gallery Item" style="width: 100%; height: auto;" />
                  <img src="https://via.placeholder.com/150" alt="Gallery Item" style="width: 100%; height: auto;" />
                </div>
              `,
              category: "Sections",
            },
            {
              id: "testimonial-block",
              label: "Testimonial",
              content: `
                <div style="border: 1px solid #ddd; padding: 20px; border-radius: 10px; max-width: 400px;">
                  <p style="font-style: italic; color: #666;">"This is a testimonial. The service was excellent and exceeded expectations."</p>
                  <p style="text-align: right; font-weight: bold; color: #333;">- John Doe</p>
                </div>
              `,
              category: "Components",
            },
            {
              id: "form-block",
              label: "Form",
              content: `
                <form style="border: 1px solid #ddd; padding: 20px; border-radius: 10px; max-width: 400px;">
                  <label for="name" style="display: block; margin-bottom: 10px; color: #333;">Name:</label>
                  <input type="text" id="name" name="name" placeholder="Enter your name" style="width: 100%; padding: 8px; margin-bottom: 20px; border: 1px solid #ddd; border-radius: 5px;" />
                  <label for="email" style="display: block; margin-bottom: 10px; color: #333;">Email:</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" style="width: 100%; padding: 8px; margin-bottom: 20px; border: 1px solid #ddd; border-radius: 5px;" />
                  <button type="submit" style="padding: 10px 15px; background-color: #4caf50; color: white; border: none; border-radius: 5px;">Submit</button>
                </form>
              `,
              category: "Components",
            },
            {
              id: "footer-block",
              label: "Footer",
              content: `
                <footer style="background-color: #222; color: #ccc; padding: 10px; text-align: center;">
                  <p>© 2025 My Website. All rights reserved.</p>
                  <ul style="list-style: none; padding: 0; display: flex; justify-content: center; gap: 15px;">
                    <li><a href="#" style="color: #fff; text-decoration: none;">Privacy Policy</a></li>
                    <li><a href="#" style="color: #fff; text-decoration: none;">Terms of Service</a></li>
                  </ul>
                </footer>
              `,
              category: "Sections",
            },
            {
              id: "card-block",
              label: "Card",
              content: `
                <div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px; max-width: 300px;">
                  <img src="https://via.placeholder.com/300x200" alt="Card Image" style="width: 100%; border-radius: 10px 10px 0 0;" />
                  <h3 style="margin: 15px 0 10px;">Card Title</h3>
                  <p style="color: #666;">This is a description of the card. It provides some basic information.</p>
                  <button style="padding: 10px 15px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Learn More
                  </button>
                </div>
              `,
              category: "Components",
            },
          ],
        },
      });

      editorRef.current = editor;

      return () => {
        editor.destroy();
      };
    }
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const saveUI = () => {
    const savedUI = editorRef.current.getHtml(); // Get the HTML of the created UI
    setSavedUIs([...savedUIs, savedUI]); // Save it to the state
    setIsAlertVisible(true); // Show alert after saving
  };

  const handleAlertClose = () => {
    setIsAlertVisible(false);
    closeModal(); // Close modal when OK is clicked
  };

  return (
    <div>
      <button
        onClick={openModal}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Create UI
      </button>

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,  // Ensure the modal is at the front
          }}
        >
          <div
            style={{
              position: "relative",
              width: "80%",
              height: "80%",
              backgroundColor: "#fff",
              borderRadius: "10px",
              overflow: "hidden",
              zIndex: 10000,  // Ensure the modal content is at the front
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                padding: "5px 10px",
                backgroundColor: "#f44336",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                zIndex: 10001,  // Ensure the close button is at the front
              }}
            >
              Close
            </button>
            <div style={{ display: "flex", height: "100%" }}>
              <div
                id="blocks"
                style={{
                  width: "250px",
                  background: "#fafafa",
                  padding: "10px",
                  overflowY: "scroll",
                }}
              />
              <div id="gjs" style={{ flex: 1, background: "#fff" }} />
            </div>
            {/* Save button placement */}
            <button
              onClick={saveUI}
              style={{
                padding: "10px 20px",
                backgroundColor: "#4caf50",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)", // Ensure center alignment
                zIndex: 10002,  // Ensure save button is in front of other elements
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* Alert Box */}
      {isAlertVisible && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 10003,
          }}
        >
          <h3>UI Saved Successfully!</h3>
          <button
            onClick={handleAlertClose}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            OK
          </button>
        </div>
      )}

      <div style={{ marginTop: "50px" }}>
        <h2>Saved UIs</h2>
        {savedUIs.map((ui, index) => (
          <div key={index} style={{ border: "1px solid #ddd", marginBottom: "20px", padding: "10px" }}>
            <div dangerouslySetInnerHTML={{ __html: ui }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offering;
