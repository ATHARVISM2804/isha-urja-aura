import { SEO } from "@/components/seo/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, Award, Users, Globe, Star, Sparkles, Crown, Mountain, Droplets } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-amber-600" />,
      title: "Natural Purity",
      description: "We source only the finest, ethically harvested botanicals from their native regions, ensuring maximum potency and purity."
    },
    {
      icon: <Heart className="h-8 w-8 text-amber-600" />,
      title: "Crafted with Love",
      description: "Every product is handcrafted in small batches with devotion, care, and respect for ancient Ayurvedic traditions."
    },
    {
      icon: <Crown className="h-8 w-8 text-amber-600" />,
      title: "Luxury Experience",
      description: "We believe wellness should be a luxurious journey, combining premium quality with thoughtful design and packaging."
    },
    {
      icon: <Globe className="h-8 w-8 text-amber-600" />,
      title: "Sustainable Future",
      description: "Our commitment to sustainability ensures that every choice we make honors both people and planet."
    }
  ];

  const journey = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Founded with a vision to bring authentic Ayurvedic wisdom to modern wellness seekers."
    },
    {
      year: "2021",
      title: "First Collection",
      description: "Launched our signature skincare line, featuring traditional formulations with contemporary appeal."
    },
    {
      year: "2022",
      title: "Growing Family",
      description: "Expanded our product range and built a community of 10,000+ wellness enthusiasts."
    },
    {
      year: "2023",
      title: "Premium Recognition",
      description: "Received awards for excellence in natural beauty and sustainable business practices."
    },
    {
      year: "2024",
      title: "Luxury Evolution",
      description: "Elevated our brand experience with premium packaging and exclusive product collections."
    }
  ];

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Founder & Chief Formulator",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      description: "20+ years of experience in Ayurvedic medicine and natural product development."
    },
    {
      name: "Rajesh Kumar",
      role: "Head of Sustainability",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Ensuring our practices honor both tradition and environmental responsibility."
    },
    {
      name: "Anita Desai",
      role: "Wellness Expert",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      description: "Guiding customers on their personalized wellness journeys with expert care."
    }
  ];

  return (
    <>
      <SEO title="About Isha Urja" description="Our Ayurvedic story—crafting small-batch, authentic formulations with care." />
      <main className="min-h-screen bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-amber-100/50">
        <style>
          {`
          @keyframes luxuryFloat {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-8px) scale(1.02); }
          }
          @keyframes shimmerGlow {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          @keyframes leafDance {
            0%, 100% { transform: rotate(0deg) translateY(0px); }
            50% { transform: rotate(10deg) translateY(-10px); }
          }
          @keyframes dropletFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .luxury-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.8));
            border: 1px solid rgba(139, 69, 19, 0.2);
            backdrop-filter: blur(20px);
            transition: all 0.5s ease;
          }
          .luxury-card:hover {
            animation: luxuryFloat 3s ease-in-out infinite;
            box-shadow: 0 25px 50px rgba(139, 69, 19, 0.2);
            border: 1px solid rgba(139, 69, 19, 0.4);
            transform: translateY(-5px);
          }
          .shimmer-text {
            background: linear-gradient(90deg, #8b4513, #d2691e, #cd853f, #d2691e, #8b4513);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmerGlow 4s ease-in-out infinite;
          }
          .value-card {
            background: linear-gradient(135deg, rgba(139, 69, 19, 0.08), rgba(160, 82, 45, 0.05));
            border: 1px solid rgba(139, 69, 19, 0.2);
            transition: all 0.4s ease;
          }
          .value-card:hover {
            background: linear-gradient(135deg, rgba(139, 69, 19, 0.15), rgba(160, 82, 45, 0.1));
            transform: translateY(-5px) scale(1.03);
            box-shadow: 0 20px 40px rgba(139, 69, 19, 0.15);
          }
          .timeline-item {
            position: relative;
            transition: all 0.3s ease;
          }
          .timeline-item:hover {
            transform: translateX(10px);
          }
          .team-card:hover .team-image {
            transform: scale(1.1);
          }
          .team-image {
            transition: transform 0.5s ease;
          }
          .leaf-icon:hover {
            animation: leafDance 2s ease-in-out infinite;
          }
          .droplet-icon:hover {
            animation: dropletFloat 1.5s ease-in-out infinite;
          }
          .premium-button {
            background: linear-gradient(135deg, #8b4513, #a0522d);
            transition: all 0.3s ease;
          }
          .premium-button:hover {
            background: linear-gradient(135deg, #654321, #8b4513);
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(139, 69, 19, 0.3);
          }
          `}
        </style>

        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-amber-900/10" />
          <div className="container relative z-10">
            <div className="text-center space-y-8">
              <div className="flex justify-center mb-6">
                <Mountain className="h-16 w-16 text-amber-700" />
              </div>
              <h1 className="font-brandSerif text-4xl md:text-5xl lg:text-6xl shimmer-text font-bold">
                Our Sacred Journey
              </h1>
              <p className="text-lg md:text-xl text-amber-900/80 max-w-3xl mx-auto leading-relaxed">
                Rooted in ancient Ayurvedic wisdom, we craft luxury wellness experiences that honor tradition while embracing modern sensibilities
              </p>
              <div className="flex items-center justify-center gap-4 text-amber-700">
                <Sparkles className="h-6 w-6" />
                <span className="text-lg font-medium">Authentic • Luxurious • Transformative</span>
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
          </div>
        </section>

        <div className="container pb-20">
          {/* Story Section */}
          <section className="mb-20">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="font-brandSerif text-3xl md:text-4xl text-amber-900">Our Sacred Story</h2>
                <div className="space-y-4 text-amber-800/80 leading-relaxed">
                  <p className="text-lg">
                    Isha Urja was born from a profound reverence for the ancient science of Ayurveda and a vision to make its timeless wisdom accessible to the modern world. Our journey began with a simple yet powerful belief: that true beauty and wellness emerge from harmony between mind, body, and spirit.
                  </p>
                  <p>
                    Each product in our collection is a testament to the sacred relationship between nature and humanity. We carefully source the finest botanicals from their native regions, honoring the traditional knowledge that has been passed down through generations of Ayurvedic practitioners.
                  </p>
                  <p>
                    Our commitment extends beyond creating exceptional products. We believe in slow beauty—a philosophy that values quality over quantity, sustainability over convenience, and authentic experiences over temporary trends.
                  </p>
                </div>
                <Button className="premium-button text-white font-semibold px-8 py-3 rounded-xl">
                  Discover Our Products
                </Button>
              </div>
              <div className="luxury-card rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=400&fit=crop"
                  alt="Ayurvedic herbs and ingredients"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-brandSerif text-3xl md:text-4xl text-amber-900 mb-4">Our Sacred Values</h2>
              <p className="text-lg text-amber-800/70 max-w-2xl mx-auto">
                The principles that guide every decision we make and every product we create
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="value-card rounded-3xl p-8 text-center shadow-xl">
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <CardTitle className="font-brandSerif text-xl text-amber-900">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-800/70 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Journey Timeline */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-brandSerif text-3xl md:text-4xl text-amber-900 mb-4">Our Journey Through Time</h2>
              <p className="text-lg text-amber-800/70 max-w-2xl mx-auto">
                Milestones that have shaped our path towards becoming a trusted name in luxury Ayurvedic wellness
              </p>
            </div>
            <div className="luxury-card rounded-3xl p-12 shadow-2xl">
              <div className="space-y-8">
                {journey.map((item, index) => (
                  <div key={index} className="timeline-item flex gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-brandSerif text-xl text-amber-900">{item.title}</h3>
                      <p className="text-amber-800/80 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-brandSerif text-3xl md:text-4xl text-amber-900 mb-4">Meet Our Wellness Guardians</h2>
              <p className="text-lg text-amber-800/70 max-w-2xl mx-auto">
                The passionate souls behind Isha Urja, dedicated to bringing you the finest in Ayurvedic luxury
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {team.map((member, index) => (
                <Card key={index} className="luxury-card team-card rounded-3xl overflow-hidden shadow-xl">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="team-image w-full h-64 object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-brandSerif text-xl text-amber-900 text-center">
                      {member.name}
                    </CardTitle>
                    <p className="text-amber-700 text-center font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-800/80 text-center leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Certifications & Awards */}
          <section className="mb-20">
            <div className="luxury-card rounded-3xl p-12 text-center shadow-2xl">
              <Award className="h-12 w-12 text-amber-700 mx-auto mb-6" />
              <h2 className="font-brandSerif text-3xl text-amber-900 mb-6">Recognition & Certifications</h2>
              <div className="grid gap-8 md:grid-cols-4 mb-8">
                <div className="space-y-2">
                  <Star className="h-8 w-8 text-amber-600 mx-auto" />
                  <h3 className="font-semibold text-amber-900">Organic Certified</h3>
                  <p className="text-sm text-amber-800/70">100% Natural & Organic</p>
                </div>
                <div className="space-y-2">
                  <Crown className="h-8 w-8 text-amber-600 mx-auto" />
                  <h3 className="font-semibold text-amber-900">Premium Quality</h3>
                  <p className="text-sm text-amber-800/70">Excellence in Ayurveda</p>
                </div>
                <div className="space-y-2">
                  <Leaf className="h-8 w-8 text-amber-600 mx-auto leaf-icon" />
                  <h3 className="font-semibold text-amber-900">Sustainable</h3>
                  <p className="text-sm text-amber-800/70">Eco-Friendly Practices</p>
                </div>
                <div className="space-y-2">
                  <Users className="h-8 w-8 text-amber-600 mx-auto" />
                  <h3 className="font-semibold text-amber-900">Trusted by 10K+</h3>
                  <p className="text-sm text-amber-800/70">Happy Customers</p>
                </div>
              </div>
              <p className="text-amber-800/80 max-w-2xl mx-auto">
                Our dedication to quality and authenticity has earned us recognition from leading wellness organizations and the trust of thousands of customers worldwide.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="luxury-card rounded-3xl p-12">
              <Droplets className="h-12 w-12 text-amber-700 mx-auto mb-6 droplet-icon" />
              <h2 className="font-brandSerif text-3xl text-amber-900 mb-4">Begin Your Wellness Journey</h2>
              <p className="text-lg text-amber-800/70 mb-8 max-w-2xl mx-auto">
                Experience the transformative power of authentic Ayurveda. Let us guide you on a path to holistic wellness and radiant beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="premium-button text-white font-semibold px-8 py-4 rounded-xl text-lg">
                  Explore Our Collection
                </Button>
                <Button variant="outline" className="px-8 py-4 rounded-xl border-amber-300 text-amber-700 hover:bg-amber-50 text-lg">
                  Get Consultation
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
