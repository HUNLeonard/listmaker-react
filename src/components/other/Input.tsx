interface InputProps {
  value: string,
  setter: (arg: string) => void;
  placeholder: string;
}

const Input = ({ value, setter, placeholder }: InputProps) => {
  return (
    <input
      className=" bg-white border-gray-light border-2 w-full my-2 p-2"
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={(e) => setter(e.target.value)}
    />
  )
}

export default Input