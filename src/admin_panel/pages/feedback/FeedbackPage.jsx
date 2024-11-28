import React from 'react'

export default function FeedbackPage() {
  const feedbacks = [
    { id: 1, name: "John Doe", feedback: "Great faculty support!", date: "2024-11-01" },
    { id: 2, name: "Jane Smith", feedback: "Loved the campus facilities.", date: "2024-11-15" },
    { id: 3, name: "Sam Wilson", feedback: "Improvement needed in cafeteria services.", date: "2024-11-20" },
  ];

  return (
    <div className="min-h-screen w-full p-12 pt-0 bg-gray-50 flex flex-col items-center">
      {/* Header */}
      <header className="bg-white shadow-md p-4 mb-6 w-full rounded-lg mt-6">
        <h1 className="text-2xl flex gap-3 font-bold text-gray-700">Admin - University Feedbacks
        </h1>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-full bg-white mt-6 shadow-lg rounded-lg">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-700 py-2 text-center mb-4">
            Feedback Overview
          </h2>
          <table className="w-full border-collapse text-left text-gray-700">
          <thead>
            <tr className="bg-slate-500 text-white">
              <th className="border-b-2 py-3 px-2 text-left text-sm font-semibold uppercase tracking-wider">
                #
              </th>
              <th className="border-b-2 py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
              Name
              </th>
              <th className="border-b-2 py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
              Feedback
              </th>
              <th className="border-b-2 py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
              Date
              </th>
            </tr>
          </thead>
            <tbody>
              {feedbacks.map((feedback, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                  } hover:bg-gray-200 transition`}
                >
                  <td className="border-b py-3 px-6">{feedback.id}</td>
                  <td className="border-b py-3 px-6">{feedback.name}</td>
                  <td className="border-b py-3 px-6">{feedback.feedback}</td>
                  <td className="border-b py-3 px-6">{feedback.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

