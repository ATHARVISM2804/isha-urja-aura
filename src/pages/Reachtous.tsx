import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Leaf, Heart, Star } from "lucide-react";
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
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/20 to-stone-200/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-amber-200 text-amber-700 px-4 py-2 text-sm font-medium">
                <Heart className="w-4 h-4 mr-2" />
                Sacred Communications
              </Badge>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Connect with Our 
              <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Sacred Wellness Guide
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-stone-600 leading-relaxed">
              Reach out to our dedicated wellness consultants for personalized Ayurvedic guidance, 
              custom ritual consultations, and sacred support on your wellness journey.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 px-3 py-1">
                <MessageCircle className="w-4 h-4 mr-2" />
                Personal Consultations
              </Badge>
              <Badge variant="secondary" className="bg-stone-100 text-stone-800 px-3 py-1">
                <Leaf className="w-4 h-4 mr-2" />
                Sacred Guidance
              </Badge>
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 px-3 py-1">
                <Star className="w-4 h-4 mr-2" />
                Wellness Support
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-3">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Get in Touch</h2>
              <p className="text-stone-600 leading-relaxed">
                We're here to support your sacred wellness journey with personalized guidance and authentic care.
              </p>
            </div>

            <Card className="group hover:shadow-xl transition-all duration-300 border-amber-100 bg-gradient-to-br from-white to-amber-50/30">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-amber-100 p-3 group-hover:bg-amber-200 transition-colors">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-lg text-stone-900">Sacred Correspondence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 mb-2">Email us for personalized guidance</p>
                <p className="font-semibold text-amber-700">info@ishaurja.com</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-amber-100 bg-gradient-to-br from-white to-stone-50/30">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-stone-100 p-3 group-hover:bg-stone-200 transition-colors">
                    <Phone className="h-6 w-6 text-stone-600" />
                  </div>
                  <CardTitle className="text-lg text-stone-900">Direct Connection</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 mb-2">Speak with our wellness consultants</p>
                <p className="font-semibold text-stone-700">+91 9876543210</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-amber-100 bg-gradient-to-br from-white to-amber-50/30">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-amber-100 p-3 group-hover:bg-amber-200 transition-colors">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-lg text-stone-900">Sacred Sanctuary</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 mb-2">Visit our wellness center</p>
                <p className="font-semibold text-stone-700">Wellness District, Sacred City</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-amber-100 bg-gradient-to-br from-white to-stone-50/30">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-stone-100 p-3 group-hover:bg-stone-200 transition-colors">
                    <Clock className="h-6 w-6 text-stone-600" />
                  </div>
                  <CardTitle className="text-lg text-stone-900">Sacred Hours</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 mb-2">Consultation availability</p>
                <p className="font-semibold text-stone-700">Mon-Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-sm text-stone-500 mt-1">Sunday: By appointment only</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-amber-100 bg-gradient-to-br from-white via-amber-50/20 to-stone-50/30">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-gradient-to-r from-amber-100 to-stone-100 p-4">
                    <Send className="h-8 w-8 text-amber-600" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-stone-900">
                  Begin Your Sacred Conversation
                </CardTitle>
                <p className="text-stone-600 max-w-md mx-auto">
                  Share your wellness intentions with us, and our consultants will provide personalized guidance for your journey.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-stone-700">Sacred Name</label>
                      <Input 
                        placeholder="Your wellness name" 
                        className="border-amber-200 focus:border-amber-400 focus:ring-amber-200 bg-white/80 backdrop-blur-sm" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-stone-700">Email Address</label>
                      <Input 
                        type="email" 
                        placeholder="your.wellness@email.com" 
                        className="border-amber-200 focus:border-amber-400 focus:ring-amber-200 bg-white/80 backdrop-blur-sm" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">Phone Number</label>
                    <Input 
                      type="tel" 
                      placeholder="+91 Your contact number" 
                      className="border-amber-200 focus:border-amber-400 focus:ring-amber-200 bg-white/80 backdrop-blur-sm" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">Sacred Inquiry</label>
                    <Textarea 
                      placeholder="Share your wellness intentions, questions about custom rituals, or how we can support your sacred journey..."
                      rows={6}
                      className="border-amber-200 focus:border-amber-400 focus:ring-amber-200 bg-white/80 backdrop-blur-sm resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <Send className="mr-3 h-5 w-5" />
                    Send Sacred Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-stone-900 mb-8">Our Sacred Promise</h3>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-amber-100 to-orange-100 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300">
                <Heart className="h-8 w-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-stone-900 mb-3">Compassionate Response</h4>
              <p className="text-stone-600 leading-relaxed">
                Every inquiry is met with genuine care and personalized attention to your unique wellness needs.
              </p>
            </div>
            <div className="group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-stone-100 to-amber-100 group-hover:from-stone-200 group-hover:to-amber-200 transition-all duration-300">
                <Leaf className="h-8 w-8 text-stone-600" />
              </div>
              <h4 className="text-xl font-semibold text-stone-900 mb-3">Authentic Guidance</h4>
              <p className="text-stone-600 leading-relaxed">
                Our consultations are rooted in traditional Ayurvedic wisdom and sacred wellness practices.
              </p>
            </div>
            <div className="group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-amber-100 to-stone-100 group-hover:from-amber-200 group-hover:to-stone-200 transition-all duration-300">
                <Star className="h-8 w-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-stone-900 mb-3">Sacred Privacy</h4>
              <p className="text-stone-600 leading-relaxed">
                Your wellness journey and personal information are held with the utmost respect and confidentiality.
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <Card className="overflow-hidden shadow-xl border-amber-100">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-stone-900">Find Our Sacred Sanctuary</CardTitle>
              <p className="text-stone-600">Visit us for in-person consultations and wellness experiences</p>
            </CardHeader>
            <CardContent className="p-0">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789012!2d-74.00000000000001!3d40.71234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ0LjQiTiA3NMKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </AspectRatio>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Reachtous;
