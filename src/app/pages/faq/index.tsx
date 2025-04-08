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
      <div className="pt-[5.525rem] flex flex-wrap max-w-[42.6875rem] gap-x-6 gap-y-3 w-full items-center text-center justify-center">
        {faqFilters.map((filter) => (
          <span
            key={filter.id}
            onClick={()=>serCurrentFilter(filter.key)}
            className={cn("cursor-pointer hover:text-gray transition-hover duration-300",{ 'underline': currentFilter === filter.key })}
          >
            {t(filter.value)}
          </span>
        ))}
      </div>
    </FAQ>
  )
}