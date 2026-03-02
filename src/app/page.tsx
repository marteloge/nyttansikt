import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nyansikt — Vi bygger nettsiden din FØR vi tar kontakt",
};

const demos = [
  {
    slug: "ingemann",
    emoji: "🏗️",
    bg: "#1C2B3A",
    type: "Bygg & konstruksjon",
    name: "Ingemann AS",
    desc: "Suldal, Rogaland — lokal byggmester uten nettside. Vi bygget én på under en dag.",
  },
  {
    slug: "perleraden",
    emoji: "🦷",
    bg: "#F0EAF8",
    type: "Tannlege",
    name: "Perleraden Tannlegesenter",
    desc: "Jørpeland — 20 år i drift, 10 ansatte, ingen nettside. Nå har de én.",
  },
  {
    slug: "69graderror",
    emoji: "🔧",
    bg: "#EBF4FF",
    type: "VVS / Rørlegger",
    name: "69 Grader Rør AS",
    desc: "Olderdalen, Troms — genialt navn, 8 fagfolk, og nå en nettside som gjør dem synlige.",
  },
  {
    slug: "blomsterpian",
    emoji: "🌸",
    bg: "#FFF0F5",
    type: "Blomsterbutikk",
    name: "Blomsterpian",
    desc: "Norsk blomsterbutikk med potensial — vi viser hva en moderne nettside kan gjøre.",
  },
];

const steps = [
  { num: "01", title: "Vi finner deg", desc: "Vi leter etter norske bedrifter som fortjener en bedre nettside — eller ingen har i det hele tatt." },
  { num: "02", title: "Vi bygger demoen", desc: "En ekte, fungerende nettside med ditt firmanavn, din bransje og dine farger. Klar til å se." },
  { num: "03", title: "Du bestemmer", desc: "Vi sender deg lenken. Liker du det du ser, setter vi den live. Liker du det ikke, koster det ingenting." },
  { num: "04", title: "Vi setter live", desc: "Domene, hosting, epost — alt inkludert. Du trenger ikke gjøre noe teknisk." },
];

const reasons = [
  { emoji: "👀", title: "Se før du bestemmer", desc: "Du ser ferdig resultat før du sier ja til noe som helst. Ingen løfter, ingen kontrakt." },
  { emoji: "🇳🇴", title: "Norsk, fra bunnen av", desc: "Vi skriver på norsk, kjenner norske bransjer og leverer til norske bedrifter. Ingen utenlandsk mal." },
  { emoji: "⚡", title: "Raskt", desc: "Demo klar på 1–3 dager. Full nettside live på 1–2 uker." },
  { emoji: "🔒", title: "Alt inkludert", desc: "Domene, hosting, sikkerhet og opplæring. Én pris, ingen overraskelser." },
];

