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
              id: "heading-block",
              label: "Heading",
              content: `
                <h2 style="color: #333;">This is a Heading</h2>
                <p style="color: #666;">This is a supporting paragraph for the heading above.</p>
              `,
              category: "Text",
            },
            {
              id: "paragraph-block",
              label: "Paragraph",
              content: `
                <p style="color: #333; font-size: 16px;">
                  This is a simple paragraph block. You can use it to add descriptive content to your webpage.
                </p>
              `,
              category: "Text",
            },
            {
              id: "list-block",
              label: "List",
              content: `
                <ul style="color: #333; padding-left: 20px;">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              `,
              category: "Text",
            },
            {
              id: "image-block",
              label: "Image",
              content: `
                <img src="https://via.placeholder.com/400x300" alt="Placeholder Image" style="width: 100%; height: auto; border-radius: 5px;" />
              `,
              category: "Media",
            },
            {
              id: "video-block",
              label: "Video",
              content: `
                <video controls style="width: 100%; max-height: 300px; border-radius: 5px;">
                  <source src="https://www.example.com/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              `,
              category: "Media",
            },
            {
              id: "blockquote-block",
              label: "Blockquote",
              content: `
                <blockquote style="border-left: 4px solid #4caf50; padding-left: 10px; color: #666; font-style: italic;">
                  "This is an example of a blockquote. Use it to highlight important quotes or messages."
                </blockquote>
              `,
              category: "Text",
            },
            {
              id: "icon-block",
              label: "Icons",
              content: `
                <div style="display: flex; gap: 10px;">
                  <i class="fa fa-facebook" style="font-size: 24px; color: #3b5998;"></i>
                  <i class="fa fa-twitter" style="font-size: 24px; color: #00acee;"></i>
                  <i class="fa fa-instagram" style="font-size: 24px; color: #e1306c;"></i>
                </div>
              `,
              category: "Components",
            },
            {
              id: "form-block",
              label: "Form",
              content: `
                <form style="border: 1px solid #ddd; padding: 20px; border-radius: 10px; max-width: 400px; margin: 0 auto;">
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
            {
              id: "newsletter-block",
              label: "Newsletter Subscription",
              content: `
                <form style="display: flex; flex-direction: column; gap: 10px; max-width: 400px; margin: 0 auto;">
                  <input type="email" placeholder="Enter your email" style="padding: 8px; border: 1px solid #ddd; border-radius: 5px;" />
                  <button type="submit" style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px;">
                    Subscribe
                  </button>
                </form>
              `,
              category: "Components",
            },
            {
              id: "timeline-block",
              label: "Timeline",
              content: `
                <div style="display: flex; flex-direction: column; gap: 20px;">
                  <div style="border-left: 4px solid #4caf50; padding-left: 10px;">
                    <h4 style="margin: 0;">Event 1</h4>
                    <p style="margin: 0;">Description of event 1.</p>
                  </div>
                  <div style="border-left: 4px solid #4caf50; padding-left: 10px;">
                    <h4 style="margin: 0;">Event 2</h4>
                    <p style="margin: 0;">Description of event 2.</p>
                  </div>
                </div>
              `,
              category: "Sections",
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
