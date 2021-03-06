import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BellSleepOutlineIcon = ({
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
    <path d='M10,21H14C14,22.1 13.1,23 12,23C10.9,23 10,22.1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4C10,2.9 10.9,2 12,2C13.1,2 14,2.9 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11C17,8.24 14.76,6 12,6C9.24,6 7,8.24 7,11V18H17V11M9,9V11H12.24L9,13.7V16H15V14H11.76L15,11.3V9H9Z' />
  </Svg>
)

BellSleepOutlineIcon.displayName = 'BellSleepOutlineIcon'

BellSleepOutlineIcon.defaultProps = {
  size: 24
}

export default BellSleepOutlineIcon