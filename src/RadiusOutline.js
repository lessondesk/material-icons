import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RadiusOutlineIcon = ({
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
    <path d='M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M16,15V13H13.72C13.36,13.62 12.71,14 12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10C12.71,10 13.36,10.38 13.72,11H16V9L19,12L16,15Z' />
  </Svg>
)

RadiusOutlineIcon.displayName = 'RadiusOutlineIcon'

RadiusOutlineIcon.defaultProps = {
  size: 24
}

export default RadiusOutlineIcon