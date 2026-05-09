/**
 * Navbar
 * Top navigation bar with KOUWWA branding.
 * Positioned at the top-left of the kiosk screen.
 */

export default function Navbar() {
  return (
    <nav
      className="absolute flex items-center"
      style={{
        left: 0,
        top: 0,
        right: 0,
        height: 80,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
        zIndex: 50,
        paddingLeft: 40,
        paddingRight: 40,
      }}
    >
      {/* KOUWWA brand logo/text */}
      <div className="flex items-center gap-4">
        <span
          style={{
            fontFamily: "var(--font-ubuntu), Ubuntu, sans-serif",
            fontWeight: 700,
            fontSize: 36,
            color: "#C93836",
            letterSpacing: "-0.02em",
          }}
        >
          KOUWWA
        </span>
      </div>

      {/* Right side - could add language selector, help, etc */}
      <div className="ml-auto flex items-center gap-6">
        <button
          style={{
            fontFamily: "var(--font-ubuntu), Ubuntu, sans-serif",
            fontWeight: 500,
            fontSize: 18,
            color: "#64748B",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "8px 16px",
          }}
        >
          Help
        </button>
      </div>
    </nav>
  );
}
