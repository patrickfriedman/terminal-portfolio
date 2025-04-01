"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function GithubPage() {
  const [isLoading, setIsLoading] = useState(false)

  const openGithub = () => {
    window.open("https://github.com/patrickfriedman", "_blank")
  }

  const githubProjects = [
    {
      name: "Classification-RNN",
      description: "Machine learning project for text classification using Recurrent Neural Networks",
      technologies: ["Python", "TensorFlow", "NLP"],
      url: "https://github.com/patrickfriedman/Classification-RNN",
    },
    {
      name: "Braille-Translator",
      description: "Android application that translates Nemmeth Braille to text using computer vision",
      technologies: ["Kotlin", "Java", "Python", "OpenCV"],
      url: "https://github.com/patrickfriedman/Braille-Translator",
    },
    {
      name: "Security-Lab-Infrastructure",
      description: "Scripts and configurations for setting up security testing environments",
      technologies: ["PowerShell", "Bash", "Terraform"],
      url: "https://github.com/patrickfriedman/Security-Lab-Infrastructure",
    },
    {
      name: "Cloud-Security-Tools",
      description: "Collection of tools for cloud security monitoring and assessment",
      technologies: ["Python", "AWS SDK", "Azure SDK"],
      url: "https://github.com/patrickfriedman/Cloud-Security-Tools",
    },
    {
      name: "Incident-Response-Automation",
      description: "Automation scripts for security incident response workflows",
      technologies: ["Python", "Bash", "APIs"],
      url: "https://github.com/patrickfriedman/Incident-Response-Automation",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-green-500 font-mono p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">GitHub Projects</h1>
        <Button onClick={openGithub} className="bg-green-700 hover:bg-green-600 text-white flex items-center gap-2">
          <Github size={16} />
          View GitHub Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {githubProjects.map((project, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800 text-green-400">
            <CardHeader>
              <CardTitle className="text-cyan-400">{project.name}</CardTitle>
              <CardDescription className="text-gray-400">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-800 rounded-md text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                size="sm"
                className="border-green-700 text-green-400 hover:bg-green-900 hover:text-green-300 flex items-center gap-2"
                onClick={() => window.open(project.url, "_blank")}
              >
                <ExternalLink size={14} />
                View Repository
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

