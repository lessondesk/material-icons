import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HeartPulseIcon = ({
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
    <path d='M7.5,4C4.46,4 2,6.46 2,9.5C2,10 2.09,10.5 2.22,11H6.3L7.57,7.63C7.87,6.83 9.05,6.75 9.43,7.63L11.5,13L12.09,11.58C12.22,11.25 12.57,11 13,11H21.78C21.91,10.5 22,10 22,9.5C22,6.46 19.54,4 16.5,4C14.64,4 13,4.93 12,6.34C11,4.93 9.36,4 7.5,4V4M3,12.5C2.45,12.5 2,12.95 2,13.5C2,14.05 2.45,14.5 3,14.5H5.44L11,20C12,20.9 12,20.9 13,20L18.56,14.5H21C21.55,14.5 22,14.05 22,13.5C22,12.95 21.55,12.5 21,12.5H13.4L12.47,14.8C12.07,15.81 10.92,15.67 10.55,14.83L8.5,9.5L7.54,11.83C7.39,12.21 7.05,12.5 6.6,12.5H3Z' />
  </Svg>
)

HeartPulseIcon.displayName = 'HeartPulseIcon'

HeartPulseIcon.defaultProps = {
  size: 24
}

export default HeartPulseIcon