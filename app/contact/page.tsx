import PageHeader from "@/components/shared/PageHeader";
import NavMenu from "@/components/shared/NavMenu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavMenu />
      <PageHeader 
        title="Get in Touch" 
        subtitle="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        badge="Contact Us"
      />

      <section className="py-20">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  {/* Contact Form */}
                  <div className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 backdrop-blur-sm">
                      <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                      <form className="space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                  <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                                  <Input id="firstName" placeholder="John" className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-600" />
                              </div>
                              <div className="space-y-2">
                                  <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                                  <Input id="lastName" placeholder="Doe" className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-600" />
                              </div>
                          </div>
                          <div className="space-y-2">
                              <Label htmlFor="email" className="text-gray-300">Email</Label>
                              <Input id="email" type="email" placeholder="john@example.com" className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-600" />
                          </div>
                          <div className="space-y-2">
                              <Label htmlFor="message" className="text-gray-300">Message</Label>
                              <Textarea id="message" placeholder="How can we help you?" className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-600 min-h-[150px]" />
                          </div>
                          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white">Send Message</Button>
                      </form>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-8 lg:pt-12">
                      <div>
                          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                          <p className="text-gray-400 mb-8">
                              Fill out the form or reach us directly via email or visit our headquarters.
                          </p>
                          
                          <div className="space-y-6">
                              <div className="flex items-start gap-4">
                                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                      <EnvelopeIcon className="w-6 h-6 text-blue-400" />
                                  </div>
                                  <div>
                                      <h4 className="font-bold text-white">Email</h4>
                                      <p className="text-gray-400">support@ai-mazing.com</p>
                                      <p className="text-gray-400">partnerships@ai-mazing.com</p>
                                  </div>
                              </div>
                              
                              <div className="flex items-start gap-4">
                                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                      <MapPinIcon className="w-6 h-6 text-purple-400" />
                                  </div>
                                  <div>
                                      <h4 className="font-bold text-white">Headquarters</h4>
                                      <p className="text-gray-400">
                                          123 Innovation Drive<br/>
                                          Tech City, TC 90210
                                      </p>
                                  </div>
                              </div>
                          </div>

                          <div className="mt-12 pt-12 border-t border-gray-800">
                              <h3 className="text-xl font-bold mb-4">Support Hours</h3>
                              <div className="space-y-2 text-gray-400">
                                  <div className="flex justify-between">
                                      <span>Monday - Friday</span>
                                      <span className="text-white">9:00 AM - 6:00 PM EST</span>
                                  </div>
                                  <div className="flex justify-between">
                                      <span>Saturday</span>
                                      <span className="text-white">10:00 AM - 4:00 PM EST</span>
                                  </div>
                                  <div className="flex justify-between">
                                      <span>Sunday</span>
                                      <span className="text-white">Closed</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Support FAQ */}
      <section className="py-20 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-center mb-12">Common Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="font-bold text-white mb-2">What is your typical response time?</h3>
              <p className="text-gray-400 text-sm">We aim to respond to all inquiries within 24 hours during business days. Priority support is available for Enterprise plans.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="font-bold text-white mb-2">Do you offer phone support?</h3>
              <p className="text-gray-400 text-sm">Currently, we offer support primarily via email and our in-app chat to ensure we can provide detailed technical assistance.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="font-bold text-white mb-2">Where can I find the documentation?</h3>
              <p className="text-gray-400 text-sm">You can visit our <a href="#" className="text-blue-400 hover:underline">Help Center</a> for comprehensive guides, tutorials, and API references.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
