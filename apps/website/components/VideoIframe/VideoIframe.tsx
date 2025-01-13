import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const VideoWrapper = styled(motion.div)`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
`

export interface IVideoSectionProps {
  title: string
  src?: string
}

export const VideoIframe = ({ title, src }: IVideoSectionProps) => {
  return (
    <VideoWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
      <iframe
        title={title}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100%'
        }}
        src={src}
      />
    </VideoWrapper>
  )
}
