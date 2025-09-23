import React from "react";
import {
  FaUserCircle,
  FaHome,
  FaStar,
  FaTag,
  FaFolderOpen,
  FaCog,
} from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const notesData = [
  {
    title: "JavaScript Cheatsheet",
    pages: 12,
    category: "Programming",
    author: "You",
    progress: 70,
    color: "from-pink-400 to-purple-500",
  },
  {
    title: "Problem Solving Techniques",
    pages: 8,
    category: "Study",
    author: "You",
    progress: 45,
    color: "from-orange-400 to-red-400",
  },
  {
    title: "Frontend Basics",
    pages: 10,
    category: "Web Dev",
    author: "You",
    progress: 0,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Daily Journal",
    pages: 5,
    category: "Personal",
    author: "You",
    progress: 0,
    color: "from-green-400 to-green-600",
  },
  {
    title: "Soft Skills Notes",
    pages: 6,
    category: "Self Growth",
    author: "You",
    progress: 0,
    color: "from-indigo-400 to-indigo-600",
  },
  {
    title: "PHP Quick Notes",
    pages: 7,
    category: "Programming",
    author: "You",
    progress: 0,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Ideas & Drafts",
    pages: 9,
    category: "Brainstorm",
    author: "You",
    progress: 0,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "SQL Queries",
    pages: 11,
    category: "Database",
    author: "You",
    progress: 0,
    color: "from-teal-400 to-teal-600",
  },
];

const CardsSection = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-sky-50 to-indigo-100 p-4 rounded-3xl shadow-xl">
      {/* Sidebar */}
      <aside className="w-20 bg-gradient-to-b from-teal-900 to-teal-700 rounded-3xl p-4 flex flex-col items-center text-white space-y-6">
        <FaUserCircle size={40} className="mb-6" />
        <FaHome size={24} className="cursor-pointer" />
        <FaFolderOpen size={24} className="cursor-pointer" />
        <FaStar size={24} className="cursor-pointer" />
        <FaTag size={24} className="cursor-pointer" />
        <FaCog size={24} className="cursor-pointer" />
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white/70 backdrop-blur-lg rounded-3xl ml-4 p-6 overflow-y-auto shadow-inner">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">My Notes</h1>
          <button className="flex items-center bg-teal-600 text-white px-4 py-2 rounded-full shadow hover:bg-teal-700 transition">
            <FiPlus size={18} className="mr-2" />
            New Note
          </button>
        </div>

        {/* Featured Notes */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          {notesData.slice(0, 2).map((note, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${note.color} mb-4`}
              ></div>
              <h2 className="text-lg font-semibold text-gray-800">
                {note.title}
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                {note.pages} Pages • {note.category}
              </p>
              <p className="text-sm mt-3 text-gray-700">
                Last Edited by{" "}
                <span className="font-medium">{note.author}</span>
              </p>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-teal-500 h-2.5 rounded-full"
                    style={{ width: `${note.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{note.progress}% Reviewed</p>
              </div>
            </div>
          ))}
        </div>

        {/* All Notes */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">All Notes</h2>
        <div className="grid grid-cols-4 gap-6">
          {notesData.map((note, i) => (
            <div
              key={i}
              className="p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div
                className={`w-14 h-14 rounded-lg bg-gradient-to-br ${note.color} mb-3`}
              ></div>
              <h3 className="text-md font-semibold text-gray-800">
                {note.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {note.pages} Pages • {note.category}
              </p>
              <p className="text-xs mt-2 text-gray-600">
                Created by{" "}
                <span className="font-medium">{note.author}</span>
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CardsSection;
