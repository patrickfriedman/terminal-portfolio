import { ResumeDownload } from "@/components/resume-download"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-green-500 font-mono p-8">
      <h1 className="text-2xl font-bold mb-6">Patrick Friedman - Resume</h1>

      <div className="mb-8">
        <ResumeDownload />
      </div>

      <div className="space-y-6 max-w-3xl">
        <section>
          <h2 className="text-xl text-cyan-400 font-bold mb-2">Contact Information</h2>
          <p>Patrick Friedman</p>
          <p>(214) 471-3159</p>
          <p>patrick.s.friedman@gmail.com</p>
          <p>linkedin.com/in/patrickfri/</p>
          <p>github.com/patrickfriedman</p>
        </section>

        <section>
          <h2 className="text-xl text-cyan-400 font-bold mb-2">Key Skills</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Cybersecurity: Vulnerability assessment, threat detection, penetration testing, endpoint/server
              protection, and incident investigation.
            </li>
            <li>Cloud & DevOps: AWS, Hybrid Cloud Security, Docker, Kubernetes, Git and cloud-native applications.</li>
            <li>
              Programming & Development: Python, C/C++, SQL/MySQL, Bash, Kotlin, Web Development, PHP, and automation
              scripting.
            </li>
            <li>
              Networking: Network analysis, Subnetting, Wireshark, and troubleshooting across diverse environments.
            </li>
            <li>
              Tools & Platforms: XDR, SIEM, Entra ID, Active Directory, PFsense, VMware EXSi, Hyper-V, Dynamics,
              Salesforce, and Jira.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl text-cyan-400 font-bold mb-2">Education</h2>
          <p className="font-bold">B.S. Computer Science</p>
          <p>University of North Texas, Denton, TX</p>
          <p>May 2021</p>
        </section>

        <section>
          <h2 className="text-xl text-cyan-400 font-bold mb-2">Work Experience</h2>

          <div className="mb-4">
            <p className="font-bold">Principle Customer Support Engineer</p>
            <p>Trend Micro | Irving, TX | Jun 2023 – Present</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Provided technical support for Trend Micro's cloud-based and on-premises security software, specializing
                in XDR, EDR, and email security products.
              </li>
              <li>
                Closed over 2,000 cases with an MTTR of 10 days, ensuring efficient case management and high customer
                satisfaction.
              </li>
              <li>Automated tasks and enhanced AWS and Azure deployments using Python scripting.</li>
              <li>
                Utilized CRM tools such as Microsoft Dynamics, Salesforce, and Jira for case management and customer
                success tracking.
              </li>
              <li>
                Diagnosed/resolved Windows OS, network, and security application issues (e.g., AV, VPN, Firewall).
              </li>
              <li>
                Collaborated with cross-functional teams and implemented agile methodologies to improve workflow
                efficiency.
              </li>
              <li>
                Troubleshot SaaS applications, APIs, and enterprise infrastructure for Fortune 500 companies in complex
                environments.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold">Customer Success Manager / Engineer (Hybrid Role)</p>
            <p>Trend Micro | Irving, TX | Jul 2021 – Jun 2023</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Mapped the customer journey, proactively addressing issues, escalations, and resolutions to improve
                customer experience.
              </li>
              <li>
                Reduced churn by 97% and increased customer retention/satisfaction by leading deployment, migration, and
                implementation of Trend Micro products.
              </li>
              <li>
                Configured AWS, VMware EXSi, and Hyper-V environments, showcasing expertise in cloud and virtualization
                platforms.
              </li>
              <li>
                Led training programs on cloud/on-premises security suites, IAM, Zero Trust, and multilayered security
                protocols.
              </li>
              <li>
                Conducted threat analyses, resolved vulnerabilities, and integrated SIEM, Entra ID, and Active Directory
                into environments.
              </li>
              <li>
                Managed enterprise customer accounts, driving product adoption, risk mitigation, and growth
                opportunities.
              </li>
              <li>
                Dedicated engineer for multiple Fortune 500 companies, providing onboarding, deployment, migration, and
                upgrade assistance.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl text-cyan-400 font-bold mb-2">Project Experience</h2>

          <div className="mb-4">
            <p className="font-bold">Classification of Subjective and Objective Texts Using RNN</p>
            <p className="italic">Python</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Developed a machine learning algorithm to classify text as objective or subjective in a 24-hour
                competition.
              </li>
              <li>
                Led the team as Product Manager, assigning tasks, setting benchmarks, and ensuring on-time completion.
              </li>
              <li>
                Built an HTML parser to extract and process training data from 50 articles in three minutes for the AI
                model.
              </li>
              <li>
                Increased training performance by 36% by removing unnecessary information via a word frequency list.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-bold">Nemmeth Braille to Text Translator</p>
            <p className="italic">Python, Java, Kotlin</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Developed an Android app to scan Nemmeth Braille (8-dot for Math) and convert it to text in real-time.
              </li>
              <li>Led as Project Manager, setting benchmarks, managing tasks, and resolving technical challenges.</li>
              <li>
                Built the image processing library in Python (OpenCV) and designed an intuitive GUI for user-friendly
                interaction.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold">Lab Infrastructure Maintenance</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Designed and managed lab environments for Trend Micro security solutions across Windows and Linux
                platforms.
              </li>
              <li>
                Configured and maintained VMware EXSi, Hyper-V, AWS, and integrated Azure for multi-cloud environments.
              </li>
              <li>
                Led solution integration and testing, optimizing network subnetting, computer/user management, and
                security policies.
              </li>
              <li>Utilized Active Directory, DHCP, Domain Controllers, and PFsense for infrastructure management.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl text-cyan-400 font-bold mb-2">Certifications</h2>
          <p>
            <span className="font-bold">Certificate in Cyber Security</span> - ISC2 (Dec 2023)
          </p>
          <p>
            <span className="font-bold">Solutions Architect Associate</span> - Amazon Web Services (Aug 2022)
          </p>
        </section>
      </div>
    </div>
  )
}

