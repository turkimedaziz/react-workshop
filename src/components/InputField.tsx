import type { UseFormRegisterReturn } from 'react-hook-form'

// Reusable input: label + input + (optional) error message.
// `registration` is the object returned by register('fieldName') from react-hook-form.
interface Props {
  id: string
  label: string
  type: string
  placeholder: string
  registration: UseFormRegisterReturn
  error?: string
}

const InputField = ({ id, label, type, placeholder, registration, error }: Props) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        {...registration}
        id={id}
        type={type}
        placeholder={placeholder}
        className={'form-control' + (error ? ' is-invalid' : '')}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

export default InputField
