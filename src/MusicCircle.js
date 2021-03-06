import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MusicCircleIcon = ({
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
    <path d='M16,9V7H12V12.5C11.58,12.19 11.07,12 10.5,12C9.12,12 8,13.12 8,14.5C8,15.88 9.12,17 10.5,17C11.88,17 13,15.88 13,14.5V9H16M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2Z' />
  </Svg>
)

MusicCircleIcon.displayName = 'MusicCircleIcon'

MusicCircleIcon.defaultProps = {
  size: 24
}

export default MusicCircleIcon