import './Form-field-styled'
import FormFieldStyled from './Form-field-styled'

function FormField({labelOptions, inputOptions}) {
  
  return (
    <FormFieldStyled>
      <input className="form-input" {...inputOptions}/>
      {labelOptions && <label className={`${inputOptions.value.length ? 'shrink' : ''} form-input-label`}{...labelOptions.options}>{labelOptions.label}</label>}
    </FormFieldStyled>
  )
}

export default FormField