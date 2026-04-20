"use client";

import { useState, useRef } from "react";
import { SectionHeader } from "@ui/SectionHeader";

type FormState = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [focused, setFocused] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const YOUR_EMAIL = "nfcorfmat@gmail.com";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");

    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;

    const body = encodeURIComponent(
      `Name: ${name}\nFrom: ${email}\n\n${message}`,
    );
    const mailtoHref = `mailto:${YOUR_EMAIL}?subject=${encodeURIComponent(
      subject || `Portfolio contact from ${name}`,
    )}&body=${body}`;

    try {
      window.location.href = mailtoHref;
      setTimeout(() => {
        setFormState("sent");
        formRef.current?.reset();
      }, 800);
    } catch {
      setFormState("error");
    }
  }

  const inputBase =
    "w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none transition-all duration-200";
  const inputIdle = "border-white/10 hover:border-white/20";
  const inputFocused =
    "border-white/40 bg-white/8 shadow-[0_0_0_3px_rgba(255,255,255,0.04)]";

  function fieldClass(name: string) {
    return `${inputBase} ${focused === name ? inputFocused : inputIdle}`;
  }

  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center justify-center px-8 pt-10 pb-22"
    >
      <div className="w-full max-w-[1200px] bg-black/20 p-12 rounded-4xl">
        <SectionHeader label="Contact" />

        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="flex flex-col gap-6 md:max-w-[420px] justify-between">
            <div>
              <h2 className="text-[40px] leading-12 text-white font-semibold tracking-tight mb-5">
                Let's Build
                <br />
                Something Together.
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Whether you have a project in mind, a question, or just want to
                connect — my inbox is open. I am more than happy to chat!
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${YOUR_EMAIL}`}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                <i className="fa-regular fa-envelope text-lg" />
                <span className="text-sm font-medium">{YOUR_EMAIL}</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nicolascorfmat/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                <i className="devicon-linkedin-plain text-lg" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="/data/docs/Nicolas_Corfmat_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                <i className="fa-regular fa-file-lines text-lg" />
                <span className="text-sm font-medium">Resume</span>
              </a>
            </div>
          </div>

          <div className="flex-1 max-w-[620px]">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-white/50 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    className={fieldClass("name")}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-white/50 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className={fieldClass("email")}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-white/50 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  name="subject"
                  className={fieldClass("subject")}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-white/50 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className={`${fieldClass("message")} resize-none`}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <button
                type="submit"
                disabled={formState === "sending" || formState === "sent"}
                className="mt-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200
                  bg-white text-black hover:bg-white/90 active:scale-[0.98]
                  disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                {formState === "sending" && (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin text-sm" />
                    <span>Opening mail client…</span>
                  </>
                )}
                {formState === "sent" && (
                  <>
                    <i className="fa-solid fa-check text-sm" />
                    <span>Message ready — check your mail app</span>
                  </>
                )}
                {formState === "error" && (
                  <>
                    <i className="fa-solid fa-triangle-exclamation text-sm" />
                    <span>Something went wrong — try again</span>
                  </>
                )}
                {formState === "idle" && (
                  <>
                    <i className="fa-regular fa-paper-plane text-sm" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {formState === "sent" && (
                <p className="text-center text-xs text-white/40 -mt-1">
                  Your default mail client opened with the message pre-filled.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
