function MonoLabel({ children, className = '' }) {
  return (
    <div
      className={`font-mono text-[11px] uppercase tracking-[0.2em] text-dim ${className}`}
    >
      {children}
    </div>
  )
}

function Pipeline() {
  const nodes = [
    { id: 'target', label: 'Target', stage: 'computational' },
    { id: 'design', label: 'Design', stage: 'computational' },
    { id: 'rank', label: 'Rank', stage: 'computational' },
    { id: 'synth', label: 'Synthesise', stage: 'laboratory' },
    { id: 'validate', label: 'Validate', stage: 'laboratory' },
    { id: 'binder', label: 'Binder', stage: 'laboratory' },
  ]

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 mb-4">
        <MonoLabel>Computational</MonoLabel>
        <MonoLabel className="pl-6">Laboratory</MonoLabel>
      </div>
      <div className="relative border border-line bg-surface/40 px-6 py-10 md:px-10 md:py-14">
        <svg
          viewBox="0 0 600 80"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {nodes.map((n, i) => {
            const x = 50 + i * 100
            const fill =
              n.stage === 'computational' ? 'currentColor' : 'currentColor'
            const opacity = n.stage === 'computational' ? 0.9 : 0.6
            return (
              <g key={n.id}>
                <circle
                  cx={x}
                  cy={40}
                  r={6}
                  fill={fill}
                  opacity={opacity}
                  className="text-ink"
                />
                <text
                  x={x}
                  y={66}
                  textAnchor="middle"
                  className="fill-mute"
                  style={{ font: '500 11px Inter, sans-serif' }}
                >
                  {n.label}
                </text>
              </g>
            )
          })}
          {nodes.slice(0, -1).map((_, i) => {
            const x1 = 50 + i * 100 + 8
            const x2 = 50 + (i + 1) * 100 - 8
            return (
              <line
                key={`l-${i}`}
                x1={x1}
                y1={40}
                x2={x2}
                y2={40}
                stroke="currentColor"
                strokeWidth={1}
                className="text-line"
              />
            )
          })}
          {/* divider between computational and laboratory */}
          <line
            x1={300}
            y1={20}
            x2={300}
            y2={60}
            stroke="currentColor"
            strokeWidth={1}
            strokeDasharray="2 3"
            className="text-line"
          />
        </svg>
      </div>
    </div>
  )
}

