export default function Card (props)

{

    let lista = function(item)
    {
        return <li class="list-group-item"> { item.ability.name} </li>
    }

    let nome = props.bicho.name;

    let habilidades = props.bicho.abilities.map(lista);



    return ( 
        <div>
            <div class="card" >
                <img src={props.bicho.sprites.front_default} class="card-img-top" alt="..." />
                <div class="card-body">
                <h3 class="card-title">{ nome.toUpperCase() }</h3>
                
                <p class="card-text">Peso: {props.bicho.weight}</p>
                <p class="card-text">Altura: {props.bicho.height}</p>

                </div>

                <ul class="list-group list group-flush">
                    <li class="list-group-item"><h5>Habilidades</h5></li>
                    {habilidades}
                </ul>
            </div>
        </div>
    )
}