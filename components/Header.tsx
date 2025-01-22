import Link from "next/link";
import Navigation from "./Navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

const TheHeader = () => {
  return (
    <header className="container">
      <Navigation navLinks={navItems} />
    </header>
  );
};

export { TheHeader };
