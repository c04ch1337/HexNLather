import React, { useState } from 'react';
import { Phone, Mail, Instagram, MessageSquare, Send, Check, Sparkles, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setContact('');
      setMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#09030c] relative border-t border-[#311027]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Essential Details from Flyer */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#ff80bf] font-semibold mb-2">
                Connect With The Alchemist
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Call, Text or Inquire
              </h2>
              <p className="mt-3 text-sm text-[#caaaba] leading-relaxed">
                Whether you desire a custom wedding favor batch, a personalized gift box for someone special, 
                or guidance on which bar matches your skin, we welcome your message.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              
              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-[#140618] border border-[#ff2a85]/40 flex items-center justify-between gap-4 shadow-[0_0_25px_rgba(255,42,133,0.15)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ff2a85]/20 border border-[#ff2a85] flex items-center justify-center text-[#ff69b4] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#debcd2] font-semibold">
                      Call or Text to Customize
                    </div>
                    <a
                      href="tel:830-865-6697"
                      className="font-cinzel text-xl sm:text-2xl font-bold text-white hover:text-[#ff80bf] transition-colors block tabular-nums"
                    >
                      830-865-6697
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 shrink-0">
                  <a
                    href="tel:830-865-6697"
                    className="px-3 py-1.5 bg-[#1f0924] hover:bg-[#ff2a85] text-white rounded-lg text-[11px] uppercase tracking-wider font-semibold border border-[#ff2a85]/40 transition-colors text-center"
                  >
                    Call
                  </a>
                  <a
                    href="sms:830-865-6697?&body=Hi%20Hex%20%26%20Lather!%20I%20have%20a%20question%20about%20your%20soaps."
                    className="px-3 py-1.5 bg-[#e01a69] hover:bg-[#ff2a85] text-white rounded-lg text-[11px] uppercase tracking-wider font-semibold transition-colors text-center"
                  >
                    Text
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-[#140618] border border-[#3b122f] flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1b071d] border border-[#3b122f] flex items-center justify-center text-[#ff80bf] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#debcd2] font-semibold">
                    Direct Email
                  </div>
                  <a
                    href="mailto:hexnlather33@gmail.com"
                    className="text-sm sm:text-base font-medium text-white hover:text-[#ff80bf] transition-colors break-all"
                  >
                    hexnlather33@gmail.com
                  </a>
                </div>
              </div>

              {/* Socials Card */}
              <div className="p-5 rounded-2xl bg-[#140618] border border-[#3b122f] flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1b071d] border border-[#3b122f] flex items-center justify-center text-[#ff80bf] shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#debcd2] font-semibold">
                      Follow Us On Social
                    </div>
                    <div className="font-cinzel text-base font-bold text-white tracking-wider">
                      @HEXNLATHER
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#cfb6c8]">
                  <span>Facebook</span>
                  <span aria-hidden="true">·</span>
                  <span>Instagram</span>
                  <span aria-hidden="true">·</span>
                  <span>TikTok</span>
                </div>
              </div>

            </div>

            {/* Cursive Tagline Signoff from flyer */}
            <div className="pt-4 text-center sm:text-left">
              <p className="font-script text-3xl sm:text-4xl text-[#ff80bf]">
                Handmade with Intention
              </p>
              <div className="flex items-center gap-3 mt-1 text-[#ff2a85] justify-center sm:justify-start">
                <span>☾</span>
                <span className="text-xs uppercase tracking-widest text-[#a88d9f]">Hex &amp; Lather</span>
                <span>☽</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Inquiry / Order Form */}
          <div className="lg:col-span-7 bg-[#130516] border border-[#3b122f] rounded-2xl p-6 sm:p-8 shadow-[0_0_35px_rgba(0,0,0,0.6)]">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2">
              Send A Direct Message
            </h3>
            <p className="text-xs text-[#b89baa] mb-6">
              Inquire about custom gift sets, local wholesale orders in Texas, or questions regarding ingredients.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-[#1d0922] border border-[#ff2a85] text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-600/30 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-cinzel text-xl font-bold text-white">
                  Message Transmitted
                </h4>
                <p className="text-xs text-[#cfb7c6]">
                  Thank you for reaching out! Hex &amp; Lather will respond within 24 hours. For urgent requests, 
                  please call or text <strong className="text-white">830-865-6697</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#debcd2] font-semibold mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rowena Raven"
                      className="w-full px-4 py-2.5 bg-[#1b081e] border border-[#3b122f] rounded-xl text-white placeholder-[#7e6074] focus:outline-none focus:border-[#ff2a85] text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#debcd2] font-semibold mb-1.5">
                      Phone Number or Email
                    </label>
                    <input
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="e.g. 830-555-0199 or name@domain.com"
                      className="w-full px-4 py-2.5 bg-[#1b081e] border border-[#3b122f] rounded-xl text-white placeholder-[#7e6074] focus:outline-none focus:border-[#ff2a85] text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#debcd2] font-semibold mb-1.5">
                    Your Soap Inquiry or Custom Request
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you are looking for—scents, quantities, or specific skin goals..."
                    className="w-full px-4 py-2.5 bg-[#1b081e] border border-[#3b122f] rounded-xl text-white placeholder-[#7e6074] focus:outline-none focus:border-[#ff2a85] text-xs leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] text-[#9c7e92] text-center sm:text-left">
                    Direct reply via call, text, or email.
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 bg-[#e01a69] hover:bg-[#ff2a85] text-white font-cinzel text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(255,42,133,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
