import CaseStudy from './CaseStudy';

const NalahCaseStudy = () => {
  const nalahData = {
    client: {
      name: "ELMO Software",
      logo: "/logos/elmo-logo.png"
    },
    title: "NALAH: SDR Empowerment Agent",
    subtitle: "Transforming prospect research from hours of manual work into autonomous intelligence gathering with 100% adoption",
    hero: {
      image: "/case-studies/nalah-hero.avif"
    },
    challenge: "Following successful process assessment and selection, ELMO needed to transform their highest-priority use case into a working AI agent that would deliver measurable value while building organizational confidence in AI capabilities. Initial team reaction was skepticism—'great, another tool'—until ELMO shifted from building FOR the SDRs to building WITH them. The challenge was developing an intelligent system that could automate complex research tasks while maintaining the quality that sales conversations demand.",
    solution: "The Unlock developed NALAH, an agentic AI system designed to autonomously research and analyze prospects by gathering intelligence from multiple sources. NALAH integrates with LinkedIn for professional insights, performs comprehensive web research, and leverages Perplexity to analyze current news and market trends. Built using n8n and Claude, this multi-source approach delivers comprehensive prospect intelligence that previously required hours of manual research.",
    implementation: "NALAH was built in 8 weeks from concept to launch. The agent was co-created with the SDR team, who became architects of their own workflow, defining what insights mattered and how they wanted to work. This collaborative approach transformed initial resistance into ownership. NALAH integrates directly into ELMO's existing workflows, operating autonomously and requiring minimal user input while delivering comprehensive research reports. The focus on co-design ensured the system enhanced rather than replaced human expertise.",
    techStack: [
      { name: "n8n", icon: "/logos/n8n-logo.png" },
      { name: "Claude", icon: "/logos/claude-logo.png" },
      { name: "Lusha", icon: "/logos/lusha-logo.jpg" },
      { name: "Apify", icon: "/logos/apify-logo.png" },
      { name: "Perplexity", icon: "/logos/perplexity-logo.png" },
      { name: "Slack", icon: "/logos/slack-logo.png" },
      { name: "Google Cloud", icon: "/logos/google-cloud-logo.png" }
    ],
    results: [
      "100% user adoption rate - unprecedented engagement across all intended users",
      "57% time savings on research tasks - nearly 12 working days returned to each SDR annually",
      "35% efficiency gains while improving conversation quality and lead depth",
      "Complete leadership satisfaction with agent performance and business impact"
    ],
    testimonial: {
      quote: "A massive thank you to Felipe Jara for demonstrating how we should be approaching all future Agentic AI initiatives. Watching this project evolve from concept to these stunning results has been a highlight this quarter. You've perfectly articulated a core belief for our organization: AI that is built WITH the user will always outperform AI that is simply built FOR the user.",
      author: "Kate Wilkinson",
      position: "Chief People Officer",
      company: "ELMO Software",
      photo: "/testimonials/kate-wilkinson.jpeg"
    }
  };

  return <CaseStudy data={nalahData} />;
};

export default NalahCaseStudy;
