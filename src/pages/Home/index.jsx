import { Link } from "react-router-dom"
import "./style.css"

function Home() {
    return (
        <>
            <main className="div-main">
                <section className="section-hidden">
                    <h2 className="h2-name">
                        Olá, tudo bem? <br />
                        Me chamo Jean Quintiliano Rocha
                    </h2>
                    <p className="front-end">Desenvolvedor Front-End</p>

                    <button id="btnSobreMim">
                        Sobre mim <span className="arrow">▼</span>
                    </button>

                    <div id="textoSobreMim" className="hidden">
                        <p className="p-me">
                            Tenho 29 anos, atualmente estou estudando HTML, CSS, JAVASCRIPT, REACT no curso Jovem
                            Programado. Quero me tornar um programador futuramente...
                        </p>

                        <div className="music-div">
                            <h2 className="h2-music">Músicas favoritas</h2>

                            <iframe
                                style={{ borderRadius: "12px" }}
                                src="https://open.spotify.com/embed/track/4y9JsPoUxNyCutFhR7ImkZ?utm_source=generator"
                                width="300"
                                height="100"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>

                            <iframe
                                style={{ borderRadius: "12px" }}
                                src="https://open.spotify.com/embed/track/4rFV6vZRBeot4BBEz4TbZk?utm_source=generator"
                                width="300"
                                height="100"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </section>

                <section className="div-img">
                    <img
                        src="./src/img/minha foto.jpg"
                        alt="foto de Jean Quintiliano Rocha"
                        className="jean-rocha"
                    />
                </section>
            </main>

            <section className="contats">
                <a
                    href="https://github.com/JeanQrocha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn"
                >
                    <img src="./src/img/icone-github-verte.png" alt="GitHub" width="30" height="30" />
                    <span>Github</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/jeanquintilianorocha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn"
                >
                    <img src="./src/img/linkedin.png" alt="LinkedIn" width="30" height="30" />
                    <span>LinkedIn</span>
                </a>
            </section>
        </>
    )
}

export default Home;