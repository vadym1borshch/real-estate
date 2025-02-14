import React, { ReactNode } from 'react'
import {
  Accordion as TAccordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'
import { cn } from '../../../helpers/ui.ts'
import Icon from '../icon'

interface Props {
  label: string
  children: ReactNode
  open: boolean
  setOpen: (open: boolean) => void
}

const Accordion = ({ label, children, open, setOpen }: Props) => {

  return (
    <TAccordion open={open} className=" rounded-lg border borer-charcoal px-6 ">
      <AccordionHeader
        icon={null}
        className={cn('border-0 !font-400 text-xl py-[1.3125rem] cursor-pointer',
          { 'border-b border-gray': open },
        )}
        onClick={() => setOpen(!open)}
      >
        {label}
        <Icon
          id="chevronDownIcon"
          className={cn('w-6 h-6 self-end text-charcoal transition-transform',
            { 'rotate-180 transition-transform': open })}
        />
      </AccordionHeader>
      <AccordionBody className="text-md font-400 py-[1.3125rem]">
        {children}
      </AccordionBody>
    </TAccordion>
  )
}

export default Accordion