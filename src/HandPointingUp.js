import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HandPointingUpIcon = ({
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
    <path d='M14,3V13L17.2,11.31L17.42,11.28C17.71,11.28 17.97,11.4 18.16,11.6L18.9,12.37L14,16.57C13.74,16.84 13.39,17 13,17H6.5C5.73,17 5,16.3 5,15.5V11.14C5,10.53 5.35,10 5.85,9.8L10.79,7.6L12,7.47V3C12,2.45 12.45,2 13,2C13.55,2 14,2.45 14,3M5,19H13V22H5V19Z' />
  </Svg>
)

HandPointingUpIcon.displayName = 'HandPointingUpIcon'

HandPointingUpIcon.defaultProps = {
  size: 24
}

export default HandPointingUpIcon