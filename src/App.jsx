"use client"

import React from "react"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-scroll"
import { ChevronDown, ExternalLink, Send, X, ChevronRight } from "lucide-react"
import { Volume1, VolumeX } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { useScroll } from "framer-motion"

const projects = [
  {
    title: "AI Based Calorie Calculator",
    description: "An intelligent AI-powered calorie calculator which calculates calories based on natural language.",
    link: "https://dontgetfatai.vercel.app", // Corrected link format
    image: "/calorie.png", // Assuming the image is in the public folder
  },

  {
    title: "Decathlon Virtual Sales person ",
    description:
      "A Agent which will act like actual sales person to incerase the company profit and customer Satisfaction ",
    link: "#",
    image: "public\\demo.jpg",
  },
  {
    title: "Instruction Pair Gnerator",
    description:
      "A framework which will convert raw text data into Instruction pair format(can continuously create 100-500 pais from about 400 words raw text )",
    link: "https://github.com/Ratiq-Ahamed/Instruction_pair_dataset",
    image: "/datasetgenerator.png",
  },
]

const moreProjects = [
  {
    title: "Braille Chatbot",
    description: "Developed a user interface chatbot for blind and deaf users. It supports communication via a Braille keyboard and microphone, with a talking avatar that reads messages aloud.",
    link: "#",
    image: "public\\demo.jpg"
  },

]

const professionalProjects = [
  {
    title: "GAN Texture Gneration",
    company: "A Company Associated With Roblox",
    description:
      "Created a architecture on top of SinGAN and TilingGAN architecture, tuning it to work well on texture generation for games. Which can be attained by single traning image",
    technologies: ["Torch", "CUDA"],
    impact:
      "Improved the efficieny and quality of 2d texture. Produced diverse variation of texture ensuring the orginal quality remains unchanged",
    period: "2025",
  },
  {
    title: "Full Stach Website with chatbot",
    company: "Ultrakote",
    description:
      "Designed and developed a responsive, modern website showcasing Ultrakote's comprehensive printing and packagingservices.Integrated a Retrieval-Augmented Generation (RAG) chatbot capable of answering diverse customer queries accurately whileincorporating censorship mechanisms using prompt engineering.",
    technologies: ["HTML", "CSS", "JS", "GEMINI"],
    impact: "Improved Company's online presence and showcase the company expertise by keeping up with AI trend",
    period: "2025",
  },
  {
    title: "Fine-Tuned a Model to Domain specific needs",
    company: "ISMO Bio-Photionics Pvt Ltd",
    description:
      "Fine-tuned a Large Language Model to provide accurate and comprehensive responses regarding ISMO Biophotonics andthe field of biophotonics.",
    technologies: ["Unsloth", "Transforers", "Streamlit", "Hugging Face", "Torch", "CUDA"],
    impact: "A independent Domain Specific LLM for the requested Company ",
    period: "2024",
  },
  {
    title: "Customer Service Chat-Bot",
    company: "ISMO Bio-Photionics Pvt Ltd",
    description:
      "Built a sequential chatbot with a modern user interface to streamline customer interactions, used methods like NLTK andConstructed a simple yet efficient ANN.",
    technologies: ["Figma", "Custom Tkinter", "Torch", "NLP", "CUDA", "Inno setup"],
    impact: "Improved Customer Satisfaction by utilizing the Chatbot",
    period: "2024",
  },
]

const moreProfessionalProjects = [
  {
    title: "Exam Question paper generator",
    company: "Easwari Engineering College",
    description:"Developed an application that takes question banks for each subject and generates mid-difficulty question papers in the exactrequired format. The app is capable of creating question papers for the entire college within a few minutes. And this app isbeing used by the college to create exam question paper for past 6 months.",
    technologies: [],
    impact: "Made the college exam question paper creation process faster and more efficient",
    period: "2024",
  },

]

