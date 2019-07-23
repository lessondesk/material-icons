import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MathSinIcon = ({
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
    <path d='M4,7C2.9,7 2,7.9 2,9V11C2,12.1 2.9,13 4,13H6V15H2V17H6C7.1,17 8,16.1 8,15V13C8,11.9 7.1,11 6,11H4V9H8V7H4M14,7V9H13V15H14V17H10V15H11V9H10V7H14M16,7V17H18V12L20,17H22V7H20V12L18,7H16Z' />
  </Svg>
)

MathSinIcon.displayName = 'MathSinIcon'

MathSinIcon.defaultProps = {
  size: 24
}

export default MathSinIcon