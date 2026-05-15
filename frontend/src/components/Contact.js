import { useRef, useState } from "react";

const socialLinks = [
  { label: "LinkedIn", icon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/nava-mani-49417021a" },
  { label: "GitHub", icon: "fa-brands fa-github", href: "https://github.com/navamani-dev" },
  { label: "Twitter", icon: "fa-brands fa-x-twitter", href: "https://x.com/NavamaniR2?t=i7-BRaKa_rw5zNc_iyrQXg&s=09" },
  { label: "Email", icon: "fa-solid fa-envelope", href: "mailto:navamani.developer@gmail.com" },
];

export default function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value,
        }),
      });

      const data = await res.json();
      if (data.success) {
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
    <section id="contact" className="bg-ink py-20 text-white sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
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
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/5 p-4 font-bold text-white transition hover:-translate-y-0.5 hover:border-emerald-300/50 hover:bg-white/10">
                  <i className={`${link.icon} text-emerald-300`} aria-hidden="true"></i>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[8px] border border-white/10 bg-white p-5 text-left shadow-lift sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Name</span>
                <input ref={nameRef} required type="text" name="name" className="mt-2 w-full rounded-[8px] border border-slate-200 px-4 py-3 text-ink outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Email</span>
                <input ref={emailRef} required type="email" name="email" className="mt-2 w-full rounded-[8px] border border-slate-200 px-4 py-3 text-ink outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" placeholder="you@example.com" />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-bold text-slate-700">Message</span>
              <textarea ref={messageRef} required name="message" rows="6" className="mt-2 w-full resize-none rounded-[8px] border border-slate-200 px-4 py-3 text-ink outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" placeholder="Tell me about the opportunity..." />
            </label>

            <button className="primary-button mt-5 w-full" type="submit">
              <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
              Send Message
            </button>
            {status && <p className="mt-4 text-sm font-semibold text-slate-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
