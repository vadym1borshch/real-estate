import { useRef, ReactNode } from 'react'
import Input from '../../atoms/input'
import { useTranslation } from 'react-i18next'
import { ClickOutsideWrapper } from '../../wrappers/outsideClick'
import { DropdownMenu } from '../../atoms/dropdown/Menu.tsx'

interface Props {
  children: ReactNode
  label?: ReactNode
  open: boolean
  setOpen: (value: boolean) => void
  inputValue: string
  setInputValue: (value: string) => void
  dropdownClassName?: string
}

const DropdownInput = ({
  children,
  open,
  setOpen,
  inputValue,
  setInputValue,
  dropdownClassName,
}: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const { t } = useTranslation()

  return (
    <ClickOutsideWrapper
      onClickOutside={() => {
        setOpen(false)
      }}
      className="relative w-full"
    >
      <div ref={containerRef}>
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          iconId="navigationIcon"
          iconClassName="w-6 h-6 bg-transparent text-charcoal"
          placeholder={inputValue || t('filters.address')}
          className="min-h-12 capitalize placeholder:text-blue-gray"
          iconSide="left"
          onFocus={() => {
            setOpen(true)
          }}
        />
        {open && (
          <DropdownMenu className={dropdownClassName}>{children}</DropdownMenu>
        )}
      </div>
    </ClickOutsideWrapper>
  )
}

export default DropdownInput
