import Avatar from '../../atoms/avatar'
import LargeFont from '../../atoms/typography/large-font'
import { useTranslation } from 'react-i18next'

interface Props {
  assistant: {
    id: string,
    name: string,
    profession: {
      title: string,
      key: string
    },
    description: string,
    phone: string,
    email: string,
    address: string,
    photo: string
  },
  onClick?: (id: string) => void,
}

const AssistantCard = ({ assistant, onClick }: Props) => {
  const { t } = useTranslation()
  return (
    <div
      onClick={() => onClick && onClick(assistant.id)}
      className="px-5 py-7.5 border w-full lg:max-w-[16.25rem] min-h-[22.5rem] cursor-pointer flex flex-col items-center gap-6 rounded-lg border-blue-gray hover:border-charcoal"
    >
      <Avatar userName={assistant.name} size={10} className="mt-5" src={assistant.photo} />
      <p className="flex flex-col items-center gap-1.5 ">
        <LargeFont text={`${assistant.name}`} className="capitalize" />
        <span className="text-blue-gray text-center">{t(assistant.profession.title)}</span>
      </p>
    </div>
  )
}

export default AssistantCard