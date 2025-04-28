import FAQ from '../home/faq'
import { useState } from 'react'
import { faqFilters } from '../home/faq/data.ts'
import { useTranslation } from 'react-i18next'
import { cn } from '../../../helpers/ui.ts'

export const FAQPage = () => {
  const [currentFilter, serCurrentFilter] = useState('rent')
  const { t } = useTranslation()
  return (
    <FAQ filter={currentFilter}>
      <div className="flex w-full max-w-[42.6875rem] flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-[3.75rem] text-center lg:pt-[5.625rem]">
        {faqFilters.map((filter) => (
          <span
            key={filter.id}
            onClick={() => serCurrentFilter(filter.key)}
            className={cn(
              'hover:text-gray transition-hover cursor-pointer duration-300',
              { underline: currentFilter === filter.key }
            )}
          >
            {t(filter.value)}
          </span>
        ))}
      </div>
    </FAQ>
  )
}
