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
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleFormSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   // Reset form
  //   setFormData({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //   });
  // };

  const handleFormSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxABC123/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      alert("Thank you! Our team will contact you shortly.");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      alert("Submission failed. Please try again.");
    }
  } catch (error) {
    console.error("Form error:", error);
    alert("Something went wrong. Please try later.");
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
              {/* <img src="/images/spritlelogo.png" alt="Spritle Logo" />
               */}
               <div className="text-2xl font-bold">
  <img
    src="/images/spritlelogo.png"
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
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
              ManageEngine PAM360   

                <br />
                <span className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                 Unified Privileged Access Management Platform
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed text-left">
                ManageEngine PAM360 is an enterprise-grade Privileged Access Management (PAM) solution that helps organizations secure, manage, monitor, audit privileged accounts across IT infrastructure, cloud, & DevOps environments  from a single centralized platform.

              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-lg">
                  Centralized control over privileged identities and credentials

                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-lg">
                 End-to-end visibility into privileged access and sessions

                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-lg">
                  Zero Trust–ready PAM solution for modern enterprises

                </span>
              </li>
            </ul>

            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold"
            >
              Request Demo
            </Button>
          </div>

          {/* Right Form */}
          <div className="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-lg p-8 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Talk to a PAM Security Expert</h3>
              <p className="text-gray-400">
                Get expert guidance on implementing ManageEngine PAM360 to secure privileged access, reduce insider threats, and meet compliance requirements.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="First name*"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                />
                <Input
                  placeholder="Last name*"
                  name="lastName"
                  value={formData.lastName}
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
                What is ManageEngine PAM360?
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                ManageEngine PAM360 is a unified Privileged Access Management solution that secures privileged credentials, controls access, monitors sessions, and enforces least-privilege across on-premises, cloud, and hybrid environments—reducing risk and providing full visibility into privileged activity.

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
                  <h4 className="text-xl font-semibold">🔐 Privileged Credential Security</h4>
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
                  <h4 className="text-xl font-semibold">👁️ Session Monitoring & Control</h4>
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
                    🛡️ Least-Privilege Access Enforcement
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="features" className="py-20 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Why Choose ManageEngine PAM360?

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-green-500 transition space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <h3 className="text-xl font-semibold">Centralized Privileged Access Control</h3>
              </div>
              <p className="text-gray-400">
                Manage all privileged accounts, credentials, and access policies from a single unified dashboard.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-green-500 transition space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <h3 className="text-xl font-semibold">Enhanced Security & Threat Reduction</h3>
              </div>
              <p className="text-gray-400">
                Eliminate hard-coded passwords, prevent misuse, secure critical systems from internal & external threats.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-green-500 transition space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <h3 className="text-xl font-semibold">Complete Session Visibility</h3>
              </div>
              <p className="text-gray-400">
                 Monitor, record, and audit privileged sessions in real time for full accountability and forensics.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-green-500 transition space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <h3 className="text-xl font-semibold">Least-Privilege Enforcement
</h3>
              </div>
              <p className="text-gray-400">
                Grant just-enough access to users, applications, and systems to minimize attack surfaces.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-green-500 transition space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <h3 className="text-xl font-semibold">
                  Compliance-Ready PAM Solution
                </h3>
              </div>
              <p className="text-gray-400">
                Meet ISO 27001, SOC 2, HIPAA, PCI DSS, and GDPR requirements with detailed audit trails and reports.

              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-green-500 transition space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <h3 className="text-xl font-semibold">
                  Unified PAM Across Environments
                </h3>
              </div>
              <p className="text-gray-400">
                 Secure privileged access across on-premises, cloud, and hybrid IT environments from one console.

              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section id="capabilities" className="py-20 bg-gradient-to-b from-black to-gray-950 border-t border-gray-800">
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
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"> PAM360 </span> – Core Privileged Access Management Capabilities

                </h2>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span className="text-lg">
                    Privileged Account & Credential Vaulting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span className="text-lg">
                    Password Rotation and Policy Enforcement
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span className="text-lg">
                    Privileged Session Monitoring & Recording
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span className="text-lg">
                    Just-in-Time (JIT) Privileged Access
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span className="text-lg">Role-Based Access Control (RBAC)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span className="text-lg">
                    DevOps Secrets Management

                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span className="text-lg">
                    Secure Remote Access to Critical Systems

                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span className="text-lg">Comprehensive Audit Logs & Compliance Reports
</span>
</li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span className="text-lg">Integration with SIEM, IAM, and ITSM tools

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
              Who Should Use ManageEngine PAM360?

            </h2>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-12 space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-green-400 text-2xl font-bold">✓</span>
                <p className="text-lg">
                  IT security teams managing privileged user access

                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-green-400 text-2xl font-bold">✓</span>
                <p className="text-lg">
                  Enterprises with complex or hybrid IT environments

                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-green-400 text-2xl font-bold">✓</span>
                <p className="text-lg">
                  Organizations adopting Zero Trust security models
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-green-400 text-2xl font-bold">✓</span>
                <p className="text-lg">
                 Businesses handling sensitive data and critical infrastructure

                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-green-400 text-2xl font-bold">✓</span>
                <p className="text-lg">
                  Companies preparing for security audits and compliance certifications

                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-green-400 text-2xl font-bold">✓</span>
                <p className="text-lg">
                  DevOps teams needing secure secrets and access control


                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Secure Privileged Access Before It Becomes a Risk

              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Protect your organization from credential misuse, insider threats, and security breaches with ManageEngine PAM360. Get expert guidance to implement a scalable, compliant, and future-ready privileged access management strategy tailored to your business.

              </p>
            </div>

            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold"
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
