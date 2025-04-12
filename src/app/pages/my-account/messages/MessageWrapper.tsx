import { cn } from '../../../../helpers/ui.ts'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { selectUser } from '../../../../store/userSlice/selectors.ts'
import Button from '../../../../components/atoms/button'
import Icon from '../../../../components/atoms/icon'
import { formatDate } from '../../../../helpers'
import { useTranslation } from 'react-i18next'
import {
  deleteMessages,
  IMessage,
  makeAsRead,
  moveToArchive,
  setCurrentMessagesId,
} from '../../../../store/messagesSlice'
import React from 'react'
import { UnknownAction } from '@reduxjs/toolkit'

interface Props {
  messages: IMessage[]
}

export const MessageWrapper = ({ messages }: Props) => {
  const user = useAppSelector(selectUser)
  const { i18n, t } = useTranslation()
  const dispatch = useAppDispatch()

  const actionHandler = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    action: UnknownAction
  ) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(action)
  }

  return (
    <div className="flex cursor-pointer flex-col gap-3">
      {messages.map((message) => {
        const name = message.replies[0].senderName
        const lastName = message.replies[0].senderLastName
        const text = message.replies[0].message
        const date = formatDate(
          message.replies[0].timestamp,
          i18n.language,
          'day'
        )

        return (
          <div
            key={message.id}
            className={cn('flex justify-between rounded-sm border p-3', {
              'border-blue-gray': message.status === 'read',
            })}
            onClick={() => {
              dispatch(makeAsRead(message.id))
              dispatch(setCurrentMessagesId(message.id))
            }}
          >
            <div className="text-charcoal self-center">
              {user?.email === message.email
                ? `${t('messages.common.to')}: ${name} ${lastName}`
                : `${name} ${lastName}`}
            </div>
            <div className="text-charcoal hidden w-[45%] lg:flex">
              <span className="line-clamp-1 overflow-hidden">{text}</span>
            </div>
            <div className="text-blue-gray flex items-center gap-3">
              <span>{date}</span>
              <Button className="!max-h-fit w-fit p-0" variant="text">
                <Icon
                  id={message.status === 'read' ? 'openEmailIcon' : 'emailIcon'}
                  className="text-blue-gray hover:text-charcoal h-6 w-6 transition-all duration-300"
                  onClick={(e) => {
                    actionHandler(e, makeAsRead(message.id))
                  }}
                />
              </Button>
              <Button className="!max-h-fit w-fit p-0" variant="text">
                <Icon
                  id={
                    message.isArchived ? 'inboxArchiveIcon' : 'downSquareIcon'
                  }
                  className="text-blue-gray hover:text-charcoal h-6 w-6 transition-all duration-300"
                  onClick={(e) => {
                    actionHandler(e, moveToArchive(message.id))
                  }}
                />
              </Button>
              <Button className="!max-h-fit w-fit p-0" variant="text">
                <Icon
                  id="deleteIcon"
                  className="text-blue-gray hover:text-charcoal h-6 w-6 transition-all duration-300"
                  onClick={(e) => {
                    actionHandler(e, deleteMessages(message.id))
                  }}
                />
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
