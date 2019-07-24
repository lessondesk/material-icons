import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CarKeyIcon = ({
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
    <path d='M9.5,0C7.84,0 6.5,1.34 6.5,3C6.5,4.66 7.84,6 9.5,6C10.81,6 11.92,5.17 12.33,4H14.5V6H16.5V4H17.5V2H12.33C11.92,0.83 10.81,0 9.5,0M9.5,2C10.05,2 10.5,2.45 10.5,3C10.5,3.55 10.05,4 9.5,4C8.95,4 8.5,3.55 8.5,3C8.5,2.45 8.95,2 9.5,2M6.5,8C5.84,8 5.28,8.42 5.08,9L3,15V23C3,23.55 3.45,24 4,24H5C5.55,24 6,23.55 6,23V22H18V23C18,23.55 18.45,24 19,24H20C20.55,24 21,23.55 21,23V15L18.92,9C18.72,8.42 18.16,8 17.5,8H6.5M6.5,9.5H17.5L19,14H5L6.5,9.5M6.5,16C7.33,16 8,16.67 8,17.5C8,18.33 7.33,19 6.5,19C5.67,19 5,18.33 5,17.5C5,16.67 5.67,16 6.5,16M17.5,16C18.33,16 19,16.67 19,17.5C19,18.33 18.33,19 17.5,19C16.67,19 16,18.33 16,17.5C16,16.67 16.67,16 17.5,16Z' />
  </Svg>
)

CarKeyIcon.displayName = 'CarKeyIcon'

CarKeyIcon.defaultProps = {
  size: 24
}

export default CarKeyIcon