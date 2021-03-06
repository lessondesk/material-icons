import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AdchoicesIcon = ({
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
    <path d='M9,9C9.55,9 10,9.45 10,10C10,10.55 9.55,11 9,11C8.45,11 8,10.55 8,10C8,9.45 8.45,9 9,9M5,2C7,3 20,10.25 20,10.25C20,10.25 21.46,11.06 21.25,12.25C21.09,13.18 19.5,14 19.5,14L10.5,19C10.5,19 8,20 8,18V13C8,13 8,12 9,12C10,12 10,13 10,13V16.5L16.5,13C16.5,13 17.31,12.65 17.31,12.15C17.31,11.65 16,11 16,11L6,5C6,5 4.5,4 4.5,6V18C4.5,18 4.53,19.42 5.46,18.94C6.79,18.25 7.11,18.43 7.44,19.1C7.96,20.17 6.96,20.71 6.96,20.71L4,22.25C4,22.25 2,23 2,21V4C2,1 5,2 5,2Z' />
  </Svg>
)

AdchoicesIcon.displayName = 'AdchoicesIcon'

AdchoicesIcon.defaultProps = {
  size: 24
}

export default AdchoicesIcon