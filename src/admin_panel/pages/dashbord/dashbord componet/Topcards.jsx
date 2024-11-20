import React from 'react'

export default function Topcards({isTime}) {
  // Mock Data for Dashboard Cards
  const cards = [
    {
      title: "Total Feedbacks",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className='h-7' viewBox="0 0 16 16">
      <rect width="16" height="16" fill="none" />
      <path fill="currentColor" d="M9.5 1.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1V7l1.8-1.5h2.2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zM5 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4m2.5 5h-5A1.5 1.5 0 0 0 1 10.5c0 1.116.459 2.01 1.212 2.615C2.953 13.71 3.947 14 5 14s2.047-.29 2.788-.885C8.54 12.51 9 11.616 9 10.5A1.5 1.5 0 0 0 7.5 9" />
    </svg>,
      total: 120,
      current: 10,
      iconBgColor:"#F59E0B",
      subline:"Total Feedbacks",
    },
    {
      title: "Total Events",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className='h-7' viewBox="0 0 24 24">
      <rect width="24" height="24" fill="none" />
      <path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6zm2 6v-2h10v2zm0 4v-2h7v2z" />
    </svg>,
      total: 300,
      current: 15,
      iconBgColor:"#EC4899",
      subline:"Current Events",
    },
    {
      title: "Total Enquiry",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className='h-7' viewBox="0 0 20 20">
      <rect width="20" height="20" fill="none" />
      <path fill="currentColor" d="M14.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m.624-1.995a.625.625 0 1 1-1.249 0a.625.625 0 0 1 1.25 0m1.23-3.552c0 .586-.215.908-.728 1.319l-.277.214c-.246.194-.329.3-.346.448l-.011.156A.5.5 0 0 1 14 15.5c0-.57.21-.884.716-1.288l.278-.215c.288-.23.36-.342.36-.544c0-.558-.382-.95-.854-.95c-.494 0-.859.366-.854.945a.5.5 0 1 1-1 .01c-.01-1.137.806-1.955 1.854-1.955c1.031 0 1.853.846 1.853 1.95M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-4.991 9A2 2 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18q.617 0 1.21-.057A5.48 5.48 0 0 1 9 14.5c0-1.33.472-2.55 1.257-3.5z" />
    </svg>,
      total: 200,
      current: 25,
      iconBgColor:"#6366F1",
      subline:"Incoming Enquiry",
    },
    {
      title: "Faculty",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className='h-7' viewBox="0 0 24 24">
      <rect width="24" height="24" fill="none" />
      <path fill="currentColor" d="M14.754 10a1.75 1.75 0 0 1 1.678 1.25h-.682A2.75 2.75 0 0 0 13 14v.05a2.5 2.5 0 0 0-2 2.45v4.388a4.5 4.5 0 0 1-3.498-4.389V11.75c0-.966.783-1.75 1.75-1.75zm4.496 1.25A2.75 2.75 0 0 1 22 13.988V11.75A1.75 1.75 0 0 0 20.25 10h-3.375c.292.353.497.78.584 1.25zM7.131 10a2.7 2.7 0 0 0-.62 1.53l-.01.22v4.749c0 .847.192 1.649.534 2.365Q6.539 18.999 6 19a4 4 0 0 1-4-4.001V11.75a1.75 1.75 0 0 1 1.606-1.744L3.75 10zM12 3a3 3 0 1 1 0 6a3 3 0 0 1 0-6m6.5 1a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5M14 15h-.5a1.5 1.5 0 0 0-1.5 1.5V18h2.5v-.25a.75.75 0 0 1 1.5 0V18h3v-.25a.75.75 0 0 1 1.5 0V18H23v-1.5a1.5 1.5 0 0 0-1.5-1.5H21v-1a1.75 1.75 0 0 0-1.75-1.75h-3.5A1.75 1.75 0 0 0 14 14zm1.5-1a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v1h-4zM12 21.5v-2h2.5v.75a.75.75 0 0 0 1.5 0v-.75h3v.75a.75.75 0 0 0 1.5 0v-.75H23v2a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5" />
    </svg>,
      total: 50,
      current: 45,
      iconBgColor:"#A78BFA",
      subline:"Team Member Count"
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
            className="bg-gray-100 rounded-lg shadow-md py-2 px-2  border-gray-300/50 transition-all duration-300"
          >
            <div className="flex justify-between border-2 border-gray-300/50 rounded-lg px-2 py-4 bg-white items-center">
              <span className={`text-5xl p-3 text-white/85 rounded-lg border-4 border-gray-400/25`} style={{backgroundColor:card.iconBgColor}}>{card.icon}</span>
              <div className="w-2/3">
                <p className="text-2xl font-medium text-gray-900">{card.total}</p>
                <p className="text-sm text-gray-500">{card.subline}: {card.current}</p>
              </div>
            </div>
            <div className="py-2">
              <p className="text-center text-base font-medium text-gray-700">
                {card.title}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

