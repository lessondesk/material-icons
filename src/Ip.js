import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const IpIcon = ({
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
    <path d='M16,11H14V9H16V11M3,5C3,3.9 3.9,3 5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16C17.1,13 18,12.1 18,11V9C18,7.9 17.1,7 16,7H12V17Z' />
  </Svg>
)

IpIcon.displayName = 'IpIcon'

IpIcon.defaultProps = {
  size: 24
}

export default IpIcon