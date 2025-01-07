
/**
 *  
 * @param {number} min
 * @param {number} max
 * @param {number} Values
 * @param {s:string} onChange
 * 
 * @returns
 */
export function Range({min, max, Values, onChange}){

    return <div>
        <input type="range" className="form-range" min={min} max={max} value={Values} onChange={(e)=> onChange(e.currentTarget.value)}/>
    </div>

}