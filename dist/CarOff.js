import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CarOffIcon = ({
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
    <path d='M20.5,19.85L6.41,5.76L2.41,1.76L1.11,3L4.57,6.46L3,11V19C3,19.55 3.45,20 4,20H5C5.55,20 6,19.55 6,19V18H16.11L20.84,22.73L22.11,21.46L20.5,19.85M6.5,15C5.67,15 5,14.33 5,13.5C5,12.67 5.67,12 6.5,12C7.33,12 8,12.67 8,13.5C8,14.33 7.33,15 6.5,15M5,10L5.78,7.67L8.11,10H5M17.5,5.5L19,10H13.2L16.12,12.92C16.5,12.17 17.37,11.86 18.12,12.21C18.87,12.57 19.18,13.47 18.83,14.21C18.68,14.5 18.43,14.77 18.12,14.92L21,17.8V11L18.92,5C18.71,4.4 18.14,4 17.5,4H7.2L8.7,5.5H17.5Z' />
  </Svg>
)

CarOffIcon.displayName = 'CarOffIcon'

CarOffIcon.defaultProps = {
  size: 24
}

export default CarOffIcon