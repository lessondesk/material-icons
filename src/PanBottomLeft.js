import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PanBottomLeftIcon = ({
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
    <path d='M12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10M5.35,13L11,18.65L5,19L5.35,13Z' />
  </Svg>
)

PanBottomLeftIcon.displayName = 'PanBottomLeftIcon'

PanBottomLeftIcon.defaultProps = {
  size: 24
}

export default PanBottomLeftIcon