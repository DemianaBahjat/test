import React from "react";
import Link from "next/link";
import styles from "./MyNav.module.css";

const MyNav = () => {
  return (
    <div className={styles.navContainer}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/products" className={styles.navLink}>
              Products
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/users" className={styles.navLink}>
              Users
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MyNav;
