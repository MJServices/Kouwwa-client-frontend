/**
 * LogoCenterpiece
 * The KOUWWA logo displayed prominently in the upper-center area.
 * Uses the actual logo image.
 */

import Image from "next/image";

export default function LogoCenterpiece() {
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{
        left: "50%",
        top: 180,
        transform: "translateX(-50%)",
        width: 280,
        height: 280,
        zIndex: 30,
      }}
    >
      <div
        className="relative"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
          padding: 40,
        }}
      >
        <Image
          src="/images/logo.png"
          alt="KOUWWA"
          fill
          priority
          style={{
            objectFit: "contain",
            padding: 40,
          }}
        />
      </div>
    </div>
  );
}
