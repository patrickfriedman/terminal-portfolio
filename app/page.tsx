"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export default function Home() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [currentDirectory, setCurrentDirectory] = useState("~")
  const [currentView, setCurrentView] = useState("home")
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true)

  // Expanded list of available commands including all variations and subcommands
  const availableCommands = [
    "help",
    "clear",
    "about",
    "projects",
    "experience",
    "education",
    "skills",
    "certifications",
    "contact",
    "resume",
    "github",
    "ls",
    "cd",
    "cd about",
    "cd projects",
    "cd experience",
    "cd education",
    "cd skills",
    "cd certifications",
    "cd contact",
    "cd resume",
    "cd github",
    "cd ..",
    "cd ~",
    "cd home",
    "cd 1",
    "cd 2",
    "cd 3",
    "open-github",
    "open-resume",
    "view-resume",
    "download-resume",
  ]

  // Initial welcome message
  useEffect(() => {
    setHistory([
      "Welcome to Patrick Friedman's interactive portfolio terminal.",
      "Type 'help' to see available commands.",
      "",
    ])
  }, [])

  // Enhanced auto-scroll to bottom of terminal
  useEffect(() => {
    if (terminalRef.current) {
      // Use requestAnimationFrame to ensure DOM has updated before scrolling
      requestAnimationFrame(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTo({
            top: terminalRef.current.scrollHeight,
            behavior: "smooth",
          })
        }
      })
    }
  }, [history]) // Trigger auto-scroll whenever history changes

  // Re-enable auto-scroll when user submits a command
  useEffect(() => {
    if (input === "") {
      setShouldScrollToBottom(true)
    }
  }, [input])

  // Auto-focus input on load and when clicking terminal
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleTerminalClick = () => {
    inputRef.current?.focus()
  }

  // Function to get section content based on the current directory
  const getSectionContent = () => {
    // Extract the section name from the current directory
    const section = currentDirectory.split("/")[1]

    switch (section) {
      case "about":
        return [
          "=== ABOUT PATRICK FRIEDMAN ===",
          "",
          "I'm a cybersecurity professional with expertise in cloud security, programming,",
          "and network analysis. Currently working as a Principle Customer Support Engineer",
          "at Trend Micro, I specialize in XDR, EDR, and email security products.",
          "",
          "With a background in Computer Science and extensive experience in technical support",
          "and customer success, I excel at solving complex security challenges and ensuring",
          "customer satisfaction in enterprise environments.",
          "",
        ]
      case "projects":
        return [
          "=== MY PROJECTS ===",
          "",
          "1. Ollama with TSDProxy Integration",
          "",
          "2. Lab Infrastructure Maintenance",
          "",
          "3. Customer Adoption Initiative",
          "",
          "Type 'cd [project-number]' to view more details about a specific project",
          "",
        ]
      case "experience":
        return [
          "=== WORK EXPERIENCE ===",
          "",
          "Principle Customer Support Engineer | Trend Micro | Jun 2023 – Present",
          "• Provided technical support for cloud-based and on-premises security software",
          "• Closed over 2,000 cases with an MTTR of 10 days",
          "• Automated tasks using Python scripting",
          "• Utilized CRM tools (Microsoft Dynamics, Salesforce, Jira)",
          "• Diagnosed/resolved Windows OS, network, and security application issues",
          "• Collaborated with cross-functional teams using agile methodologies",
          "• Troubleshot SaaS applications, APIs, and enterprise infrastructure",
          "",
          "",
          "Customer Success Manager / Engineer | Trend Micro | Jul 2021 – Jun 2023",
          "• Mapped customer journey, addressing issues and escalations",
          "• Reduced churn by 97% and increased customer retention",
          "• Configured AWS, VMware EXSi, and Hyper-V environments",
          "• Led training programs on security suites and protocols",
          "• Conducted threat analyses and resolved vulnerabilities",
          "• Managed enterprise customer accounts",
          "• Provided support for multiple Fortune 500 companies",
          "",
        ]
      case "education":
        return [
          "=== EDUCATION ===",
          "",
          "B.S. Computer Science",
          "University of North Texas, Denton, TX",
          "Graduated: May 2021",
          "",
        ]
      case "skills":
        return [
          "=== TECHNICAL SKILLS ===",
          "",
          "Cybersecurity:",
          "• Vulnerability assessment, threat detection, penetration testing",
          "• Endpoint/server protection, incident investigation",
          "",
          "Cloud & DevOps:",
          "• AWS, Hybrid Cloud Security, Docker, Kubernetes",
          "• Git and cloud-native applications",
          "",
          "Programming & Development:",
          "• Python, C/C++, SQL/MySQL, Bash, Kotlin",
          "• Web Development, PHP, automation scripting",
          "",
          "Networking:",
          "• Network analysis, Subnetting, Wireshark",
          "• Troubleshooting across diverse environments",
          "",
          "Tools & Platforms:",
          "• XDR, SIEM, Entra ID, Active Directory",
          "• PFsense, VMware EXSi, Hyper-V",
          "• Dynamics, Salesforce, Jira",
          "",
        ]
      case "certifications":
        return [
          "=== CERTIFICATIONS ===",
          "",
          "Certificate in Cyber Security",
          "ISC2",
          "Issued: December 2023",
          "",
          "",
          "Solutions Architect Associate",
          "Amazon Web Services",
          "Issued: August 2022",
          "",
        ]
      case "contact":
        return [
          "=== CONTACT INFORMATION ===",
          "",
          "Email: patrick.s.friedman@gmail.com",
          "Phone: (214) 471-3159",
          "GitHub: github.com/patrickfriedman",
          "LinkedIn: linkedin.com/in/patrickfri/",
          "",
          "Feel free to reach out for collaborations or opportunities!",
          "",
        ]
      case "resume":
        return [
          "=== RESUME ===",
          "",
          "You can download my resume as a PDF file:",
          "",
          "[ Type 'download-resume' to download the PDF ]",
          "",
          "Type 'open-resume' to view my resume in the terminal",
          "",
        ]
      case "github":
        return [
          "=== GITHUB PROJECTS ===",
          "",
          "GitHub Profile: github.com/patrickfriedman",
          "Recent Projects:",
          "",
          "1. Terminal-Portfolio",
          "   • An interactive terminal-style portfolio for showcasing projects, skills, and experience.",
          "   • Built with Next.js, React, and Tailwind CSS.",
          "   • github.com/patrickfriedman/terminal-portfolio",
          "",
          "2. AI-Contest-CPATS",
          "   • Repo to create an AI model that generates Python 3 code.",
          "   • github.com/patrickfriedman/AI-Contest-CPATS",
          "",
          "3. Classification-of-Subjective-and-Objective-Texts-Using-RNN",
          "   • Checks if an article is objective or subjective using machine learning.",
          "   • github.com/patrickfriedman/Classification-of-Subjective-and-Objective-Texts-Using-RNN",
          "",
          "4. Braille2Text",
          "   • Application to scan Nemmeth Braille (8-dot Braille for Math) and display it in text in real-time.",
          "   • github.com/patrickfriedman/Braille2Text",
          "",
          "5. Restaurant-Kiosk",
          "   • Fully functional restaurant website/kiosk created as a semester-long project.",
          "   • github.com/patrickfriedman/Restaurant-Kiosk",
          "",
          "6. Sudoku-Solver",
          "    • Sudoku game solver using the backtracking algorithm.",
          "    • github.com/patrickfriedman/Sudoku-Solver",
          "",
          "Type 'open-github' to visit my GitHub profile in a new tab",
          "",
        ]
      default:
        if (currentDirectory.includes("projects/1")) {
          return [
            "=== Ollama with TSDProxy Integration ===",
            "",
            "Developed a local AI environment by integrating Ollama, an open-source tool for running large language models (LLMs)",
            "on local machines, with TSDProxy, a Docker-based application that simplifies exposing services over a Tailscale network.",
            "",
            "Key Features:",
            "Ollama Integration:",
            "• Enabled local deployment of advanced AI models, enhancing data privacy and control.",
            "• Utilized models like LLaVA and Gemma for diverse AI applications.",
            "",
            "TSDProxy Deployment:",
            "• Simplified secure exposure of Dockerized services within the Tailscale network.",
            "• Automated creation of Tailscale machines for each tagged container, eliminating the need for separate Tailscale containers per service.",
            "",
            "Technical Stack:",
            "Ollama Integration:",
            "• Ollama: Facilitated local execution of LLMs, supporting models like LLaVA and Gemma. (ollama.com)",
            "• TSDProxy: Streamlined the process of securely exposing Docker containers to the Tailscale network. (github.com)",
            "• Docker Compose: Orchestrated multi-container deployments, ensuring seamless integration and management.",
            "• Tailscale: Provided secure, mesh VPN connectivity for services, enhancing network security and accessibility.",
            "",
            "Type 'cd ..' to go back to projects",
            "",
          ]
        } else if (currentDirectory.includes("projects/2")) {
          return [
            "=== Customer Adoption Initiative ===",
            "",
            "• Led outreach efforts to reconnect with lost and at-risk customers, assessing their status and addressing concerns.",
            "• Coordinated with team members to analyze customer needs, schedule consultations, and distribute resources based on engagement levels.",
            "• Provided tailored solutions, including training, deployment guides, and support, to encourage product adoption and improve security practices.",
            "• Successfully enhanced customer satisfaction, boosted product deployments and upgrades, and improved company-client relationships, while refining account metrics for better reporting.",
            "",
            "Type 'cd ..' to go back to projects",
            "",
          ]
        } else if (currentDirectory.includes("projects/3")) {
          return [
            "=== Lab Infrastructure Maintenance ===",
            "",
            "Designed and managed comprehensive lab environments for testing and demonstrating",
            "Trend Micro security solutions across Windows and Linux platforms.",
            "",
            "Key Achievements:",
            "• Configured virtualization platforms including VMware EXSi and Hyper-V",
            "• Implemented multi-cloud environments with AWS and Azure integration",
            "• Optimized network configurations with proper subnetting and security policies",
            "• Managed infrastructure using Active Directory, DHCP, and PFsense",
            "",
            "Technologies: VMware, Hyper-V, AWS, Azure, Active Directory, PFsense",
            "",
            "Type 'cd ..' to go back to projects",
            "",
          ]
        } else if (currentDirectory === "~") {
          return [
            "Available sections:",
            "  about",
            "  projects",
            "  experience",
            "  education",
            "  skills",
            "  certifications",
            "  contact",
            "  resume",
            "  github",
            "",
          ]
        }
        return ["No content available for this directory"]
    }
  }

  // Function to get resume content for display in terminal
  const getResumeContent = () => {
    return [
      "=== PATRICK FRIEDMAN - RESUME ===",
      "",
      "CONTACT INFORMATION",
      "-------------------",
      "Patrick Friedman",
      "(214) 471-3159",
      "patrick.s.friedman@gmail.com",
      "linkedin.com/in/patrickfri/",
      "github.com/patrickfriedman",
      "",
      "KEY SKILLS",
      "----------",
      "• Cybersecurity: Vulnerability assessment, threat detection, penetration testing, endpoint/server protection",
      "• Cloud & DevOps: AWS, Hybrid Cloud Security, Docker, Kubernetes, Git",
      "• Programming: Python, C/C++, SQL/MySQL, Bash, Kotlin, Web Development, PHP",
      "• Networking: Network analysis, Subnetting, Wireshark, troubleshooting",
      "• Tools & Platforms: XDR, SIEM, Entra ID, Active Directory, PFsense, VMware EXSi, Hyper-V",
      "",
      "EDUCATION",
      "---------",
      "B.S. Computer Science",
      "University of North Texas, Denton, TX",
      "May 2021",
      "",
      "WORK EXPERIENCE",
      "---------------",
      "Principle Customer Support Engineer",
      "Trend Micro | Irving, TX | Jun 2023 – Present",
      "• Provided technical support for cloud-based and on-premises security software",
      "• Closed over 2,000 cases with an MTTR of 10 days",
      "• Automated tasks using Python scripting",
      "• Utilized CRM tools (Microsoft Dynamics, Salesforce, Jira)",
      "• Diagnosed/resolved Windows OS, network, and security application issues",
      "",
      "Customer Success Manager / Engineer",
      "Trend Micro | Irving, TX | Jul 2021 – Jun 2023",
      "• Mapped customer journey, addressing issues and escalations",
      "• Reduced churn by 97% and increased customer retention",
      "• Configured AWS, VMware EXSi, and Hyper-V environments",
      "• Led training programs on security suites and protocols",
      "• Conducted threat analyses and resolved vulnerabilities",
      "",
      "PROJECT EXPERIENCE",
      "-----------------",
      "Classification of Subjective and Objective Texts Using RNN (Python)",
      "• Developed a machine learning algorithm to classify text as objective or subjective",
      "• Led the team as Product Manager in a 24-hour competition",
      "",
      "Nemmeth Braille to Text Translator (Python, Java, Kotlin)",
      "• Developed an Android app to scan Nemmeth Braille and convert it to text in real-time",
      "• Built image processing library using Python with OpenCV",
      "",
      "Lab Infrastructure Maintenance",
      "• Designed and managed lab environments for Trend Micro security solutions",
      "• Configured VMware EXSi, Hyper-V, AWS, and integrated Azure",
      "",
      "CERTIFICATIONS",
      "--------------",
      "Certificate in Cyber Security - ISC2 (Dec 2023)",
      "Solutions Architect Associate - Amazon Web Services (Aug 2022)",
      "",
      "[ Type 'download-resume' to download the PDF version ]",
      "",
    ]
  }

  const processCommand = (cmd: string) => {
    // Force auto-scroll when processing a command
    setShouldScrollToBottom(true)

    const trimmedCmd = cmd.trim().toLowerCase()
    const cmdParts = trimmedCmd.split(" ")
    const mainCmd = cmdParts[0]

    // Add to command history
    if (trimmedCmd) {
      setCommandHistory((prev) => [trimmedCmd, ...prev])
      setHistoryIndex(-1)
    }

    // Process commands
    switch (mainCmd) {
      case "help":
        return [
          "Available commands:",
          "  help         - Show this help message",
          "  clear        - Clear the terminal",
          "  about        - About me",
          "  projects     - View my projects",
          "  experience   - View my work experience",
          "  education    - View my education",
          "  skills       - View my technical skills",
          "  certifications - View my certifications",
          "  contact      - Contact information",
          "  resume       - Download my resume",
          "  github       - View my GitHub projects",
          "  ls           - List available sections or show current section content",
          "  cd [section] - Navigate to a section",
          "  open-resume  - View resume in the terminal",
          "  download-resume - Download resume PDF",
          "  open-github  - Open GitHub profile in a new tab",
          "",
        ]

      case "clear":
        setHistory([])
        return []

      case "about":
        setCurrentView("about")
        setCurrentDirectory("~/about")
        return [
          "=== ABOUT PATRICK FRIEDMAN ===",
          "",
          "I'm a cybersecurity professional with expertise in cloud security, programming,",
          "and network analysis. Currently working as a Principle Customer Support Engineer",
          "at Trend Micro, I specialize in XDR, EDR, and email security products.",
          "",
          "With a background in Computer Science and extensive experience in technical support",
          "and customer success, I excel at solving complex security challenges and ensuring",
          "customer satisfaction in enterprise environments.",
          "",
        ]

      case "projects":
        setCurrentView("projects")
        setCurrentDirectory("~/projects")
        return [
          "=== MY PROJECTS ===",
          "",
          "1. Classification of Subjective and Objective Texts Using RNN",
          "   Technologies: Python",
          "",
          "2. Nemmeth Braille to Text Translator",
          "   Technologies: Python, Java, Kotlin",
          "",
          "3. Lab Infrastructure Maintenance",
          "",
          "Type 'cd [project-number]' to view more details about a specific project",
          "",
        ]

      case "experience":
        setCurrentView("experience")
        setCurrentDirectory("~/experience")
        return [
          "=== WORK EXPERIENCE ===",
          "",
          "Principle Customer Support Engineer | Trend Micro | Jun 2023 – Present",
          "• Provided technical support for cloud-based and on-premises security software",
          "• Closed over 2,000 cases with an MTTR of 10 days",
          "• Automated tasks using Python scripting",
          "• Utilized CRM tools (Microsoft Dynamics, Salesforce, Jira)",
          "• Diagnosed/resolved Windows OS, network, and security application issues",
          "• Collaborated with cross-functional teams using agile methodologies",
          "• Troubleshot SaaS applications, APIs, and enterprise infrastructure",
          "",
          "Customer Success Manager / Engineer | Trend Micro | Jul 2021 – Jun 2023",
          "• Mapped customer journey, addressing issues and escalations",
          "• Reduced churn by 97% and increased customer retention",
          "• Configured AWS, VMware EXSi, and Hyper-V environments",
          "• Led training programs on security suites and protocols",
          "• Conducted threat analyses and resolved vulnerabilities",
          "• Managed enterprise customer accounts",
          "• Provided support for multiple Fortune 500 companies",
          "",
        ]

      case "education":
        setCurrentView("education")
        setCurrentDirectory("~/education")
        return [
          "=== EDUCATION ===",
          "",
          "B.S. Computer Science",
          "University of North Texas, Denton, TX",
          "Graduated: May 2021",
          "",
        ]

      case "skills":
        setCurrentView("skills")
        setCurrentDirectory("~/skills")
        return [
          "=== TECHNICAL SKILLS ===",
          "",
          "Cybersecurity:",
          "• Vulnerability assessment, threat detection, penetration testing",
          "• Endpoint/server protection, incident investigation",
          "",
          "Cloud & DevOps:",
          "• AWS, Hybrid Cloud Security, Docker, Kubernetes",
          "• Git and cloud-native applications",
          "",
          "Programming & Development:",
          "• Python, C/C++, SQL/MySQL, Bash, Kotlin",
          "• Web Development, PHP, automation scripting",
          "",
          "Networking:",
          "• Network analysis, Subnetting, Wireshark",
          "• Troubleshooting across diverse environments",
          "",
          "Tools & Platforms:",
          "• XDR, SIEM, Entra ID, Active Directory",
          "• PFsense, VMware EXSi, Hyper-V",
          "• Dynamics, Salesforce, Jira",
          "",
        ]

      case "certifications":
        setCurrentView("certifications")
        setCurrentDirectory("~/certifications")
        return [
          "=== CERTIFICATIONS ===",
          "",
          "Certificate in Cyber Security",
          "ISC2",
          "Issued: December 2023",
          "",
          "",
          "Solutions Architect Associate",
          "Amazon Web Services",
          "Issued: August 2022",
          "",
        ]

      case "contact":
        setCurrentView("contact")
        setCurrentDirectory("~/contact")
        return [
          "=== CONTACT INFORMATION ===",
          "",
          "Email: patrick.s.friedman@gmail.com",
          "Phone: (214) 471-3159",
          "GitHub: github.com/patrickfriedman",
          "LinkedIn: linkedin.com/in/patrickfri/",
          "",
          "Feel free to reach out for collaborations or opportunities!",
          "",
        ]

      case "resume":
        setCurrentView("resume")
        setCurrentDirectory("~/resume")
        return [
          "=== RESUME ===",
          "",
          "You can download my resume as a PDF file:",
          "",
          "[ Type 'download-resume' to download the PDF ]",
          "",
          "Type 'open-resume' to view my resume in the terminal",
          "",
        ]

      // Updated to display resume in terminal
      case "open-resume":
      case "view-resume":
        // Clear the terminal and display resume
        setHistory([])
        return getResumeContent()

      // New command to download resume
      case "download-resume":
        // Create a link element to download the resume
        const link = document.createElement("a")
        link.href = "/patrick-friedman-resume.pdf"
        link.download = "patrick-friedman-resume.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        return ["Downloading resume...", ""]

      case "github":
        setCurrentView("github")
        setCurrentDirectory("~/github")
        return [
          "=== GITHUB PROJECTS ===",
          "",
          "GitHub Profile: github.com/patrickfriedman",
          "",
          "Recent Projects:",
          "",
          "1. Terminal-Portfolio",
          "   • An interactive terminal-style portfolio for showcasing projects, skills, and experience.",
          "   • Built with Next.js, React, and Tailwind CSS.",
          "   • github.com/patrickfriedman/terminal-portfolio",
          "",
          "2. AI-Contest-CPATS",
          "   • Repo to create an AI model that generates Python 3 code.",
          "   • github.com/patrickfriedman/AI-Contest-CPATS",
          "",
          "3. Classification-of-Subjective-and-Objective-Texts-Using-RNN",
          "   • Checks if an article is objective or subjective using machine learning.",
          "   • github.com/patrickfriedman/Classification-of-Subjective-and-Objective-Texts-Using-RNN",
          "",
          "4. Braille2Text",
          "   • Application to scan Nemmeth Braille (8-dot Braille for Math) and display it in text in real-time.",
          "   • github.com/patrickfriedman/Braille2Text",
          "",
          "5. Restaurant-Kiosk",
          "   • Fully functional restaurant website/kiosk created as a semester-long project.",
          "   • github.com/patrickfriedman/Restaurant-Kiosk",
          "",
          "6. Sudoku-Solver",
          "    • Sudoku game solver using the backtracking algorithm.",
          "    • github.com/patrickfriedman/Sudoku-Solver",
          "",
          "Type 'open-github' to visit my GitHub profile in a new tab",
          "",
        ]

      case "open-github":
        // Open GitHub profile in a new tab
        window.open("https://github.com/patrickfriedman", "_blank")
        return ["Opening GitHub profile in a new tab...", ""]

      // Updated ls command to show content based on current directory
      case "ls":
        return getSectionContent()

      case "cd":
        if (cmdParts.length === 1) {
          setCurrentDirectory("~")
          setCurrentView("home")
          return ["Changed directory to home"]
        }

        const target = cmdParts[1]

        switch (target) {
          case "about":
          case "projects":
          case "experience":
          case "education":
          case "skills":
          case "certifications":
          case "contact":
          case "resume":
          case "github":
            setCurrentDirectory(`~/${target}`)
            setCurrentView(target)
            // Only return a message about changing directory, not the content
            return [`Changed directory to ${target}`]

          case "..":
            // Handle going up a directory
            if (currentDirectory.includes("/")) {
              const newDir = currentDirectory.split("/").slice(0, -1).join("/")
              setCurrentDirectory(newDir || "~")
              setCurrentView(newDir === "~" ? "home" : newDir.split("/").pop() || "home")
              return ["Changed directory to parent"]
            }
            // If already at root
            setCurrentDirectory("~")
            setCurrentView("home")
            return ["Already at home directory"]

          case "~":
          case "home":
            setCurrentDirectory("~")
            setCurrentView("home")
            return ["Changed directory to home"]

          // Handle project numbers
          case "1":
            if (currentDirectory === "~/projects") {
              setCurrentDirectory("~/projects/1")
              setCurrentView("project1")
              return [
                "=== Ollama with TSDProxy Integration ===",
                "",
                "Developed a local AI environment by integrating Ollama, an open-source tool for running large language models (LLMs)",
                "on local machines, with TSDProxy, a Docker-based application that simplifies exposing services over a Tailscale network.",
                "",
                "Key Features:",
                "Ollama Integration:",
                "• Enabled local deployment of advanced AI models, enhancing data privacy and control.",
                "• Utilized models like LLaVA and Gemma for diverse AI applications.",
                "",
                "TSDProxy Deployment:",
                "• Simplified secure exposure of Dockerized services within the Tailscale network.",
                "• Automated creation of Tailscale machines for each tagged container, eliminating the need for separate Tailscale containers per service.",
                "",
                "Technical Stack:",
                "Ollama Integration:",
                "• Ollama: Facilitated local execution of LLMs, supporting models like LLaVA and Gemma. (ollama.com)",
                "• TSDProxy: Streamlined the process of securely exposing Docker containers to the Tailscale network. (github.com)",
                "• Docker Compose: Orchestrated multi-container deployments, ensuring seamless integration and management.",
                "• Tailscale: Provided secure, mesh VPN connectivity for services, enhancing network security and accessibility.",
                "",
                "Type 'cd ..' to go back to projects",
                "",
              ]
            } else {
              return [`cd: invalid path: ${target} - must be in projects directory`]
            }

          case "2":
            if (currentDirectory === "~/projects") {
              setCurrentDirectory("~/projects/2")
              setCurrentView("project2")
              return [
                "=== Customer Adoption Initiative ===",
                "",
                "• Led outreach efforts to reconnect with lost and at-risk customers, assessing their status and addressing concerns.",
                "• Coordinated with team members to analyze customer needs, schedule consultations, and distribute resources based on engagement levels.",
                "• Provided tailored solutions, including training, deployment guides, and support, to encourage product adoption and improve security practices.",
                "• Successfully enhanced customer satisfaction, boosted product deployments and upgrades, and improved company-client relationships, while refining account metrics for better reporting.",
                "",
                "Type 'cd ..' to go back to projects",
                "",
              ]
            } else {
              return [`cd: invalid path: ${target} - must be in projects directory`]
            }

          case "3":
            if (currentDirectory === "~/projects") {
              setCurrentDirectory("~/projects/3")
              setCurrentView("project3")
              return [
                "=== Lab Infrastructure Maintenance ===",
                "",
                "Designed and managed comprehensive lab environments for testing and demonstrating",
                "Trend Micro security solutions across Windows and Linux platforms.",
                "",
                "Key Achievements:",
                "• Configured virtualization platforms including VMware EXSi and Hyper-V",
                "• Implemented multi-cloud environments with AWS and Azure integration",
                "• Optimized network configurations with proper subnetting and security policies",
                "• Managed infrastructure using Active Directory, DHCP, and PFsense",
                "",
                "Technologies: VMware, Hyper-V, AWS, Azure, Active Directory, PFsense",
                "",
                "Type 'cd ..' to go back to projects",
                "",
              ]
            } else {
              return [`cd: invalid path: ${target} - must be in projects directory`]
            }

          default:
            return [`cd: no such directory: ${target}`]
        }

      default:
        if (trimmedCmd === "") return [""]
        return [`Command not found: ${mainCmd}. Type 'help' for available commands.`]
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Add command to history display
    const newEntry = `${currentDirectory} $ ${input}`
    const commandOutput = processCommand(input)

    setHistory((prev) => [...prev, newEntry, ...commandOutput])
    setInput("")

    // Force auto-scroll when submitting a command
    setShouldScrollToBottom(true)

    // Force auto-scroll when a command is executed
    if (terminalRef.current) {
      terminalRef.current.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: "smooth",
      })
    }
  }

  // Enhanced tab completion to work with all commands and subcommands
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Navigate command history with up/down arrows
    if (e.key === "ArrowUp") {
      e.preventDefault()
      const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1)
      setHistoryIndex(newIndex)
      if (newIndex >= 0 && commandHistory[newIndex]) {
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      const newIndex = Math.max(historyIndex - 1, -1)
      setHistoryIndex(newIndex)
      if (newIndex >= 0) {
        setInput(commandHistory[newIndex])
      } else {
        setInput("")
      }
    } else if (e.key === "Tab") {
      e.preventDefault()

      // Enhanced tab completion
      if (input.trim() !== "") {
        // Get all commands that start with the current input
        const matches = availableCommands.filter((cmd) => cmd.startsWith(input.toLowerCase()))

        if (matches.length === 1) {
          // If only one match, autocomplete
          setInput(matches[0])
        } else if (matches.length > 1) {
          // Find the longest common prefix among matches
          let commonPrefix = matches[0]
          for (let i = 1; i < matches.length; i++) {
            let j = 0
            while (j < commonPrefix.length && j < matches[i].length && commonPrefix[j] === matches[i][j]) {
              j++
            }
            commonPrefix = commonPrefix.substring(0, j)
          }

          // If we have a longer common prefix than the input, use it
          if (commonPrefix.length > input.length) {
            setInput(commonPrefix)
          } else {
            // Otherwise show all possibilities
            const newEntry = `${currentDirectory} $ ${input}`
            const possibilities = ["Possible completions:", ...matches.map((m) => `  ${m}`), ""]
            setHistory((prev) => [...prev, newEntry, ...possibilities])

            // Force auto-scroll when showing tab completions
            setShouldScrollToBottom(true)
          }
        }
      }
    }
  }

  return (
    <main
      className="flex min-h-screen flex-col bg-black text-green-500 font-mono p-4 md:p-8"
      onClick={handleTerminalClick}
    >
      <div className="flex items-center mb-2 bg-gray-900 rounded-t-lg p-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-600"></div>
        </div>
        <div className="text-center flex-1 text-sm text-gray-400">patrick-friedman-terminal — {currentView}.sh</div>
      </div>

      <div ref={terminalRef} className="flex-1 overflow-auto bg-gray-950 p-4 rounded-b-lg">
        <div className="whitespace-pre-wrap">
          {history.map((line, i) => (
            <div key={i} className={cn("leading-6", line.startsWith("===") ? "text-cyan-400 font-bold mt-2" : "")}>
              {line}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center mt-1">
          <div className="flex-shrink-0 text-green-400">
            <span>{currentDirectory} $</span>
          </div>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-green-300 ml-2 caret-green-500"
            aria-label="Terminal input"
          />
        </form>
      </div>

      <div className="mt-4 text-xs text-gray-500 flex justify-between">
        <div>Type 'help' for available commands</div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
          <span>Terminal ready</span>
        </div>
      </div>
    </main>
  )
}

