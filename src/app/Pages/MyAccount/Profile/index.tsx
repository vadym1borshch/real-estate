import Avatar from '../../../../components/atoms/avatar'
import H2 from '../../../../components/atoms/typography/h2'
import { cn } from '../../../../helpers/ui.ts'
import { realEstateAgents } from '../../ServiceAround/mock.ts'
import Icon from '../../../../components/atoms/icon'
import { ProfileForm } from './Form.tsx'

const agent = realEstateAgents[0]

export const ProfilePage = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col items-center md:flex-row md:justify-between md:items-start pb-[4.0625rem]">
        <Avatar size={7} src={agent.photo} className="md:order-2" />
        <div className="flex flex-col items-center gap-1.5 pt-3 md:order-1 md:items-start">
          <H2
            text={`${agent.name} ${agent.lastName}`}
            className="md:text-start"
          />
          <div className="flex flex-col items-center md:flex-row md:gap-3">
            <span className="text-blue-gray text-lg">{agent.agency.name}</span>
            {agent.verified.value ? (
              <span className="text-blue flex items-center gap-[2px]">
                Verified{' '}
                <Icon
                  id="checkBadgeOutlinedIcon"
                  className="h-[24px] w-[24px]"
                />
              </span>
            ) : (
              <span
                className={cn(
                  'text-coral hover:text-light-coral cursor-pointer text-base'
                )}
              >
                Verifizierung durchführen
              </span>
            )}
          </div>
        </div>
      </div>
      <ProfileForm user={agent} />
    </div>
  )
}
