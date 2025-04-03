"use client";
import * as motion from "motion/react-client";
import { useState } from "react";

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
  const certifications = [
    {
      name: "Blockchain Development",
      provider: "Metacrafters",
      date: "Summer 2024",
      description:
        "Completed a summer programme on Blockchain Development, gaining knowledge in smart contracts and decentralized applications.",
      certificateLink: "https://drive.google.com/your-certificate-link-1",
    },
    {
      name: "UAV Technology Workshop",
      provider: "Chandigarh University",
      date: "October 18, 2024",
      description:
        "Learned about aerodynamics, lift, thrust, and drag forces, and assembled components of a QuadCopter, including B-DC motors, propellers, and motor controllers.",
      certificateLink: "https://drive.google.com/your-certificate-link-2",
    },
    {
      name: "Spring Boot & Microservices",
      provider: "Self-Learning",
      date: "2025",
      description:
        "Gained expertise in Spring Boot, Hibernate, JPA, dependency injection, and microservices architecture, including OAuth2 authentication and load balancing.",
      certificateLink: "https://drive.google.com/your-certificate-link-3",
    },
    {
      name: "AI/ML Fundamentals",
      provider: "Self-Learning",
      date: "2025",
      description:
        "Explored regression and classification techniques, including linear regression, decision trees, and XGBoost for wind and solar power prediction models.",
      certificateLink: "https://drive.google.com/your-certificate-link-4",
    },
    {
      name: "Full Stack Web Development",
      provider: "Self-Learning",
      date: "Ongoing",
      description:
        "Developed applications using Next.js, React, Express.js, and PostgreSQL, with hands-on experience in UI/UX design, authentication, and deployment.",
      certificateLink: "https://drive.google.com/your-certificate-link-5",
    },
    {
      name: "JSP & Servlets",
      provider: "Self-Learning",
      date: "January 2025",
      description:
        "Implemented a login web page using JSP, Servlets, PostgreSQL, and JSTL, enhancing frontend-backend integration.",
      certificateLink: "https://drive.google.com/your-certificate-link-6",
    },
    {
      name: "Docker & Containerization",
      provider: "Self-Learning",
      date: "2024",
      description:
        "Learned about Docker, containerized applications, and managed deployments using Docker Compose.",
      certificateLink: "https://drive.google.com/your-certificate-link-7",
    },
    {
      name: "Machine Learning with Python",
      provider: "Coursera",
      date: "2025",
      description:
        "Completed a Coursera course on Machine Learning, covering supervised and unsupervised learning techniques.",
      certificateLink: "https://www.coursera.org/your-certificate-link",
    },
    {
      name: "Spring Framework for Beginners",
      provider: "Udemy",
      date: "2025",
      description:
        "Completed an Udemy course on Spring Framework, covering dependency injection, Spring Boot, and RESTful API development.",
      certificateLink: "https://www.udemy.com/your-certificate-link",
    },
    {
      name: "React - The Complete Guide",
      provider: "Udemy",
      date: "2025",
      description:
        "Learned React fundamentals, hooks, state management, and Next.js integration through a Udemy course.",
      certificateLink: "https://www.udemy.com/your-certificate-link-2",
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 1,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.09,
      },
    },
  };
  return (
    <section className="py-12 bg-white text-center dark:bg-black dark:text-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 dark:text-white">
        My Skills
      </h2>
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 2, type: "spring" }}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-wrap justify-center gap-6 "
      >
        {skills.map((skill, index) => (
          <div>
            <motion.div
              // initial={{ height: 1 }}
              // animate={{ height: 130 }}
              // transition={{ duration: 2, type: "keyframes" }}
              variants={itemVariants}
              key={index}
              className=" text-white shadow-lg rounded-xl p-4 w-32 h-32 flex flex-col items-center justify-center bg-white dark:text-white dark:bg-black"
            >
              <img src={skill.icon} alt={skill.name} width={50} height={50} />
              <p className="mt-2 text-gray-700 font-bold dark:text-white">
                {skill.name}
              </p>
            </motion.div>
          </div>
        ))}
      </motion.div>

      <motion.div className="flex flex-col items-center w-full px-4">
        <div className="font-bold text-3xl my-10 text-center">
          Certifications
        </div>
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ x: 200, y: 100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="w-full md:w-10/12 my-4 flex flex-wrap md:flex-nowrap gap-4 md:gap-x-10 mx-auto rounded-xl px-6 py-4 shadow-xl justify-between items-center dark:bg-[#213555] bg-[#6096B4] text-black dark:text-white"
          >
            <div className="flex-1 min-w-[150px] text-center md:text-left">
              <p className="font-semibold">{cert.name}</p>
            </div>
            <div className="flex-1 min-w-[150px] text-center md:text-left">
              <p className="text-sm text-gray-300">{cert.provider}</p>
            </div>
            <div className="min-w-[100px] text-center md:text-left">
              <p className="text-xs text-gray-400">{cert.date}</p>
            </div>

            <a
              href={cert.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-6 py-2 rounded-xl bg-green-500 text-sm mt-2 md:mt-0 inline-block transition hover:bg-green-600"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;
