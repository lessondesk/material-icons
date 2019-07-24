import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArtistOutlineIcon = ({
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
    <path d='M11,4C13.21,4 15,5.79 15,8C15,10.21 13.21,12 11,12C8.79,12 7,10.21 7,8C7,5.79 8.79,4 11,4M11,6C9.9,6 9,6.9 9,8C9,9.1 9.9,10 11,10C12.1,10 13,9.1 13,8C13,6.9 12.1,6 11,6M11,13C12.1,13 13.66,13.23 15.11,13.69C14.5,14.07 14,14.6 13.61,15.23C12.79,15.03 11.89,14.9 11,14.9C8.03,14.9 4.9,16.36 4.9,17V18.1H13.04C13.13,18.8 13.38,19.44 13.76,20H3V17C3,14.34 8.33,13 11,13M18.5,10H20L22,10V12H20V17.5C20,18.88 18.88,20 17.5,20C16.12,20 15,18.88 15,17.5C15,16.12 16.12,15 17.5,15C17.86,15 18.19,15.07 18.5,15.21V10Z' />
  </Svg>
)

ArtistOutlineIcon.displayName = 'ArtistOutlineIcon'

ArtistOutlineIcon.defaultProps = {
  size: 24
}

export default ArtistOutlineIcon