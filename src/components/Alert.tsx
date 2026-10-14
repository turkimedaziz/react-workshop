import type { ReactNode } from 'react'

// Reusable alert box: whatever is written between <Alert> and </Alert> is shown inside it.
interface AlertProps {
  children: ReactNode
}

const Alert = ({ children }: AlertProps) => {
  return (
    <div className="glass-alert" role="alert">
      {children}
    </div>
  )
}

export default Alert
