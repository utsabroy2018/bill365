'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import styles from '../style/Home.module.css'

export function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={cn("container mx-auto px-4 sm:px-6 relative", className)}>
      <div className="flex justify-between items-center pt-3 pb-3">
        <Link href={"/"} className={styles.logo_img}>
          <img
            aria-hidden
            src="/logo_new.png"
            alt="logo"
            width={69}
            height={90}
          />
        </Link>

        {/* Hamburger Button - visible only on mobile */}
        <button
          className={`md:hidden ${styles.hamberger_menu}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <Menu setActive={setActive}>
            <Link href={"/"}>
              <MenuItem setActive={setActive} item="Home" />
            </Link>
            <Link href={"/about"}>
              <MenuItem setActive={setActive} item="About Us" />
            </Link>
            <Link href={"/features"}>
              <MenuItem setActive={setActive} item="Features" />
            </Link>
            <Link href={"/blog"}>
              <MenuItem setActive={setActive} item="Blog" />
            </Link>
            <Link href={"/contact"}>
              <MenuItem setActive={setActive} item="Contact Us" />
            </Link>
          </Menu>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`${styles.navSection_responsive} container mx-auto px-4 sm:px-6`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <span className="block px-4 py-2">Home</span>
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            <span className="block px-4 py-2">About Us</span>
          </Link>
          <Link href="/features" onClick={() => setMenuOpen(false)}>
            <span className="block px-4 py-2">Features</span>
          </Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>
            <span className="block px-4 py-2">Blog</span>
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <span className="block px-4 py-2">Contact Us</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
