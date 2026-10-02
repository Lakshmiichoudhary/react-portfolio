import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

import {
  FaArrowRight,
  FaDownload,
  FaReact,
  FaJs,
  FaCode,
} from "react-icons/fa";

import { SiNextdotjs } from "react-icons/si";
import { contactData } from "../data/contactData";
import SolarSystem from "../component/SolarSystem";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Frontend Developer",
        "React.js Developer",
        "Next.js Developer",
        "UI-focused Web Developer",
      ],
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 1600,
      startDelay: 400,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Lakshmi_Resume.pdf";
    link.download = "Lakshmi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="relative bg-background overflow-hidden">
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="
          relative
          min-h-screen
          w-full
          px-5
          pb-20
          pt-32
          sm:px-8
          lg:px-16
          xl:px-24
          flex
          items-center
        "
      >
        <SolarSystem />

       

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            w-full
            max-w-7xl
            items-center
            gap-12
            lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          <article
            data-aos="fade-right"
            data-aos-duration="900"
            className="max-w-3xl"
          >
            <div
              className="
                mb-7
                inline-flex
                items-center
                gap-3
                rounded-full
                py-2
                backdrop-blur-md
              "
            >
              <span
                aria-hidden="true"
                className="
                  relative
                  flex
                  h-2.5
                  w-2.5
                "
              >
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-primary
                    opacity-60
                  "
                />
                <span
                  className="
                    relative
                    inline-flex
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-primary
                  "
                />
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.18em] text-text-secondary sm:text-sm">
                Available for opportunities
              </span>
            </div>

            <header>
              <p className="mb-3 text-md font-medium tracking-wide text-text-secondary">
                Hello, I&apos;m
              </p>

              <h1
                id="hero-heading"
                className="
                  text-5xl
                  font-extrabold
                  leading-[1.05]
                  tracking-tight
                  text-text
                "
              >
                Lakshmi
                <span className="text-primary">.</span>B
              </h1>

              <div className="mt-5 min-h-10.5 text-xl font-semibold text-primary sm:text-2xl lg:text-3xl">
                <span ref={typedRef} />
              </div>
            </header>

            <p
              className="
                mt-4
                max-w-2xl
                text-base
                leading-8
                text-text-secondary
                sm:text-lg
              "
            >
              I build responsive and user-friendly web experiences with a strong
              focus on clean interfaces, reusable components, and thoughtful
              user experience.
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-text-secondary/80 sm:text-base">
              My current frontend stack includes{" "}
              <span className="font-medium text-text">React.js</span>,{" "}
              <span className="font-medium text-text">JavaScript</span>, and{" "}
              <span className="font-medium text-text">Next.js</span>.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-primary
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-background
                  shadow-[0_0_30px_rgba(56,189,248,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-primary-hover
                  hover:shadow-[0_0_35px_rgba(129,140,248,0.25)]
                "
              >
                <span>View My Work</span>
                <FaArrowRight
                  className="
                    text-xs
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

              <button
                type="button"
                onClick={handleDownload}
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-border
                  bg-background-secondary/70
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-text
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-primary/60
                  hover:text-primary
                "
              >
                <FaDownload className="text-xs" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <address
              className="
                mt-10
                flex
                items-center
                gap-4
                not-italic
              "
              aria-label="Social links"
            >
              <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-text-secondary sm:block">
                Find me
              </span>

              <div
                className="flex items-center gap-2.5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                {contactData.map((item, id) => (
                  <a
                    key={id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border
                    bg-background-secondary/70
                    text-text-secondary
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/50
                    hover:bg-primary/10
                    hover:text-primary"
                  >
                    <div className="text-lg">{item.logo}</div>
                  </a>
                ))}
              </div>
            </address>
          </article>

          <aside
            data-aos="fade-left"
            data-aos-duration="900"
            className="relative flex justify-center lg:justify-end"
            aria-label="Frontend technology showcase"
          >
            <div className="relative w-full max-w-100">
             
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-4xl
                  border
                  border-border
                  bg-background-secondary/60
                  p-1
                  shadow-[0_25px_80px_rgba(0,0,0,0.4)]
                  backdrop-blur-xl
                "
              >
                {/* Frontend Workspace Graphic Image */}
                <div className="relative aspect-[4/3] sm:aspect-[1/1] w-full overflow-hidden rounded-[1.5rem] border border-border/50">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"
                    alt="Frontend Developer Coding Workspace"
                    className="h-full w-full object-cover object-center opacity-85 transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>

                <div className="absolute top-6 right-6 flex items-center gap-2 rounded-xl border border-primary/30 bg-background/90 px-3.5 py-2 shadow-xl backdrop-blur-md animate-bounce">
                  <FaReact className="text-xl text-primary animate-spin-slow" />
                  <span className="text-xs font-semibold text-text">
                    React.js
                  </span>
                </div>

                <div className="absolute bottom-16 left-6 flex items-center gap-2 rounded-xl border border-border bg-background/90 px-3.5 py-2 shadow-xl backdrop-blur-md">
                  <FaJs className="text-lg text-yellow-400" />
                  <span className="text-xs font-semibold text-text">
                    JavaScript
                  </span>
                </div>

                <div className="absolute top-1/2 -right-3 -translate-y-1/2 flex items-center gap-2 rounded-xl border border-border bg-background/90 px-3.5 py-2 shadow-xl backdrop-blur-md">
                  <SiNextdotjs className="text-lg text-text" />
                  <span className="text-xs font-semibold text-text">
                    Next.js
                  </span>
                </div>
              </div>

              <div
                className="
                  absolute
                  -bottom-5
                  left-1/2
                  flex
                  -translate-x-1/2
                  items-center
                  gap-2.5
                  rounded-2xl
                  border
                  border-border
                  bg-background-secondary/95
                  px-5
                  py-2.5
                  shadow-xl
                  backdrop-blur-xl
                "
              >
                <FaCode className="text-primary text-xs" />
                <span className="whitespace-nowrap text-xs font-semibold text-text-secondary">
                  Frontend & UI Development
                </span>
              </div>
            </div>
          </aside>
        </div>

        {/* Scroll Indicator */}
        <div
          className="
            absolute
            bottom-6
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            md:flex
          "
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-text-secondary">
            Scroll
          </span>
          <span className="h-8 w-px bg-gradient-to-b from-primary/60 to-transparent" />
        </div>
      </section>
    </main>
  );
};

export default Home;
