import Avatar from '../../atoms/avatar'
import LargeFont from '../../atoms/typography/large-font'

interface Props {
  assistant: {
    name: string
    lastName: string
    profession: string
    info: string
    image: string
    email: string
    tel: string
  }
}

const AssistantCard = ({ assistant }: Props) => {
  return (
    <div
      className="px-5 py-7.5 border max-w-[16.25rem] min-h-[22.5rem] cursor-pointer flex flex-col items-center gap-6 rounded-lg border-blue-gray hover:border-charcoal">
      <Avatar userName={assistant.name} size={10} className="mt-5" src={assistant.image} />
      <p className="flex flex-col items-center gap-1.5 ">
        <LargeFont text={`${assistant.name} ${assistant.lastName}`} className="capitalize" />
        <span className="text-blue-gray text-center">{assistant.profession}</span>
      </p>
    </div>
  )
}

export default AssistantCard