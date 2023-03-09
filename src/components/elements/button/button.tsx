import {ReactNode} from 'react'

interface ButtonProps {
  children: ReactNode
  submit?: boolean
  onClick: React.MouseEventHandler
}

function Button(props: ButtonProps) {
  const {submit = false, children, onClick} = props
  return (
    <button type={submit ? 'submit' : 'button'} onClick={onClick}>
      {children}
    </button>
  )
}
export default Button
