import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GoogleAlloIcon = ({
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
    <path d='M22,12V21C22,21.5 21.76,21.82 21.3,21.96C20.85,22.1 20.5,21.97 20.2,21.56L18.66,19.45C16.78,21.14 14.56,22 12,22C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12Z' />
  </Svg>
)

GoogleAlloIcon.displayName = 'GoogleAlloIcon'

GoogleAlloIcon.defaultProps = {
  size: 24
}

export default GoogleAlloIcon