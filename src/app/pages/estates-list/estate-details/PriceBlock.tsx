import H3 from '../../../../components/atoms/typography/h3'
import Button from '../../../../components/atoms/button'
import Icon from '../../../../components/atoms/icon'

export const PriceBlock = ({price}: {price: string}) => {
  return (
    <div className="flex items-center justify-between">
      <H3 text={price} />
      <div className="flex items-center gap-3 lg:hidden">
        <Button
          variant="outlined"
          className="h-fit w-fit !border-0 p-0"
        >
          <Icon
            id="standardShareIcon"
            className="text-blue-gray h-6 w-6"
          />
        </Button>
        <Button
          variant="outlined"
          className="h-fit w-fit !border-0 p-0"
        >
          <Icon
            id="standardHeartIcon"
            className="text-blue-gray h-6 w-6"
          />
        </Button>
      </div>
    </div>
  )
}
