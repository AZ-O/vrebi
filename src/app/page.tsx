"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CalendarDays,
  CheckCircle2,
  CircleUserRound,
  Clock3,
  Command,
  HeartPulse,
  Lightbulb,
  Mic,
  Sparkles,
  Target,
  WalletCards,
  Zap,
} from "lucide-react";
import Image from "next/image";
const features = [
  {
    icon: Brain,
    title: "Personal memory",
    description:
      "Vrebi remembers your decisions, ideas, preferences, commitments, and important context.",
  },
  {
    icon: CalendarDays,
    title: "Intelligent planning",
    description:
      "Build realistic days around your priorities, schedule, deadlines, and energy.",
  },
  {
    icon: Target,
    title: "Goals that move",
    description:
      "Turn long-term ambitions into milestones, weekly plans, and clear next actions.",
  },
  {
    icon: Mic,
    title: "Capture anything",
    description:
      "Speak, type, upload, or save anything. Vrebi organizes it automatically.",
  },
  {
    icon: CircleUserRound,
    title: "Relationship memory",
    description:
      "Remember conversations, promises, preferences, birthdays, and follow-ups.",
  },
  {
    icon: Lightbulb,
    title: "Better decisions",
    description:
      "Compare options, understand tradeoffs, and make decisions with your full context.",
  },
  {
    icon: WalletCards,
    title: "Money clarity",
    description:
      "Keep track of bills, subscriptions, goals, spending decisions, and financial priorities.",
  },
  {
    icon: HeartPulse,
    title: "Health context",
    description:
      "Connect your routines, sleep, workouts, mood, focus, and energy patterns.",
  },
];

