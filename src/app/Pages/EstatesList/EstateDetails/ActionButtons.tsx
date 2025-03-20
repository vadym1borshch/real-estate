import Button from '../../../../components/atoms/button'

export const ActionButtons = () => {
  return (
    <div className="hidden justify-end gap-3 lg:flex">
      <Button
        variant="text"
        className="hover:text-blue-gray !border-0 w-auto"
        iconId="bigShareIcon"
        iconSide="left"
        iconClassName="!min-h-[48px] !min-w-[48px]"
      >
        share
      </Button>
      <Button
        variant="text"
        className="hover:text-blue-gray !border-0 w-auto"
        iconId="bigHeartIcon"
        iconSide="left"
        iconClassName="!min-h-[48px] !min-w-[48px]"
      >
        like
      </Button>
    </div>
  )
}