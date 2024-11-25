import React from "react";
import './style.css';

const Produtos = () => {
    return (
        <section id="produtos">
            <div className="secao-produtos center">
                <h2 className="titulos">NOSSOS PRODUTOS</h2>
                <p>
                    Trabalhamos com óculos de grau, óculos de sol, lentes transitions nos modelos masculino, feminino e infantil.
                </p>

                <p>
                    Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
                </p>

                <div className="oculos-imgs">
                    <div className="card-oculos">
                        <h3>Óculos de grau</h3>
                        <picture>
                            <img src="./assets/5.png" alt="Óculos de grau"></img>
                        </picture>
                        <p>R$ 550,00</p>
                    </div>

                    <div className="card-oculos">
                        <h3>Óculos Transition</h3>
                        <picture>
                            <img src="./assets/2.png" alt="Óculos de grau"></img>
                        </picture>
                        <p>R$ 1.550,00</p>
                    </div>

                    <div className="card-oculos">
                        <h3>Óculos de Sol</h3>
                        <picture>
                            <img src="./assets/3.png" alt="Óculos de grau"></img>
                        </picture>
                        <p>R$ 750,00</p>
                    </div>

                    <div className="card-oculos">
                        <h3>Óculos Infantil</h3>
                        <picture>
                            <img src="./assets/4.png" alt="Óculos de grau"></img>
                        </picture>
                        <p>R$ 250,00</p>
                    </div>
                </div>                
            </div>
            
        </section>
    )
}

export default Produtos;