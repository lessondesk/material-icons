import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RollerbladeIcon = ({
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
    <path d='M19,15C19,15 19,16 17,16C15,16 4,16 4,16V3H11L11.21,4.5H9.24V6H11.43L11.64,7.5H9.24V9H11.86L12,10H14C14,10 19,10 19,15M5.5,17C4.12,17 3,18.12 3,19.5C3,20.88 4.12,22 5.5,22C6.88,22 8,20.88 8,19.5C8,18.12 6.88,17 5.5,17M17.5,17C16.12,17 15,18.12 15,19.5C15,20.88 16.12,22 17.5,22C18.88,22 20,20.88 20,19.5C20,18.12 18.88,17 17.5,17M11.5,17C10.12,17 9,18.12 9,19.5C9,20.88 10.12,22 11.5,22C12.88,22 14,20.88 14,19.5C14,18.12 12.88,17 11.5,17Z' />
  </Svg>
)

RollerbladeIcon.displayName = 'RollerbladeIcon'

RollerbladeIcon.defaultProps = {
  size: 24
}

export default RollerbladeIcon