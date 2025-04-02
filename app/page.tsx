"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import {
  getLabInfrastructureMaintenanceContent,
  getAboutContent,
  getWorkExperienceContent,
  getEducationContent,
  getTechnicalSkillsContent,
  getCertificationsContent,
  getContactContent,
  getGitHubProjectsContent,
  getCustomerAdoptionInitiativeContent,
  getOllamaWithTSDProxyContent,
  getResumeContent,
  getProjectsContent,
} from "@/utils/content"

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
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
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
        return getAboutContent()
      case "projects":
        return getProjectsContent()
      case "experience":
        return getWorkExperienceContent()
      case "education":
        return getEducationContent()
      case "skills":
        return getTechnicalSkillsContent()
      case "certifications":
        return getCertificationsContent()
      case "contact":
        return getContactContent()
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
        return getGitHubProjectsContent()
      default:
        if (currentDirectory.includes("projects/1")) {
          return getOllamaWithTSDProxyContent()
        } else if (currentDirectory.includes("projects/2")) {
          return getCustomerAdoptionInitiativeContent()
        } else if (currentDirectory.includes("projects/3")) {
          return getLabInfrastructureMaintenanceContent()
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
        return getAboutContent()

      case "projects":
        setCurrentView("projects")
        setCurrentDirectory("~/projects")
        return getProjectsContent()

      case "experience":
        setCurrentView("experience")
        setCurrentDirectory("~/experience")
        return getWorkExperienceContent()

      case "education":
        setCurrentView("education")
        setCurrentDirectory("~/education")
        return getEducationContent()

      case "skills":
        setCurrentView("skills")
        setCurrentDirectory("~/skills")
        return getTechnicalSkillsContent()

      case "certifications":
        setCurrentView("certifications")
        setCurrentDirectory("~/certifications")
        return getCertificationsContent()

      case "contact":
        setCurrentView("contact")
        setCurrentDirectory("~/contact")
        return getContactContent()

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
        return getGitHubProjectsContent()

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
              return getOllamaWithTSDProxyContent()
            } else {
              return [`cd: invalid path: ${target} - must be in projects directory`]
            }

          case "2":
            if (currentDirectory === "~/projects") {
              setCurrentDirectory("~/projects/2")
              setCurrentView("project2")
              return getCustomerAdoptionInitiativeContent()
            } else {
              return [`cd: invalid path: ${target} - must be in projects directory`]
            }

          case "3":
            if (currentDirectory === "~/projects") {
              setCurrentDirectory("~/projects/3")
              setCurrentView("project3")
              return getLabInfrastructureMaintenanceContent()
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

    setHistory((prev) => {
      const updatedHistory = [...prev, newEntry, ...commandOutput]
      // Trigger auto-scroll after history is updated
      requestAnimationFrame(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTo({
            top: terminalRef.current.scrollHeight,
            behavior: "smooth",
          })
        }
      })
      return updatedHistory
    })
    setInput("")
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
      className="flex flex-col h-screen bg-black text-green-500 font-mono"
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

      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto bg-gray-950 p-4 rounded-b-lg"
      >
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

