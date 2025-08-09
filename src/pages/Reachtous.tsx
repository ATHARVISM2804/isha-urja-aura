import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Leaf, Heart, Star, Sparkles, Crown, Globe } from "lucide-react";
import { toast } from "@/hooks/use-toast";

function Reachtous() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ 
      title: "Message sent with gratitude", 
      description: "We'll respond to your sacred inquiry within 24–48 hours." 
    });
  };

  return (
    <>
      <SEO 
        title="Connect with Us | Sacred Wellness Communications"
        description="Connect with our wellness consultants for personalized Ayurvedic guidance, custom rituals, and sacred wellness support."
      />
      
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
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 30px rgba(139, 69, 19, 0.2); }
            50% { box-shadow: 0 0 50px rgba(139, 69, 19, 0.4); }
          }
          @keyframes sparkleRotate {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.2); }
            100% { transform: rotate(360deg) scale(1); }
          }
          @keyframes heartBeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
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
          .premium-input {
            background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(139, 69, 19, 0.05));
            border: 1px solid rgba(139, 69, 19, 0.3);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }
          .premium-input:focus {
            border: 1px solid rgba(139, 69, 19, 0.6);
            animation: pulseGlow 2s ease-in-out infinite;
          }
          .contact-card {
            background: linear-gradient(135deg, rgba(139, 69, 19, 0.08), rgba(160, 82, 45, 0.05));
            border: 1px solid rgba(139, 69, 19, 0.2);
            transition: all 0.4s ease;
          }
          .contact-card:hover {
            background: linear-gradient(135deg, rgba(139, 69, 19, 0.15), rgba(160, 82, 45, 0.1));
            transform: translateY(-8px) scale(1.05);
            box-shadow: 0 20px 40px rgba(139, 69, 19, 0.2);
          }
          .sparkle-icon:hover {
            animation: sparkleRotate 2s ease-in-out infinite;
          }
          .heart-icon:hover {
            animation: heartBeat 1s ease-in-out infinite;
          }
          .premium-button {
            background: linear-gradient(135deg, #8b4513, #a0522d);
            transition: all 0.3s ease;
          }
          .premium-button:hover {
            background: linear-gradient(135deg, #654321, #8b4513);
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(139, 69, 19, 0.4);
          }
          .floating-element {
            animation: luxuryFloat 4s ease-in-out infinite;
          }
          `}
        </style>

        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-amber-900/10" />
          <div className="container relative z-10">
            <div className="text-center space-y-8">
              <div className="flex justify-center mb-6">
                <Crown className="h-16 w-16 text-amber-700 sparkle-icon" />
              </div>
              <h1 className="font-brandSerif text-4xl md:text-5xl lg:text-6xl shimmer-text font-bold">
                Connect with Our Sacred Sanctuary
              </h1>
              <p className="text-lg md:text-xl text-amber-900/80 max-w-3xl mx-auto leading-relaxed">
                Begin a sacred conversation with our wellness guardians. Experience personalized Ayurvedic guidance and luxury consultations tailored to your unique journey
              </p>
              <div className="flex items-center justify-center gap-4 text-amber-700">
                <Sparkles className="h-6 w-6 sparkle-icon" />
                <span className="text-lg font-medium">Premium • Personal • Sacred</span>
                <Sparkles className="h-6 w-6 sparkle-icon" />
              </div>
            </div>
          </div>
        </section>

        <div className="container pb-20">
          <div className="grid gap-16 lg:grid-cols-5">
            
            {/* Contact Information Cards */}
            <div className="lg:col-span-2 space-y-8">
              <div className="text-center lg:text-left mb-12">
                <h2 className="font-brandSerif text-3xl md:text-4xl text-amber-900 mb-6">Sacred Connections</h2>
                <p className="text-lg text-amber-800/80 leading-relaxed">
                  Every conversation is a sacred exchange. Reach out through your preferred channel and experience our commitment to exceptional service.
                </p>
              </div>

              <Card className="contact-card rounded-3xl p-8 shadow-2xl floating-element">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 p-4">
                      <Mail className="h-8 w-8 text-amber-700" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-amber-900 font-brandSerif">Premium Correspondence</CardTitle>
                      <p className="text-amber-700/70">Luxury email experience</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-800/80 mb-3">Connect with our wellness consultants</p>
                  <p className="font-bold text-xl text-amber-900">hello@ishaurja.com</p>
                  <p className="text-sm text-amber-700/60 mt-2">Response within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="contact-card rounded-3xl p-8 shadow-2xl">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 p-4">
                      <Phone className="h-8 w-8 text-orange-700" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-amber-900 font-brandSerif">Direct Consultation</CardTitle>
                      <p className="text-amber-700/70">Immediate sacred guidance</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-800/80 mb-3">Speak with our wellness experts</p>
                  <p className="font-bold text-xl text-amber-900">+91 98765 43210</p>
                  <p className="text-sm text-amber-700/60 mt-2">Available Mon-Sat, 9 AM - 7 PM</p>
                </CardContent>
              </Card>

              <Card className="contact-card rounded-3xl p-8 shadow-2xl">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 p-4">
                      <MapPin className="h-8 w-8 text-emerald-700" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-amber-900 font-brandSerif">Sacred Sanctuary</CardTitle>
                      <p className="text-amber-700/70">Luxury wellness center</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-800/80 mb-3">Visit our premium wellness space</p>
                  <p className="font-bold text-lg text-amber-900">Wellness Quarter, New Delhi</p>
                  <p className="text-amber-800/70">Sacred Gardens Complex</p>
                  <p className="text-sm text-amber-700/60 mt-2">Private consultations available</p>
                </CardContent>
              </Card>

              <Card className="contact-card rounded-3xl p-8 shadow-2xl">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 p-4">
                      <Globe className="h-8 w-8 text-purple-700" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-amber-900 font-brandSerif">Global Presence</CardTitle>
                      <p className="text-amber-700/70">Worldwide wellness</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-800/80 mb-3">International consultations</p>
                  <p className="font-bold text-lg text-amber-900">Virtual Sacred Sessions</p>
                  <p className="text-amber-800/70">Available across time zones</p>
                  <p className="text-sm text-amber-700/60 mt-2">Premium global delivery</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="luxury-card rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 via-orange-50/10 to-amber-100/20 pointer-events-none" />
                <CardHeader className="text-center pb-8 relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="rounded-3xl bg-gradient-to-br from-amber-100 to-orange-100 p-6">
                      <Send className="h-12 w-12 text-amber-700" />
                    </div>
                  </div>
                  <CardTitle className="font-brandSerif text-3xl md:text-4xl text-amber-900 mb-4">
                    Begin Your Sacred Journey
                  </CardTitle>
                  <p className="text-lg text-amber-800/80 max-w-2xl mx-auto leading-relaxed">
                    Share your wellness aspirations with our expert consultants. Every inquiry receives personalized attention and sacred care.
                  </p>
                </CardHeader>
                <CardContent className="p-12 relative z-10">
                  <form onSubmit={onSubmit} className="space-y-8">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="space-y-3">
                        <label className="text-sm font-semibold text-amber-900 flex items-center gap-2">
                          <Star className="h-4 w-4" />
                          Sacred Name
                        </label>
                        <Input 
                          placeholder="Your wellness name" 
                          className="premium-input h-14 rounded-2xl text-amber-900 text-lg"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-semibold text-amber-900 flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Email Address
                        </label>
                        <Input 
                          type="email" 
                          placeholder="your.wellness@email.com" 
                          className="premium-input h-14 rounded-2xl text-amber-900 text-lg"
                        />
                      </div>
                    </div>
                    
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="space-y-3">
                        <label className="text-sm font-semibold text-amber-900 flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          Contact Number
                        </label>
                        <Input 
                          type="tel" 
                          placeholder="+91 Your sacred number" 
                          className="premium-input h-14 rounded-2xl text-amber-900 text-lg"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-semibold text-amber-900 flex items-center gap-2">
                          <Crown className="h-4 w-4" />
                          Service Interest
                        </label>
                        <select className="premium-input h-14 rounded-2xl text-amber-900 text-lg w-full">
                          <option>Personal Consultation</option>
                          <option>Custom Product Creation</option>
                          <option>Wellness Program</option>
                          <option>Corporate Wellness</option>
                          <option>Other Inquiries</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-amber-900 flex items-center gap-2">
                        <Heart className="h-4 w-4 heart-icon" />
                        Sacred Message
                      </label>
                      <Textarea 
                        placeholder="Share your wellness intentions, dreams, and how we can support your sacred journey toward holistic well-being..."
                        rows={6}
                        className="premium-input rounded-2xl text-amber-900 text-lg resize-none"
                      />
                    </div>
                    
                    <div className="text-center pt-4">
                      <Button 
                        type="submit" 
                        className="premium-button text-white py-6 px-12 text-xl font-semibold rounded-2xl shadow-2xl"
                      >
                        <Send className="mr-3 h-6 w-6" />
                        Send Sacred Message
                      </Button>
                      <p className="text-sm text-amber-700/60 mt-4">
                        Your privacy is sacred to us. All information is kept confidential.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values Section */}
          <section className="mt-24">
            <div className="text-center mb-16">
              <h2 className="font-brandSerif text-3xl md:text-4xl text-amber-900 mb-6">Our Sacred Promise</h2>
              <p className="text-lg text-amber-800/70 max-w-2xl mx-auto">
                Every interaction is guided by these sacred principles that honor your wellness journey
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-3">
              <Card className="luxury-card rounded-3xl p-10 text-center shadow-xl">
                <div className="flex justify-center mb-6">
                  <div className="rounded-3xl bg-gradient-to-br from-rose-100 to-rose-200 p-6">
                    <Heart className="h-12 w-12 text-rose-600 heart-icon" />
                  </div>
                </div>
                <h3 className="font-brandSerif text-2xl text-amber-900 mb-4">Compassionate Care</h3>
                <p className="text-amber-800/80 leading-relaxed text-lg">
                  Every conversation is approached with genuine compassion, deep listening, and personalized attention to your unique wellness path.
                </p>
              </Card>

              <Card className="luxury-card rounded-3xl p-10 text-center shadow-xl">
                <div className="flex justify-center mb-6">
                  <div className="rounded-3xl bg-gradient-to-br from-emerald-100 to-emerald-200 p-6">
                    <Leaf className="h-12 w-12 text-emerald-600" />
                  </div>
                </div>
                <h3 className="font-brandSerif text-2xl text-amber-900 mb-4">Authentic Wisdom</h3>
                <p className="text-amber-800/80 leading-relaxed text-lg">
                  Our guidance is rooted in authentic Ayurvedic traditions, combined with modern luxury wellness practices for holistic transformation.
                </p>
              </Card>

              <Card className="luxury-card rounded-3xl p-10 text-center shadow-xl">
                <div className="flex justify-center mb-6">
                  <div className="rounded-3xl bg-gradient-to-br from-amber-100 to-amber-200 p-6">
                    <Star className="h-12 w-12 text-amber-600 sparkle-icon" />
                  </div>
                </div>
                <h3 className="font-brandSerif text-2xl text-amber-900 mb-4">Sacred Privacy</h3>
                <p className="text-amber-800/80 leading-relaxed text-lg">
                  Your wellness journey and personal information are held with utmost reverence, confidentiality, and sacred respect.
                </p>
              </Card>
            </div>
          </section>

          {/* Map Section */}
          <section className="mt-24">
            <Card className="luxury-card rounded-3xl overflow-hidden shadow-2xl">
              <CardHeader className="text-center p-12">
                <div className="flex justify-center mb-6">
                  <div className="rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 p-6">
                    <MapPin className="h-12 w-12 text-blue-600" />
                  </div>
                </div>
                <CardTitle className="font-brandSerif text-3xl text-amber-900 mb-4">
                  Visit Our Sacred Sanctuary
                </CardTitle>
                <p className="text-lg text-amber-800/70 max-w-2xl mx-auto">
                  Experience our luxury wellness center where ancient wisdom meets modern comfort in a serene, sacred environment.
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <AspectRatio ratio={16 / 9}>
                  <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center rounded-b-3xl">
                    <div className="text-center space-y-4">
                      <MapPin className="h-16 w-16 text-amber-600 mx-auto" />
                      <h3 className="text-2xl font-semibold text-amber-900">Sacred Location</h3>
                      <p className="text-amber-800/70">Interactive map coming soon</p>
                      <p className="text-lg font-medium text-amber-900">Wellness Quarter, New Delhi</p>
                    </div>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </>
  );
}

export default Reachtous;
