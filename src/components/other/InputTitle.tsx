import { cn } from '../../utils/cn'

const InputTitle = ({ text, className = "" }: { text: string, className?: string }) => {
  return (
    <p className={cn('!text-white text-2xl font-bold mt-4', className)}>{text}</p>
  )
}

export default InputTitle