export default function HomePage() {
  return (
    <>
      {/* NAV */}
      <nav style={{ background: "white", borderBottom: "1px solid var(--border)" }}
        className="sticky top-0 z-50 px-6 md:px-12 flex items-center justify-between h-16">
        <span style={{ fontFamily: "var(--font-fraunces)", color: "var(--navy)", fontSize: "1.4rem", fontWeight: 700 }}>
          Ny<span style={{ color: "var(--amber)" }}>ansikt</span>
        </span>
        <a href="mailto:hei@nyansikt.no"
          style={{ background: "var(--navy)", color: "white" }}
          className="rounded-full px-5 py-2 text-sm font-semibold hover:opacity-85 transition-opacity">
          Ta kontakt
        </a>
      </nav>

      {/* HERO */}
      <section style={{ background: "var(--navy)", color: "white" }}
        className="px-6 md:px-12 py-20 md:py-28 text-center">
        <div style={{ background: "rgba(201,137,62,0.2)", color: "var(--amber2)" }}
          className="inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-6">
          Nettside for norske bedrifter
        </div>
        <h1 style={{ fontFamily: "var(--font-fraunces)" }}
          className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto mb-6">
          Vi bygger demoen din —{" "}
          <em style={{ color: "var(--amber2)" }}>før vi tar kontakt</em>
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.75)" }}>
          Vi finner bedrifter uten nettside, bygger en ferdig demo, og sender den rett til deg.
          Du betaler ingenting for å se resultatet. Sier du ja, setter vi den live.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="mailto:hei@nyansikt.no?subject=Jeg vil ha en demo"
            style={{ background: "var(--amber)", color: "white" }}
            className="rounded-full px-8 py-3.5 font-bold text-base hover:opacity-90 transition-opacity">
            Jeg vil ha en demo
          </a>
          <a href="#eksempler"
            className="rounded-full px-8 py-3.5 font-semibold text-base border-2 transition-colors"
            style={{ borderColor: "rgba(255,255,255,0.35)", color: "white" }}>
            Se eksempler ↓
          </a>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 md:px-12 py-20">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--amber)" }}>
          Slik fungerer det
        </p>
        <h2 style={{ fontFamily: "var(--font-fraunces)", color: "var(--navy)" }}
          className="text-3xl md:text-4xl font-bold max-w-lg mb-4">
          Ingen salgssamtale. Ingen forpliktelse.
        </h2>
        <p className="text-base mb-12 max-w-md" style={{ color: "var(--muted)" }}>
          Vi gjør jobben på forhånd. Du bestemmer om du vil ha den.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
          {steps.map((s) => (
            <div key={s.num} className="rounded-2xl p-7 border"
              style={{ background: "var(--sand)", borderColor: "var(--border)" }}>
              <div style={{ fontFamily: "var(--font-fraunces)", color: "var(--amber)", fontSize: "2.5rem", fontWeight: 700, lineHeight: 1 }}
                className="mb-4">{s.num}</div>
              <h3 className="font-semibold mb-2" style={{ color: "var(--navy)" }}>{s.title}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEMOS */}
      <section id="eksempler" style={{ background: "var(--sand)" }} className="px-6 md:px-12 py-20">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--amber)" }}>
          Eksempler
        </p>
        <h2 style={{ fontFamily: "var(--font-fraunces)", color: "var(--navy)" }}
          className="text-3xl md:text-4xl font-bold max-w-lg mb-4">
          Nettsider vi har bygget — på forhånd
        </h2>
        <p className="text-base mb-10 max-w-md" style={{ color: "var(--muted)" }}>
          Disse bedriftene hadde ingen nettside. Vi bygget én til dem. Slik ser det ut.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl">
          {demos.map((d) => (
            <a key={d.slug} href={`/demos/${d.slug}/`}
              className="block rounded-2xl border overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ background: "white", borderColor: "var(--border)", textDecoration: "none", color: "inherit" }}>
              <div className="h-36 flex items-center justify-center text-5xl"
                style={{ background: d.bg }}>{d.emoji}</div>
              <div className="p-5">
                <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "var(--muted)" }}>
                  {d.type}
                </p>
                <h3 className="font-bold mb-1.5" style={{ color: "var(--navy)" }}>{d.name}</h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>{d.desc}</p>
                <p className="text-sm font-semibold mt-3" style={{ color: "var(--amber)" }}>Se demo →</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="priser" className="px-6 md:px-12 py-20">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--amber)" }}>
          Priser
        </p>
        <h2 style={{ fontFamily: "var(--font-fraunces)", color: "var(--navy)" }}
          className="text-3xl md:text-4xl font-bold max-w-lg mb-4">
          Enkelt og forutsigbart
        </h2>
        <p className="text-base mb-12 max-w-md" style={{ color: "var(--muted)" }}>
          Ingen skjulte kostnader. Du betaler ingenting før du er fornøyd.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl">
          {/* Landingsside */}
          <div className="rounded-2xl p-8 border-2" style={{ borderColor: "var(--border)" }}>
            <h3 className="font-semibold mb-2" style={{ color: "var(--navy)" }}>Landingsside</h3>
            <p style={{ fontFamily: "var(--font-fraunces)", fontSize: "2.2rem", fontWeight: 700, color: "var(--navy)" }}>
              12 000 kr
            </p>
            <p className="text-xs mb-6" style={{ color: "var(--muted)" }}>Engangsbeløp</p>
            <ul className="space-y-2">
              {["Én-siders nettside", "Mobiloptimalisert", "Kontaktskjema", "Domene & hosting 1 år", "Ingen binding"].map(f => (
                <li key={f} className="text-sm flex gap-2" style={{ color: "var(--muted)", borderTop: "1px solid var(--border)", paddingTop: "0.5rem" }}>
                  <span style={{ color: "var(--amber)" }}>✓</span> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Featured: Bedriftsnettside */}
          <div className="rounded-2xl p-8 border-2" style={{ background: "var(--navy)", borderColor: "var(--navy)" }}>
            <h3 className="font-semibold mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>Bedriftsnettside</h3>
            <p style={{ fontFamily: "var(--font-fraunces)", fontSize: "2.2rem", fontWeight: 700, color: "var(--amber2)" }}>
              25 000 kr
            </p>
            <p className="text-xs mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>Engangsbeløp — mest populær</p>
            <ul className="space-y-2">
              {["5–8 sider", "Galleri / portfolio", "Om oss, tjenester, kontakt", "Google-optimalisert (SEO)", "Domene & hosting 1 år", "Opplæring inkludert"].map(f => (
                <li key={f} className="text-sm flex gap-2" style={{ color: "rgba(255,255,255,0.75)", borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "0.5rem" }}>
                  <span style={{ color: "var(--amber2)" }}>✓</span> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Vedlikehold */}
          <div className="rounded-2xl p-8 border-2" style={{ borderColor: "var(--border)" }}>
            <h3 className="font-semibold mb-2" style={{ color: "var(--navy)" }}>Vedlikehold</h3>
            <p style={{ fontFamily: "var(--font-fraunces)", fontSize: "2.2rem", fontWeight: 700, color: "var(--navy)" }}>
              2 500 kr
            </p>
            <p className="text-xs mb-6" style={{ color: "var(--muted)" }}>Per måned</p>
            <ul className="space-y-2">
              {["Oppdateringer & endringer", "Teknisk support", "Hosting inkludert", "SEO-rapporter", "Avbestill når som helst"].map(f => (
                <li key={f} className="text-sm flex gap-2" style={{ color: "var(--muted)", borderTop: "1px solid var(--border)", paddingTop: "0.5rem" }}>
                  <span style={{ color: "var(--amber)" }}>✓</span> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section style={{ background: "var(--sand)" }} className="px-6 md:px-12 py-20">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--amber)" }}>
          Hvorfor Nyansikt
        </p>
        <h2 style={{ fontFamily: "var(--font-fraunces)", color: "var(--navy)" }}
          className="text-3xl md:text-4xl font-bold max-w-lg mb-12">
          Ingen risiko for deg
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl p-7 border" style={{ background: "white", borderColor: "var(--border)" }}>
              <div className="text-3xl mb-4">{r.emoji}</div>
              <h3 className="font-semibold mb-2" style={{ color: "var(--navy)" }}>{r.title}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--navy)", color: "white" }}
        className="px-6 md:px-12 py-24 text-center">
        <h2 style={{ fontFamily: "var(--font-fraunces)" }}
          className="text-3xl md:text-5xl font-bold max-w-xl mx-auto mb-5">
          Er du en av dem vi leter etter?
        </h2>
        <p className="max-w-md mx-auto mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
          Send oss en epost. Vi sjekker om vi allerede har bygget en demo til deg — eller setter i gang umiddelbart.
        </p>
        <a href="mailto:hei@nyansikt.no?subject=Nyansikt - jeg vil vite mer"
          style={{ background: "var(--amber)", color: "white" }}
          className="inline-block rounded-full px-10 py-4 font-bold text-base hover:opacity-90 transition-opacity">
          Send oss en epost →
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--navy2)", color: "rgba(255,255,255,0.5)" }}
        className="px-6 py-8 text-center text-sm">
        © 2026 Nyansikt ·{" "}
        <a href="mailto:hei@nyansikt.no" style={{ color: "var(--amber2)" }}>hei@nyansikt.no</a>{" "}
        · Stavanger, Norge
      </footer>
    </>
  );
}
