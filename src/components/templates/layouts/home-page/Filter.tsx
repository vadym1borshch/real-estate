import Input from '../../../atoms/input'
import Dropdown from '../../../atoms/dropdown'
import Button from '../../../atoms/button'

export const Filter = () => {
  return (
    <div
      className="p-3 bg-[#D8DDE0] backdrop-blur-[0] rounded-md  mt-[9.75rem] w-fit flex gap-3 flex-wrap mx-5 justify-center">
      <Input
        value={''}
        onChange={() => {
        }}
        iconId="navigationIcon"
        iconClassName="w-[24px] h-[24px] bg-transparent text-charcoal"
        placeholder="Bundesland, Ort oder Postleitzahl"
        className="max-w-[306px]"
        iconSide="left"
      />
      <Dropdown
        label={'Kaufen'}
        open={false}
        setOpen={() => {
        }}
        withIcon
        variant="outlined"
        triggerButtonClassName="min-w-[132px]"
      >
        <div>
          b
        </div>
      </Dropdown>
      <Dropdown
        label={'Typ'}
        open={false}
        setOpen={() => {
        }}
        withIcon
        variant="outlined"
        triggerButtonClassName="min-w-[132px]"
      >
        <div>
          b
        </div>
      </Dropdown>
      <Dropdown
        label={'Preis'}
        open={false}
        setOpen={() => {
        }}
        withIcon
        variant="outlined"
        triggerButtonClassName="min-w-[132px]"
      >
        <div>
          b
        </div>
      </Dropdown>
      <Dropdown
        label={'Fläche'}
        open={false}
        setOpen={() => {
        }}
        withIcon
        variant="outlined"
        triggerButtonClassName="min-w-[132px]"
      >
        <div>
          b
        </div>
      </Dropdown>
      <Dropdown
        label={'Zimmer'}
        open={false}
        setOpen={() => {
        }}
        withIcon
        variant="outlined"
        triggerButtonClassName="min-w-[132px]"
      >
        <div>
          b
        </div>
      </Dropdown>
      <Button
        onClick={() => {
        }}
      >
        Finde
      </Button>
    </div>
  )
}