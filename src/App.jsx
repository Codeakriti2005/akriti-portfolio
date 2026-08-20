import { useState } from "react";
import emailjs from "@emailjs/browser";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import {
  ArrowRight, BriefcaseBusiness, CheckCircle2, Code2, Database,
  Download, ExternalLink, Github, GraduationCap, Instagram,
  Linkedin, Mail, Menu, Moon, Phone, Send, Sparkles, Sun, X,
  BarChart3, Globe2, Award, UserRound, ChevronRight
} from "lucide-react";

const projects = [
  {
    title: "MovieVerse",
    type: "Movie Discovery Platform",
    description: "A modern movie discovery platform with search, filtering, watchlist and a clean responsive interface.",
    tech: ["HTML", "Bootstrap", "CSS","Python","Django","Pythonanywhere"],
    demo: "https://akriti17.pythonanywhere.com",
    github: "https://github.com/Codeakriti2005/MovieVerse"
  },
  {
    title: "Amazon Sales Analytics",
    type: "Data Analytics Dashboard",
    description: "Sales and profit analysis using an Amazon/Superstore-style dataset with SQL, Python and Power BI.",
    tech: ["Python", "SQL", "Power BI"],
    github: "https://github.com/Codeakriti2005/Amazon-Sales-Dashboard"
  },
  {
    title: "Snake, Water, Gun Game",
    type: "Python GUI Game",
    description: "A beginner-friendly Python GUI game with score tracking and voice interaction.",
    tech: ["Python", "Tkinter"],
    github: "https://github.com/Codeakriti2005/snake-water-gun-game.git"
  }
];

const skills = [
  ["Languages", ["Python", "Java", "JavaScript", "SQL","C"], Code2],
  ["Web Development", ["HTML", "CSS", "Bootstrap", "React", "Node.js"], Globe2],
  ["Databases", ["MySQL", "MongoDB", "Firebase", "SQLite"], Database],
  ["Data Analytics", ["Pandas", "NumPy", "Matplotlib", "Power BI"], BarChart3],
  ["Tools", ["Git", "GitHub", "VS Code", "Pythonanywhere"], BriefcaseBusiness]
];

function Layout({ children, dark, setDark }) {
  const [open, setOpen] = useState(false);

  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/skills", "Skills"],
    ["/projects", "Projects"],
    ["/education", "Education"],
    ["/certifications", "Certifications"],
    ["/contact", "Contact"]
  ];

  return (
    <div className={`app ${dark ? "" : "light"}`}>
      <header className="navbar">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">AG</span>
          <span>Akriti Gautam</span>
        </NavLink>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="resume-btn" href="/resume.pdf" download>
            <Download size={17} /> <span>Resume</span>
          </a>
          <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Akriti Gautam</div>
        <div>Built with React • Responsive • Deployment Ready</div>
      </footer>
    </div>
  );
}

function Socials() {
  return (
    <div className="socials">
      <a href="https://github.com/Codeakriti2005" target="_blank" rel="noreferrer"><Github /></a>
      <a href="https://www.linkedin.com/in/akriti-gautam-52294b334/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
      <a href="mailto:akritigautam049@gmail.com" aria-label="Email"><Mail /></a>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <section className="home page">
      <div className="hero-glow one" />
      <div className="hero-glow two" />
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={17}/> Hello, I'm</div>
        <h1>Akriti <span>Gautam</span></h1>
        <h2>Computer Science Engineering Student</h2>
        <p>
          I build creative, efficient and user-friendly applications through code.
          Passionate about Full Stack Development and Data Analytics.
        </p>
        <div className="cta-row">
          <button className="primary-btn" onClick={() => navigate("/projects")}>
            View My Work <ArrowRight size={18}/>
          </button>
          <button className="secondary-btn" onClick={() => navigate("/contact")}>
            Contact Me <Mail size={18}/>
          </button>
        </div>
        <Socials />
      </div>

      <div className="hero-visual">
        <div className="orbit" />
        <div className="avatar-card">
          <div className="avatar">
            <img src="/image.jpg" alt="Akriti Gautam" />
          </div>
          <div className="avatar-caption">
            <span className="status-dot" /> Open to opportunities
          </div>
        </div>
        <div className="float-card code"><Code2 /></div>
        <div className="float-card data"><BarChart3 /></div>
        <div className="float-card db"><Database /></div>
      </div>

      <div className="stats">
        <Stat icon={<Code2/>} number="3+" text="Projects" />
        <Stat icon={<GraduationCap/>} number="3+" text="Technologies" />
        <Stat icon={<Award/>} number="3+" text="Years Learning" />
        <Stat icon={<Sparkles/>} number="100%" text="Dedication" />
      </div>
    </section>
  );
}

function Stat({ icon, number, text }) {
  return <div className="stat"><span>{icon}</span><strong>{number}</strong><small>{text}</small></div>;
}

