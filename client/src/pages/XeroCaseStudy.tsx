import CaseStudy from './CaseStudy';

const XeroCaseStudy = () => {
  const xeroData = {
    client: {
      name: "Xero",
      logo: "/logos/xero-logo.png"
    },
    title: "SHAX: Behavioural Change Agent",
    subtitle: "Transforming James Clear's habit formation principles into personalized AI coaching for 5,000 employees",
    hero: {
      image: "/case-studies/xero-hero.webp"
    },
    challenge: "Xero needed to transform James Clear's habit formation presentation into personalized application for 5,000 employees across their global organization. Traditional workshops would have required months of planning, significant resource allocation, and couldn't deliver personalized guidance at scale. Timeline: 3 weeks before their annual conference.",
    solution: "The Unlock built SHAX, an AI agent that brought Clear's principles directly into Xero's existing Slack environment. Rather than taking employees out of their workflow for training, SHAX delivered personalized habit formation coaching as naturally as chatting with a colleague. The agent translated complex behavioural science into contextual, actionable guidance tailored to each individual's role and goals.",
    implementation: "Achieved full deployment in 3 weeks through hybrid approach balancing speed with enterprise security requirements. Secure Slack integration, intuitive conversation flows requiring zero training, and immediate scalability across all departments. Solution designed for organic adoption rather than mandated rollout.",
    techStack: [
      { name: "Slack", icon: "/logos/slack-logo.png" },
      { name: "Google Cloud", icon: "/logos/google-cloud-logo.png" },
      { name: "Gemini", icon: "/logos/gemini-logo.svg" },
      { name: "Dialogflow", icon: "/logos/dialogflow-logo.png" }
    ],
    results: [
      "500+ meaningful conversations in first week (10% company engagement)",
      "Eliminated costly workshop infrastructure while delivering superior personalization",
      "Proved AI's value for employee experience at enterprise scale",
      "Generated pipeline of additional AI agent opportunities across performance management",
      "Demonstrated ROI through reduced training costs and increased application of conference content"
    ],
    testimonial: {
      quote: "The Unlock quickly turned our vision into a working AI solution that delivered personalised guidance directly in our employees' workflow. Instead of resource-intensive workshops, we saw immediate engagement and practical application. This demonstrated how AI can enhance employee experience while reducing administrative overhead.",
      author: "Lucas Finch",
      position: "Head of Wellbeing",
      company: "Xero",
      photo: "/testimonials/lucas-finch.jpeg"
    }
  };

  return <CaseStudy data={xeroData} />;
};

export default XeroCaseStudy;
