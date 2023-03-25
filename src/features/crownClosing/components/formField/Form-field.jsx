import s from './form-field.module.scss'

function FormField({labelOptions, inputOptions}) {
  const label = labelOptions &&
    <label className={`${inputOptions.value.length ? s.shrink : ''} ${s.formInputLabel}`}{...labelOptions.options}>{labelOptions.label}</label>
  return (
    <div className={s.formField}>
      <input className={s.formInput} {...inputOptions}/>
      {label}
    </div>
  )
}

export default FormField