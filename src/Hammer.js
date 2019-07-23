import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HammerIcon = ({
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
    <path d='M16,5L19,8L18.5,8.5C19.5,9.5 20,10 20.5,9.5L22,11C22,12 20.5,13.5 19.5,13.5L18,12C18.5,11.5 18,11 17,10L16,11L13,8C14.5,6 13,4 9,5C10,4 11,3 12,3C12.5,3 14,3 16,5M2,20L4,22L14,12L12,10L2,20Z' />
  </Svg>
)

HammerIcon.displayName = 'HammerIcon'

HammerIcon.defaultProps = {
  size: 24
}

export default HammerIcon