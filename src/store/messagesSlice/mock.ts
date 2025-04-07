import { v4 } from 'uuid'

export type MessageStatus = 'new' | 'read'
export type Message = {
  id: string
  sender: {
    name: string
    lastName: string
    email: string
  }
  timestamp: string
  message: string
}

export interface IMessage {
  id: string
  status: MessageStatus
  isArchived: boolean
  email: string
  replies: Message[]
}

export const messagesArr: IMessage[] = [
  {
    id: v4(), //userID
    status: 'read',
    isArchived: false,
    email: 'j.schneider@immobilien-experten.at',
    replies: [
      {
        id: v4(),
        sender: {
          name: 'Johanna',
          lastName: 'Schneider',
          email: 'j.schneider@immobilien-experten.at',
        },
        timestamp: new Date().toISOString(),
        message:
          'Sehr geehrte Damen und Herren,\n\nich hoffe, diese Nachricht erreicht Sie wohlbehalten. Ich interessiere mich sehr für die von Ihnen angebotene Immobilie und würde gerne mehr darüber erfahren. Insbesondere interessiere ich mich für detaillierte Informationen über die Ausstattung, die Lage und die Umgebung der Immobilie.\n\nKönnen Sie mich bitte bezüglich weiterer details und möglicherweise auch zur Vereinbarung eines Besichtigungstermins kontaktieren? Ich bin flexibel und kann mich gerne nach Ihrem Zeitplan richten.\n\nVielen Dank im Voraus für Ihre Mühe und Ihre Zeit. Ich freue mich auf Ihre baldige Rückmeldung.\n\nMit freundlichen Grüßen,\nJohanna',
      },
      {
        id: v4(),
        sender: {
          name: 'Johanna',
          lastName: 'Schneider',
          email: 'j.schneider@immobilien-experten.at',
        },
        timestamp: new Date().toISOString(),
        message:
          'Sehr geehrte Damen und Herren,\n\nich hoffe, diese Nachricht erreicht Sie wohlbehalten. Ich interessiere mich sehr für die von Ihnen angebotene Immobilie und würde gerne mehr darüber erfahren. Insbesondere interessiere ich mich für detaillierte Informationen über die Ausstattung, die Lage und die Umgebung der Immobilie.\n\nKönnen Sie mich bitte bezüglich weiterer details und möglicherweise auch zur Vereinbarung eines Besichtigungstermins kontaktieren? Ich bin flexibel und kann mich gerne nach Ihrem Zeitplan richten.\n\nVielen Dank im Voraus für Ihre Mühe und Ihre Zeit. Ich freue mich auf Ihre baldige Rückmeldung.\n\nMit freundlichen Grüßen,\nJohanna',
      },
      {
        id: v4(),
        sender: {
          name: 'Johanna',
          lastName: 'Schneider',
          email: 'j.schneider@immobilien-experten.at',
        },
        timestamp: new Date().toISOString(),
        message:
          'Sehr geehrte Damen und Herren,\n\nich hoffe, diese Nachricht erreicht Sie wohlbehalten. Ich interessiere mich sehr für die von Ihnen angebotene Immobilie und würde gerne mehr darüber erfahren. Insbesondere interessiere ich mich für detaillierte Informationen über die Ausstattung, die Lage und die Umgebung der Immobilie.\n\nKönnen Sie mich bitte bezüglich weiterer details und möglicherweise auch zur Vereinbarung eines Besichtigungstermins kontaktieren? Ich bin flexibel und kann mich gerne nach Ihrem Zeitplan richten.\n\nVielen Dank im Voraus für Ihre Mühe und Ihre Zeit. Ich freue mich auf Ihre baldige Rückmeldung.\n\nMit freundlichen Grüßen,\nJohanna',
      },
      {
        id: v4(),
        sender: {
          name: 'Johanna',
          lastName: 'Schneider',
          email: 'j.schneider@immobilien-experten.at',
        },
        timestamp: new Date().toISOString(),
        message:
          'Sehr geehrte Damen und Herren,\n\nich hoffe, diese Nachricht erreicht Sie wohlbehalten. Ich interessiere mich sehr für die von Ihnen angebotene Immobilie und würde gerne mehr darüber erfahren. Insbesondere interessiere ich mich für detaillierte Informationen über die Ausstattung, die Lage und die Umgebung der Immobilie.\n\nKönnen Sie mich bitte bezüglich weiterer details und möglicherweise auch zur Vereinbarung eines Besichtigungstermins kontaktieren? Ich bin flexibel und kann mich gerne nach Ihrem Zeitplan richten.\n\nVielen Dank im Voraus für Ihre Mühe und Ihre Zeit. Ich freue mich auf Ihre baldige Rückmeldung.\n\nMit freundlichen Grüßen,\nJohanna',
      },
    ],
  },
  {
    id: v4(), //userID
    status: 'new',
    isArchived: false,
    email: 'j.schneider2@immobilien-experten.at',
    replies: [
      {
        id: v4(),
        sender: {
          name: 'Johanna2',
          lastName: 'Schneider',
          email: 'j.schneider2@immobilien-experten.at',
        },
        timestamp: new Date().toISOString(),
        message:
          'Sehr geehrte Damen und Herren,\n\nich hoffe, diese Nachricht erreicht Sie wohlbehalten. Ich interessiere mich sehr für die von Ihnen angebotene Immobilie und würde gerne mehr darüber erfahren. Insbesondere interessiere ich mich für detaillierte Informationen über die Ausstattung, die Lage und die Umgebung der Immobilie.\n\nKönnen Sie mich bitte bezüglich weiterer details und möglicherweise auch zur Vereinbarung eines Besichtigungstermins kontaktieren? Ich bin flexibel und kann mich gerne nach Ihrem Zeitplan richten.\n\nVielen Dank im Voraus für Ihre Mühe und Ihre Zeit. Ich freue mich auf Ihre baldige Rückmeldung.\n\nMit freundlichen Grüßen,\nJohanna',
      },
    ],
  },
  {
    id: v4(), //userID
    status: 'new',
    isArchived: true,
    email: 'j.schneider3@immobilien-experten.at',
    replies: [
      {
        id: v4(),
        sender: {
          name: 'Johanna3',
          lastName: 'Schneider',
          email: 'j.schneider3@immobilien-experten.at',
        },
        timestamp: new Date().toISOString(),
        message:
          'Sehr geehrte Damen und Herren,\n\nich hoffe, diese Nachricht erreicht Sie wohlbehalten. Ich interessiere mich sehr für die von Ihnen angebotene Immobilie und würde gerne mehr darüber erfahren. Insbesondere interessiere ich mich für detaillierte Informationen über die Ausstattung, die Lage und die Umgebung der Immobilie.\n\nKönnen Sie mich bitte bezüglich weiterer details und möglicherweise auch zur Vereinbarung eines Besichtigungstermins kontaktieren? Ich bin flexibel und kann mich gerne nach Ihrem Zeitplan richten.\n\nVielen Dank im Voraus für Ihre Mühe und Ihre Zeit. Ich freue mich auf Ihre baldige Rückmeldung.\n\nMit freundlichen Grüßen,\nJohanna',
      },
    ],
  },
]
