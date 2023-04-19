import type {ReactNode} from 'react'

interface ButtonProps {
  children: ReactNode
  submit?: boolean
  onClick: React.MouseEventHandler
}

export function Button(props: ButtonProps) {
  const {submit = false, children, onClick} = props
  return (
    <button type={submit ? 'submit' : 'button'} onClick={onClick}>
      {children}
    </button>
  )
}
