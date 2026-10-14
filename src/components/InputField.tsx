// TODO 1: build a REUSABLE input field (label + input + error message).
// It will be used 4 times in SignUp and 2 times in Login, so it must work with props.

// TODO 1a: import the UseFormRegisterReturn type from 'react-hook-form'
//          import type { UseFormRegisterReturn } from 'react-hook-form'

interface Props {
  label: string
  // TODO 1b: add the other props this component needs (all strings):
  //          id, type, placeholder
  // TODO 1c: add `registration: UseFormRegisterReturn`  (the result of register('fieldName'))
  // TODO 1d: add an OPTIONAL `error?: string`           (used in the bonus part)
}

const InputField = ({ label }: Props) => {
  // TODO 1e: destructure the new props in the parameters above

  return (
    <div className="mb-3">
      {/* TODO 1f: connect the label to the input with htmlFor (JSX name of the "for" attribute) */}
      <label className="form-label">{label}</label>

      {/* TODO 1g: add the <input> here, with:
            - {...registration} to connect it to react-hook-form
            - id, type and placeholder coming from the props
            - className="form-control"  */}

      {/* TODO (bonus) 1h: when `error` has a value, add the bootstrap class "is-invalid" to the input
            and show <div className="invalid-feedback">{error}</div> below it
            (use conditional rendering with && or a ternary)  */}
    </div>
  )
}

export default InputField
