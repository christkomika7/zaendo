import { useState, useEffect, useRef } from "react";
import NavLink from "next/link";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const MobileNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setOpen(!open);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        when: "afterChildren" as const,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        when: "beforeChildren" as const,
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  const menuItems = ["home", "about", "service", "project", "contact"];

  return (
    <div className="ms:hidden block relative" ref={menuRef}>
      <motion.button
        className="relative focus:outline-none w-10 h-10"
        onClick={handleToggle}
        whileTap={{ scale: 0.95 }}
      >
        <span className="sr-only">Open main menu</span>
        <motion.div className="block top-1/2 left-1/2 absolute w-5 -translate-x-1/2 -translate-y-1/2 transform">
          <motion.span
            animate={{ y: open ? 0 : -6, rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="block absolute bg-white w-5 h-0.5"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="block absolute bg-white w-5 h-0.5"
          />
          <motion.span
            animate={{ y: open ? 0 : 6, rotate: open ? -45 : 0 }}
            transition={{ duration: 0.3 }}
            className="block absolute bg-white w-5 h-0.5"
          />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="top-16 right-2 sm:right-4 fixed shadow shadow-black/20 backdrop-blur-2xl p-3 bg-border/80 rounded-xl w-[250px] h-fit"
          >
            <motion.ul className="flex flex-col gap-y-3">
              {menuItems.map((item) => (
                <motion.li key={item} variants={menuItemVariants}>
                  <Link
                    activeClass="active"
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="block hover:bg-neutral-200/10 p-2 rounded-md text-sm transition"
                    onClick={() => setOpen(false)}
                  >
                    {item.toUpperCase()}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={menuItemVariants}
                className="pt-4 border-neutral-800 border-t"
              >
                <NavLink
                  className="block bg-white dark:bg-white p-2 text-border dark:text-border rounded-md text-sm text-center transition"
                  href="/project"
                >
                  Lancer votre projet
                </NavLink>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
