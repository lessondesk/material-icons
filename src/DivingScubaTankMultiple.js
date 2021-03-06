import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DivingScubaTankMultipleIcon = ({
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
    <path d='M22,18.5C22,19.88 20.88,21 19.5,21C18.12,21 17,19.88 17,18.5C17,17.47 17.62,16.59 18.5,16.21V6H14V7.35C15.22,7.93 16,9.15 16,10.5V22H2V10.5C2,9.15 2.78,7.93 4,7.35V6H2V4H4V3.5C4,2.67 4.67,2 5.5,2C6.33,2 7,2.67 7,3.5V4H11V3.5C11,2.67 11.67,2 12.5,2C13.33,2 14,2.67 14,3.5V4H18.5C19.6,4 20.5,4.9 20.5,6V16.21C21.38,16.59 22,17.47 22,18.5M11,7.35V6H7V7.35C8.22,7.93 9,9.15 9,10.5C9,9.15 9.78,7.93 11,7.35Z' />
  </Svg>
)

DivingScubaTankMultipleIcon.displayName = 'DivingScubaTankMultipleIcon'

DivingScubaTankMultipleIcon.defaultProps = {
  size: 24
}

export default DivingScubaTankMultipleIcon