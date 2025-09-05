import "./App.css";
import "./styles/theme.css";   // premium light/dark theme tokens
import "./styles/print.css";   // global print rules (always-light when printing)

import { useCallback } from "react";

import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import PersonalInfo from "./components/PersonalInfo.jsx";
import Language from "./components/Language.jsx";
import References from "./components/References.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

import { personalData } from "./data/personalData.js";
import { aboutText } from "./data/aboutData.js";
import { educationData } from "./data/educationData.js";
import { experienceData } from "./data/experienceData.js";
import { skillsData } from "./data/skillsData.js";
import { projectsData } from "./data/projectsData.js";
import { certificationsData } from "./data/certificationsData.js";
import { personalInfoData } from "./data/personalInfoData.js";
import { languageData } from "./data/languageData.js";
import { referencesData } from "./data/referencesData.js";

import controls from "./modules/printControls.module.css";

function App() {
  // Flip data-print on a section wrapper and swap the icon 👁 <-> 🙈
  const flipSection = useCallback((btnEl) => {
    const wrapper = btnEl.closest("[data-print]");
    if (!wrapper) return;
    const isOn = wrapper.getAttribute("data-print") === "on";
    const next = isOn ? "off" : "on";
    wrapper.setAttribute("data-print", next);
    if (next === "off") {
      wrapper.classList.add(controls.excluded);
      btnEl.innerText = "🙈"; // eye-off
      btnEl.title = "Include this section in print";
      btnEl.setAttribute("aria-label", "Include this section in print");
    } else {
      wrapper.classList.remove(controls.excluded);
      btnEl.innerText = "👁"; // eye on
      btnEl.title = "Exclude this section from print";
      btnEl.setAttribute("aria-label", "Exclude this section from print");
    }
  }, []);

  return (
    <>
      {/* Sun ↔ Moon switch (persists choice, no effect on print) */}
      <ThemeToggle />

      <main className="page">
        {/* HEADER */}
        <div data-print="on" className={controls.section}>
          <button
            className={controls.toggleBtn}
            onClick={(e) => flipSection(e.currentTarget)}
            title="Exclude this section from print"
            aria-label="Exclude this section from print"
          >
            👁
          </button>
          <Header data={personalData} />
        </div>

        {/* ABOUT */}
        <div data-print="on" className={controls.section}>
          <button
            className={controls.toggleBtn}
            onClick={(e) => flipSection(e.currentTarget)}
            title="Exclude this section from print"
            aria-label="Exclude this section from print"
          >
            👁
          </button>
          <About text={aboutText} />
        </div>

        {/* EDUCATION */}
        <div data-print="on" className={controls.section}>
          <button
            className={controls.toggleBtn}
            onClick={(e) => flipSection(e.currentTarget)}
            title="Exclude this section from print"
            aria-label="Exclude this section from print"
          >
            👁
          </button>
          <Education items={educationData} />
        </div>

        {/* EXPERIENCE */}
        <div data-print="on" className={controls.section}>
          <button
            className={controls.toggleBtn}
            onClick={(e) => flipSection(e.currentTarget)}
            title="Exclude this section from print"
            aria-label="Exclude this section from print"
          >
            👁
          </button>
          <Experience items={experienceData} />
        </div>

        {/* SKILLS */}
        <div data-print="on" className={controls.section}>
          <button
            className={controls.toggleBtn}
            onClick={(e) => flipSection(e.currentTarget)}
            title="Exclude this section from print"
            aria-label="Exclude this section from print"
          >
            👁
          </button>
          <Skills items={skillsData} />
        </div>

        {/* PROJECTS */}
        <div data-print="on" className={controls.section}>
          <button
            className={controls.toggleBtn}
            onClick={(e) => flipSection(e.currentTarget)}
            title="Exclude this section from print"
            aria-label="Exclude this section from print"
          >
            👁
          </button>
          <Projects items={projectsData} />
        </div>

        {/* LANGUAGE PROFICIENCY */}
        <div data-print="on" className={controls.section}>
          <button
            className={controls.toggleBtn}
            onClick={(e) => flipSection(e.currentTarget)}
            title="Exclude this section from print"
            aria-label="Exclude this section from print"
          >
            👁
          </button>
          <Language items={languageData} />
        </div>

        {/* CERTIFICATIONS */}
        <div data-print="on" className={controls.section}>
          <button
            className={controls.toggleBtn}
            onClick={(e) => flipSection(e.currentTarget)}
            title="Exclude this section from print"
            aria-label="Exclude this section from print"
          >
            👁
          </button>
          <Certifications items={certificationsData} />
        </div>

        {/* PERSONAL INFORMATION */}
        <div data-print="on" className={controls.section}>
          <button
            className={controls.toggleBtn}
            onClick={(e) => flipSection(e.currentTarget)}
            title="Exclude this section from print"
            aria-label="Exclude this section from print"
          >
            👁
          </button>
          <PersonalInfo items={personalInfoData} />
        </div>

        {/* REFERENCES */}
        <div data-print="on" className={controls.section}>
          <button
            className={controls.toggleBtn}
            onClick={(e) => flipSection(e.currentTarget)}
            title="Exclude this section from print"
            aria-label="Exclude this section from print"
          >
            👁
          </button>
          <References items={referencesData} />
        </div>
      </main>

      {/* Always-light print styling handled by print.css; label kept here */}
      <button className="printBtn" onClick={() => window.print()}>
        Print / Save PDF
      </button>
    </>
  );
}

export default App;
