import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BrightnessPercentIcon = ({
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
    <path d='M20.04,8.71V4H15.34L12,0.69L8.71,4H4V8.71L0.69,12L4,15.34V20.04H8.71L12,23.35L15.34,20.04H20.04V15.34L23.35,12L20.04,8.71M8.83,7.05C9.81,7.05 10.6,7.84 10.6,8.83C10.6,9.81 9.81,10.6 8.83,10.6C7.84,10.6 7.05,9.81 7.05,8.83C7.05,7.84 7.84,7.05 8.83,7.05M15.22,17C14.24,17 13.45,16.2 13.45,15.22C13.45,14.24 14.24,13.45 15.22,13.45C16.2,13.45 17,14.24 17,15.22C17,16.2 16.2,17 15.22,17M8.5,17.03L7,15.53L15.53,7L17.03,8.5L8.5,17.03Z' />
  </Svg>
)

BrightnessPercentIcon.displayName = 'BrightnessPercentIcon'

BrightnessPercentIcon.defaultProps = {
  size: 24
}

export default BrightnessPercentIcon