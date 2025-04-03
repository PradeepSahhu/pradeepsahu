const TechStack = () => {
  const skills = [
    {
      name: "ReactJS",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
    },
    {
      name: "ExpressJS",
      icon: "https://img.icons8.com/fluency/48/000000/node-js.png",
    },
    {
      name: "NodeJS",
      icon: "https://img.icons8.com/color/48/000000/nodejs.png",
    },
    {
      name: "Redux",
      icon: "https://img.icons8.com/color/48/000000/redux.png",
    },
    {
      name: "Firebase",
      icon: "https://img.icons8.com/color/48/000000/firebase.png",
    },
    {
      name: "Android",
      icon: "https://img.icons8.com/fluency/48/000000/android-os.png",
    },
    {
      name: "MaterialUI",
      icon: "https://img.icons8.com/color/48/000000/material-ui.png",
    },
    {
      name: "ChakraUI",
      icon: "https://img.icons8.com/color/48/000000/chakra-ui.png",
    },
    {
      name: "TailwindCSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png",
    },
    {
      name: "Bootstrap",
      icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
    },
    {
      name: "Sass",
      icon: "https://img.icons8.com/color/48/000000/sass.png",
    },
    {
      name: "HTML5",
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    },
    {
      name: "CSS3",
      icon: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
    },
    {
      name: "Java",
      icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
    },
    {
      name: "Kotlin",
      icon: "https://img.icons8.com/color/48/000000/kotlin.png",
    },
    {
      name: "PHP",
      icon: "https://img.icons8.com/offices/48/000000/php-logo.png",
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/color/48/000000/python--v1.png",
    },
    {
      name: "C++",
      icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/color/48/000000/mongodb.png",
    },
    {
      name: "MySQL",
      icon: "https://img.icons8.com/color/48/000000/mysql-logo.png",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png",
    },
    {
      name: "AWS",
      icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
    },
    {
      name: "Heroku",
      icon: "https://img.icons8.com/color/48/000000/heroku.png",
    },
    {
      name: "Netlify",
      icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
    },
    {
      name: "DigitalOcean",
      icon: "https://img.icons8.com/ios-filled/48/0080FF/digitalocean.png",
    },
    {
      name: "jQuery",
      icon: "https://img.icons8.com/ios-filled/48/1169ae/jquery.png",
    },
    {
      name: "Git VCS",
      icon: "https://img.icons8.com/color/48/000000/git.png",
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png",
    },
    {
      name: "WordPress",
      icon: "https://img.icons8.com/color/48/000000/wordpress.png",
    },
    {
      name: "Java",
      icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
    },
    {
      name: "Spring Boot",
      icon: "https://img.icons8.com/color/48/000000/spring-logo.png",
    },
    {
      name: "Hibernate",
      icon: "https://cdn.worldvectorlogo.com/logos/hibernate.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png",
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png",
    },
    {
      name: "JSP",
      icon: "https://cdn.iconscout.com/icon/free/png-256/java-server-pages-1-1175086.png",
    },
    {
      name: "React.js",
      icon: "https://img.icons8.com/color/48/000000/react-native.png",
    },
    {
      name: "Next.js",
      icon: "https://img.icons8.com/fluency-systems-filled/48/ffffff/nextjs.png",
    },
    {
      name: "Tailwind CSS",
      icon: "https://img.icons8.com/color/48/000000/tailwindcss.png",
    },
    {
      name: "Three.js",
      icon: "https://threejs.org/files/favicon.ico",
    },
    {
      name: "Tezos Blockchain",
      icon: "https://cryptologos.cc/logos/tezos-xtz-logo.png?v=024",
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/color/48/000000/python.png",
    },
    {
      name: "Flask",
      icon: "https://img.icons8.com/ios/50/ffffff/flask.png",
    },
    {
      name: "Docker",
      icon: "https://img.icons8.com/color/48/000000/docker.png",
    },
    {
      name: "MQTT",
      icon: "https://cdn.iconscout.com/icon/free/png-256/mqtt-3629343-3031257.png",
    },
    {
      name: "Machine Learning",
      icon: "https://cdn-icons-png.flaticon.com/512/3005/3005997.png",
    },
    {
      name: "XGBoost",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png",
    },
    {
      name: "Rust",
      icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-rust-is-a-multi-paradigm-system-programming-language-logo-shadow-tal-revivo.png",
    },
  ];
  return (
    <section className="py-12 bg-white text-center text-red-500">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className=" text-white shadow-lg rounded-xl p-4 w-32 h-32 flex flex-col items-center justify-center bg-white"
          >
            <img src={skill.icon} alt={skill.name} width={50} height={50} />
            <p className="mt-2 text-gray-700 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
