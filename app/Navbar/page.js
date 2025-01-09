"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Image
          src="/images/WHO.png"
          alt="Icon 1"
          width={40}
          height={40}
          className="navbar-image"
        />
        <Image
          src="/images/IDI.png" 
          alt="Icon 2"
          width={50}
          height={50}
          className="navbar-image"
        />
        <Image
          src="/images/unimma.png" 
          alt="Icon 3"
          width={40}
          height={40}
          className="navbar-image"
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Menu Links */}
      <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
