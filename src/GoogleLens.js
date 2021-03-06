import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GoogleLensIcon = ({
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
    <path d='M6,2H18C20.21,2 22,3.79 22,6V12H20V6C20,4.9 19.1,4 18,4H6C4.9,4 4,4.9 4,6V18C4,19.1 4.9,20 6,20H12V22H6C3.79,22 2,20.21 2,18V6C2,3.79 3.79,2 6,2M12,8C14.21,8 16,9.79 16,12C16,14.21 14.21,16 12,16C9.79,16 8,14.21 8,12C8,9.79 9.79,8 12,8M18,16C19.1,16 20,16.9 20,18C20,19.1 19.1,20 18,20C16.9,20 16,19.1 16,18C16,16.9 16.9,16 18,16Z' />
  </Svg>
)

GoogleLensIcon.displayName = 'GoogleLensIcon'

GoogleLensIcon.defaultProps = {
  size: 24
}

export default GoogleLensIcon