import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GoogleHangoutsIcon = ({
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
    <path d='M15,11L14,13H12.5L13.5,11H12V8H15M11,11L10,13H8.5L9.5,11H8V8H11M11.5,2C6.81,2 3,5.81 3,10.5C3,15.19 6.81,19 11.5,19H12V22.5C16.86,20.15 20,15 20,10.5C20,5.8 16.19,2 11.5,2Z' />
  </Svg>
)

GoogleHangoutsIcon.displayName = 'GoogleHangoutsIcon'

GoogleHangoutsIcon.defaultProps = {
  size: 24
}

export default GoogleHangoutsIcon