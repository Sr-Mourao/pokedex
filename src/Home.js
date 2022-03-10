import Footer from "./Footer"
import Header from "./Header"
import Card from "./Card"

import axios from 'axios';

import { useState } from "react";

export default function Home() {

    let [pokemon, setPokemon] = useState();

    async function carregar(evento)
    {
        let codigo = evento.target.value;

        let resultado = await axios.get("https://pokeapi.co/api/v2/pokemon/" + codigo);
    
        setPokemon(resultado.data);
    }

    return (
        <div class="col-lg-8 mx-auto p-3 py-md-5">

            <Header />

            <main>
                <h1>Pesquise seu Pokemon</h1>
                <div class="col-3 offset-5">
                    <input 
                        type="number" 
                        min="1" 
                        max="300" 
                        onChange={carregar}
                        class="form-control" 
                        placeholder="Digite o id"/>
                </div>

                <hr class="col-3 col-md-2 mb-5" />

                <div class="row g-5">
                  <div class="col-5 offset-4" >

                    { (pokemon)? <Card /> : ""} 

                    </div>
                </div>
            </main>

            <Footer />

        </div>)
}