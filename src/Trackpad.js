import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TrackpadIcon = ({
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
    <path d='M4,3H20C21.1,3 22,3.9 22,5V19C22,20.1 21.1,21 20,21H4C2.9,21 2,20.1 2,19V5C2,3.9 2.9,3 4,3M4,5V13H20V5H4M4,19H11V15H4V19M20,19V15H13V19H20Z' />
  </Svg>
)

TrackpadIcon.displayName = 'TrackpadIcon'

TrackpadIcon.defaultProps = {
  size: 24
}

export default TrackpadIcon