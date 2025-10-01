import CaseStudy from './CaseStudy';

const ElmoAgentIdCaseStudy = () => {
  const elmoAgentIdData = {
    client: {
      name: "ELMO",
      logo: "/logos/elmo-logo.png"
    },
    title: "Identifying High-Impact Agentic AI Opportunities",
    subtitle: "Strategic framework for selecting AI agent use cases that deliver measurable ROI and organisational buy-in",
    hero: {
      image: "/case-studies/elmo-agent-id-hero.jpg"
    },
    challenge: "ELMO, a leading HR technology company, wanted to build their first AI agent but needed a systematic approach to identify which process would deliver the best ROI and organisational buy-in. With multiple potential automation opportunities, they required a strategic framework to move from broad AI possibilities to focused, measurable implementation that would prove value and scale across the business.",
    solution: "We used a comprehensive 6-category assessment framework evaluating processes across Volume & Frequency, Process Standardisation, Employee Experience, Time Investment, plus Strategic Alignment and ROI Measurability. This framework enabled ELMO to systematically score potential use cases from different parts of the business, empowering them to choose the highest-impact opportunity that aligned with both technical feasibility and business priorities. This strategic framework led ELMO to select Sales Development Representative prospect research as their first use case - a decision that resulted in saving each team member nearly 12 working days per year on research tasks.",
    results: [
      "Data-driven process selection using quantified criteria eliminated uncertainty and built confidence in the chosen approach",
      "Clear ROI pathway identified through the framework, selecting a process with measurable time savings and efficiency gains",
      "Repeatable methodology that ELMO can use collaboratively with business units to evaluate and prioritize future AI agent opportunities across all departments"
    ],
    ctaLink: {
      text: "See case study here",
      url: "/case-studies/nalah-sdr-empowerment"
    }
  };

  return <CaseStudy data={elmoAgentIdData} />;
};

export default ElmoAgentIdCaseStudy;
