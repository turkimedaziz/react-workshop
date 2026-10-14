// Slide: "Passing children"
// `children` lets the parent put any JSX between the opening and closing tags.
import type { ReactNode } from 'react'

interface AlertProps {
  children: ReactNode
}

const Alert = ({ children }: AlertProps) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  )
}

export default Alert
