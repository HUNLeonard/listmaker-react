import Button from "./Button"

const CloseModalButton = ({ execute }: { execute: () => void }) => {
  return (
    <Button className="!bg-transparent hover:!text-black" execute={execute}>
      X
    </Button>
  )
}

export default CloseModalButton