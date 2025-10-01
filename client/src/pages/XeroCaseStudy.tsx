import CaseStudy from './CaseStudy';

const XeroCaseStudy = () => {
  const xeroData = {
    client: {
      name: "Xero",
      logo: "/attached_assets/logos/xero-logo.png"
    },
    title: "Xero Case Study",
    subtitle: "Behavioural Change Agent",
    hero: {
      image: "/attached_assets/case-studies/xero-hero.png"
    },
    challenge: "Xero needed to transform James Clear's habit formation presentation into personalized application for 5,000 employees across their global organization. Traditional workshops would have required months of planning, significant resource allocation, and couldn't deliver personalized guidance at scale. Timeline: 3 weeks before their annual conference.",
    solution: "The Unlock built SHAX, an AI agent that brought Clear's principles directly into Xero's existing Slack environment. Rather than taking employees out of their workflow for training, SHAX delivered personalized habit formation coaching as naturally as chatting with a colleague. The agent translated complex behavioural science into contextual, actionable guidance tailored to each individual's role and goals.",
    implementation: "Achieved full deployment in 3 weeks through hybrid approach balancing speed with enterprise security requirements. Secure Slack integration, intuitive conversation flows requiring zero training, and immediate scalability across all departments. Solution designed for organic adoption rather than mandated rollout.",
    techStack: [
      { name: "Slack API", icon: "/attached_assets/icons/slack.svg" },
      { name: "OpenAI", icon: "/attached_assets/icons/openai.svg" },
      { name: "Python", icon: "/attached_assets/icons/python.svg" },
      { name: "AWS Lambda", icon: "/attached_assets/icons/aws.svg" }
    ],
    results: [
      "500+ meaningful conversations in first week (10% company engagement)",
      "Eliminated costly workshop infrastructure while delivering superior personalization",
      "Proved AI's value for employee experience at enterprise scale",
      "Generated pipeline of additional AI agent opportunities across performance management",
      "Demonstrated ROI through reduced training costs and increased application of conference content"
    ],
    images: [
      "/attached_assets/case-studies/xero-screenshot1.png",
      "/attached_assets/case-studies/xero-screenshot2.png"
    ],
    testimonial: {
      quote: "The Unlock quickly turned our vision into a working AI solution that delivered personalised guidance directly in our employees' workflow. Instead of resource-intensive workshops, we saw immediate engagement and practical application. This demonstrated how AI can enhance employee experience while reducing administrative overhead.",
      author: "Lucas Finch",
      position: "Head of Wellbeing",
      company: "Xero",
      photo: "/attached_assets/testimonials/lucas-finch.jpg"
    }
  };

  return <CaseStudy data={xeroData} />;
};

export default XeroCaseStudy;
