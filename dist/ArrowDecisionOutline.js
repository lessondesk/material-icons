import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowDecisionOutlineIcon = ({
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
    <path d='M9.64,13.4C8.63,12.5 7.34,12.03 6,12V15L2,11L6,7V10C7.67,10 9.3,10.57 10.63,11.59C10.22,12.15 9.89,12.76 9.64,13.4M18,15V12C17.5,12 13.5,12.16 13.05,16.2C14.61,16.75 15.43,18.47 14.88,20.03C14.33,21.59 12.61,22.41 11.05,21.86C9.5,21.3 8.67,19.59 9.22,18.03C9.5,17.17 10.2,16.5 11.05,16.2C11.34,12.61 14.4,9.88 18,10V7L22,11L18,15M13,19C13,18.45 12.55,18 12,18C11.45,18 11,18.45 11,19C11,19.55 11.45,20 12,20C12.55,20 13,19.55 13,19M11,11.12C11.58,10.46 12.25,9.89 13,9.43V5H16L12,1L8,5H11V11.12Z' />
  </Svg>
)

ArrowDecisionOutlineIcon.displayName = 'ArrowDecisionOutlineIcon'

ArrowDecisionOutlineIcon.defaultProps = {
  size: 24
}

export default ArrowDecisionOutlineIcon