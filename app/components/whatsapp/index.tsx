import React from "react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const defaultMessage = "Hello! I would like to know more about your services.";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

const buttonStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    zIndex: 1000,
    backgroundColor: "#25D366",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "56px",
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    cursor: "pointer",
    fontSize: "28px",
    textDecoration: "none",
};

export default function WhatsappButton() {
    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            style={buttonStyle}
        >
            {/* WhatsApp SVG icon */}
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#25D366" />
                <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.09L4 29l7.18-2.32C13.9 27.7 14.94 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.01 0-2.01-.15-2.97-.44l-.21-.07-4.27 1.38 1.4-4.16-.13-.21C7.36 19.01 6.5 17.06 6.5 15c0-5.24 4.26-9.5 9.5-9.5s9.5 4.26 9.5 9.5-4.26 9.5-9.5 9.5zm5.13-6.36c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.13-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.27-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.62-.48-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.22.69.24 1.23.38 1.65.49.69.18 1.32.15 1.82.09.56-.07 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" fill="#fff" />
            </svg>
        </a>
    );
}