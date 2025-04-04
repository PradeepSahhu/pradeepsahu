const Achievement = () => {
  const certificates = [
    {
      name: "IIT-BHU Technex ",
      position: "3rd Position",
      offer: "Internship at NTPC",
      date: "28 Feb - 2nd March",
    },
    {
      name: "ICP Hackerhouse 48 Hour Hackathon",
      position: "Top-10",
      offer: "",
      date: "20 Mar - 22 March",
    },
    {
      name: "Code Vista Hackathon",
      position: "Best Design Award",
      offer: "",
      date: "sept 2023",
    },
  ];
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Achievements</h2>
      {certificates.map((cert, index) => (
        <div key={index} className="border p-3 mb-2 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">{cert.name}</h3>
          <p className="text-gray-700">
            <strong>Position:</strong> {cert.position}
          </p>
          {cert.offer && (
            <p className="text-gray-700">
              <strong>Offer:</strong> {cert.offer}
            </p>
          )}
          <p className="text-gray-600">
            <strong>Date:</strong> {cert.date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Achievement;
