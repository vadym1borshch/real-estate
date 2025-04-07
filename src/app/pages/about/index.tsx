import { ReactElement, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import H2 from '../../../components/atoms/typography/h2'
import H3 from '../../../components/atoms/typography/h3'
import Button from '../../../components/atoms/button'
import Icon from '../../../components/atoms/icon'
import { useTranslation } from 'react-i18next'
import { advantages } from './mock.ts'

export const About = () => {
  const playerRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const { t } = useTranslation()

  const handlePlayPause = () => {
    setPlaying((play) => !play)
  }

  return (
    <div className="flex flex-col items-center gap-[5.625rem]">
      <div className="flex max-w-[47.5rem] flex-col items-center gap-6">
        <H2 text={t('about.title')} />
        <p className="text-center">{t('about.main-descr')}</p>
      </div>
      <div className="grid max-w-[72.5rem] grid-cols-1 gap-10 md:grid-cols-[2fr_1fr]">
        <div className="relative w-full overflow-hidden rounded-lg">
          <ReactPlayer
            ref={playerRef}
            url="/sampleVid.mp4"
            playing={playing}
            controls
            width="100%"
            height="100%"
            style={{ borderRadius: '8px', minHeight: '420px' }}
            light="/previewVidImg.png"
            playIcon={
              (
                <Button
                  onClick={handlePlayPause}
                  className="relative flex h-24 w-24 cursor-pointer items-center justify-center rounded-full"
                >
                  <div className="absolute h-0 w-0 translate-x-[2px] border-t-[1.25rem] border-b-[1.25rem] border-l-[1.75rem] border-white border-t-transparent border-b-transparent" />
                </Button>
              ) as ReactElement
            }
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-6 text-center md:text-start">
          <H3 text={t('about.communication-title')} />
          <p>{t('about.communication-descr')}</p>
        </div>
      </div>
      <H2
        className="mt-[3.75rem] max-w-[72.5rem] text-center"
        text={t('about.services-descr')}
      />
      <div className="mt-[3.75rem] mb-[9.375rem] grid max-w-[72.5rem] grid-cols-1 justify-between gap-10 md:grid-cols-4">
        {advantages.map((advantage) => (
          <div
            key={advantage.id}
            className="flex max-w-[16.25rem] flex-col items-center gap-6"
          >
            <Icon id={advantage.icon} className="h-[48px] w-[48px]" />
            <p className="text-center">{t(advantage.description)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