const steps = [
  {
    number: "01",
    title: "Capture",
    description: "Drop in your thoughts, tasks, files, messages, links, and voice notes.",
  },
  {
    number: "02",
    title: "Connect",
    description: "Vrebi links your people, projects, goals, habits, and commitments.",
  },
  {
    number: "03",
    title: "Understand",
    description: "See patterns, priorities, risks, and opportunities across your life.",
  },
  {
    number: "04",
    title: "Act",
    description: "Plan, write, schedule, follow up, and move forward with confidence.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07080c] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10%] top-[-15%] h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute right-[-10%] top-[5%] h-[480px] w-[480px] rounded-full bg-cyan-400/10 blur-[140px]" />
      </div>

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#07080c]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center">
  <Image
    src="/vrebi-logo.png"
    alt="Vrebi"
    width={150}
    height={45}
    priority
  />
</a>

          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a href="#vision" className="transition hover:text-white">
              Vision
            </a>
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#how" className="transition hover:text-white">
              How it works
            </a>
          </div>

          <a
            href="#waitlist"
            className="rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:scale-105"
          >
            Join waitlist
          </a>
        </div>
      </nav>

      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-7 flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-200"
        >
          <Sparkles size={15} />
          Your personal intelligence layer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-5xl text-6xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[110px]"
        >
          Your entire life.
          <span className="block bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent">
            Finally connected.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl"
        >
          Vrebi connects your notes, goals, calendar, tasks, messages,
          relationships, health, money, and decisions into one intelligent
          personal operating system.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#waitlist"
            className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-black transition hover:scale-105"
          >
            Get early access
            <ArrowRight size={18} />
          </a>

          <a
            href="#features"
            className="rounded-full border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Explore the vision
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-20 w-full rounded-[32px] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-violet-950/30 backdrop-blur"
        >
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0d13]">
            <div className="flex h-12 items-center gap-2 border-b border-white/10 px-5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 text-xs text-zinc-500">Vrebi · Today</span>
            </div>

            <div className="grid min-h-[520px] md:grid-cols-[220px_1fr]">
              <aside className="hidden border-r border-white/10 p-5 text-left md:block">
                <SidebarItem icon={Sparkles} text="Today" active />
                <SidebarItem icon={Mic} text="Capture" />
                <SidebarItem icon={Target} text="Goals" />
                <SidebarItem icon={CalendarDays} text="Calendar" />
                <SidebarItem icon={Brain} text="Memory" />
                <SidebarItem icon={Command} text="Ask Vrebi" />
              </aside>

              <div className="p-5 text-left md:p-8">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">Good morning, Alex.</h2>
                    <p className="mt-1 text-sm text-zinc-500">
                      Here is what matters today.
                    </p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-pink-400 font-black text-black">
                    A
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
                  <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-white/[0.03] p-6">
                    <div className="text-xs font-bold uppercase tracking-widest text-violet-300">
                      Vrebi suggests
                    </div>
                    <h3 className="mt-5 max-w-lg text-3xl font-bold leading-tight">
                      Protect two focused hours for the launch plan.
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400">
                      Based on your goals, calendar, and recent notes, this is
                      your highest-leverage move today.
                    </p>
                    <button className="mt-7 rounded-xl border border-violet-300/20 bg-violet-400/10 px-4 py-3 text-sm font-semibold text-violet-200">
                      Block focus time →
                    </button>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                      Today
                    </div>
                    <Agenda time="9:00" text="Deep work" />
                    <Agenda time="2:00" text="Product sync" />
                    <Agenda time="5:30" text="Workout" />
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <MiniCard
                    icon={Mic}
                    title="Voice note"
                    text="Remember the onboarding idea about asking fewer questions."
                  />
                  <MiniCard
                    icon={CheckCircle2}
                    title="Follow-up"
                    text="Jordan replied. You have one decision waiting."
                  />
                  <MiniCard
                    icon={Zap}
                    title="Pattern detected"
                    text="Your strongest focus blocks happen before 11 AM."
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="vision" className="mx-auto max-w-7xl px-6 py-28">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
          The vision
        </p>
        <h2 className="mt-5 max-w-5xl text-5xl font-black leading-tight tracking-[-0.05em] md:text-7xl">
          Not another productivity app.
          <span className="block text-zinc-500">
            A system that understands your life.
          </span>
        </h2>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            What Vrebi could do
          </p>
          <h2 className="mt-5 text-5xl font-black tracking-[-0.05em] md:text-7xl">
            One intelligence layer.
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Your apps hold information. Vrebi turns that information into
            memory, understanding, and action.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group min-h-64 rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                  <Icon size={21} />
                </div>

                <h3 className="mt-10 text-xl font-bold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            How it works
          </p>
          <h2 className="mt-5 text-5xl font-black tracking-[-0.05em] md:text-7xl">
            From chaos to clarity.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-7"
            >
              <span className="text-sm font-black text-cyan-300">
                {step.number}
              </span>
              <h3 className="mt-12 text-2xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-violet-500/15 via-white/[0.04] to-cyan-400/10 px-8 py-20 text-center md:px-16">
          <p className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] md:text-6xl">
            “Vrebi should not help you manage more noise. It should give you a
            quieter, clearer way to live.”
          </p>
        </div>
      </section>

      <section id="waitlist" className="mx-auto max-w-7xl px-6 py-28">
        <div className="rounded-[40px] border border-white/10 bg-white/[0.04] px-6 py-24 text-center md:px-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400 to-cyan-300 text-black">
            <Sparkles />
          </div>

          <h2 className="mt-8 text-5xl font-black tracking-[-0.05em] md:text-7xl">
            Your life deserves
            <span className="block text-zinc-500">better software.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Join the early-access list and help shape the AI operating system
            built around your life.
          </p>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="mx-auto mt-10 flex max-w-xl flex-col gap-3 rounded-2xl border border-white/10 bg-black/30 p-2 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="min-h-14 flex-1 bg-transparent px-4 text-white outline-none placeholder:text-zinc-600"
            />
            <button
              type="submit"
              className="min-h-14 rounded-xl bg-white px-6 font-bold text-black transition hover:scale-[1.02]"
            >
              Join the waitlist
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-10 text-sm text-zinc-500 sm:flex-row">
          <p>© 2026 Vrebi. All rights reserved.</p>
          <p>Your personal intelligence layer.</p>
        </div>
      </footer>
    </main>
  );
}

function SidebarItem({
  icon: Icon,
  text,
  active = false,
}: {
  icon: React.ElementType;
  text: string;
  active?: boolean;
}) {
  return (
    <div
      className={`mb-2 flex items-center gap-3 rounded-xl px-3 py-3 text-sm ${
        active
          ? "border border-violet-400/20 bg-violet-400/10 text-white"
          : "text-zinc-500"
      }`}
    >
      <Icon size={17} />
      {text}
    </div>
  );
}

function Agenda({ time, text }: { time: string; text: string }) {
  return (
    <div className="flex items-center gap-4 border-b border-white/10 py-5 text-sm">
      <Clock3 size={16} className="text-zinc-600" />
      <span className="text-zinc-500">{time}</span>
      <span>{text}</span>
    </div>
  );
}

function MiniCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
      <div className="flex items-center gap-2 text-sm font-bold">
        <Icon size={16} />
        {title}
      </div>
      <p className="mt-3 text-xs leading-5 text-zinc-500">{text}</p>
    </div>
  );
}