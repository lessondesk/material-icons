import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TextToSpeechIcon = ({
  size,
  ...props
}) => (
  <Svg
    {...props}
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='currentcolor'
  >
    <path d='M8,7C9.1,7 10,7.9 10,9V14C10,15.1 9.1,16 8,16C6.9,16 6,15.1 6,14V9C6,7.9 6.9,7 8,7M14,14C14,16.97 11.84,19.44 9,19.92V22H7V19.92C4.16,19.44 2,16.97 2,14H4C4,16.21 5.79,18 8,18C10.21,18 12,16.21 12,14H14M21.41,9.41L17.17,13.66L18.18,10H14C12.9,10 12,9.1 12,8V4C12,2.9 12.9,2 14,2H20C21.1,2 22,2.9 22,4V8C22,8.55 21.78,9.05 21.41,9.41Z' />
  </Svg>
)

TextToSpeechIcon.displayName = 'TextToSpeechIcon'

TextToSpeechIcon.defaultProps = {
  size: 24
}

export default TextToSpeechIcon