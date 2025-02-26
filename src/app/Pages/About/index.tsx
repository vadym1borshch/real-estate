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

  const {t} = useTranslation()

  const handlePlayPause = () => {
    setPlaying(play => !play)
  }

  return (
    <div className="flex flex-col gap-[90px] items-center ">
      <div className="flex flex-col items-center max-w-[760px] gap-6">
        <H2 text={t('about.title')} />
        <p className="text-center">
          {t('about.main-descr')}
        </p>
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-10 max-w-[1160px]">
        <div className="w-full relative rounded-lg overflow-hidden">
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
                  className="relative flex items-center justify-center w-24 h-24  rounded-full cursor-pointer">
                  <div
                    className="absolute w-0 h-0 border-t-[1.25rem] border-t-transparent border-b-[1.25rem] border-b-transparent border-l-[1.75rem] border-white translate-x-[2px]" />
                </Button>
              ) as ReactElement
            }
          />
        </div>

        <div className="flex flex-col items-center gap-6 justify-center">
          <H3 text={t('about.communication-title')} />
          <p>
            {t('about.communication-descr')}
          </p>
        </div>
      </div>
      <H2
        className=" text-center mt-[60px] max-w-[1160px]"
        text={t('about.services-descr')}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-[60px] mb-[150px] max-w-[1160px] justify-between">
        {advantages.map((advantage) => (
          <div key={advantage.id} className="flex flex-col items-center max-w-[260px] gap-6">
            <Icon id={advantage.icon} className="w-[48px] h-[48px]" />
            <p className="text-center">
              {t(advantage.description)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}