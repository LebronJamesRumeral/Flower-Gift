'use client'

import { useEffect, useState } from 'react'

const quotes = [
  'Wherever you bloom, you make the world brighter.',
  'Small joys are still joys worth keeping.',
  'There is always a little light left to find.',
  'You are allowed to grow at your own pace.',
  'Kindness is a quiet kind of courage.',
  'The best days often begin softly.',
  'Let your heart be lighter than yesterday.',
  'Hope grows wherever you give it room.',
  'You make ordinary moments feel like spring.',
  'A gentle heart can carry great things.',
  'Keep going; beautiful things take root slowly.',
  'Your presence is a gift, exactly as it is.',
  'Every new morning is an invitation to begin again.',
  'Joy can be found in the smallest petals.',
  'May today meet you with unexpected sweetness.',
  'You are more loved than you know.',
]

function Bouquet({ bloomed }: { bloomed: boolean }) {
  return (
    <div className={`bouquet ${bloomed ? 'is-bloomed' : ''}`} aria-label="A hand-drawn bouquet of colorful flowers" role="img">
      <div className="sparkle sparkle-one" />
      <div className="sparkle sparkle-two" />
      <svg className="bouquet-art" viewBox="0 0 340 310" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path className="stem stem-one" d="M171 274C168 214 145 150 117 88" />
        <path className="stem stem-two" d="M177 276C187 215 213 148 227 81" />
        <path className="stem stem-three" d="M174 275C157 211 91 173 63 136" />
        <path className="stem stem-four" d="M178 276C192 227 276 185 282 136" />
        <path className="stem" d="M175 276C177 214 171 130 172 57" />
        <path className="leaf leaf-one" d="M145 205C111 207 91 189 87 166C120 164 141 176 145 205Z" />
        <path className="leaf leaf-two" d="M202 185C222 157 247 151 267 161C251 187 229 194 202 185Z" />
        <path className="leaf leaf-three" d="M157 226C128 220 110 229 105 249C130 252 149 244 157 226Z" />
        <g className="flower flower-daisy carnation carnation-pink">
          <path className="petal petal-pink" d="M42 124C38 111 46 102 57 106C58 94 70 90 77 101C88 96 96 106 89 116C99 123 94 136 82 136C78 148 65 149 60 138C48 142 40 135 42 124Z" /><path className="carnation-frill" d="M48 121C58 113 70 112 84 121M51 130C63 123 74 124 86 130" /><circle cx="67" cy="123" r="8" className="center center-rose" />
        </g>
        <g className="flower flower-tulip carnation carnation-coral">
          <path className="petal petal-coral" d="M99 89C96 76 103 66 113 69C114 56 126 53 132 64C142 58 152 67 146 77C156 84 151 96 140 96C135 108 123 108 118 99C107 103 98 99 99 89Z" /><path className="carnation-frill" d="M105 84C117 77 130 78 144 85M108 92C119 87 131 88 143 92" /><circle cx="124" cy="84" r="7" className="center center-rose" />
        </g>
        <g className="flower flower-sunflower carnation carnation-yellow">
          <path className="petal petal-yellow" d="M208 78C204 64 213 54 224 58C227 45 240 44 245 56C257 52 265 63 258 73C269 81 263 94 251 93C247 105 234 107 227 97C215 101 206 93 208 78Z" /><path className="carnation-frill" d="M215 75C228 67 241 68 256 76M216 84C230 77 244 79 256 84" /><circle cx="235" cy="79" r="8" className="center center-brown" />
        </g>
        <g className="flower flower-rose carnation carnation-lilac">
          <path className="petal petal-lilac" d="M145 47C141 32 151 22 162 26C166 14 179 12 185 23C197 19 205 30 198 40C209 48 203 61 191 60C187 72 174 73 167 63C155 67 145 60 145 47Z" /><path className="carnation-frill" d="M151 44C163 36 177 36 193 44M152 52C165 46 179 47 195 52" /><circle cx="173" cy="46" r="8" className="center center-rose" />
        </g>
        <g className="flower flower-daisy-right carnation carnation-peach">
          <path className="petal petal-peach" d="M263 126C259 113 267 103 278 107C281 95 293 93 299 104C310 100 318 111 311 121C321 129 315 141 303 140C299 151 286 153 280 143C268 147 261 139 263 126Z" /><path className="carnation-frill" d="M269 123C281 116 294 117 308 124M270 133C282 127 296 128 309 133" /><circle cx="287" cy="128" r="8" className="center center-gold" />
        </g>
        <path className="ribbon" d="M154 260C153 281 140 294 126 302C139 284 136 272 140 258M190 260C190 281 200 295 213 302C200 283 205 271 202 257" />
        <path className="wrap" d="M132 253C150 264 199 264 218 252L202 292C184 301 165 301 148 292L132 253Z" />
      </svg>
    </div>
  )
}

export default function Page() {
  const [quote, setQuote] = useState(quotes[0])
  const [changing, setChanging] = useState(false)
  const [bloomed, setBloomed] = useState(false)
  const [name, setName] = useState('')

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
    setName(new URLSearchParams(window.location.search).get('name')?.trim() || '')
  }, [])

  const anotherQuote = () => {
    if (!bloomed) {
      setBloomed(true)
      return
    }

    setChanging(true)
    window.setTimeout(() => {
      setQuote((current) => {
        const options = quotes.filter((item) => item !== current)
        return options[Math.floor(Math.random() * options.length)]
      })
      setChanging(false)
    }, 240)
  }

  return (
    <main className={`garden-page ${bloomed ? 'is-bloomed' : ''}`} onClick={anotherQuote}>
      <div className="ambient-glow" />
      <div className="floating-petal petal-a" />
      <div className="floating-petal petal-b" />
      <section className="greeting" aria-label="A little flower greeting">
        {name && <p className="for-name">For {name}</p>}
        {!bloomed && (
          <div className="intro-scene" aria-hidden="true">
            <div className="intro-flower intro-flower-left"><span /><span /><span /><b /></div>
            <div className="intro-note"><span className="intro-line" /><p className="tap-to-begin">Tap anywhere to begin</p><span className="intro-line" /></div>
            <div className="intro-flower intro-flower-right"><span /><span /><span /><b /></div>
          </div>
        )}
        <p className={`eyebrow ${bloomed ? 'is-visible' : ''}`}>A little something for you</p>
        <Bouquet bloomed={bloomed} />
        <div className={`quote-wrap ${bloomed ? 'is-visible' : ''} ${changing ? 'is-changing' : ''}`} aria-live="polite">
          <div className="letter-paper">
            <span className="letter-mark" aria-hidden="true">With love</span>
            <blockquote>“{quote}”</blockquote>
            <span className="letter-signoff" aria-hidden="true">always</span>
          </div>
          <p className="tap-hint">{bloomed ? 'Tap anywhere for another' : 'Tap to open your little letter'}</p>
        </div>
      </section>
      <footer>Made with love <span aria-hidden="true">·</span> always</footer>
    </main>
  )
}

<style jsx>{` .garden-page { min-height: 100svh; } `}</style>
