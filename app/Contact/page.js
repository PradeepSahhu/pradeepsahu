function QRCODE({ data }) {
  return (
    <article className="flex flex-col justify-center">
      <img
        className="max-w-full"
        src={`https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${data}&color=028391&bgcolor=000000`}
        alt="Account address"
      />
      <div className="mt-2">{/* <ClipButton text={props.data} /> */}</div>
    </article>
  );
}

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* Profile Image */}
        <div className="mx-auto lg:mx-0 max-w-xs">
          <img
            className="w-full h-auto max-h-[400px] rounded-3xl object-cover shadow-lg"
            src="./profile.jpg"
            alt="Pradeep Sahu"
          />
        </div>

        {/* About Section */}
        <div className="flex flex-col justify-center max-w-lg mx-auto lg:mx-0">
          <h2 className="text-xl md:text-2xl font-bold text-center lg:text-left">
            Pradeep Sahu
          </h2>
          <p className="mt-2 text-gray-700 text-sm md:text-base text-center lg:text-left">
            I am a Full Stack Web Developer and Blockchain Enthusiast from
            India. Currently pursuing my B.Tech in Computer Science at
            Chandigarh University(2026), I specialize in Spring Boot, Next.js,
            Tailwind CSS, Blockchain and AI/ML applications.
          </p>

          {/* Resume Link */}
          <a
            href="https://drive.google.com/file/d/1vH7ISlyqzyWH8i4sOEbHG5WL8eSJBEAD/view"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-blue-600 underline text-center lg:text-left"
          >
            View Resume
          </a>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center mx-auto lg:mx-0">
          <p className="text-xl md:text-2xl text-green-500 text-center">
            Scan me
          </p>
          <div className="w-full max-w-[250px] md:max-w-[300px]">
            <QRCODE data={`https://linktr.ee/PradeepSahu`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
