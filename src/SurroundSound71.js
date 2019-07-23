import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SurroundSound71Icon = ({
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
    <path d='M12,17C11.45,17 11,16.55 11,16C11,15.45 11.45,15 12,15C12.55,15 13,15.45 13,16C13,16.55 12.55,17 12,17M18,7V15H19V17H15V15H16V9H15L16,7H18M11,7L8,17H6L8.4,9H5V7H11Z' />
  </Svg>
)

SurroundSound71Icon.displayName = 'SurroundSound71Icon'

SurroundSound71Icon.defaultProps = {
  size: 24
}

export default SurroundSound71Icon