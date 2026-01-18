"use client";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useState } from "react";
import { skillCategories } from "./techStack.js";

const TechStack = () => {
  // const skills = [
  //   {
  //     name: "ReactJS",
  //     icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
  //   },
  //   {
  //     name: "ExpressJS",
  //     icon: "https://img.icons8.com/fluency/48/000000/node-js.png",
  //   },
  //   {
  //     name: "NodeJS",
  //     icon: "https://img.icons8.com/color/48/000000/nodejs.png",
  //   },
  //   {
  //     name: "Redux",
  //     icon: "https://img.icons8.com/color/48/000000/redux.png",
  //   },
  //   {
  //     name: "Firebase",
  //     icon: "https://img.icons8.com/color/48/000000/firebase.png",
  //   },
  //   {
  //     name: "Android",
  //     icon: "https://img.icons8.com/fluency/48/000000/android-os.png",
  //   },
  //   {
  //     name: "MaterialUI",
  //     icon: "https://img.icons8.com/color/48/000000/material-ui.png",
  //   },
  //   {
  //     name: "ChakraUI",
  //     icon: "https://img.icons8.com/color/48/000000/chakra-ui.png",
  //   },
  //   {
  //     name: "TailwindCSS",
  //     icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png",
  //   },
  //   {
  //     name: "Bootstrap",
  //     icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
  //   },
  //   {
  //     name: "Sass",
  //     icon: "https://img.icons8.com/color/48/000000/sass.png",
  //   },
  //   {
  //     name: "HTML5",
  //     icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
  //   },
  //   {
  //     name: "CSS3",
  //     icon: "https://img.icons8.com/color/48/000000/css3.png",
  //   },
  //   {
  //     name: "JavaScript",
  //     icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
  //   },
  //   {
  //     name: "Java",
  //     icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
  //   },
  //   {
  //     name: "Kotlin",
  //     icon: "https://img.icons8.com/color/48/000000/kotlin.png",
  //   },
  //   {
  //     name: "PHP",
  //     icon: "https://img.icons8.com/offices/48/000000/php-logo.png",
  //   },
  //   {
  //     name: "Python",
  //     icon: "https://img.icons8.com/color/48/000000/python--v1.png",
  //   },
  //   {
  //     name: "C++",
  //     icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
  //   },
  //   {
  //     name: "MongoDB",
  //     icon: "https://img.icons8.com/color/48/000000/mongodb.png",
  //   },
  //   {
  //     name: "MySQL",
  //     icon: "https://img.icons8.com/color/48/000000/mysql-logo.png",
  //   },
  //   {
  //     name: "PostgreSQL",
  //     icon: "https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png",
  //   },
  //   {
  //     name: "AWS",
  //     icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
  //   },
  //   {
  //     name: "Heroku",
  //     icon: "https://img.icons8.com/color/48/000000/heroku.png",
  //   },
  //   {
  //     name: "Netlify",
  //     icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
  //   },
  //   {
  //     name: "DigitalOcean",
  //     icon: "https://img.icons8.com/ios-filled/48/0080FF/digitalocean.png",
  //   },
  //   {
  //     name: "jQuery",
  //     icon: "https://img.icons8.com/ios-filled/48/1169ae/jquery.png",
  //   },
  //   {
  //     name: "Git VCS",
  //     icon: "https://img.icons8.com/color/48/000000/git.png",
  //   },
  //   {
  //     name: "GitHub",
  //     icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png",
  //   },
  //   {
  //     name: "WordPress",
  //     icon: "https://img.icons8.com/color/48/000000/wordpress.png",
  //   },
  //   {
  //     name: "Java",
  //     icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
  //   },
  //   {
  //     name: "Spring Boot",
  //     icon: "https://img.icons8.com/color/48/000000/spring-logo.png",
  //   },
  //   {
  //     name: "Hibernate",
  //     icon: "https://cdn.worldvectorlogo.com/logos/hibernate.svg",
  //   },
  //   {
  //     name: "PostgreSQL",
  //     icon: "https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png",
  //   },
  //   {
  //     name: "MongoDB",
  //     icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png",
  //   },
  //   {
  //     name: "JSP",
  //     icon: "https://cdn.iconscout.com/icon/free/png-256/java-server-pages-1-1175086.png",
  //   },
  //   {
  //     name: "React.js",
  //     icon: "https://img.icons8.com/color/48/000000/react-native.png",
  //   },
  //   {
  //     name: "Next.js",
  //     icon: "https://img.icons8.com/fluency-systems-filled/48/ffffff/nextjs.png",
  //   },
  //   {
  //     name: "Tailwind CSS",
  //     icon: "https://img.icons8.com/color/48/000000/tailwindcss.png",
  //   },
  //   {
  //     name: "Three.js",
  //     icon: "https://threejs.org/files/favicon.ico",
  //   },
  //   {
  //     name: "Tezos Blockchain",
  //     icon: "https://cryptologos.cc/logos/tezos-xtz-logo.png?v=024",
  //   },
  //   {
  //     name: "Python",
  //     icon: "https://img.icons8.com/color/48/000000/python.png",
  //   },
  //   {
  //     name: "Flask",
  //     icon: "https://img.icons8.com/ios/50/ffffff/flask.png",
  //   },
  //   {
  //     name: "Docker",
  //     icon: "https://img.icons8.com/color/48/000000/docker.png",
  //   },
  //   {
  //     name: "MQTT",
  //     icon: "https://cdn.iconscout.com/icon/free/png-256/mqtt-3629343-3031257.png",
  //   },
  //   {
  //     name: "Machine Learning",
  //     icon: "https://cdn-icons-png.flaticon.com/512/3005/3005997.png",
  //   },
  //   {
  //     name: "XGBoost",
  //     icon: "https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png",
  //   },
  //   {
  //     name: "Rust",
  //     icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-rust-is-a-multi-paradigm-system-programming-language-logo-shadow-tal-revivo.png",
  //   },
  // ];
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

  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    console.log(openCategory);
    setOpenCategory(openCategory === category ? null : category);
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
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
    <div>
      <Link
        href="./"
        className="px-5 py-5 bg-orange-600 rounded-xl my-10 mx-10"
      >
        Back
      </Link>
      <section className="py-12 bg-white text-center dark:bg-black dark:text-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 dark:text-white">
          My Skills
        </h2>
        <motion.div className="max-w-6xl mx-auto px-4">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="mb-6">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex justify-between items-center px-6 py-4 rounded-xl  text-white font-bold text-lg"
              >
                {category}
                <span>{openCategory === category ? "−" : "+"}</span>
              </button>

              {/* Expandable Skills */}
              <motion.div
                initial={false}
                animate={{
                  height: openCategory === category ? "auto" : 0,
                  opacity: openCategory === category ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap justify-center gap-6 mt-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="show"
                      className="shadow-lg rounded-xl p-4 w-32 h-32 flex flex-col items-center justify-center bg-white dark:bg-black"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        width={48}
                        height={48}
                      />
                      <p className="mt-2 text-sm font-semibold text-gray-700 dark:text-white text-center">
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        <motion.div className="flex flex-col items-center w-full px-4 ">
          {/* Section Header */}
          <div className="text-center my-12">
            <h2 className="font-bold text-3xl md:text-4xl">Certifications</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">
              Courses, workshops & professional learning
            </p>
          </div>

          {/* Certifications List */}
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.02 }}
              className="w-full md:w-10/12 my-4 rounded-2xl px-6 py-3 shadow-lg 
                 bg-[#6096B4] dark:bg-[#213555]
                 text-black dark:text-white
                 border-gray-600 border-2
                 transition-all"
            >
              <div className="flex flex-1">
                <h3 className="font-semibold text-lg">{cert.name}</h3>
              </div>

              <div className="flex flex-col md:flex-row md:items-center mt-2 md:justify-between gap-4">
                {/* Left Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span
                      className="text-xs px-3 py-1 rounded-full 
                             bg-black/20 dark:bg-white/20"
                    >
                      {cert.provider}
                    </span>

                    <span
                      className="text-xs px-3 py-1 rounded-full 
                             bg-black/10 dark:bg-white/10"
                    >
                      {cert.date}
                    </span>
                  </div>

                  {cert.description && (
                    <p className="mt-3 text-sm text-black/80 dark:text-white/80 leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>

                {/* Action Button */}
                <motion.a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="self-start md:self-center
                     text-white px-6 py-2 rounded-xl 
                     bg-green-700 hover:bg-green-600
                     text-sm font-medium transition-colors"
                >
                  View Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default TechStack;
