/**
 * 
 * @param {{name: string, stocked: boolean, price: string}} product 
 * @returns 
 */
export function ProductRow({product}){

    //gérer le style pour afficher les éléments qui ne sont plus en stock en rouge

    const style = product.stocked ? undefined : {color: 'red'}

    return <tr>
        <td style={style}>{product.name}</td>
        <td>${product.price}</td>
    </tr>
}