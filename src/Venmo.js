import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const VenmoIcon = ({
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
    <path d='M19.5,3C20.14,4.08 20.44,5.19 20.44,6.6C20.44,11.08 16.61,16.91 13.5,21H6.41L3.56,4L9.77,3.39L11.28,15.5C12.69,13.21 14.42,9.61 14.42,7.16C14.42,5.81 14.19,4.9 13.83,4.15L19.5,3Z' />
  </Svg>
)

VenmoIcon.displayName = 'VenmoIcon'

VenmoIcon.defaultProps = {
  size: 24
}

export default VenmoIcon