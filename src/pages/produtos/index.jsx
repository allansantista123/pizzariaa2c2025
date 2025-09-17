import {useState, useEffect} from 'react'
import axio from 'axios'

const Produtos = () => {
    const [pizzas, setPizzas] = useStates([])
    // Consumir rotas com lista de produtos
   axios.get("")
   .then(response=>{
        console.log(response.data)
   })
   .catch(error=>{console.log(error)})

    // Literção da lista e pizzas - pizza a pizza (um a um)
    const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)
    
    return (
        <div>
            <h3>Listagem de Produtos</h3>
            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}

export default Produtos