function Section({ children, className = '' }) {
  return (
    <section className={`border-t border-line ${className}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
        {children}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-sans">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-line bg-canvas/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
          <div className="font-mono text-sm font-medium tracking-tight">
            ONOMOUS
          </div>
          <a
            href="mailto:onomouslabs@gmail.com"
            className="font-mono text-xs text-mute hover:text-ink transition-colors"
          >
            onomouslabs@gmail.com
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center pt-14">
        <div className="max-w-6xl mx-auto w-full px-6 md:px-12 py-24">
          <MonoLabel className="mb-8">NSW Biotechnology · TRL 4</MonoLabel>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.03em] leading-[0.95] mb-8">
            Engineered protein binders,
            <br />
            <span className="text-mute">built for rapid diagnostics.</span>
          </h1>
          <p className="text-lg md:text-xl text-mute max-w-2xl leading-relaxed mt-12">
            Onomous designs and validates protein binders through a coupled
            computational and laboratory pipeline — compressing the cost and
            time of binder development for diagnostic applications.
          </p>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-dim uppercase">
          Scroll
        </div>
      </section>

      {/* What we do */}
      <Section>
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <MonoLabel>01 — What we do</MonoLabel>
          </div>
          <div className="md:col-span-9 space-y-6 text-lg leading-relaxed">
            <p>
              Diagnostic tests depend on high-quality binders to detect
              biological targets with specificity and sensitivity. Binder
              development is slow, resource-intensive, and uncertain — months
              of laboratory screening with low success rates.
            </p>
            <p className="text-mute">
              Onomous compresses the cycle. We generate engineered binders
              against defined targets in silico, rank them computationally, and
              progress prioritised candidates to laboratory synthesis and
              experimental validation. Each iteration sharpens the next.
            </p>
          </div>
        </div>
      </Section>

      {/* Approach with pipeline */}
      <Section>
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16">
          <div className="md:col-span-3">
            <MonoLabel>02 — Approach</MonoLabel>
          </div>
          <div className="md:col-span-9 space-y-6 text-lg leading-relaxed">
            <p>
              A target enters as a defined sequence. Structure prediction
              generates candidate binders; computational evaluation ranks them
              by predicted binding characteristics. Prioritised candidates
              progress to synthesis and experimental validation through
              laboratory infrastructure.
            </p>
            <p className="text-mute">
              Validation feedback informs the next round of design — narrowing
              the search space and improving confidence at each stage.
            </p>
          </div>
        </div>
        <div className="md:pl-[calc((100%/12)*3+2rem)]">
          <Pipeline />
        </div>
      </Section>

      {/* Capabilities */}
      <Section>
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <MonoLabel>03 — Capabilities</MonoLabel>
          </div>
          <div className="md:col-span-9">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {[
                {
                  title: 'Computational design',
                  body: 'Generative and predictive workflows produce engineered binder candidates against defined targets.',
                },
                {
                  title: 'Structure prediction',
                  body: 'Candidates are evaluated and ranked by predicted binding characteristics before progressing.',
                },
                {
                  title: 'Synthesis & validation',
                  body: 'Prioritised candidates advance to laboratory synthesis and experimental validation.',
                },
                {
                  title: 'Iterative refinement',
                  body: 'Closed-loop cycles between in silico design and laboratory feedback narrow selection.',
                },
              ].map((c, i) => (
                <div key={c.title} className="space-y-3">
                  <div className="font-mono text-xs text-dim">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-medium tracking-tight">
                    {c.title}
                  </h3>
                  <p className="text-mute leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Research */}
      <Section>
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <MonoLabel>04 — Research</MonoLabel>
          </div>
          <div className="md:col-span-9 space-y-6 text-lg leading-relaxed">
            <p>
              Active programs target rapid diagnostic detection — engineered
              binders for emerging targets and partner-defined assay
              applications.
            </p>
            <p className="text-mute">
              Programs progress from computational candidate generation through
              experimental validation. Selection and refinement are driven by
              laboratory feedback, with iterative cycles between in silico
              design and wet-lab measurement.
            </p>
          </div>
        </div>
      </Section>

      {/* Collaborations + Stage as side-by-side */}
      <Section>
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <MonoLabel>05 — Where we work</MonoLabel>
          </div>
          <div className="md:col-span-9">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-mute">
                  Collaborations
                </h3>
                <p className="text-lg leading-relaxed">
                  Research and laboratory work is conducted in collaboration
                  with the{' '}
                  <span className="text-ink">University of Wollongong's</span>{' '}
                  <span className="text-ink">Molecular Horizons</span>{' '}
                  institute — shared scientific direction and access to
                  advanced molecular research infrastructure.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-mute">
                  Stage
                </h3>
                <p className="text-lg leading-relaxed">
                  TRL 4. Active research, advancing through laboratory
                  validation.
                </p>
                <p className="text-lg leading-relaxed text-mute">
                  Based in Wollongong, NSW.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section className="border-b border-line">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <MonoLabel>06 — Contact</MonoLabel>
          </div>
          <div className="md:col-span-9">
            <a
              href="mailto:onomouslabs@gmail.com"
              className="text-3xl md:text-5xl font-medium tracking-tight hover:text-mute transition-colors"
            >
              onomouslabs@gmail.com
            </a>
            <p className="mt-8 text-mute max-w-xl leading-relaxed">
              For research collaborations, partner enquiries, and binder
              development engagements.
            </p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs text-dim">
          <div>ONOMOUS PTY LTD · ABN 16 697 228 452</div>
          <div>NSW, AUSTRALIA · 2026</div>
        </div>
      </footer>
    </div>
  )
}
