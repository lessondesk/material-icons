import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const WallpaperIcon = ({
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
    <path d='M4,4H11V2H4C2.9,2 2,2.9 2,4V11H4V4M10,13L6,18H18L15,14L12.97,16.71L10,13M17,8.5C17,7.67 16.33,7 15.5,7C14.67,7 14,7.67 14,8.5C14,9.33 14.67,10 15.5,10C16.33,10 17,9.33 17,8.5M20,2H13V4H20V11H22V4C22,2.9 21.1,2 20,2M20,20H13V22H20C21.1,22 22,21.1 22,20V13H20V20M4,13H2V20C2,21.1 2.9,22 4,22H11V20H4V13Z' />
  </Svg>
)

WallpaperIcon.displayName = 'WallpaperIcon'

WallpaperIcon.defaultProps = {
  size: 24
}

export default WallpaperIcon