import { Fragment, useState } from 'react'
import { Input } from './composants/forms/input.jsx'
import { Checkbox } from './composants/forms/checkbox.jsx'
import { ProductCategoryRow } from './composants/products/productCategoryRow.jsx'
import { ProductRow } from './composants/products/productRow.jsx'
import { use } from 'react'
import { Range } from './composants/forms/range.jsx'

const PRODUCTS = [
  {category: 'Fruits', price: '1', stocked: true, name: 'Apple'},
  {category: 'Fruits', price: '1', stocked: true, name: 'Dragonfruit'},
  {category: 'Fruits', price: '2', stocked: false, name: 'Passionfruit'},
  {category: 'Vegetables', price: '2', stocked: true, name: 'Spinach'},
  {category: 'Vegetables', price: '4', stocked: false, name: 'Pumpkin'},
  {category: 'Vegetables', price: '1', stocked: true, name: 'Peas'}
]

function App() {
  
  const [showStockOnly, setShowStockOnly] = useState(false)
  const [search, setsearch] = useState('')
  const [range, setRange] = useState(0)

  //filtrer le tableau pour ne avoir que les éléments en stock  et visversa

  const filterProducts = PRODUCTS.filter(product => {

    //vérifier si le trie du produit est coché et si le produit est en stock
    if(showStockOnly && !product.stocked){
      return false //pour ignorer lélément en question
    }

    //mettre a jour le tableau en fonction de la recherche
    if(search && !product.name.includes(search)){
      return false
    }

    //mettre a jour la selection des produits par prix
    if(range && range > 0 && product.price !== range){
      return false
    }

    return true //ajouter l'élément au tableau trier si il rempli les conditions
  })

  return <div className="container my-3">
    <SearchBar showStockOnly={showStockOnly} onStockOnlyChange={setShowStockOnly} search={search} onSearch={setsearch} range={range} setRange={setRange}/>
    <ProductTable products={filterProducts}/>
  </div>
  
}

//composant search bar
function SearchBar({showStockOnly, onStockOnlyChange, search, onSearch, range, setRange}){
  
  return <div>
    <div className="mb3">
      <Input value={search} onChange={onSearch} placeholder="rechercher..."/>

      <Range min={0} max={10} Values={range} onChange={setRange}/>

      <Checkbox onChange={onStockOnlyChange} id="stocked" checked={showStockOnly} label="n'affichez que les produits en stock"/>
      
    </div>
  </div>
}

//composant product table
function ProductTable({products}){

  const rows = []
  let lastCategory = null

  for(let product of products){
    if(product.category !== lastCategory){
      rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
    }

    lastCategory = product.category
    rows.push(<ProductRow product={product} key={product.name}/>)

  }

  return <table className="table">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}

export default App
