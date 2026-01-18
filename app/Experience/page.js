"use client";

import experiences from "../Experience/Experience.json";

export default function Experience() {
  const monthMap = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  experiences.sort((a, b) => {
    const parseDate = (str) => {
      const match = str.match(/(\d{4})\(([^)]+)\)/);
      if (!match) return new Date(0);

      const year = Number(match[1]);
      const month = monthMap[match[2]];
      return new Date(year, month);
    };

    return parseDate(b.duration) - parseDate(a.duration); // latest first
  });
  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-gray-400 mt-2 md:mt-0">
                  {exp.duration}
                </span>
              </div>

              <p className="mt-4 text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-gradient-to-br from-blue-600 to-green-600 bg-blue-600 "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
