import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HookIcon = ({
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
    <path d='M18,6C18,7.82 16.76,9.41 15,9.86V17C15,19.76 12.76,22 10,22C7.24,22 5,19.76 5,17V12L10,17H7C7,18.66 8.34,20 10,20C11.66,20 13,18.66 13,17V9.86C11.23,9.4 10,7.8 10,5.97C10,3.76 11.8,2 14,2C16.22,2 18,3.79 18,6M14,8C15.1,8 16,7.1 16,6C16,4.9 15.1,4 14,4C12.9,4 12,4.9 12,6C12,7.1 12.9,8 14,8Z' />
  </Svg>
)

HookIcon.displayName = 'HookIcon'

HookIcon.defaultProps = {
  size: 24
}

export default HookIcon