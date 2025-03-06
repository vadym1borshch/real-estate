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
      className="borer-charcoal rounded-lg border px-6 relative"
      placeholder={null}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >

      <AccordionHeader
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        icon={null}
        className={cn(
          '!font-400 relative cursor-pointer border-0 py-[1.3125rem] text-xl  pr-8',
          { 'border-gray border-b': open }
        )}
        onClick={() => setOpen(!open)}
      >
        {label}
        <Icon
          id="chevronDownIcon"
          className={cn(
            'absolute right-0 top-1/2 -translate-y-1/2 text-charcoal h-[24px] w-[24px] self-end transition-transform lg:h-6 lg:w-6',
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
