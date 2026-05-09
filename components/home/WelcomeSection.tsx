/**
 * WelcomeSection
 * The main content area with welcome message and CTA button.
 * Positioned in the center of the kiosk screen.
 */

export default function WelcomeSection() {
  return (
    <div
      className="absolute flex flex-col items-center justify-center gap-12"
      style={{
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 20,
        width: "80%",
      }}
    >
      {/* Welcome heading */}
      <h1
        style={{
          fontFamily: "var(--font-ubuntu), Ubuntu, sans-serif",
          fontWeight: 700,
          fontSize: 72,
          lineHeight: 1.2,
          color: "#1E293B",
          textAlign: "center",
        }}
      >
        Welcome to KOUWWA
      </h1>

      {/* Subheading */}
      <p
        style={{
          fontFamily: "var(--font-ubuntu), Ubuntu, sans-serif",
          fontWeight: 400,
          fontSize: 32,
          lineHeight: 1.5,
          color: "#475569",
          textAlign: "center",
        }}
      >
        Fresh food, made your way
      </p>

      {/* CTA Button */}
      <button
        className="group relative overflow-hidden"
        style={{
          width: 400,
          height: 120,
          backgroundColor: "#C93836",
          borderRadius: 16,
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 10px 40px rgba(201, 56, 54, 0.3)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 15px 50px rgba(201, 56, 54, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 10px 40px rgba(201, 56, 54, 0.3)";
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-ubuntu), Ubuntu, sans-serif",
            fontWeight: 700,
            fontSize: 36,
            color: "#FFFFFF",
            position: "relative",
            zIndex: 1,
          }}
        >
          Tap to Start Order
        </span>
      </button>

      {/* Helper text */}
      <p
        style={{
          fontFamily: "var(--font-ubuntu), Ubuntu, sans-serif",
          fontWeight: 400,
          fontSize: 24,
          color: "#64748B",
          textAlign: "center",
          marginTop: 24,
        }}
      >
        Touch anywhere to begin
      </p>
    </div>
  );
}
