"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Menu, Search, X } from "lucide-react"
import Image from 'next/image';

const mainNavItems = [
  {
    title: "About Us",
    href: "#",
    subItems: [
      { title: "Act (PPP)", href: "#" },
      { title: "Statute", href: "#" },
      { title: "Institute Profile", href: "#" },
      { title: "Facilities", href: "#" },
      { title: "Annual Report", href: "#" },
      { title: "MoU", href: "#" },
    ],
  },
  {
    title: "Governance",
    href: "#",
    subItems: [
      {
        title: "Committee",
        href: "#",
        subItems: [
          { title: "Board Of Governors", href: "#" },
          { title: "Finance Committee", href: "#" },
          { title: "Senate", href: "#" },
          { title: "Building Works Committee", href: "#" },
        ],
      },
      {
        title: "Administration",
        href: "#",
        subItems: [
          { title: "Chairman", href: "#" },
          { title: "Director", href: "#" },
          { title: "Registrar", href: "#" },
          { title: "Staff", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Department",
    href: "#",
    subItems: [
      {
        title: "Basic Sciences",
        href: "#",
        subItems: [
          { title: "About Department", href: "#" },
          { title: "BoS", href: "#" },
          { title: "Achievements", href: "#" },
          { title: "Research", href: "#" },
          { title: "Faculty", href: "#" },
          { title: "Staff", href: "#" },
          { title: "Projects", href: "#" },
          { title: "Laboratory", href: "#" },
          { title: "Events", href: "#" },
        ],
      },
      {
        title: "Computer Science and Engineering",
        href: "#",
        subItems: [
          { title: "About Department", href: "#" },
          { title: "BoS", href: "#" },
          { title: "Achievements", href: "#" },
          { title: "Research", href: "#" },
          { title: "Faculty", href: "#" },
          { title: "Staff", href: "#" },
          { title: "Projects", href: "#" },
          { title: "Laboratory", href: "#" },
          { title: "Events", href: "#" },
        ],
      },
      {
        title: "Electronics & Communication Engineering",
        href: "#",
        subItems: [
          { title: "About Department", href: "#" },
          { title: "BoS", href: "#" },
          { title: "Achievements", href: "#" },
          { title: "Research", href: "#" },
          { title: "Faculty", href: "#" },
          { title: "Staff", href: "#" },
          { title: "Projects", href: "#" },
          { title: "Laboratory", href: "#" },
          { title: "Events", href: "#" },
        ],
      },
      {
        title: "Doctoral Programme",
        href: "#",
        subItems: [
          { title: "Overview of PhD Program", href: "#" },
          { title: "Doctoral Programme Features", href: "#" },
          { title: "Research Areas", href: "#" },
          { title: "Operational Details", href: "#" },
          { title: "Important Proformas", href: "#" },
          { title: "Checklists", href: "#" },
          { title: "Contact Us", href: "#" },
        ],
      },
      {
        title: "Programs",
        href: "#",
        subItems: [
          { title: "B.Tech", href: "#" },
          { title: "PG Diploma", href: "#" },
          { title: "PhD", href: "#" },
          { title: "M.Tech", href: "#" },
          { title: "Curriculum", href: "#" },
          { title: "Reports", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Admissions",
    href: "#",
    subItems: [
      { title: "Undergraduate B.Tech", href: "#" },
      { title: "Postgraduate", href: "#" },
      { title: "UG Academic Rule Book", href: "#" },
      { title: "PG Academic Rule Book", href: "#" },
    ],
  },
  {
    title: "Alumni",
    href: "#",
    subItems: [
      { title: "Member Login", href: "#" },
      { title: "Members", href: "#" },
      { title: "About Us", href: "#" },
    ],
  },
  {
    title: "Placements",
    href: "#",
    subItems: [
      { title: "About Us", href: "#" },
      { title: "Why Recruit from IIITN Nagpur?", href: "#" },
      { title: "Placement Statistics", href: "#" },
      { title: "For Companies", href: "#" },
      { title: "For Students", href: "#" },
      { title: "Contact T&P", href: "#" },
      { title: "Internships", href: "#" },
    ],
  },
  {
    title: "Student",
    href: "#",
    subItems: [
      { title: "Activities", href: "#" },
      { title: "Achievements", href: "#" },
      { title: "Clinical Counselling", href: "#" },
      { title: "Scholarships", href: "#" },
      { title: "Hostel", href: "#" },
      { title: "Student Mess", href: "#" },
      { title: "Download", href: "#" },
      { title: "Convocation 2023", href: "#" },
      { title: "Fees", href: "#" },
    ],
  },
  {
    title: "NIRF",
    href: "#",
    subItems: [
      { title: "NIRF 2025", href: "#" },
      { title: "NIRF 2024", href: "#" },
      { title: "NIRF 2023", href: "#" },
    ],
  },
  {
    title: "Others",
    href: "#",
    subItems: [
      { title: "Consultancy", href: "#" },
      { title: "Institution Innovation Council", href: "#" },
      { title: "Official Documents", href: "#" },
      { title: "Electoral Literacy Club", href: "#" },
      { title: "Guest House", href: "#" },
      { title: "Press Release", href: "#" },
    ],
  },
]

export function MainNav() {
  const [activeItem, setActiveItem] = React.useState<string | null>(null)
  const [activeSubItem, setActiveSubItem] = React.useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <div className="relative">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/path-to-your-logo.png" // Update with your college logo path
              alt="College Logo"
              width={100}
              height={50}
            />
          </Link>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded-full md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r">
        <nav className="h-full">
          <ul className="py-2">
            {mainNavItems.map((item) => (
              <li key={item.title}>
                <button
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center justify-between ${
                    activeItem === item.title ? "bg-gray-100" : ""
                  }`}
                  onClick={() => {
                    setActiveItem(activeItem === item.title ? null : item.title)
                    setActiveSubItem(null)
                  }}
                >
                  {item.title}
                  {item.subItems && (
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${activeItem === item.title ? "rotate-90" : ""}`}
                    />
                  )}
                </button>
                <AnimatePresence>
                  {activeItem === item.title && item.subItems && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden bg-gray-50"
                    >
                      {item.subItems.map((subItem) => (
                        <li key={subItem.title}>
                          <button
                            className={`w-full px-6 py-2 text-left hover:bg-gray-100 flex items-center justify-between ${
                              activeSubItem === subItem.title ? "bg-gray-100" : ""
                            }`}
                            onClick={() => setActiveSubItem(activeSubItem === subItem.title ? null : subItem.title)}
                          >
                            {subItem.title}
                            {"subItems" in subItem && (
                              <ChevronRight
                                className={`w-4 h-4 transition-transform ${
                                  activeSubItem === subItem.title ? "rotate-90" : ""
                                }`}
                              />
                            )}
                          </button>
                          <AnimatePresence>
                            {"subItems" in subItem && activeSubItem === subItem.title && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden bg-gray-100"
                              >
                                {subItem.subItems.map((nestedItem) => (
                                  <li key={nestedItem.title}>
                                    <Link href={nestedItem.href} className="block px-8 py-2 text-sm hover:bg-gray-200">
                                      {nestedItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Content Area */}
      <main className="ml-64 pt-16 min-h-screen bg-white">
        <div className="p-8">
          <AnimatePresence mode="wait">
            {activeSubItem && (
              <motion.div
                key={activeSubItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <h1 className="text-4xl font-serif mb-4">{activeSubItem}</h1>
                <p className="text-gray-600">Content for {activeSubItem} will be displayed here.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <nav className="h-full pt-16">
              <ul className="py-2">
                {mainNavItems.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="block px-4 py-2 hover:bg-gray-100">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}