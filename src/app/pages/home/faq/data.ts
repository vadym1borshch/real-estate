export interface IFaqFilter {
  id: string
  value: string
  key: string
}

export const faqFilters: IFaqFilter[] = [
  {
    id: '1',
    value: 'faq.filters.gen-questions',
    key: 'gen-questions',
  },
  {
    id: '2',
    value: 'faq.filters.buy',
    key: 'buy',
  },
  {
    id: '3',
    value: 'faq.filters.rent',
    key: 'rent',
  },
  {
    id: '4',
    value: 'faq.filters.sell',
    key: 'sell',
  },
  {
    id: '5',
    value: 'faq.filters.rent-out',
    key: 'rent-out',
  },
  {
    id: '6',
    value: 'faq.filters.tech-support',
    key: 'tech-support',
  },
]

export type Data = { id: string; question: string; answer: string }

export type QuestionsData = { id: string; key: string; data: Data[] }[]

export const faqData: QuestionsData = [
  {
    id: '1',
    key: 'buy',
    data: [
      {
        id: '1',
        question: 'faq.buy.how-buy-property.question',
        answer: 'faq.buy.how-buy-property.answer',
      },
      {
        id: '2',
        question: 'faq.buy.documents-need-to-sell-property.question',
        answer: 'faq.buy.documents-need-to-sell-property.answer',
      },
      {
        id: '3',
        question: 'faq.buy.how-find-best-rental-offers.question',
        answer: 'faq.buy.how-find-best-rental-offers.answer',
      },
      {
        id: '4',
        question: 'faq.buy.costs-associated-property.question',
        answer: 'faq.buy.costs-associated-property.answer',
      },
      {
        id: '5',
        question: 'faq.buy.how-arrange-viewing-appointment.question',
        answer: 'faq.buy.how-arrange-viewing-appointment.answer',
      },
    ],
  },
  {
    id: '2',
    key: 'gen-questions',
    data: [
      {
        id: '1',
        question: 'faq.gen-questions.register-on-platform.question',
        answer: 'faq.gen-questions.register-on-platform.answer',
      },
      {
        id: '2',
        question: 'faq.gen-questions.costs-for-using-platform.question',
        answer: 'faq.gen-questions.costs-for-using-platform.answer',
      },
      {
        id: '3',
        question: 'faq.gen-questions.reset-password.question',
        answer: 'faq.gen-questions.reset-password.answer',
      },
      {
        id: '4',
        question: 'faq.gen-questions.edit-delete-listing.question',
        answer: 'faq.gen-questions.edit-delete-listing.answer',
      },
      {
        id: '5',
        question: 'faq.gen-questions.customer-support.question',
        answer: 'faq.gen-questions.customer-support.answer',
      },
    ],
  },
  {
    id: '3',
    key: 'rent',
    data: [
      {
        id: '1',
        question: 'faq.rent.find-rental-property.question',
        answer: 'faq.rent.find-rental-property.answer',
      },
      {
        id: '2',
        question: 'faq.rent.contact-landlord.question',
        answer: 'faq.rent.contact-landlord.answer',
      },
      {
        id: '3',
        question: 'faq.rent.register-rent.question',
        answer: 'faq.rent.register-rent.answer',
      },
      {
        id: '4',
        question: 'faq.rent.costs-involved-renting.question',
        answer: 'faq.rent.costs-involved-renting.answer',
      },
      {
        id: '5',
        question: 'faq.rent.safe-rent-property.question',
        answer: 'faq.rent.safe-rent-property.answer',
      },
    ],
  },
  {
    id: '4',
    key: 'sell',
    data: [
      {
        id: '1',
        question: 'faq.sell.sell-property.question',
        answer: 'faq.sell.sell-property.answer',
      },
      {
        id: '2',
        question: 'faq.sell.documents-to-sell.question',
        answer: 'faq.sell.documents-to-sell.answer',
      },
      {
        id: '3',
        question: 'faq.sell.how-long-sell.question',
        answer: 'faq.sell.how-long-sell.answer',
      },
      {
        id: '4',
        question: 'faq.sell.edit-remove-listing.question',
        answer: 'faq.sell.edit-remove-listing.answer',
      },
      {
        id: '5',
        question: 'faq.sell.costs-involved-selling.question',
        answer: 'faq.sell.costs-involved-selling.answer',
      },
    ],
  },
  {
    id: '5',
    key: 'rent-out',
    data: [
      {
        id: '1',
        question: 'faq.rent-out.rent-out-property.question',
        answer: 'faq.rent-out.rent-out-property.answer',
      },
      {
        id: '2',
        question: 'faq.rent-out.documents-to-rent-out.question',
        answer: 'faq.rent-out.documents-to-rent-out.answer',
      },
      {
        id: '3',
        question: 'faq.rent-out.quickly-find-tenant.question',
        answer: 'faq.rent-out.quickly-find-tenant.answer',
      },
      {
        id: '4',
        question: 'faq.rent-out.edit-remove-listing.question',
        answer: 'faq.rent-out.edit-remove-listing.answer',
      },
      {
        id: '5',
        question: 'faq.rent-out.any-costs-landlords.question',
        answer: 'faq.rent-out.any-costs-landlords.answer',
      },
    ],
  },
  {
    id: '6',
    key: 'tech-support',
    data: [
      {
        id: '1',
        question: 'faq.tech-support.can-not-log-account.question',
        answer: 'faq.tech-support.can-not-log-account.answer',
      },
      {
        id: '2',
        question: 'faq.tech-support.listing-not-displaying.question',
        answer: 'faq.tech-support.listing-not-displaying.answer',
      },
      {
        id: '3',
        question: 'faq.tech-support.can-change-account-settings.question',
        answer: 'faq.tech-support.can-change-account-settings.answer',
      },
      {
        id: '4',
        question:
          'faq.tech-support.not-receiving-emails-from-platform.question',
        answer: 'faq.tech-support.not-receiving-emails-from-platform.answer',
      },
      {
        id: '5',
        question: 'faq.tech-support.contact-support.question',
        answer: 'faq.tech-support.contact-support.answer',
      },
    ],
  },
]
