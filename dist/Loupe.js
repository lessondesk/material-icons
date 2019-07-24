import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LoupeIcon = ({
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
    <path d='M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22H20C21.1,22 22,21.1 22,20V12C22,6.48 17.52,2 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z' />
  </Svg>
)

LoupeIcon.displayName = 'LoupeIcon'

LoupeIcon.defaultProps = {
  size: 24
}

export default LoupeIcon