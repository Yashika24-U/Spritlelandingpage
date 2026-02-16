import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Professional Enterprise ITSM Landing Page
 * - Dark theme with high contrast white text for readability
 * - Modern, clean typography with clear hierarchy
 * - Strategic use of white space and visual separation
 * - Accent colors: Green/Blue (from Spritle logo)
 * - Focus on trust, expertise, and enterprise-grade solutions
 */

export default function Home() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleFormSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   // Reset form
  //   setFormData({
  //     firstname: "",
  //     lastname: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //   });
  // };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log("formData", formData);

      await fetch(
        "https://script.google.com/macros/s/AKfycbxlUuHGM55_6bh5V8m7Kwhmh4MWkbszSzFGq_gtJTSNVrlVFnRKNscgchXF0oUVWQ0N/exec",
        {
          method: "POST",
          mode: "no-cors", // avoids CORS preflight
          headers: { "Content-Type": "text/plain" }, // prevents OPTIONS preflight
          body: JSON.stringify(formData),
        }
      );

      // Opaque response — we assume success
      alert("Thank you! Our team will contact you shortly.");

      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 z-50 bg-black/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              {/* <span className="text-green-400">SPRITLE</span> */}
              {/* <img src="client\public\images\spritlelogo.png"/> */}
              {/* <img src={`${import.meta.env.BASE_URL}images/spritlelogo.png`} alt="Spritle Logo" />
               */}
               <div className="text-2xl font-bold">
  <img
    src={`${import.meta.env.BASE_URL}images/spritlelogo.png`}
    alt="Spritle Logo"
    className="h-10 w-auto"
  />
</div>


            </div>
          </div>
          {/* <nav className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-green-400 transition">
              Features
            </a>
            <a href="#capabilities" className="hover:text-green-400 transition">
              Capabilities
            </a>
            <a href="#contact" className="hover:text-green-400 transition">
              Contact
            </a>
          </nav> */}
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        id="contactform"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/images/hero-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-1" />

        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl  lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                ManageEngine Site24x7
                <br />
                <span className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Monitor Your Digital Presence Anytime
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                ManageEngine Site24x7 helps organizations track website, server,
                application, and cloud performance in real time, ensuring
                seamless user experiences and business continuity.
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-lg">
                  Monitor websites, servers, and applications 24/7
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-lg">
                  Gain instant insights into performance and downtime
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-lg">
                  Keep users happy with reliable digital services
                </span>
              </li>
            </ul>

            {/* <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold"
            >
              Request Demo
            </Button> */}
          </div>

          {/* Right Form */}
          <div className="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-lg p-8 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Talk to a Digital Monitoring Expert
              </h3>
              <p className="text-gray-400">
                Get expert guidance on implementing Site24x7 to monitor your IT
                infrastructure, detect performance bottlenecks, and ensure
                uninterrupted digital services.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="First name*"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleFormChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                />
                <Input
                  placeholder="Last name*"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleFormChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                />
              </div>

              <Input
                type="email"
                placeholder="Email*"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />

              <Input
                type="tel"
                placeholder="Phone*"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />

              <Textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 min-h-24"
              />

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200 font-semibold"
                onClick={() => {
                  document
                    .getElementById("contactform")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Send
              </Button>

              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. No spam.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* What is ManageEngine Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                What is ManageEngine Site24x7?
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                ManageEngine Site24x7 is a cloud-based monitoring tool that
                helps IT teams track website, server, application, and cloud
                performance from one platform, ensuring high uptime and smooth
                digital experiences.
              </p>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-12">
                Three key feature Pillars:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Pillar 1 */}
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold">Unified Monitoring</h4>
                </div>

                {/* Pillar 2 */}
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold">
                    Performance & Uptime Assurance
                  </h4>
                </div>

                {/* Pillar 3 */}
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold">
                    Optimized Digital Experience
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section
        id="features"
        className="py-20 bg-black border-t border-gray-800"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Why Choose ManageEngine Site24x7?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-green-500 transition space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <h3 className="text-xl font-semibold">
                  Complete Digital Monitoring
                </h3>
              </div>
              <p className="text-gray-400">
                Track websites, applications, servers, and cloud resources from
                one console.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-green-500 transition space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <h3 className="text-xl font-semibold">
                  Faster Issue Detection
                </h3>
              </div>
              <p className="text-gray-400">
                Identify performance bottlenecks and downtime before they impact
                users.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-green-500 transition space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <h3 className="text-xl font-semibold">
                  {" "}
                  Enhanced User Experiencey
                </h3>
              </div>
              <p className="text-gray-400">
                Optimize application and website performance to keep users
                satisfied.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-green-500 transition space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <h3 className="text-xl font-semibold">
                  {" "}
                  Simplified IT Operations
                </h3>
              </div>
              <p className="text-gray-400">
                Centralized dashboards and automated reports reduce manual
                monitoring efforts.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-green-500 transition space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <h3 className="text-xl font-semibold">
                  Real-Time Alerts & Insights
                </h3>
              </div>
              <p className="text-gray-400">
                Get instant notifications and actionable insights to respond to
                issues quickly.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-green-500 transition space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <h3 className="text-xl font-semibold">
                  Scalable & Cloud-Ready
                </h3>
              </div>
              <p className="text-gray-400">
                Easily scale monitoring as your infrastructure grows across
                cloud and hybrid environments.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold"
              onClick={() => {
                document
                  .getElementById("contactform")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section
        id="capabilities"
        className="py-20 bg-gradient-to-b from-black to-gray-950 border-t border-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <div
                className="rounded-lg overflow-hidden"
                style={{
                  backgroundImage: "url(/images/buiding.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "500px",
                }}
              />
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Site24x7 – Core Monitoring Capabilities
                </h2>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span className="text-lg">Website and Server Monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span className="text-lg">
                    Application Performance Monitoring (APM)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span className="text-lg">
                    Cloud Infrastructure Monitoring
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span className="text-lg">
                    Real-Time Alerts & Notifications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span className="text-lg">SLA Tracking & Custom Reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span className="text-lg">
                    Network Performance Monitoring
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span className="text-lg">
                    Synthetic Transaction Monitoring
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span className="text-lg">
                    End-User Experience Monitoring
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Use Section */}
      <section className="py-20 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
              Who Should Use ManageEngine Site24x7?
            </h2>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-12 space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-green-400 text-2xl font-bold">✓</span>
                <p className="text-lg">
                  IT admins managing websites, servers, and applications
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-green-400 text-2xl font-bold">✓</span>
                <p className="text-lg">
                  Enterprises monitoring cloud and hybrid IT infrastructure
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-green-400 text-2xl font-bold">✓</span>
                <p className="text-lg">
                  Organizations focused on improving user experience
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-green-400 text-2xl font-bold">✓</span>
                <p className="text-lg">
                  Businesses aiming to reduce downtime and performance issues
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-green-400 text-2xl font-bold">✓</span>
                <p className="text-lg">
                  Companies seeking centralized digital performance monitoring
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-black to-gray-950 border-t border-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ensure Your Digital Services Never Miss a Beat
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Monitor websites, applications, and cloud resources effectively
                with ManageEngine Site24x7. Get expert guidance to implement a
                scalable, reliable, and efficient digital monitoring strategy
                tailored to your organization.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold"
              onClick={() => {
                document
                  .getElementById("contactform")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Talk to an ITSM Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-500">
              © 2024 Spritle Software. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-green-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-green-400 transition">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-green-400 transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
