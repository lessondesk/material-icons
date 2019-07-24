import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AccountKeyOutlineIcon = ({
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
    <path d='M5.83,10C5.42,8.83 4.31,8 3,8C1.34,8 0,9.34 0,11C0,12.66 1.34,14 3,14C4.31,14 5.42,13.17 5.83,12H8V14H10V12H11V10H5.83M3,12C2.45,12 2,11.55 2,11C2,10.45 2.45,10 3,10C3.55,10 4,10.45 4,11C4,11.55 3.55,12 3,12M16,4C13.79,4 12,5.79 12,8C12,10.21 13.79,12 16,12C18.21,12 20,10.21 20,8C20,5.79 18.21,4 16,4M16,10.1C14.84,10.1 13.9,9.16 13.9,8C13.9,6.84 14.84,5.9 16,5.9C17.16,5.9 18.1,6.84 18.1,8C18.1,9.16 17.16,10.1 16,10.1M16,13C13.33,13 8,14.33 8,17V20H24V17C24,14.33 18.67,13 16,13M22.1,18.1H9.9V17C9.9,16.36 13,14.9 16,14.9C18.97,14.9 22.1,16.36 22.1,17V18.1Z' />
  </Svg>
)

AccountKeyOutlineIcon.displayName = 'AccountKeyOutlineIcon'

AccountKeyOutlineIcon.defaultProps = {
  size: 24
}

export default AccountKeyOutlineIcon