import { useRef, useState } from "react";

const socialLinks = [
  { label: "LinkedIn", icon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/navamani-r-49417021a" },
  { label: "GitHub", icon: "fa-brands fa-github", href: "https://github.com/navamani-dev" },
  { label: "Twitter", icon: "fa-brands fa-x-twitter", href: "https://x.com/NavamaniR2?t=i7-BRaKa_rw5zNc_iyrQXg&s=09" },
  { label: "Email", icon: "fa-solid fa-envelope", href: "mailto:navamani.developer@gmail.com" },
];

const contactEndpoint =
  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:5000/send-email"
    : "/send-email";

export default function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value,
        }),
      });

      let data = {};
      try {
        data = await res.json();
      } catch (parseError) {
        data = {};
      }

      if (res.ok && data.success !== false) {
        setStatus("Message sent successfully.");
        e.currentTarget.reset();
      } else {
        setStatus("Message could not be sent. Please try email or LinkedIn.");
      }
    } catch (error) {
      setStatus("Backend is not connected right now. Please use email or LinkedIn.");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
      <div className="panel-grid absolute inset-0 opacity-10"></div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
      <div className="section-shell">
        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
              Contact
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-normal text-white sm:text-4xl lg:text-5xl">
              Looking for a motivated developer who can grow with the team?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I am open to strong web development opportunities, product teams, and roles where ownership, learning speed, and clean implementation matter.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/5 p-4 font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-300/50 hover:bg-white/10">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-emerald-300">
                    <i className={link.icon} aria-hidden="true"></i>
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[8px] border border-white/10 bg-slate-900/80 p-5 text-left shadow-lift backdrop-blur sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-200">Name</span>
                <input ref={nameRef} required type="text" name="name" className="mt-2 w-full rounded-[8px] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/60 focus:ring-4 focus:ring-emerald-300/10" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-200">Email</span>
                <input ref={emailRef} required type="email" name="email" className="mt-2 w-full rounded-[8px] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/60 focus:ring-4 focus:ring-emerald-300/10" placeholder="you@example.com" />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-bold text-slate-200">Message</span>
              <textarea ref={messageRef} required name="message" rows="6" className="mt-2 w-full resize-none rounded-[8px] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/60 focus:ring-4 focus:ring-emerald-300/10" placeholder="Tell me about the opportunity..." />
            </label>

            <button className="primary-button mt-5 w-full" type="submit">
              <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
              Send Message
            </button>
            {status && <p className="mt-4 text-sm font-semibold text-emerald-200">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
