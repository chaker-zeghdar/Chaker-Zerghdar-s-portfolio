"use client" 

import * as React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { cn } from "@/src/lib/utils"

interface NavItem {
  name: string;
  href?: string;      // anchor on home page
  to?: string;        // route link
}

const navItems: NavItem[] = [
  { name: "Home", to: "/" },
  { name: "Work", href: "#work" },
  { name: "About Me", to: "/about" },
  { name: "Experience", to: "/experience" },
];

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (item: NavItem) => {
    if (item.to) {
      if (location.pathname === item.to) {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        navigate(item.to)
      }
      return
    }

    if (item.href) {
      if (location.pathname !== "/") {
        navigate("/")
        setTimeout(() => {
          const el = document.querySelector(item.href!)
          if (el) el.scrollIntoView({ behavior: "smooth" })
        }, 100)
      } else {
        const el = document.querySelector(item.href)
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const isActive = (item: NavItem) => {
    if (item.to) return location.pathname === item.to
    return false
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full py-4 px-4 pointer-events-none">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "flex items-center justify-between px-6 py-3 rounded-full w-full max-w-3xl relative z-10 pointer-events-auto transition-all duration-500",
          isScrolled 
            ? "bg-black/60 backdrop-blur-2xl border border-white/10 shadow-lg shadow-black/20" 
            : "bg-transparent border border-transparent"
        )}
      >
      <button
        onClick={() => {
          if (location.pathname !== "/") {
            navigate("/")
            setTimeout(() => {
              const el = document.querySelector("#hero")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }, 100)
          } else {
            const el = document.querySelector("#hero")
            if (el) el.scrollIntoView({ behavior: "smooth" })
          }
        }}
        className="text-base font-bold tracking-tight hover:opacity-70 transition-opacity"
      >
        CZ<span className="text-white/30">.</span>
      </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={cn(
                "text-[13px] px-3 py-1.5 rounded-full transition-all duration-300 font-medium",
                isActive(item)
                  ? "text-white bg-white/10" 
                  : "text-white/40 hover:text-white/80"
              )}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/60 transition-colors">
            <Github size={16} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/60 transition-colors">
            <Linkedin size={16} />
          </a>
          <button
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/")
                setTimeout(() => {
                  const el = document.querySelector("#contact")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }, 100)
              } else {
                const el = document.querySelector("#contact")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="ml-2 px-5 py-2 text-[13px] text-black bg-white rounded-full font-semibold hover:bg-white/90 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] active:scale-95 transition-all duration-300"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center p-2 text-white/60" 
          onClick={toggleMenu} 
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/98 backdrop-blur-2xl z-50 pt-32 px-10 md:hidden pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-6 right-6 p-3 text-white/40 hover:text-white"
              onClick={toggleMenu}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col space-y-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <button
                    className={cn(
                      "text-3xl font-semibold transition-colors text-left",
                      isActive(item) ? "text-white" : "text-white/30 hover:text-white/60"
                    )}
                    onClick={() => { handleNavClick(item); toggleMenu(); }}
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}

              <div className="flex gap-5 pt-6 border-t border-white/5">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-4"
              >
                <button
                  onClick={() => {
                    toggleMenu();
                    if (location.pathname !== "/") {
                      navigate("/");
                      setTimeout(() => {
                        const el = document.querySelector("#contact");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    } else {
                      const el = document.querySelector("#contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="inline-flex items-center justify-center w-full px-8 py-4 text-lg text-black bg-white rounded-full font-semibold hover:bg-white/90 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] active:scale-[0.98] transition-all duration-300"
                >
                  Contact
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { Navbar1 }
