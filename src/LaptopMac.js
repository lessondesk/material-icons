import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LaptopMacIcon = ({
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
    <path d='M12,19C11.45,19 11,18.55 11,18C11,17.45 11.45,17 12,17C12.55,17 13,17.45 13,18C13,18.55 12.55,19 12,19M4,5H20V16H4M20,18C21.1,18 22,17.1 22,16V5C22,3.89 21.1,3 20,3H4C2.89,3 2,3.89 2,5V16C2,17.1 2.9,18 4,18H0C0,19.1 0.9,20 2,20H22C23.1,20 24,19.1 24,18H20Z' />
  </Svg>
)

LaptopMacIcon.displayName = 'LaptopMacIcon'

LaptopMacIcon.defaultProps = {
  size: 24
}

export default LaptopMacIcon