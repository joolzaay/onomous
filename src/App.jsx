import { useState, useEffect } from 'react'

function TypeWriter({ text, speed = 30, delay = 0, onComplete }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1))
      }, speed)
      return () => clearTimeout(timer)
    } else if (onComplete) {
      onComplete()
    }
  }, [displayed, started, text, speed, onComplete])

  return (
    <span>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="animate-pulse">_</span>
      )}
    </span>
  )
}

function Section({ children, className = '' }) {
  return (
    <section className={`border border-terminal-border p-6 md:p-8 ${className}`}>
      {children}
    </section>
  )
}

function SectionLabel({ children }) {
  return (
    <div className="text-terminal-muted text-xs tracking-[0.3em] uppercase mb-4">
      {children}
    </div>
  )
}

export default function App() {
  const [phase, setPhase] = useState(0)

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-green font-mono antialiased">
      {/* Scanline overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,255,65,0.1) 1px, rgba(0,255,65,0.1) 2px)',
        }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12 md:py-20 space-y-0">
        {/* Header */}
        <div className="border border-terminal-border p-6 md:p-8">
          <div className="text-terminal-muted text-xs tracking-[0.3em] mb-6">
            {'>'} IDENTITY
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            <TypeWriter
              text="ONOMOUS"
              speed={100}
              onComplete={() => setPhase(1)}
            />
          </h1>
          {phase >= 1 && (
            <div className="text-terminal-dim text-sm tracking-[0.2em] mt-2">
              <TypeWriter
                text="REDUCTIVE SYSTEMS ARCHITECTURE"
                speed={40}
                onComplete={() => setPhase(2)}
              />
            </div>
          )}
        </div>

        {phase >= 2 && (
          <>
            {/* Thesis */}
            <Section>
              <SectionLabel>{'>'} THESIS</SectionLabel>
              <div className="space-y-4 text-terminal-dim leading-relaxed">
                <p className="text-terminal-green text-lg">
                  Complexity is a debt.
                </p>
                <p>Onomous builds by distillation.</p>
                <p className="mt-6">
                  Every system is governed by a fundamental Law—a{' '}
                  <span className="text-terminal-green">Nomos</span>.
                  <br />
                  When the noise is eliminated, the logic becomes autonomous.
                </p>
              </div>
            </Section>

            {/* Mission */}
            <Section>
              <SectionLabel>{'>'} MISSION</SectionLabel>
              <p className="text-terminal-dim leading-relaxed italic border-l-2 border-terminal-muted pl-4">
                "To derive the fundamental laws of any system—digital,
                biological, or protocol-based—and reduce them to their most
                efficient, autonomous, and resilient essence."
              </p>
            </Section>

            {/* Domains */}
            <Section>
              <SectionLabel>{'>'} DOMAINS</SectionLabel>
              <div className="space-y-6">
                <div>
                  <div className="text-terminal-green text-sm mb-1">
                    01 // SOFTWARE
                  </div>
                  <p className="text-terminal-dim text-sm leading-relaxed">
                    Reducing monolithic codebases into agentic, self-governing
                    logic.
                  </p>
                </div>
                <div>
                  <div className="text-terminal-green text-sm mb-1">
                    02 // BIOLOGICAL + FUNDAMENTAL
                  </div>
                  <p className="text-terminal-dim text-sm leading-relaxed">
                    Distilling complex sequences into fundamental, executable
                    laws.
                  </p>
                </div>
              </div>
            </Section>

            {/* Execution */}
            <Section>
              <SectionLabel>{'>'} EXECUTION</SectionLabel>
              <div className="space-y-2 text-terminal-dim">
                <p>
                  We find the simplest version of the truth.
                </p>
                <p>We eliminate the noise.</p>
                <p className="text-terminal-green">We deliver the essence.</p>
              </div>
            </Section>

            {/* Contact */}
            <Section>
              <SectionLabel>{'>'} CONTACT</SectionLabel>
              <a
                href="mailto:julian@onomous.ai"
                className="text-terminal-green hover:underline underline-offset-4"
              >
                julian@onomous.ai
              </a>
            </Section>

            {/* Footer */}
            <div className="border border-terminal-border p-6 md:p-8 text-center">
              <div className="text-terminal-muted text-xs tracking-[0.3em]">
                NOMOS // ONOMA // ONOMOUS
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
