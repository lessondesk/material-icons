import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaRCircleIcon = ({
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
    <path d='M9,7V17H11V13H11.8L13,17H15L13.76,12.85C14.5,12.55 15,11.84 15,11V9C15,7.9 14.1,7 13,7H9M11,9H13V11H11V9M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2Z' />
  </Svg>
)

AlphaRCircleIcon.displayName = 'AlphaRCircleIcon'

AlphaRCircleIcon.defaultProps = {
  size: 24
}

export default AlphaRCircleIcon