/**
 * HomeBackground
 * A gradient background instead of a static image.
 * Creates a warm, inviting atmosphere for the kiosk.
 */

export default function HomeBackground() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(135deg, #FFF5F5 0%, #FED7D7 50%, #FC8181 100%)",
        zIndex: 0,
      }}
    />
  );
}
