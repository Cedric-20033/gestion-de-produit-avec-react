/**
 * 
 * @param {boolean} checked 
 * @param {(v:boolean) => void} onChange 
 * @param {string} label 
 * @param {string} id 
 * @returns 
 */
export function Checkbox({checked, onChange, label, id}){

    return <div className="form-check">
        <input type="checkbox" className="form-check-input" id={id} checked={checked} onChange={(e) => onChange(e.target.checked)}/>
        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
}