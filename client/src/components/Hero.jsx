import "./Hero.css"
function Hero() {
  return (
     <section className="hero" id="home">
        <h1 className= "hero-title">
            <span className="intro-text">Hi, I'am </span><br/>
            <span className="highlight">Mahinur Rahman Pamel</span></h1>
        <p> Full Stack Developer | Research Enthusiast</p>

        <div className="hero-buttons">
            <a href = "#contact" className="secondary-btn">
                Contact Me
                </a>
            <a 
            href = "/Mahinur_Rahman_Pamel_CV.pdf" 
            className="secondary-btn"
            target="_blank"
            rel="noopener noreferrer"
            >
               Download CV 
                </a>
        </div>
   </section>
    )
}
export default Hero