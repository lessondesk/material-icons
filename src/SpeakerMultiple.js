import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SpeakerMultipleIcon = ({
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
    <path d='M14,10C12.34,10 11,11.34 11,13C11,14.66 12.34,16 14,16C15.66,16 17,14.66 17,13C17,11.34 15.66,10 14,10M14,18C11.24,18 9,15.76 9,13C9,10.24 11.24,8 14,8C16.76,8 19,10.24 19,13C19,15.76 16.76,18 14,18M14,2C15.1,2 16,2.9 16,4C16,5.1 15.1,6 14,6C12.9,6 12,5.1 12,4C12,2.9 12.9,2 14,2M19,0H9C7.9,0 7,0.9 7,2V18C7,19.1 7.9,20 9,20H19C20.1,20 21,19.1 21,18V2C21,0.9 20.1,0 19,0M5,22H17V24H5C3.9,24 3,23.1 3,22V4H5' />
  </Svg>
)

SpeakerMultipleIcon.displayName = 'SpeakerMultipleIcon'

SpeakerMultipleIcon.defaultProps = {
  size: 24
}

export default SpeakerMultipleIcon