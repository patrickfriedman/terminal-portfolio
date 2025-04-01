"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResumeDownload() {
  return (
    <Button asChild className="bg-green-700 hover:bg-green-600 text-white flex items-center gap-2">
      <a href="/patrick-friedman-resume.pdf" download="patrick-friedman-resume.pdf">
        <Download size={16} className="mr-2" />
        Download Resume
      </a>
    </Button>
  )
}

