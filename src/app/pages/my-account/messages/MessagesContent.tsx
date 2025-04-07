import { useAppSelector } from '../../../../store'
import { usePathname } from '../../../../helpers/hooks/usePathname.ts'
import { MessageWrapper } from './MessageWrapper.tsx'
import {
  selectCurrentDetailsMessages,
  selectCurrentMessages,
  selectCurrentMessagesId,
  selectLoadingMessages,
} from '../../../../store/messagesSlice/selectors.ts'
import { useMemo } from 'react'
import { MessageDetails } from './MessageDetails.tsx'

export const MessagesContent = () => {
  const path = usePathname().split('/')
  const currentPage = path[path.length - 1]
  const currentMessagesId = useAppSelector(selectCurrentMessagesId)
  const messages = useAppSelector(selectCurrentMessages(currentPage))
  const currentMessages = useAppSelector(selectCurrentDetailsMessages)
  const isLoading = useAppSelector(selectLoadingMessages)

  return useMemo(() => {
    if (isLoading) {
      return <div>Loading...</div>
    }

    if (!messages) {
      return <div>Not found messages</div>
    }
    if (currentMessages) {
      return (
        <MessageDetails
          messages={currentMessages}
          currentMessageId={currentMessagesId}
        />
      )
    }
    return <MessageWrapper messages={messages} />
  }, [currentMessages, currentMessagesId, isLoading, messages])
}
