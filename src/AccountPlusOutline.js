import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AccountPlusOutlineIcon = ({
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
    <path d='M15,4C12.79,4 11,5.79 11,8C11,10.21 12.79,12 15,12C17.21,12 19,10.21 19,8C19,5.79 17.21,4 15,4M15,5.9C16.16,5.9 17.1,6.84 17.1,8C17.1,9.16 16.16,10.1 15,10.1C13.84,10.1 12.9,9.16 12.9,8C12.9,6.84 13.84,5.9 15,5.9M4,7V10H1V12H4V15H6V12H9V10H6V7H4M15,13C12.33,13 7,14.33 7,17V20H23V17C23,14.33 17.67,13 15,13M15,14.9C17.97,14.9 21.1,16.36 21.1,17V18.1H8.9V17C8.9,16.36 12,14.9 15,14.9Z' />
  </Svg>
)

AccountPlusOutlineIcon.displayName = 'AccountPlusOutlineIcon'

AccountPlusOutlineIcon.defaultProps = {
  size: 24
}

export default AccountPlusOutlineIcon