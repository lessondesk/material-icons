import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RadioIcon = ({
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
    <path d='M20,6C21.1,6 22,6.9 22,8V20C22,21.1 21.1,22 20,22H4C2.9,22 2,21.1 2,20V8C2,7.15 2.53,6.42 3.28,6.13L15.71,1L16.47,2.83L8.83,6H20M20,8H4V12H16V10H18V12H20V8M7,14C5.34,14 4,15.34 4,17C4,18.66 5.34,20 7,20C8.66,20 10,18.66 10,17C10,15.34 8.66,14 7,14Z' />
  </Svg>
)

RadioIcon.displayName = 'RadioIcon'

RadioIcon.defaultProps = {
  size: 24
}

export default RadioIcon