function PageHero({ icon, title, text }) {
  return (
    <div className="page-hero">
      <div className="section-icon">{icon}</div>
      <p className="eyebrow">Explore</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

function About() {
  return <section className="page container">
    <PageHero icon={<UserRound/>} title="About Me" text="A little more about my background, interests and the way I approach development." />
    <div className="two-col">
      <div className="glass-card large">
        <h2>Who I am</h2>
        <p>I'm a B.Tech Computer Science Engineering student at Krishna Institute of Technology, Kanpur. I enjoy turning ideas into practical, user-friendly applications.</p>
        <p>My interests include full-stack web development, Python programming and data analytics. I like learning by building real projects and continuously improving my technical skills.</p>
        <div className="mini-list">
          <div><CheckCircle2/> Problem solving</div>
          <div><CheckCircle2/> Full-stack development</div>
          <div><CheckCircle2/> Data-driven thinking</div>
          <div><CheckCircle2/> Continuous learning</div>
        </div>
      </div>
      <div className="glass-card">
        <h2>What I bring</h2>
        <div className="feature"><Code2/><div><b>Development</b><p>Responsive and practical web applications.</p></div></div>
        <div className="feature"><BarChart3/><div><b>Analytics</b><p>Turning raw data into useful insights.</p></div></div>
        <div className="feature"><Sparkles/><div><b>Learning mindset</b><p>Always exploring new tools and technologies.</p></div></div>
      </div>
    </div>
  </section>;
}

function Skills() {
  return <section className="page container">
    <PageHero icon={<Code2/>} title="Technical Skills" text="Technologies and tools I use while building projects." />
    <div className="skill-grid">
      {skills.map(([name, items, Icon]) => (
        <div className="glass-card skill-card" key={name}>
          <div className="skill-title"><Icon/><h2>{name}</h2></div>
          <div className="chips">{items.map(x => <span key={x}>{x}</span>)}</div>
        </div>
      ))}
    </div>
  </section>;
}

function Projects() {
  return <section className="page container">
    <PageHero icon={<BriefcaseBusiness/>} title="Projects" text="A selection of projects I have built while learning and applying development and analytics." />
    <div className="project-grid">
      {projects.map((p, i) => <ProjectCard project={p} key={p.title} index={i}/>)}
    </div>
  </section>;
}

function ProjectCard({ project, index }) {
  return <article className="project-card">
    <div className={`project-art art-${index}`}>
      <span>{index === 0 ? "MOVIEVERSE" : index === 1 ? "ANALYTICS" : index === 2 ? "SNAKE-WATER-GUN" : index === 3 ? "JOB TRACKER" : "SNAKE • WATER • GUN"}</span>
    </div>
    <div className="project-body">
      <p className="project-type">{project.type}</p>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="chips">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
        <a href={project.demo}><ExternalLink size={16}/> Demo</a>
      </div>
    </div>
  </article>;
}

function Education() {
  return <section className="page container">
    <PageHero icon={<GraduationCap/>} title="Education" text="My academic journey." />
    <div className="timeline">
      <TimelineItem year="2023 — Present" title="B.Tech in Computer Science & Engineering" place="Krishna Institute of Technology, Kanpur" detail="CGPA: 7.0" />
      <TimelineItem year="2021 — 2022" title="Class 12 (ISC Board)" place="Acme Public School" detail="65%" />
      <TimelineItem year="2019 — 2020" title="Class 10 (ICSE Board)" place="Acme Public School" detail="70%" />
    </div>
  </section>;
}

function TimelineItem({year,title,place,detail}) {
  return <div className="timeline-item"><div className="timeline-dot"/><div><span>{year}</span><h2>{title}</h2><p>{place}</p><b>{detail}</b></div></div>;
}

function Certifications() {
  const certs = [
    ["Networking with ethical hacking", "Netcamp Solutions Pvt Ltd"],
    ["Java Full Stack Development", "RCPL"],
    ["OOPs with C++", "RCPL"],
    ["Advance Python", "RCPL"],
    ["Advance JAVA", "RCPL"]
  ];
  return <section className="page container">
    <PageHero icon={<Award/>} title="Certifications" text="Courses and certifications that support my technical skill set." />
    <div className="cert-grid">
      {certs.map(([name, org]) => <div className="glass-card cert" key={name}><div className="cert-icon"><Award/></div><div><h2>{name}</h2><p>{org}</p></div><ChevronRight/></div>)}
    </div>
  </section>;
}
function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wienq1r",
        "template_fyghxsy",
        e.target,
        {
          publicKey: "VA7v6SyXqMVFflUWf",
        }
      )
      .then(
        () => {
          alert("Message sent successfully! 📩");
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Message could not be sent. Please try again.");
        }
      );
  };

  return (
    <section className="page container">
      <PageHero
        icon={<Mail />}
        title="Let's Connect"
        text="Have an opportunity, project or internship in mind? Feel free to reach out."
      />

      <div className="contact-grid">

        <div className="glass-card contact-info">
          <h2>Get in touch</h2>

          <p>
            I'm currently open to learning opportunities, internships and
            software development roles.
          </p>

          <a href="mailto:akritigautam049@gmail.com">
            <Mail /> akritigautam049@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/akriti-gautam-52294b334/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin /> LinkedIn
          </a>

          <a
            href="https://github.com/Codeakriti2005"
            target="_blank"
            rel="noreferrer"
          >
            <Github /> github.com/Codeakriti2005
          </a>
        </div>

        <form
          className="glass-card contact-form"
          onSubmit={sendEmail}
        >
          <h2>Send a message</h2>

          <label>
            Name
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Write your message..."
            />
          </label>

          <button className="primary-btn" type="submit">
            Send Message <Send size={17} />
          </button>
        </form>

      </div>
    </section>
  );
}

function App() {
  const [dark, setDark] = useState(true);
  return <Layout dark={dark} setDark={setDark}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/certifications" element={<Certifications/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
  </Layout>;
}

export default App;