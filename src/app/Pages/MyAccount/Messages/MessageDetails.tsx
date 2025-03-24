import { useAppDispatch, useAppSelector } from '../../../../store'
import { formatDate } from '../../../../helpers/common.ts'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'
import TextArea from '../../../../components/atoms/text-area'
import Button from '../../../../components/atoms/button'
import { useState } from 'react'
import { selectUser } from '../../../../store/userSlice/selectors.ts'
import { addNewMessage } from '../../../../store/messagesSlice'
import { v4 } from 'uuid'
import { Message } from '../../../../store/messagesSlice/mock.ts'

interface Props {
  messages: Message[]
  currentMessageId: string | null
}

export const MessageDetails = ({ messages, currentMessageId }: Props) => {
  const [query, setQuery] = useState('')

  const user = useAppSelector(selectUser)
  const { i18n, t } = useTranslation()
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="flex h-full max-h-[300px] flex-col gap-10 overflow-y-auto md:max-h-[500px]">
        {messages.map((replie) => {
          return (
            <div key={replie.id} className="flex flex-col gap-10">
              <div className="text-blue-gray flex flex-col justify-between md:flex-row">
                <span>
                  {replie.sender.name === user?.name
                    ? t('messages.common.you')
                    : replie.sender.name}
                  {replie.sender.lastName === user?.lastName
                    ? ''
                    : replie.sender.lastName}
                </span>
                <span className="capitalize">
                  {formatDate(replie.timestamp, i18n.language)}
                </span>
              </div>
              <div>
                <ul className="whitespace-pre-wrap">
                  <ReactMarkdown>{replie.message}</ReactMarkdown>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
      <TextArea
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
      <Button
        onClick={() => {
          if (user && messages && currentMessageId) {
            dispatch(
              addNewMessage({
                id: currentMessageId,
                message: {
                  id: v4(),
                  message: query,
                  sender: {
                    name: user.name,
                    lastName: user.lastName,
                    email: user.email,
                  },
                  timestamp: new Date().toISOString(),
                },
              })
            )
            setQuery('')
          }
        }}
      >
        {t('buttons.send-message')}
      </Button>
    </>
  )
}
