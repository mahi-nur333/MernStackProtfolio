import "./Hero.css"
import { useEffect, useRef, useState } from "react"

function Hero() {
  const [text, setText] = useState("")
  const [revealed, setRevealed] = useState(false)
  const heroRef = useRef(null)
  const roles = ["Full Stack Developer | Research Enthusiast"]
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1))
        setCharIndex(c => c + 1)
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500)
        }
      } else {
        setText(current.slice(0, charIndex - 1))
        setCharIndex(c => c - 1)
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setRoleIndex(r => (r + 1) % roles.length)
        }
      }
    }, deleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  useEffect(() => {
    const section = heroRef.current
    if (!section) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={`hero ${revealed ? "hero--revealed" : ""}`} id="home" ref={heroRef}>
      <div className="hero-inner">
        
        <div className="hero-text">
          <p className="hero-greeting">Hello — I'm</p>
          <h1 className="hero-title">
            <span className="highlight">Mahinur Rahman</span><br/>
            <span className="highlight">Pamel</span>
          </h1>
          <p className="hero-role">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">Contact Me</a>
            <a href="/Mahinur_Rahman_Pamel_CV.pdf" className="secondary-btn" target="_blank" rel="noopener noreferrer">Download CV</a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-ring"></div>
          <div className="hero-ring-2"></div>
          <div className="hero-photo-frame">
            <img 
              src="/HeroImage.png" 
              alt="Mahinur Rahman Pamel" 
              className="hero-photo"
            />
          </div>
          {/* <div className="hero-badge">Full Stack Dev</div> */}
        </div>

      </div>
    </section>
  )
}

export default Hero