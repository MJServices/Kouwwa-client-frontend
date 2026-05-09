/**
 * KioskScreen
 * Full-width scrollable container for the homepage
 */

interface KioskScreenProps {
  children: React.ReactNode;
}

export default function KioskScreen({ children }: KioskScreenProps) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}
