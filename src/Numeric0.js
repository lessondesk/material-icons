import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric0Icon = ({
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
    <path d='M11,7C9.9,7 9,7.9 9,9V15C9,16.1 9.9,17 11,17H13C14.1,17 15,16.1 15,15V9C15,7.9 14.1,7 13,7H11M11,9H13V15H11V9Z' />
  </Svg>
)

Numeric0Icon.displayName = 'Numeric0Icon'

Numeric0Icon.defaultProps = {
  size: 24
}

export default Numeric0Icon