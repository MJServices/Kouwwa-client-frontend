/**
 * Footer
 * Bottom section with additional info or branding.
 */

export default function Footer() {
  return (
    <footer
      className="absolute flex items-center justify-center"
      style={{
        left: 0,
        right: 0,
        bottom: 40,
        zIndex: 10,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-ubuntu), Ubuntu, sans-serif",
          fontWeight: 400,
          fontSize: 18,
          color: "#94A3B8",
          textAlign: "center",
        }}
      >
        © 2026 KOUWWA. All rights reserved.
      </p>
    </footer>
  );
}
