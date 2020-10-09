import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Melhor do que pensar fora da caixa é pensar sem caixas. Conheça as ferramentas que você o seu negócio precisam para irem além das nuvens."
    />
    <div id="header">
      <img className="logo" src="images/nulbox-logo.png" />
      <h1>Eleve seu negócio acima das nuvens.</h1>
      <p>
        Melhor do que pensar fora da caixa é pensar sem caixas.<br />
        Conheça as ferramentas que você o seu negócio precisam para irem além das nuvens.<br />
        <br />
        <a href="#know-more" className="button">Saiba Mais</a>
      </p>
    </div>

    <div id="main">
      <footer id="know-more" className="major container medium">
        <h3>Saiba Mais</h3>
        <p>Descubra quais ferramentas oferecemos para você alavancar o seu negócio!</p>

        <div className="mail-input">
          <input type="email" name="email" placeholder="Digite o seu melhor email" />
          <button className="button">Enviar</button>
        </div>
      </footer>
    </div>
  </Layout>
)

export default IndexPage
