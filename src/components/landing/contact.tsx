"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Clock, Loader2, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { contactSchema, SERVICE_OPTIONS, type ContactInput } from "@/lib/contact-schema";
import { FadeIn } from "./fade-in";

const NEXT_STEPS = [
  "I reply within one business day",
  "We hop on a free 30-minute call",
  "You get a flat-rate quote — no pressure",
];

export function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", business: "", service: "", message: "" },
  });

  const serviceValue = watch("service");

  async function onSubmit(values: ContactInput) {
    setSubmitting(true);
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_URL;
      if (!endpoint) throw new Error("Contact form is not configured.");
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          businessName: values.business,
          service: values.service,
          message: values.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          (data as Record<string, string>)?.error || "Something went wrong. Please try again."
        );
      }

      toast({
        title: "Message sent! ✉️",
        description:
          "Thanks for reaching out — I'll reply within one business day. Talk soon!",
      });
      reset();
    } catch (error) {
      toast({
        title: "Hmm, that didn't go through.",
        description:
          error instanceof Error
            ? error.message
            : "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-white pb-20 pt-4 lg:pb-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="overflow-hidden rounded-[36px] bg-ink-950 shadow-[0_30px_80px_rgba(17,26,46,0.35)]">
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:p-14">
              {/* Left: pitch */}
              <div className="flex flex-col text-white">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] text-brand-200">
                  LET&apos;S CONNECT
                </span>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-[40px] sm:leading-[1.12]">
                  Let&apos;s talk about{" "}
                  <span className="text-brand-400">your books</span>.
                </h2>
                <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-white/70">
                  Tell me a little about your business and what&apos;s on your
                  plate right now. Whether your books are a mess, a mystery, or
                  just mundane — there&apos;s a friendly fix for that.
                </p>

                <ul className="mt-8 flex flex-col gap-4">
                  <li className="flex items-center gap-3.5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 text-brand-300">
                      <Mail className="size-5" aria-hidden="true" />
                    </span>
                    <a
                      href="mailto:nwnotjustbookkeeping23@gmail.com"
                      className="text-[15px] font-semibold text-white/90 transition-colors hover:text-brand-300"
                    >
                      nwnotjustbookkeeping23@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 text-brand-300">
                      <Clock className="size-5" aria-hidden="true" />
                    </span>
                    <span className="text-[15px] font-semibold text-white/90">
                      Mon–Fri · 9am–5pm PT
                    </span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 text-brand-300">
                      <MapPin className="size-5" aria-hidden="true" />
                    </span>
                    <span className="text-[15px] font-semibold text-white/90">
                      100% remote · serving all 50 states
                    </span>
                  </li>
                </ul>

                <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-[11px] font-bold tracking-[0.18em] text-brand-300">
                    WHAT HAPPENS NEXT
                  </p>
                  <ol className="mt-4 flex flex-col gap-3">
                    {NEXT_STEPS.map((step, i) => (
                      <li
                        key={step}
                        className="flex items-center gap-3 text-[14px] font-medium text-white/80"
                      >
                        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-500 text-[11px] font-extrabold text-white">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Right: form */}
              <div className="rounded-3xl bg-white p-6 text-ink-900 sm:p-8">
                <h3 className="text-xl font-extrabold tracking-tight">
                  Send me a message
                </h3>
                <p className="mt-1 text-sm text-ink-500">
                  All fields except business name are required.
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-6 flex flex-col gap-5"
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name" className="text-[13px] font-bold text-ink-700">
                        Your name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Jamie Rivera"
                        aria-invalid={!!errors.name}
                        className="rounded-xl border-input bg-white px-4 py-2.5"
                        {...register("name")}
                      />
                      {errors.name ? (
                        <p className="text-xs font-medium text-destructive">
                          {errors.name.message}
                        </p>
                      ) : null}
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="text-[13px] font-bold text-ink-700">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jamie@yourbusiness.com"
                        aria-invalid={!!errors.email}
                        className="rounded-xl border-input bg-white px-4 py-2.5"
                        {...register("email")}
                      />
                      {errors.email ? (
                        <p className="text-xs font-medium text-destructive">
                          {errors.email.message}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="business"
                        className="text-[13px] font-bold text-ink-700"
                      >
                        Business name{" "}
                        <span className="font-medium text-ink-400">(optional)</span>
                      </Label>
                      <Input
                        id="business"
                        placeholder="Rivera Coffee Co."
                        className="rounded-xl border-input bg-white px-4 py-2.5"
                        {...register("business")}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label className="text-[13px] font-bold text-ink-700">
                        I&apos;m interested in
                      </Label>
                      <Select
                        value={serviceValue}
                        onValueChange={(v) => setValue("service", v)}
                      >
                        <SelectTrigger className="w-full rounded-xl px-4 py-2.5 text-[14px]">
                          <SelectValue placeholder="Select a service (optional)" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICE_OPTIONS.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message" className="text-[13px] font-bold text-ink-700">
                      What&apos;s going on with your books?
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="A few sentences is plenty — e.g. 'I'm about 8 months behind and tax season is coming…'"
                      rows={5}
                      aria-invalid={!!errors.message}
                      className="resize-none rounded-xl border-input bg-white px-4 py-3"
                      {...register("message")}
                    />
                    {errors.message ? (
                      <p className="text-xs font-medium text-destructive">
                        {errors.message.message}
                      </p>
                    ) : null}
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="mt-1 w-full rounded-full bg-brand-500 py-3.5 text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(43,127,255,0.35)] transition-all hover:bg-brand-600 disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="size-4" aria-hidden="true" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs leading-relaxed text-ink-400">
                    No spam, no newsletters, no sharing your info — just a
                    friendly reply from a real human.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom assurance strip */}
        <FadeIn delay={0.1}>
          <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-6">
            <p className="text-[15px] font-bold text-ink-900">
              Prefer to skip the form?
            </p>
            <a
              href="mailto:nwnotjustbookkeeping23@gmail.com"
              className="group inline-flex items-center gap-2 text-[15px] font-bold text-brand-600 transition-colors hover:text-brand-700"
            >
              Email me directly
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
