"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
const navigationData = {
  "About Us": {
    image: "https://example.com/about-us.jpg",
    items: {
      "Act (PPP)": { image: "https://example.com/act.jpg" },
      Statute: { image: "https://example.com/statute.jpg" },
      "Institute Profile": { image: "https://example.com/profile.jpg" },
      Facilities: { image: "https://example.com/facilities.jpg" },
      "Annual Report": { image: "https://example.com/annual-report.jpg" },
      MoU: { image: "https://example.com/mou.jpg" },
    },
  },
  Governance: {
    image: "https://example.com/governance.jpg",
    items: {
      Committee: {
        image: "https://example.com/committee.jpg",
        items: [
          { name: "Board Of Governors", image: "https://example.com/bog.jpg" },
          {
            name: "Finance Committee",
            image: "https://example.com/finance.jpg",
          },
          { name: "Senate", image: "https://example.com/senate.jpg" },
          {
            name: "Building Works Committee",
            image: "https://example.com/building.jpg",
          },
        ],
      },
      Administration: {
        image: "https://example.com/administration.jpg",
        items: [
          { name: "Chairman", image: "https://example.com/chairman.jpg" },
          { name: "Director", image: "https://example.com/director.jpg" },
          { name: "Registrar", image: "https://example.com/registrar.jpg" },
          { name: "Staff", image: "https://example.com/staff.jpg" },
        ],
      },
    },
  },
  Departments: {
    image: "https://example.com/departments.jpg",
    items: {
      "Basic Sciences": {
        image: "https://example.com/basic-sciences.jpg",
        items: [
          { name: "About Department", image: "https://example.com/about.jpg" },
          { name: "BoS", image: "https://example.com/bos.jpg" },
          {
            name: "Achievements",
            image: "https://example.com/achievements.jpg",
          },
          { name: "Research", image: "https://example.com/research.jpg" },
          { name: "Faculty", image: "https://example.com/faculty.jpg" },
          { name: "Staff", image: "https://example.com/staff.jpg" },
          { name: "Projects", image: "https://example.com/projects.jpg" },
          { name: "Laboratory", image: "https://example.com/laboratory.jpg" },
          { name: "Events", image: "https://example.com/events.jpg" },
        ],
      },
      "Computer Science and Engineering": {
        image: "https://example.com/cse.jpg",
        items: [
          { name: "About Department", image: "https://example.com/about.jpg" },
          { name: "BoS", image: "https://example.com/bos.jpg" },
          {
            name: "Achievements",
            image: "https://example.com/achievements.jpg",
          },
          { name: "Research", image: "https://example.com/research.jpg" },
          { name: "Faculty", image: "https://example.com/faculty.jpg" },
          { name: "Staff", image: "https://example.com/staff.jpg" },
          { name: "Projects", image: "https://example.com/projects.jpg" },
          { name: "Laboratory", image: "https://example.com/laboratory.jpg" },
          { name: "Events", image: "https://example.com/events.jpg" },
        ],
      },
      "Electronics & Communication Engineering": {
        image: "https://example.com/ece.jpg",
        items: [
          { name: "About Department", image: "https://example.com/about.jpg" },
          { name: "BoS", image: "https://example.com/bos.jpg" },
          {
            name: "Achievements",
            image: "https://example.com/achievements.jpg",
          },
          { name: "Research", image: "https://example.com/research.jpg" },
          { name: "Faculty", image: "https://example.com/faculty.jpg" },
          { name: "Staff", image: "https://example.com/staff.jpg" },
          { name: "Projects", image: "https://example.com/projects.jpg" },
          { name: "Laboratory", image: "https://example.com/laboratory.jpg" },
          { name: "Events", image: "https://example.com/events.jpg" },
        ],
      },
    },
  },
  "Doctoral Programme": {
    image: "https://example.com/phd.jpg",
    items: {
      "Overview of PhD Program": { image: "https://example.com/overview.jpg" },
      "Doctoral Programme Features": {
        image: "https://example.com/features.jpg",
      },
      "Research Areas": { image: "https://example.com/research-areas.jpg" },
      "Operational Details": { image: "https://example.com/operational.jpg" },
      "Important Proformas": { image: "https://example.com/proformas.jpg" },
      Checklists: { image: "https://example.com/checklists.jpg" },
      "Contact Us": { image: "https://example.com/contact.jpg" },
    },
  },
  Programs: {
    image: "https://example.com/programs.jpg",
    items: {
      "B.Tech": { image: "https://example.com/btech.jpg" },
      "PG Diploma": { image: "https://example.com/pgd.jpg" },
      PhD: { image: "https://example.com/phd.jpg" },
      "M.Tech": { image: "https://example.com/mtech.jpg" },
      Curriculum: { image: "https://example.com/curriculum.jpg" },
      Reports: { image: "https://example.com/reports.jpg" },
    },
  },
  Admissions: {
    image: "https://example.com/admissions.jpg",
    items: {
      "Undergraduate B.Tech": { image: "https://example.com/ug-btech.jpg" },
      Postgraduate: { image: "https://example.com/pg.jpg" },
      "UG Academic Rule Book": { image: "https://example.com/ug-rulebook.jpg" },
      "PG Academic Rule Book": { image: "https://example.com/pg-rulebook.jpg" },
    },
  },
  Alumni: {
    image: "https://example.com/alumni.jpg",
    items: {
      "Member Login": { image: "https://example.com/member-login.jpg" },
      Members: { image: "https://example.com/members.jpg" },
      "About Us": { image: "https://example.com/alumni-about.jpg" },
    },
  },
  Placements: {
    image: "https://example.com/placements.jpg",
    items: {
      "About Us": { image: "https://example.com/placements-about.jpg" },
      "Why Recruit from IIITN Nagpur?": {
        image: "https://example.com/recruit.jpg",
      },
      "Placement Statistics": { image: "https://example.com/statistics.jpg" },
      "For Companies": { image: "https://example.com/companies.jpg" },
      "For Students": { image: "https://example.com/students.jpg" },
      "Contact T&P": { image: "https://example.com/contact.jpg" },
      Internships: { image: "https://example.com/internships.jpg" },
    },
  },
  Student: {
    image: "https://example.com/student.jpg",
    items: {
      Activities: { image: "https://example.com/activities.jpg" },
      Achievements: { image: "https://example.com/achievements.jpg" },
      "Clinical Counselling": { image: "https://example.com/counselling.jpg" },
      Scholarships: { image: "https://example.com/scholarships.jpg" },
      Hostel: { image: "https://example.com/hostel.jpg" },
      "Student Mess": { image: "https://example.com/mess.jpg" },
      Download: { image: "https://example.com/download.jpg" },
      "Convocation 2023": { image: "https://example.com/convocation.jpg" },
      Fees: { image: "https://example.com/fees.jpg" },
    },
  },
  NIRF: {
    image: "https://example.com/nirf.jpg",
    items: {
      "NIRF 2025": { image: "https://example.com/nirf2025.jpg" },
      "NIRF 2024": { image: "https://example.com/nirf2024.jpg" },
      "NIRF 2023": { image: "https://example.com/nirf2023.jpg" },
    },
  },
  Others: {
    image: "https://example.com/others.jpg",
    items: {
      Consultancy: { image: "https://example.com/consultancy.jpg" },
      "Institution Innovation Council": {
        image: "https://example.com/iic.jpg",
      },
      "Official Documents": { image: "https://example.com/documents.jpg" },
      "Electoral Literacy Club": { image: "https://example.com/electoral.jpg" },
      "Guest House": { image: "https://example.com/guesthouse.jpg" },
      "Press Release": { image: "https://example.com/press.jpg" },
    },
  },
};

