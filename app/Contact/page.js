function QRCODE({ data }) {
  return (
    <article className="m-10 flex flex-col justify-center">
      <img
        className=" m-5"
        src={`https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${data}&color=028391&bgcolor=000000`}
        alt="Account address"
      />
      <div className="m-5">{/* <ClipButton text={props.data} /> */}</div>
    </article>
  );
}

const ContactPage = () => {
  return (
    <div>
      <div className="flex space-x-10 p-10">
        {/* Profile Image */}
        <div className="mx-10">
          <img
            className="w-[300px] h-[400px] rounded-3xl object-cover"
            src="./profile.jpg"
            alt="Pradeep Sahu"
          />
        </div>

        {/* About Section */}
        <div className="w-[400px] h-[400px] flex flex-col justify-center">
          <h2 className="text-2xl font-bold">Pradeep Sahu</h2>
          <p className="mt-2 text-gray-700">
            I am a Full Stack Web Developer and Blockchain Enthusiast from
            India. Currently pursuing my B.Tech in Computer Science at
            Chandigarh University(2026), I specialize in Spring Boot, Next.js,
            Tailwind CSS, Blockchain and AI/ML applications.
          </p>

          {/* Resume Link */}
          <a
            href="https://drive.google.com/file/d/1vH7ISlyqzyWH8i4sOEbHG5WL8eSJBEAD/view"
            target="_blank"
            className="mt-4 text-blue-600 underline"
          >
            View Resume
          </a>
        </div>

        {/* QR Code */}

        <div>
          <p className="text-2xl text-green-500">Scan me</p>
          <div className="w-[300px] h-[300px] flex items-center justify-center">
            <div>
              <QRCODE data={`https://linktr.ee/PradeepSahu`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
