import { ReactNode } from 'react'
import {
  Accordion as TAccordion,
  AccordionBody,
  AccordionHeader,
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
    <TAccordion
      open={open}
      className="borer-charcoal relative rounded-lg border px-6"
      placeholder={null}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <AccordionHeader
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        icon={null}
        className={cn(
          '!font-400 relative cursor-pointer border-0 py-[1.3125rem] pr-8 text-xl',
          { 'border-gray border-b': open }
        )}
        onClick={() => setOpen(!open)}
      >
        {label}
        <Icon
          id="chevronDownIcon"
          className={cn(
            'text-charcoal absolute top-1/2 right-0 h-6 w-6 -translate-y-1/2 self-end transition-transform',
            { 'rotate-180 transition-transform': open }
          )}
        />
      </AccordionHeader>
      <AccordionBody className="text-md font-400 py-[1.3125rem]">
        {children}
      </AccordionBody>
    </TAccordion>
  )
}

export default Accordion
