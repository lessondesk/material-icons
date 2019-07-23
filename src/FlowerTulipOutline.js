import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FlowerTulipOutlineIcon = ({
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
    <path d='M3,13C3,17.97 7.03,22 12,22C12,17.03 7.97,13 3,13M5.44,15.44C7.35,16.15 8.85,17.65 9.56,19.56C7.65,18.85 6.15,17.35 5.44,15.44M12,22C16.97,22 21,17.97 21,13C16.03,13 12,17.03 12,22M14.42,19.57C15.11,17.64 16.64,16.11 18.57,15.42C17.86,17.34 16.34,18.86 14.42,19.57M12,14C15.31,14 18,11.31 18,8V3C17.26,3 16.53,3.12 15.84,3.39C15.29,3.62 14.8,3.96 14.39,4.39L12,2L9.61,4.39C9.2,3.96 8.71,3.62 8.16,3.39C7.47,3.12 6.74,3 6,3V8C6,11.31 8.69,14 12,14M8,5.61L9.57,7.26L12,4.83L14.43,7.26L16,5.61V8C16,10.21 14.21,12 12,12C9.79,12 8,10.21 8,8V5.61Z' />
  </Svg>
)

FlowerTulipOutlineIcon.displayName = 'FlowerTulipOutlineIcon'

FlowerTulipOutlineIcon.defaultProps = {
  size: 24
}

export default FlowerTulipOutlineIcon