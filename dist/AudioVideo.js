import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AudioVideoIcon = ({
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
    <path d='M20,7H4C2.9,7 2,7.9 2,9V15C2,16.1 2.9,17 4,17H5V18C5,18.6 5.4,19 6,19H8C8.6,19 9,18.6 9,18V17H15V18C15,18.6 15.4,19 16,19H18C18.6,19 19,18.6 19,18V17H20C21.1,17 22,16.1 22,15V9C22,7.9 21.1,7 20,7M14,12H4V10H14V12M18,13C16.9,13 16,12.1 16,11C16,9.9 16.9,9 18,9C19.1,9 20,9.9 20,11C20,12.1 19.1,13 18,13M6,15H4V14H6V15M10,15H8V14H10V15M14,15H12V14H14V15Z' />
  </Svg>
)

AudioVideoIcon.displayName = 'AudioVideoIcon'

AudioVideoIcon.defaultProps = {
  size: 24
}

export default AudioVideoIcon