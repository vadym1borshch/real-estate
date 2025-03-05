import Button from '../../../../components/atoms/button'

export const ActionButtons = () => {
  return (
    <div className="hidden justify-end gap-3 lg:flex">
      <Button
        variant="outlined"
        className="hover:text-blue-gray !border-0"
        iconId="bigShareIcon"
        iconSide="left"
        iconClassName="!h-[48px] !w-[48px]"
      >
        share
      </Button>
      <Button
        variant="outlined"
        className="hover:text-blue-gray !border-0"
        iconId="bigHeartIcon"
        iconSide="left"
        iconClassName="!h-[48px] !w-[48px]"
      >
        like
      </Button>
    </div>
  )
}