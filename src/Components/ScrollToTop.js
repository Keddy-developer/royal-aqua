import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Home.css"; // Add styles if necessary

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <div
          className="scroll-to-top"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "9999",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {/* Message Text */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "10px 15px",
              borderRadius: "20px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
              fontSize: "16px",
              color: "#333",
            }}
          >
            Call: <strong>0794338999</strong>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/254794338999"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#25D366",
              padding: "12px",
              borderRadius: "50%",
              color: "white",
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
              textDecoration: 'none'
            }}
          >
            <i className="fab fa-whatsapp"></i>
          </a>

          {/* Scroll to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="warning"
            style={{
              padding: "10px",
              borderRadius: "50%",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
              fontSize: "20px",
            }}
          >
            <i className="fas fa-chevron-up"></i>
          </Button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
