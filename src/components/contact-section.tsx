import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const CONTACT = {
  email: "hello@akwebdesign.com",
  whatsappNumber: "+92 300 0000000",
  whatsappLink: "https://wa.me/923000000000",
  location: "Available worldwide — remote projects",
};

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Website enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Let's build your website</h2>
          <p className="mt-4 text-muted-foreground">
            Tell me about your business and the kind of website you need. I'll reply with a clear
            plan, timeline and price.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal flex flex-col gap-4">
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="surface-card flex items-center gap-4 p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-royal)] text-primary-foreground">
                <MessageCircle className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">Chat on WhatsApp</span>
                <span className="block truncate text-sm text-muted-foreground">
                  {CONTACT.whatsappNumber}
                </span>
              </span>
            </a>

            <a href={`mailto:${CONTACT.email}`} className="surface-card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-ink-foreground">
                <Mail className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">Email</span>
                <span className="block truncate text-sm text-muted-foreground">
                  {CONTACT.email}
                </span>
              </span>
            </a>

            <div className="surface-card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                <MapPin className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">Working remotely</span>
                <span className="block text-sm text-muted-foreground">{CONTACT.location}</span>
              </span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="reveal rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@email.com" />
              </div>
            </div>
            <div className="mt-5 grid gap-2">
              <Label htmlFor="message">Project details</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What kind of website do you need?"
              />
            </div>
            <Button type="submit" variant="royal" size="lg" className="mt-6 w-full sm:w-auto">
              Send message
            </Button>
            {sent && (
              <p className="mt-4 flex items-center gap-2 text-sm text-primary">
                <CheckCircle2 className="size-4" /> Your email app should now open with the message
                ready to send.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
