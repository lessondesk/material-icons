import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TimelineTextOutlineIcon = ({
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
    <path d='M6,12C6,13.1 5.1,14 4,14C2.9,14 2,13.1 2,12C2,10.9 2.9,10 4,10C5.1,10 6,10.9 6,12M5,2V8H3V2H5M3,22V16H5V22H3M22,7V17C22,18.1 21.1,19 20,19H11C9.9,19 9,18.1 9,17V14L7,12L9,10V7C9,5.9 9.9,5 11,5H20C21.1,5 22,5.9 22,7M20,7H11V10.83L9.83,12L11,13.17V17H20V7M13,9H18V11H13V9M13,13H16V15H13V13Z' />
  </Svg>
)

TimelineTextOutlineIcon.displayName = 'TimelineTextOutlineIcon'

TimelineTextOutlineIcon.defaultProps = {
  size: 24
}

export default TimelineTextOutlineIcon