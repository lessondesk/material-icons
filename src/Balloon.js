import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BalloonIcon = ({
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
    <path d='M13.16,12.74L14,14H12.5C12.35,16.71 12,19.41 11.5,22.08L10.5,21.92C11,19.3 11.34,16.66 11.5,14H10L10.84,12.74C8.64,11.79 7,8.36 7,6C7,3.24 9.24,1 12,1C14.76,1 17,3.24 17,6C17,8.36 15.36,11.79 13.16,12.74Z' />
  </Svg>
)

BalloonIcon.displayName = 'BalloonIcon'

BalloonIcon.defaultProps = {
  size: 24
}

export default BalloonIcon