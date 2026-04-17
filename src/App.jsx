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
            'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px)',
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

        {/* Thesis */}
        {phase >= 2 && (
          <Section>
            <SectionLabel>{'>'} THESIS</SectionLabel>
            <div className="space-y-4 text-terminal-dim leading-relaxed">
              <p className="text-terminal-green text-lg">
                <TypeWriter text="Complexity is a debt." speed={15} onComplete={() => setPhase(3)} />
              </p>
              {phase >= 3 && (
                <p>
                  <TypeWriter text="Onomous builds by distillation." speed={15} onComplete={() => setPhase(4)} />
                </p>
              )}
              {phase >= 4 && (
                <p className="mt-6">
                  <TypeWriter
                    text="Every system is governed by a fundamental Law—a Nomos. When the noise is eliminated, the logic becomes autonomous."
                    speed={10}
                    onComplete={() => setPhase(5)}
                  />
                </p>
              )}
            </div>
          </Section>
        )}

        {/* Mission */}
        {phase >= 5 && (
          <Section>
            <SectionLabel>{'>'} MISSION</SectionLabel>
            <p className="text-terminal-dim leading-relaxed italic border-l-2 border-terminal-muted pl-4">
              <TypeWriter
                text={`"To derive the fundamental laws of any system—digital, biological, or protocol-based—and reduce them to their most efficient, autonomous, and resilient essence."`}
                speed={10}
                onComplete={() => setPhase(6)}
              />
            </p>
          </Section>
        )}

        {/* Domains */}
        {phase >= 6 && (
          <Section>
            <SectionLabel>{'>'} DOMAINS</SectionLabel>
            <div className="space-y-6">
              <div>
                <div className="text-terminal-green text-sm mb-1">
                  <TypeWriter text="01 // SOFTWARE" speed={15} onComplete={() => setPhase(7)} />
                </div>
                {phase >= 7 && (
                  <p className="text-terminal-dim text-sm leading-relaxed">
                    <TypeWriter
                      text="Reducing monolithic codebases into agentic, self-governing logic."
                      speed={10}
                      onComplete={() => setPhase(8)}
                    />
                  </p>
                )}
              </div>
              {phase >= 8 && (
                <div>
                  <div className="text-terminal-green text-sm mb-1">
                    <TypeWriter text="02 // BIOLOGICAL + FUNDAMENTAL" speed={15} onComplete={() => setPhase(9)} />
                  </div>
                  {phase >= 9 && (
                    <p className="text-terminal-dim text-sm leading-relaxed">
                      <TypeWriter
                        text="Distilling complex sequences into fundamental, executable laws."
                        speed={10}
                        onComplete={() => setPhase(10)}
                      />
                    </p>
                  )}
                </div>
              )}
            </div>
          </Section>
        )}

        {/* Execution */}
        {phase >= 10 && (
          <Section>
            <SectionLabel>{'>'} EXECUTION</SectionLabel>
            <div className="space-y-2 text-terminal-dim">
              <p>
                <TypeWriter text="We find the simplest version of the truth." speed={15} onComplete={() => setPhase(11)} />
              </p>
              {phase >= 11 && (
                <p>
                  <TypeWriter text="We eliminate the noise." speed={15} onComplete={() => setPhase(12)} />
                </p>
              )}
              {phase >= 12 && (
                <p className="text-terminal-green">
                  <TypeWriter text="We deliver the essence." speed={15} onComplete={() => setPhase(13)} />
                </p>
              )}
            </div>
          </Section>
        )}

        {/* Contact */}
        {phase >= 13 && (
          <Section>
            <SectionLabel>{'>'} CONTACT</SectionLabel>
            <a
              href="mailto:julian@onomous.ai"
              className="text-terminal-green hover:underline underline-offset-4"
            >
              <TypeWriter text="julian@onomous.ai" speed={20} onComplete={() => setPhase(14)} />
            </a>
          </Section>
        )}

        {/* Footer */}
        {phase >= 14 && (
          <div className="border border-terminal-border p-6 md:p-8 text-center">
            <div className="text-terminal-muted text-xs tracking-[0.3em]">
              <TypeWriter text="NOMOS // ONOMA // ONOMOUS" speed={25} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
