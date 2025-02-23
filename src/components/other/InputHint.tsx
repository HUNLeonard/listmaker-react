import { cn } from '../../utils/cn'

const InputHint = ({ text, className = "" }: { text: string, className?: string }) => {
  return (
    <p className={cn('!text-gray-light mb-8', className)}><u>Hint:</u> {text}</p>
  )
}

export default InputHint