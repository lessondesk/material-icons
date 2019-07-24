import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CarMultipleIcon = ({
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
    <path d='M8,11L9.5,6.5H18.5L20,11M18.5,16C17.67,16 17,15.33 17,14.5C17,13.67 17.67,13 18.5,13C19.33,13 20,13.67 20,14.5C20,15.33 19.33,16 18.5,16M9.5,16C8.67,16 8,15.33 8,14.5C8,13.67 8.67,13 9.5,13C10.33,13 11,13.67 11,14.5C11,15.33 10.33,16 9.5,16M19.92,6C19.71,5.4 19.14,5 18.5,5H9.5C8.86,5 8.29,5.4 8.08,6L6,12V20C6,20.55 6.45,21 7,21H8C8.55,21 9,20.55 9,20V19H19V20C19,20.55 19.45,21 20,21H21C21.55,21 22,20.55 22,20V12L19.92,6M14.92,3C14.71,2.4 14.14,2 13.5,2H4.5C3.86,2 3.29,2.4 3.08,3L1,9V17C1,17.55 1.45,18 2,18H3C3.55,18 4,17.55 4,17V12.91C3.22,12.63 2.82,11.77 3.1,11C3.32,10.4 3.87,10 4.5,10H4.57L5.27,8H3L4.5,3.5H15.09L14.92,3Z' />
  </Svg>
)

CarMultipleIcon.displayName = 'CarMultipleIcon'

CarMultipleIcon.defaultProps = {
  size: 24
}

export default CarMultipleIcon