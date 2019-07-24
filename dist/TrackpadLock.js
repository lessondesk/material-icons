import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TrackpadLockIcon = ({
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
    <path d='M3,1C1.89,1 1,1.89 1,3V17C1,18.11 1.89,19 3,19H14V17H12V13H16.68C17.5,12.35 18.47,12 19.5,12C20,12 20.5,12.09 21,12.26V3C21,1.89 20.11,1 19,1H3M3,3H19V11H3V3M3,13H10V17H3V13M19.5,14C18.12,14 17,15.12 17,16.5V17C16.45,17 16,17.45 16,18V22C16,22.55 16.45,23 17,23H22C22.55,23 23,22.55 23,22V18C23,17.45 22.55,17 22,17V16.5C22,15.12 20.88,14 19.5,14M19.5,15C20.33,15 21,15.67 21,16.5V17H18V16.5C18,15.67 18.67,15 19.5,15Z' />
  </Svg>
)

TrackpadLockIcon.displayName = 'TrackpadLockIcon'

TrackpadLockIcon.defaultProps = {
  size: 24
}

export default TrackpadLockIcon