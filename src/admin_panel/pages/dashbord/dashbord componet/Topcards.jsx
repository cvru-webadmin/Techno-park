import React from 'react'

export default function Topcards({isTime}) {
  // Mock Data for Dashboard Cards
  const cards = [
    {
      title: "Total Feedbacks",
      icon: "📝",
      total: 120,
      current: 10,
    },
    {
      title: "Total Events",
      icon: "📅",
      total: 300,
      current: 15,
    },
    {
      title: "Total Inquiries",
      icon: "💬",
      total: 200,
      current: 25,
    },
    {
      title: "Faculty",
      icon: "👨‍🏫",
      total: 50,
      current: 45,
    },
  ];

  return (
    <div className=" bg-gray-50 p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Good {isTime}, Admin! ✨
        </h1>
        <p className="text-sm text-gray-600">
           Welcome back! Here's an overview of your dashboard.
        </p>
      </header>

      {/* Dashboard Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-indigo-500 hover:border-indigo-600 transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <span className="text-5xl">{card.icon}</span>
              <div className="text-right">
                <p className="text-3xl font-bold text-gray-900">{card.total}</p>
                <p className="text-sm text-gray-500">Current: {card.current}</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-center text-lg font-medium text-gray-700">
                {card.title}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

