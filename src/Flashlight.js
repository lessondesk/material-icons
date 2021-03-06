import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FlashlightIcon = ({
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
    <path d='M9,10L6,5H18L15,10H9M18,4H6V2H18V4M9,22V11H15V22H9M12,13C11.45,13 11,13.45 11,14C11,14.55 11.45,15 12,15C12.55,15 13,14.55 13,14C13,13.45 12.55,13 12,13Z' />
  </Svg>
)

FlashlightIcon.displayName = 'FlashlightIcon'

FlashlightIcon.defaultProps = {
  size: 24
}

export default FlashlightIcon