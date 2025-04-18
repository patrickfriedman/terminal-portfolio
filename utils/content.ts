// === General Information Section ===

// Reusable function for "About Patrick Friedman"
export const getAboutContent = () => [
  "=== ABOUT PATRICK FRIEDMAN ===",
  "",
  "I'm a cybersecurity professional with expertise in cloud security, programming,",
  "and network analysis. Currently working as a Principle Customer Support Engineer",
  "at Trend Micro, I specialize in XDR, EDR, and email security products.",
  "\n",
  "I have a background in Computer Science and extensive experience in technical support",
  "and customer success, I excel at solving complex security challenges and ensuring",
  "customer satisfaction in enterprise environments.",
  "",
]

// Reusable function for "Work Experience"
export const getWorkExperienceContent = () => [
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
  "\n",
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

// Reusable function for "Education"
export const getEducationContent = () => [
  "=== EDUCATION ===",
  "",
  "B.S. Computer Science",
  "University of North Texas, Denton, TX",
  "Graduated: May 2021",
  "",
]

// Reusable function for "Technical Skills"
export const getTechnicalSkillsContent = () => [
  "=== TECHNICAL SKILLS ===",
  "",
  "Cybersecurity:",
  "• Vulnerability assessment, threat detection, penetration testing",
  "• Endpoint/server protection, incident investigation",
  "\n",
  "Cloud & DevOps:",
  "• AWS, Hybrid Cloud Security, Docker, Kubernetes",
  "• Git and cloud-native applications",
  "\n",
  "Programming & Development:",
  "• Python, C/C++, SQL/MySQL, Bash, Kotlin",
  "• Web Development, PHP, automation scripting",
  "\n",
  "Networking:",
  "• Network analysis, Subnetting, Wireshark",
  "• Troubleshooting across diverse environments",
  "\n",
  "Tools & Platforms:",
  "• XDR, SIEM, Entra ID, Active Directory",
  "• PFsense, VMware EXSi, Hyper-V",
  "• Dynamics, Salesforce, Jira",
  "",
]

// Reusable function for "Certifications"
export const getCertificationsContent = () => [
  "=== CERTIFICATIONS ===",
  "",
  "Certificate in Cyber Security",
  "ISC2",
  "Issued: December 2023",
  "\n",
  "Solutions Architect Associate",
  "Amazon Web Services",
  "Issued: August 2022",
  "",
]

// Reusable function for "Contact Information"
export const getContactContent = () => [
  "=== CONTACT INFORMATION ===",
  "",
  "Email: patrick.s.friedman@gmail.com",
  "Phone: (214) 471-3159",
  "GitHub: github.com/patrickfriedman",
  "LinkedIn: linkedin.com/in/patrickfri/",
  "\n",
  "Feel free to reach out for collaborations or opportunities!",
  "",
]

// Reusable function for "GitHub Projects"
export const getGitHubProjectsContent = () => [
  "=== GITHUB PROJECTS ===",
  "",
  "GitHub Profile: github.com/patrickfriedman",
  "Recent Projects:",
  "\n",
  "1. Terminal-Portfolio",
  "   • An interactive terminal-style portfolio for showcasing projects, skills, and experience.",
  "   • Built with Next.js, React, and Tailwind CSS.",
  "   • github.com/patrickfriedman/terminal-portfolio",
  "\n",
  "2. AI-Contest-CPATS",
  "   • Repo to create an AI model that generates Python 3 code.",
  "   • github.com/patrickfriedman/AI-Contest-CPATS",
  "\n",
  "3. Classification-of-Subjective-and-Objective-Texts-Using-RNN",
  "   • Checks if an article is objective or subjective using machine learning.",
  "   • github.com/patrickfriedman/Classification-of-Subjective-and-Objective-Texts-Using-RNN",
  "\n",
  "4. Braille2Text",
  "   • Application to scan Nemmeth Braille (8-dot Braille for Math) and display it in text in real-time.",
  "   • github.com/patrickfriedman/Braille2Text",
  "\n",
  "5. Sudoku-Solver",
  "   • Sudoku game solver using the backtracking algorithm.",
  "   • github.com/patrickfriedman/Sudoku-Solver",
  "\n",
  "Type 'open-github' to visit my GitHub profile in a new tab",
  "",
]

// === Projects Section ===

export const getProjectsContent = () => [
  "=== MY PROJECTS ===",
  "",
  "1. Ollama with TSDProxy Integration",
  "2. Customer Adoption Initiative",
  "3. Lab Infrastructure Maintenance",
  "\n",
  "Type 'cd [project-number]' to view more details about a specific project",
  "",
]

// Reusable function for "Ollama with TSDProxy Integration" (Project 1)
export const getOllamaWithTSDProxyContent = () => [
  "=== Ollama with TSDProxy Integration ===",
  "",
  "Developed a local AI environment by integrating Ollama, an open-source tool for running large language models (LLMs)",
  "on local machines, with TSDProxy, a Docker-based application that simplifies exposing services over a Tailscale network.",
  "\n",
  "Key Features:",
  "Ollama Integration:",
  "• Enabled local deployment of advanced AI models, enhancing data privacy and control.",
  "• Utilized models like LLaVA and Gemma for diverse AI applications.",
  "\n",
  "TSDProxy Deployment:",
  "• Simplified secure exposure of Dockerized services within the Tailscale network.",
  "• Automated creation of Tailscale machines for each tagged container, eliminating the need for separate Tailscale containers per service.",
  "\n",
  "Technical Stack:",
  "Ollama Integration:",
  "• Ollama: Facilitated local execution of LLMs, supporting models like LLaVA and Gemma. (ollama.com)",
  "• TSDProxy: Streamlined the process of securely exposing Docker containers to the Tailscale network. (github.com)",
  "• Docker Compose: Orchestrated multi-container deployments, ensuring seamless integration and management.",
  "• Tailscale: Provided secure, mesh VPN connectivity for services, enhancing network security and accessibility.",
  "\n",
  "Type 'cd ..' to go back to projects",
  "",
]

// Reusable function for "Customer Adoption Initiative" (Project 2)
export const getCustomerAdoptionInitiativeContent = () => [
  "=== Customer Adoption Initiative ===",
  "",
  "• Led outreach efforts to reconnect with lost and at-risk customers, assessing their status and addressing concerns.",
  "• Coordinated with team members to analyze customer needs, schedule consultations, and distribute resources based on engagement levels.",
  "• Provided tailored solutions, including training, deployment guides, and support, to encourage product adoption and improve security practices.",
  "• Successfully enhanced customer satisfaction, boosted product deployments and upgrades, and improved company-client relationships, while refining account metrics for better reporting.",
  "\n",
  "Type 'cd ..' to go back to projects",
  "",
]

// Reusable function for "Lab Infrastructure Maintenance" (Project 3)
export const getLabInfrastructureMaintenanceContent = () => [
  "=== Lab Infrastructure Maintenance ===",
  "",
  "Designed and managed comprehensive lab environments for testing and demonstrating",
  "Trend Micro security solutions across Windows and Linux platforms.",
  "\n",
  "Key Achievements:",
  "• Configured virtualization platforms including VMware EXSi and Hyper-V",
  "• Implemented multi-cloud environments with AWS and Azure integration",
  "• Optimized network configurations with proper subnetting and security policies",
  "• Managed infrastructure using Active Directory, DHCP, and PFsense",
  "\n",
  "Technologies: VMware, Hyper-V, AWS, Azure, Active Directory, PFsense",
  "\n",
  "Type 'cd ..' to go back to projects",
  "",
]

// === Resume Section ===

export const getResumeContent = () => [
  "=== PATRICK FRIEDMAN - RESUME ===",
  "",
  "CONTACT INFORMATION",
  "-------------------",
  "Patrick Friedman",
  "(214) 471-3159",
  "patrick.s.friedman@gmail.com",
  "linkedin.com/in/patrickfri/",
  "github.com/patrickfriedman",
  "\n",
  "KEY SKILLS",
  "----------",
  "• Cybersecurity: Vulnerability assessment, threat detection, penetration testing, endpoint/server protection",
  "• Cloud & DevOps: AWS, Hybrid Cloud Security, Docker, Kubernetes, Git",
  "• Programming: Python, C/C++, SQL/MySQL, Bash, Kotlin, Web Development, PHP",
  "• Networking: Network analysis, Subnetting, Wireshark, troubleshooting",
  "• Tools & Platforms: XDR, SIEM, Entra ID, Active Directory, PFsense, VMware EXSi, Hyper-V",
  "\n",
  "EDUCATION",
  "---------",
  "B.S. Computer Science",
  "University of North Texas, Denton, TX",
  "May 2021",
  "\n",
  "WORK EXPERIENCE",
  "---------------",
  "Principle Customer Support Engineer",
  "Trend Micro | Irving, TX | Jun 2023 – Present",
  "• Provided technical support for cloud-based and on-premises security software",
  "• Closed over 2,000 cases with an MTTR of 10 days",
  "• Automated tasks using Python scripting",
  "• Utilized CRM tools (Microsoft Dynamics, Salesforce, Jira)",
  "• Diagnosed/resolved Windows OS, network, and security application issues",
  "\n",
  "Customer Success Manager / Engineer",
  "Trend Micro | Irving, TX | Jul 2021 – Jun 2023",
  "• Mapped customer journey, addressing issues and escalations",
  "• Reduced churn by 97% and increased customer retention",
  "• Configured AWS, VMware EXSi, and Hyper-V environments",
  "• Led training programs on security suites and protocols",
  "• Conducted threat analyses and resolved vulnerabilities",
  "\n",
  "PROJECT EXPERIENCE",
  "-----------------",
  "Classification of Subjective and Objective Texts Using RNN (Python)",
  "• Developed a machine learning algorithm to classify text as objective or subjective",
  "• Led the team as Product Manager in a 24-hour competition",
  "\n",
  "Nemmeth Braille to Text Translator (Python, Java, Kotlin)",
  "• Developed an Android app to scan Nemmeth Braille and convert it to text in real-time",
  "• Built image processing library using Python with OpenCV",
  "\n",
  "Lab Infrastructure Maintenance",
  "• Designed and managed lab environments for Trend Micro security solutions",
  "• Configured VMware EXSi, Hyper-V, AWS, and integrated Azure",
  "\n",
  "CERTIFICATIONS",
  "--------------",
  "Certificate in Cyber Security - ISC2 (Dec 2023)",
  "Solutions Architect Associate - Amazon Web Services (Aug 2022)",
  "\n",
  "[ Type 'download-resume' to download the PDF version ]",
  "",
]
