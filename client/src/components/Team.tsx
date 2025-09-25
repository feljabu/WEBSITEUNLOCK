import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const felipeImage = '/attached_assets/Felipe Jara_1758783631332.jpeg';
const seanImage = '/attached_assets/Sean_1758783697669.png';
const joseImage = '/attached_assets/jose_1758783716598.jpeg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Felipe Jara',
      role: 'AI Agent Strategist',
      image: felipeImage,
      bio: 'Felipe builds custom AI agents and multi-agent systems that deliver measurable ROI while enhancing human work. With deep technical experience across Deloitte, Accenture, and PwC, he specializes in creating autonomous agents that solve real business problems.',
      expertise: ['AI Agents', 'Multi-Agent Systems', 'Enterprise Consulting', 'ROI Optimization'],
      linkedin: 'https://www.linkedin.com/in/felipejarab/'
    },
    {
      name: 'Dr Sean Gallagher',
      role: 'AI Workforce Strategist (Humanova Partnership)',
      image: seanImage,
      bio: 'Sean is Australia\'s leading authority on AI workforce transformation and founder of Humanova. His research-driven approach helps mid-market companies achieve ambitious growth targets through AI-enabled workforces rather than traditional headcount increases.',
      expertise: ['Workforce Transformation', 'AI Strategy', 'Change Management', 'Research'],
      linkedin: 'https://www.linkedin.com/in/seanhgallagher/'
    },
    {
      name: 'Jose Nunez',
      role: 'Tech Lead, AI Solutions',
      image: joseImage,
      bio: 'Jose brings over six years of frontend development experience from Atlassian. His expertise lies in building clean, scalable interfaces and crafting seamless user journeys. He focuses on bridging the gap between advanced AI capabilities and human-centered design.',
      expertise: ['Frontend Development', 'User Experience', 'System Design', 'AI Integration'],
      linkedin: 'https://www.linkedin.com/in/jose-nunez/'
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Our Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meet the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A carefully assembled team of AI specialists, enterprise architects, and industry veterans 
            committed to your success.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="hover-elevate active-elevate-2 transition-all duration-300 border-card-border bg-card group"
              data-testid={`team-member-${index + 1}`}
            >
              <CardContent className="p-8">
                {/* Member Photo */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                      data-testid={`img-team-${index + 1}`}
                    />
                    <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent"></div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-1 group-hover:text-primary/80 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-lg font-semibold text-card-foreground mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.expertise.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* LinkedIn Button */}
                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => window.open(member.linkedin, '_blank')}
                    className="hover-elevate active-elevate-2"
                    data-testid={`button-linkedin-${index + 1}`}
                  >
                    <Linkedin size={16} className="mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;