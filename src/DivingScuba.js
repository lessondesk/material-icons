import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DivingScubaIcon = ({
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
    <path d='M12,15C13.31,15 14.42,15.83 14.83,17H18C20.21,17 22,18.79 22,21V22H20V21C20,19.9 19.1,19 18,19H14.83C14.42,20.17 13.31,21 12,21C10.34,21 9,19.66 9,18C9,16.34 10.34,15 12,15M12,17C11.45,17 11,17.45 11,18C11,18.55 11.45,19 12,19C12.55,19 13,18.55 13,18C13,17.45 12.55,17 12,17M18,3C19.1,3 20,3.9 20,5V10C20,11.1 19.1,12 18,12H14.85C14.43,12 14.05,12.24 13.9,12.63C13.7,13.23 13.23,13.71 12.62,13.91C11.58,14.25 10.44,13.68 10.1,12.63C9.95,12.24 9.57,12 9.15,12H6C4.9,12 4,11.1 4,10V5C4,3.9 4.9,3 6,3H18M18,10V5H6V10H10.65C10.9,9.46 11.41,9.09 12,9C12.59,9.09 13.1,9.46 13.35,10H18Z' />
  </Svg>
)

DivingScubaIcon.displayName = 'DivingScubaIcon'

DivingScubaIcon.defaultProps = {
  size: 24
}

export default DivingScubaIcon