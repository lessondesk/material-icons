import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LockOpenOutlineIcon = ({
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
    <path d='M18,20V10H6V20H18M18,8C19.1,8 20,8.9 20,10V20C20,21.1 19.1,22 18,22H6C4.89,22 4,21.1 4,20V10C4,8.9 4.9,8 6,8H15V6C15,4.34 13.66,3 12,3C10.34,3 9,4.34 9,6H7C7,3.24 9.24,1 12,1C14.76,1 17,3.24 17,6V8H18M12,17C10.9,17 10,16.1 10,15C10,13.9 10.9,13 12,13C13.1,13 14,13.9 14,15C14,16.1 13.1,17 12,17Z' />
  </Svg>
)

LockOpenOutlineIcon.displayName = 'LockOpenOutlineIcon'

LockOpenOutlineIcon.defaultProps = {
  size: 24
}

export default LockOpenOutlineIcon