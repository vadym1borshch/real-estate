import { useAppSelector } from '../../../../store'
import { formatDate } from '../../../../helpers'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'
import TextArea from '../../../../components/atoms/text-area'
import Button from '../../../../components/atoms/button'
import { useState } from 'react'
import { selectUser } from '../../../../store/userSlice/selectors.ts'
import { socket } from '../../../../helpers/socket.ts'
import orderBy from 'lodash.orderby'
import { Message } from '../../../../store/messagesSlice'

interface Props {
  messages: Message[]
  currentMessageId: string | null
}

export const MessageDetails = ({ messages, currentMessageId }: Props) => {
  const [query, setQuery] = useState('')

  const user = useAppSelector(selectUser)
  const { i18n, t } = useTranslation()

  return (
    <>
      <div className="flex h-full max-h-[300px] flex-col gap-10 overflow-y-auto md:max-h-[500px]">
        {orderBy(messages, ['timestamp'], ['asc']).map((reply) => {
          return (
            <div key={reply.id} className="flex flex-col gap-10">
              <div className="text-blue-gray flex flex-col justify-between md:flex-row">
                <span>
                  {reply.senderName === user?.name
                    ? t('messages.common.you')
                    : reply.senderName}
                  {reply.senderLastName === user?.lastName
                    ? ''
                    : reply.senderLastName}
                </span>
                <span className="capitalize">
                  {formatDate(reply.timestamp, i18n.language)}
                </span>
              </div>
              <div>
                <ul className="whitespace-pre-wrap">
                  <ReactMarkdown>{reply.message}</ReactMarkdown>
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
        onClick={async () => {
          if (user && messages && currentMessageId) {
            socket.emit('send-message', {
              recipientId: user.id,
              message: query,
              senderName: user.name,
              senderEmail: user.email,
              senderLastName: user.lastName,
            })
            setQuery('')
          }
        }}
      >
        {t('buttons.send-message')}
      </Button>
    </>
  )
}
