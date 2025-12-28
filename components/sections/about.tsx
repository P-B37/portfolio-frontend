import Terminal from "../ui/terminal"

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="flex min-h-[60vh] items-center justify-center px-8 py-24"
    >
    <h2 id="about-heading" className="sr-only">
        About Me
    </h2>
      <div className="w-full max-w-5xl">
        <Terminal
            command="cat about_me.txt"
            commandClassName="text-emerald-700 dark:text-emerald-400"
            outputClassName="text-slate-700 dark:text-slate-200"
            fontClassName="font-mono"
          steps={[
            { text: "\nHi, I'm Bonheur Ndeze Emmanuel\n", bold: true },

            {
              text:
                "Backend Software Developer & Cisco-Certified Network Engineer\n\n",
            },

            { text: "Summary:\n", bold: true },
            {
              text:
                "Backend-focused engineer with strong foundations in network engineering. " +
                "I design secure, scalable APIs, distributed systems, and infrastructure-aware applications.\n\n",
            },

            { text: "Core Focus:\n", bold: true },
            {
              text:
                "- API design & backend architecture\n" +
                "- Authentication, authorization & security\n" +
                "- Databases, performance & scalability\n" +
                "- Networking fundamentals (TCP/IP, DNS, HTTP)\n" +
                "- Infrastructure & deployment\n\n",
            },

            { text: "Certifications:\n", bold: true },
            { text: "- Cisco Networking Certification\n\n" },

            { text: "Philosophy:\n", bold: true },
            {
              text:
                "I enjoy working close to the system layer — where software meets infrastructure and networks.\n",
            },
          ]}
          pulseInterval={80}
          showLocalhost={false}
        />
      </div>
    </section>
  )
}
