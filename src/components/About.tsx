import Image from 'next/image';
import profile_picture from '@data/images/profile.jpg';
import { SectionHeader } from '@ui/SectionHeader';
import { CONTACT_LINKS } from '@lib/constants';

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-[600px] w-full flex-col items-center justify-center px-8 pt-10 pb-16"
    >
      <div className="w-full max-w-[1200px]">
        <SectionHeader label="About Me" />

        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Text block */}
          <div className="flex w-full flex-col gap-8 md:w-auto">
            <div>
              <h2 className="mb-5 text-[32px] leading-tight font-semibold tracking-tight text-white md:text-[48px] md:leading-[60px]">
                Software Engineer,
                <br />
                Game Dev Background.
              </h2>
              <p className="max-w-[600px] text-base leading-relaxed text-white/80 md:text-lg">
                Great software lives at the intersection of logic and
                creativity. As a Computer Science Game Design graduate from the
                University of California, Santa Cruz, I approach software with
                technical rigor and a creative mindset. I've built everything
                from full-stack applications to shipped games through
                collaborative, cross-disciplinary teams, with a strong emphasis
                on quality and long-term maintainability.
              </p>
            </div>
          </div>

          {/* Image + links block */}
          <div className="flex w-full flex-row items-center gap-6 md:w-auto md:items-center md:gap-8">
            <Image
              className="h-[260px] w-[220px] shrink-0 rounded-2xl object-cover md:h-[360px] md:w-[300px]"
              src={profile_picture}
              alt="profile picture"
            />

            <div className="flex w-full flex-col flex-wrap justify-center gap-3 md:w-auto md:max-w-[200px] md:flex-nowrap md:justify-start">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith('http') || link.href.endsWith('.pdf')
                      ? '_blank'
                      : undefined
                  }
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex max-w-[150px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base font-medium text-white/80 transition-all duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white md:w-full md:text-lg"
                >
                  <i className={`${link.icon} text-base md:text-lg`} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
