import { CSSProperties } from "react"
import { cn } from "../../utils/cn"

const SubmitButton = ({ text = "Submit", className = "", style }: { text: string, className?: string, style?: CSSProperties }) => {
  return (
    <button
      className={cn("bg-white w-fit hover:bg-gray-dark cursor-pointer hover:text-white mx-auto px-4 py-2",
        className
      )}
      style={style}
      type='submit'
    >
      {text}
    </button>
  )
}

export default SubmitButton