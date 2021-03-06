import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaRIcon = ({
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
    <path d='M9,7V17H11V13H11.8L13,17H15L13.76,12.85C14.5,12.55 15,11.84 15,11V9C15,7.9 14.1,7 13,7H9M11,9H13V11H11V9Z' />
  </Svg>
)

AlphaRIcon.displayName = 'AlphaRIcon'

AlphaRIcon.defaultProps = {
  size: 24
}

export default AlphaRIcon