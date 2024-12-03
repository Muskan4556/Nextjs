"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathName = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog/first-post", label: "Blog" },
    { href: "/products/1", label: "Product 1" },
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
    { href: "/forget-password", label: "Forget Password" },
  ];

  return (
    <div className="px-4 py-2 flex gap-8 justify-between bg-slate-500 flex-wrap mb-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${
            pathName === link.href ? "text-green-500 font-bold" : "text-white"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
