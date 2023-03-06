import './formField.scss'

function FormField({labelOptions, inputOptions}) {
  
  return (
    <div className="group">
      <input className="form-input" {...inputOptions}/>
      {labelOptions && <label className={`${inputOptions.value.length ? 'shrink' : ''} form-input-label`}{...labelOptions.options}>{labelOptions.label}</label>}
    </div>
  )
}

export default FormField