export function MainNav() {
  const [activeItem, setActiveItem] = React.useState<string | null>(null);
  const [activeSubItem, setActiveSubItem] = React.useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="relative">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-black border-b">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://upload.wikimedia.org/wikipedia/en/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg"
              alt="Harvard Logo"
              className="h-8"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </header>

      {/* Main Navigation */}
      <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-black border-r">
        <nav className="h-full">
          <ul className="py-2">
            {Object.entries(navigationData).map(([key, item]) => (
              <li key={key}>
                <button
                  className={`w-full px-4 py-2 text-left hover:bg-white/5 flex items-center justify-between ${
                    activeItem === key ? "bg-black" : ""
                  }`}
                  onClick={() => {
                    setActiveItem(activeItem === key ? null : key);
                    setActiveSubItem(null);
                  }}
                >
                  {key}
                  {item.items && (
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        activeItem === key ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </button>
                <AnimatePresence>
                  {activeItem === key && item.items && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden bg-black"
                    >
                      {Object.entries(item.items).map(([subKey, subItem]) => (
                        <li key={subKey}>
                          <button
                            className={`w-full px-6 py-2 text-left hover:bg-white/5 flex items-center justify-between ${
                              activeSubItem === subKey ? "bg-black" : ""
                            }`}
                            onClick={() =>
                              setActiveSubItem(
                                activeSubItem === subKey ? null : subKey
                              )
                            }
                          >
                            {subKey}
                            {"items" in subItem && (
                              <ChevronRight
                                className={`w-4 h-4 transition-transform ${
                                  activeSubItem === subKey ? "rotate-90" : ""
                                }`}
                              />
                            )}
                          </button>
                          <AnimatePresence>
                            {activeSubItem === subKey && "items" in subItem && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden bg-black"
                              >
                                {(
                                  subItem.items as {
                                    name: string;
                                    href: string;
                                  }[]
                                ).map((nestedItem) => (
                                  <li key={nestedItem.name}>
                                    <Link
                                      href={nestedItem.href}
                                      className="block px-8 py-2 text-sm hover:bg-white/5"
                                    >
                                      {nestedItem.name}
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
      <main className="ml-64 pt-16 min-h-screen bg-black">
        <div className="p-8 mr-2">
          <AnimatePresence mode="wait">
            {activeSubItem && (
              <motion.div
                key={activeSubItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {/* <h1 className="text-4xl font-serif mb-4">{activeSubItem}</h1> */}
                {/* <p className="text-gray-600">
                  Content for {activeSubItem} will be displayed here.
                </p> */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