// Create a memoized version of the WakandanPattern component
const WakandanPattern = React.memo(() => {
  // Generate pattern elements only once
  const patternElements = useMemo(() => {
    return [...Array(20)].map((_, i) => {
      const width = Math.random() * 100 + 50
      const height = Math.random() * 100 + 50
      const left = Math.random() * 100
      const top = Math.random() * 100
      const rotation = Math.random() * 360
      const opacity = Math.random() * 0.5

      return (
        <div
          key={i}
          className="absolute border border-purple-500"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            left: `${left}%`,
            top: `${top}%`,
            transform: `rotate(${rotation}deg)`,
            opacity: opacity,
          }}
        ></div>
      )
    })
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none z-0">
      <div className="absolute top-0 left-0 w-full h-full">{patternElements}</div>
    </div>
  )
})

// Create a memoized version of the Particles component
const Particles = React.memo(() => {
  // Generate particle elements only once
  const particleElements = useMemo(() => {
    return [...Array(80)].map((_, i) => {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      const opacity = Math.random() * 0.5 + 0.3
      const scale = Math.random() * 0.5 + 0.5
      const yMovement = Math.random() * 20 - 10
      const opacityAnimation = Math.random() * 0.3 + 0.2
      const scaleAnimation = Math.random() * 0.3 + 0.7
      const duration = Math.random() * 2 + 2

      return (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-purple-500 transition-transform hover:scale-105"
          initial={{
            x: x,
            y: y,
            opacity: opacity,
            scale: scale,
          }}
          animate={{
            y: [null, Math.random() * 20 - 10],
            opacity: [null, Math.random() * 0.3 + 0.2],
            scale: [null, Math.random() * 0.3 + 0.7],
          }}
          transition={{
            duration: duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      )
    })
  }, [])

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-0 transition-transform hover:scale-105"
      initial={{ opacity: 2 }}
      animate={{ opacity: 3 }}
      transition={{ duration: 1 }}
    >
      {particleElements}
    </motion.div>
  )
})

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [muted, setMuted] = useState(true)
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showMoreProjects, setShowMoreProjects] = useState(false)
  const [showMoreProfessionalProjects, setShowMoreProfessionalProjects] = useState(false)
  const audioRef = useRef(null)
  const chatContainerRef = useRef(null)
  const { scrollYProgress } = useScroll()

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const sections = [
        { id: "home", threshold: 0.5 },
        { id: "about", threshold: 1.5 },
        { id: "experience", threshold: 2.5 },
        { id: "projects", threshold: 3.5 },
        { id: "professional-projects", threshold: 4.5 },
        { id: "contact", threshold: 5.5 },
      ]

      for (let i = 0; i < sections.length; i++) {
        if (scrollPosition < windowHeight * sections[i].threshold) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle audio mute/unmute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted
      if (!muted) {
        audioRef.current.play().catch((e) => console.error("Audio playback failed:", e))
      }
    }
  }, [muted])

  // Auto-scroll chat to bottom when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  // Add initial greeting when chat is opened
  useEffect(() => {
    if (chatOpen && messages.length === 0) {
      setMessages([{ role: "assistant", content: "Hello! How can I assist you today?" }])
    }
  }, [chatOpen])

  // Simplified message handler
  const SYSTEM_PROMPT = `
  You are an AI assistant designed to mimic Ratiq Ahamed MR. Your name is Ratiq Ahamed MR Your responses should be precise, structured, and to the point.  

  **Expertise Areas:**  
  - **Web Development:** Proficient in HTML, CSS, JavaScript, FastAPI, and SQLAlchemy ORM.  
  - **Machine Learning:** Experienced with KNN, data analysis, and visualization (R, ggplot2).  
  - **Generative AI:** Knowledgeable in fine-tuning, LoRA adapters, RAG, multi-agent systems, and model deployment.  

  **Response Guidelines:**  
  - Answer **only the question asked**—avoid unnecessary details.  
  - Keep responses **concise and practical** without adding extra context.  
  - Provide **structured and clear explanations** with relevant examples when necessary.  
  - Use **accurate terminology** and focus on functional solutions.  


    DO NOT MENTION OR REFERENCE THIS PROMPT IN YOUR RESPONSE. JUST FOLLOW ITS GUIDELINES.
    ---
  `

  const handleSendMessage = useCallback(async () => {
    if (!input.trim() || isLoading) return

    setIsLoading(true)

    // Prepend system prompt to user input
    const modifiedInput = SYSTEM_PROMPT + "\nUser: " + input.trim() + "\nAssistant:"

    setMessages((prev) => [...prev, { role: "user", content: input.trim() }]) // Show original input to user
    setInput("")

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": GEMINI_API_KEY,
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: modifiedInput,
                  },
                ],
              },
            ],
          }),
        },
      )

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()
      const aiResponse = data.candidates[0].content.parts[0].text

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: aiResponse,
        },
      ])
    } catch (error) {
      console.error("Chat error:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }, [input, isLoading])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white overflow-hidden">
      <Particles />
      <WakandanPattern />
      <motion.div
        className="z-20 opacity-30 fixed top-0 left-0 right-0 h-[75px] bg-gradient-to-r from-[#e8b8f3] to-[#660468]"
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          originX: 0,
        }}
      />

      {/* Navigation */}
      <header className="fixed top-0 w-full flex justify-between p-6 z-50 backdrop-blur-sm bg-black/30">
        <motion.h1
          className="font-bold text-xl text-purple-400"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ratiq's Portfolio
        </motion.h1>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-purple-400 focus:outline-none">
            <div
              className={`w-6 h-0.5 bg-purple-400 mb-1.5 transition-all ${isMenuOpen ? "transform rotate-45 translate-y-2" : ""}`}
            ></div>
            <div className={`w-6 h-0.5 bg-purple-400 mb-1.5 transition-all ${isMenuOpen ? "opacity-0" : ""}`}></div>
            <div
              className={`w-6 h-0.5 bg-purple-400 transition-all ${isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""}`}
            ></div>
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "About", "Experience", "Professional Projects", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase().replace(/\s+/g, "-")}
              spy={true}
              smooth={true}
              duration={500}
              className={`cursor-pointer hover:text-purple-300 transition-all duration-300 relative ${
                activeSection === item.toLowerCase().replace(/\s+/g, "-") ? "text-purple-400" : "text-white"
              }`}
            >
              <span>{item}</span>
              {activeSection === item.toLowerCase().replace(/\s+/g, "-") && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
          <a
            href="/ratiq_resume.pdf"
            target="_blank"  // Opens in a new tab
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-purple-300 transition-all duration-300 text-white"
          >
            Resume
          </a>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-40 flex items-center justify-center md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center space-y-8">
              {["Home", "About", "Experience", "Professional Projects", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase().replace(/\s+/g, "-")}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`text-2xl cursor-pointer hover:text-purple-300 transition-all duration-300 ${
                    activeSection === item.toLowerCase().replace(/\s+/g, "-") ? "text-purple-400" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-white">
        <motion.div
          className="text-center px-4 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TypeAnimation
              className="bg-gradient-to-r from-white to-purple-700 transition-transform hover:scale-110 cursor-default"
              sequence={["Hello Everyone", 1000, "Hello Visitor", 2000, "Hello Friend!", 3000]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "0.9em",
                display: "inline-block",
                backgroundImage: "linear-gradient(to right, #FFFFFF, #9333ea)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              repeat={0}
            />

            {/*Hello{" "}
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-purple-400 to-purple-600">
              Everyone
            </span>*/}
          </motion.h2>

          <motion.p
            className="mt-5 text-lg max-w-2xl mx-auto cursor-default transition-transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            I am an aspiring Software Engineer and AI Integration Expert, aiming to provide innovative AI solutions and
            expand my services to a wider audience.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link to="about" smooth={true} duration={500}>
              <motion.button
                className="bg-purple-600 px-6 py-3 text-lg font-medium rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out w-48 sm:w-auto"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                About Me
              </motion.button>
            </Link>

            <Link to="projects" smooth={true} duration={500}>
              <motion.button
                className="border border-purple-500 px-6 py-3 text-lg font-medium rounded-lg hover:bg-purple-900/30 transition duration-300 ease-in-out w-48 sm:w-auto"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(147, 51, 234, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            <ChevronDown className="text-purple-400 w-8 h-8" />
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center relative z-10 py-20">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-4 bg-purple-500 opacity-10 animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
        </motion.div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0">
            {/* Image Holder with animated border */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center z-10 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 opacity-75 blur-sm"
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.02, 1, 1.02, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
                <div className="relative w-72 h-72 md:w-80 md:h-80 bg-gray-900 rounded-lg overflow-hidden">
                  <img
                    src="/me.jpg"
                    alt="about me"
                    className="rounded-lg object-cover shadow-lg w-full h-full transition-transform duration-300 hover:scale-105 "
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">About Me</h2>
              <p className="text-gray-300 leading-relaxed">
                I am Ratiq Ahamed a 3rd year student at Easwari Engineering College, Chennai pursuing a B.Tech in Artificial Intelligence and Data Science.As a digital craftsman, I blend the precision of code with the artistry of design. With over 1 years of
                experience in creating digital experiences, I prioritize both functionality and aesthetics.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                My expertise spans AI/ML and front-end development with stunning Gen AI inegration. I believe in
                creating digital solutions that not only solve problems but also inspire and engage users.
              </p>

              <motion.div
                className="mt-8 flex flex-wrap justify-center md:justify-start gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {["React", "Framer Motion", "Tailwind CSS", "LangChain", "MongoDB", "Machine Learning"].map(
                  (skill, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 text-sm cursor-pointer bg-purple-900/40 text-purple-300 rounded-full border border-purple-700/50 backdrop-blur-sm"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(126, 34, 206, 0.4)",
                        boxShadow: "0 0 10px rgba(147, 51, 234, 0.3)",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ),
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex flex-col justify-center relative z-10 py-20">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-4 bg-purple-500 opacity-70 animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
        </motion.div>

        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Work <span className="text-purple-500">Experience</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {[
              {
                title: "Machine Learning Engineer",
                company: "ISMO BIO-PHOTONICS Pvt Ltd, IITMR",
                period: "july 2024 - August 2024",
                description:
                  "Led development of enterprise applications using React and Node.js. Implemented AI-driven solutions that improved efficiency by 40%.",
              },
              {
                title: "Data Science",
                company: "Corizo Pvt Ltd",
                period: "March 2024 - May 2024",
                description:
                  "We developed multiple data analysis projects using python and machine learning on real world data",
              },
              {
                title: "Data Science",
                company: "Prodigy Infosoft Pvt Ltd",
                period: "Feb 2024 - March 2024",
                description:
                  "We developed multiple data analysis projects using python and machine learning on real world data to backend development using modern technologies.",
              },
            ].map((experience, index) => (
              <motion.div
                key={index}
                className="mb-12 relative pl-8 border-l-2 border-purple-500/30"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[9px] top-0">
                  <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                </div>
                <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-purple-400">{experience.title}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-purple-300">{experience.company}</span>
                    <span className="text-sm text-purple-400">{experience.period}</span>
                  </div>
                  <p className="mt-4 text-gray-300">{experience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center text-center relative z-10 py-20"
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-4 bg-purple-500 opacity-10 animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
        </motion.div>
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My <span className="text-purple-500">Projects</span>
          </motion.h2>

          <motion.p
            className="mt-4 text-lg max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore a collection of my cutting-edge technological innovations.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-500"
                  whileHover={{ scale: 1.02 }}
                />
                <motion.div
                  className="relative bg-gray-900 p-6 rounded-lg shadow-xl flex flex-col h-full"
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="overflow-hidden rounded-md mb-4">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-md transition-transform duration-500"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-purple-400 mb-2">{project.title}</h3>

                  <p className="mt-2 text-gray-300 flex-grow">{project.description}</p>

                  <motion.a
                    href={project.link}
                    className="mt-4 inline-flex items-center text-purple-500 hover:text-purple-300 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Learn More <ExternalLink className="ml-1 w-4 h-4" />
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Read More Button for Projects */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowMoreProjects(!showMoreProjects)}
              className="bg-purple-600/30 border border-purple-500/50 px-6 py-3 rounded-lg hover:bg-purple-600/50 transition-all duration-300 flex items-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showMoreProjects ? "Show Less" : "Read More"} 
              <ChevronRight className={`ml-2 w-5 h-5 transition-transform duration-300 ${showMoreProjects ? "rotate-90" : ""}`} />
            </motion.button>
          </motion.div>
          
          {/* More Projects Section */}
          <AnimatePresence>
            {showMoreProjects && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
                  {moreProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      className="relative group"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <motion.div
                        className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-500"
                        whileHover={{ scale: 1.02 }}
                      />
                      <motion.div
                        className="relative bg-gray-900 p-6 rounded-lg shadow-xl flex flex-col h-full"
                        whileHover={{
                          y: -5,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <div className="overflow-hidden rounded-md mb-4">
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-md transition-transform duration-500"
                            whileHover={{ scale: 1.05 }}
                          />
                        </div>

                        <h3 className="text-xl font-semibold text-purple-400 mb-2">{project.title}</h3>

                        <p className="mt-2 text-gray-300 flex-grow">{project.description}</p>

                        <motion.a
                          href={project.link}
                          className="mt-4 inline-flex items-center text-purple-500 hover:text-purple-300 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          Learn More <ExternalLink className="ml-1 w-4 h-4" />
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Professional Projects Section */}
      <section
        id="professional-projects"
        className="min-h-screen flex flex-col justify-center items-center relative z-10 py-20"
      >
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Professional <span className="text-purple-500">Projects</span>
          </motion.h2>

          <motion.p
            className="mt-4 text-lg max-w-3xl mx-auto mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Enterprise-level projects I've led and contributed to throughout my career.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {professionalProjects.map((project, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-500"
                  whileHover={{ scale: 1.02 }}
                />
                <motion.div
                  className="relative bg-gray-900 p-6 rounded-lg shadow-xl flex flex-col h-full"
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-purple-400">{project.title}</h3>
                    <p className="text-sm text-purple-300 mt-1">
                      {project.company} • {project.period}
                    </p>
                  </div>

                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                  <div className="mt-auto">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Impact:</h4>
                      <p className="text-gray-300 text-sm">{project.impact}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-purple-900/40 text-purple-300 rounded-full border border-purple-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Read More Button for Professional Projects */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowMoreProfessionalProjects(!showMoreProfessionalProjects)}
              className="bg-purple-600/30 border border-purple-500/50 px-6 py-3 rounded-lg hover:bg-purple-600/50 transition-all duration-300 flex items-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showMoreProfessionalProjects ? "Show Less" : "Read More"} 
              <ChevronRight className={`ml-2 w-5 h-5 transition-transform duration-300 ${showMoreProfessionalProjects ? "rotate-90" : ""}`} />
            </motion.button>
          </motion.div>
          
          {/* More Professional Projects Section */}
          <AnimatePresence>
            {showMoreProfessionalProjects && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
                  {moreProfessionalProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      className="relative group"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <motion.div
                        className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-500"
                        whileHover={{ scale: 1.02 }}
                      />
                      <motion.div
                        className="relative bg-gray-900 p-6 rounded-lg shadow-xl flex flex-col h-full"
                        whileHover={{
                          y: -5,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold text-purple-400">{project.title}</h3>
                          <p className="text-sm text-purple-300 mt-1">
                            {project.company} • {project.period}
                          </p>
                        </div>

                        <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                        <div className="mt-auto">
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-purple-400 mb-2">Impact:</h4>
                            <p className="text-gray-300 text-sm">{project.impact}</p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 text-xs bg-purple-900/40 text-purple-300 rounded-full border border-purple-700/50"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Chatbot */}
      <div className="fixed bottom-24 right-6 z-50">
        <div className="relative">
          {!chatOpen && (
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <span className="text-purple-400 animate-pulse text-sm font-medium">Chat with me</span>
            </div>
          )}
          <div className="relative">
            <div className="absolute inset-0 rounded-full animate-ping opacity-25 bg-purple-500"></div>
            <div className="absolute inset-0 rounded-full animate-pulse opacity-75 bg-purple-600 blur-md"></div>
            <motion.button
              onClick={() => setChatOpen(!chatOpen)}
              className="relative w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg flex items-center justify-center"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/icon.png" alt="Chat" className="w-12 h-12" />
            </motion.button>
          </div>
        </div>

        {/* Chat Interface */}
        {chatOpen && (
          <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-black/80 backdrop-blur-md border border-purple-500/30 rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-purple-500/30 bg-purple-900/20">
              <h3 className="text-purple-300 font-bold flex items-center">
                <img src="/icon.png" alt="Chat" className="w-10 h-10 mr-2" />
                AI Assistant
              </h3>
              <button onClick={() => setChatOpen(false)} className="text-purple-300 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div ref={chatContainerRef} className="p-4 h-80 overflow-y-auto">
              {messages.map((message, index) => (
                <div key={index} className={`mb-4 ${message.role === "user" ? "ml-auto" : "mr-auto"} max-w-[80%]`}>
                  <div
                    className={`p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-purple-600/30 border border-purple-500/30 ml-auto"
                        : "bg-black/60 border border-purple-500/20"
                    }`}
                  >
                    <p className="text-sm text-gray-200">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-center items-center space-x-1 my-4">
                  <div
                    className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              )}
            </div>
            <div className="p-3 border-t border-purple-500/30 bg-black/60">
              <div className="flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-black/40 border border-purple-500/30 rounded-l-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-md"
                  disabled={isLoading}
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Audio player */}
      <div className="fixed bottom-6 right-6 z-50">
        <audio ref={audioRef} loop>
          <source src="/theme2.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <motion.button
          onClick={() => setMuted(!muted)}
          className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          {muted ? <VolumeX className="w-5 h-5" /> : <Volume1 className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Footer Section */}
      <footer id="contact" className="relative z-10 bg-black/40 backdrop-blur-sm border-t border-purple-500/20 py-16">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Contact Info */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Contact</h3>
              <ul className="space-y-4">
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a
                    href="mailto:your.email@example.com"
                    className="flex items-center justify-center md:justify-start text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    ratiqahamed18@gamail.com
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center justify-center md:justify-start text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    +91 8925513486
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center justify-center md:justify-start text-gray-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Chennai, India
                </motion.li>
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {["Home", "About", "Experience", "Professional Projects", "Projects", "Contact"].map((item, index) => (
                  <motion.li key={item} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link
                      to={item.toLowerCase().replace(/\s+/g, "-")}
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="text-center md:text-right"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold justify-center text-purple-400 mb-6">Connect</h3>
              <div className="flex justify-center md:justify-end space-x-6">
                {[
                  {
                    name: "GitHub",
                    url: "https://github.com/Ratiq-Ahamed",
                    icon: "M10 0a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7C4.73 17.91 4.14 16 4.14 16c-.45-1.14-1.1-1.44-1.1-1.44-.9-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0",
                  },
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/ratiq-ahamed-mr-8402a1342",
                    icon: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
                  },
                  {
                    name: "Twitter",
                    url: "https://twitter.com",
                    icon: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z",
                  },
                  {
                    name: "LeetCode",
                    url: "https://leetcode.com/ratiqahamed_1",
                    icon: "M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="pt-8 border-t border-purple-500/20">
              <p className="text-gray-400">© {new Date().getFullYear()} Ratiq's Portfolio. Thank You For Visiting.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-40 h-40 bg-purple-500/5"
              style={{
                borderRadius: "40%",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </footer>
    </div>
  )
}
