import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import teamMember1 from '@assets/generated_images/Team_member_portrait_one_1a29be0c.png';
import teamMember2 from '@assets/generated_images/Team_member_portrait_two_b8b749f6.png';

const Team = () => {
  // todo: remove mock functionality
  const teamMembers = [
    {
      name: 'Alex Rodriguez',
      role: 'Lead AI Architect',
      image: teamMember1,
      bio: 'Former Google AI researcher with 10+ years in machine learning and enterprise automation. Specializes in natural language processing and intelligent agent systems.',
      expertise: ['Machine Learning', 'NLP', 'System Architecture', 'Cloud AI']
    },
    {
      name: 'Jordan Kim',
      role: 'Integration Specialist',
      image: teamMember2,
      bio: 'Enterprise integration expert with deep experience in Fortune 500 digital transformations. Focuses on seamless AI deployment and change management.',
      expertise: ['Enterprise Integration', 'Change Management', 'API Design', 'DevOps']
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
              Experts
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A carefully assembled team of AI specialists, enterprise architects, and industry veterans 
            committed to your success.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
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

                {/* Contact Buttons */}
                <div className="flex justify-center gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => console.log(`LinkedIn clicked for ${member.name}`)}
                    className="hover-elevate active-elevate-2"
                    data-testid={`button-linkedin-${index + 1}`}
                  >
                    <Linkedin size={16} className="mr-2" />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => console.log(`Email clicked for ${member.name}`)}
                    className="hover-elevate active-elevate-2"
                    data-testid={`button-email-${index + 1}`}
                  >
                    <Mail size={16} className="mr-2" />
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Values */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Commitment</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe that great AI solutions come from understanding both the technology and the business. 
                Our team combines deep technical expertise with practical enterprise experience to deliver 
                solutions that don't just work in theory—they thrive in your real-world environment.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;