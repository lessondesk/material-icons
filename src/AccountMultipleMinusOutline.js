import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AccountMultipleMinusOutlineIcon = ({
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
    <path d='M13,13.75C10.66,13.75 7,14.92 7,17.25V19H19V17.25C19,14.92 15.34,13.75 13,13.75M9.34,17C10.18,16.42 11.21,15.75 13,15.75C14.79,15.75 15.82,16.42 16.66,17M13,5C11.07,5 9.5,6.57 9.5,8.5C9.5,10.43 11.07,12 13,12C14.93,12 16.5,10.43 16.5,8.5C16.5,6.57 14.93,5 13,5M13,10C12.17,10 11.5,9.33 11.5,8.5C11.5,7.67 12.17,7 13,7C13.83,7 14.5,7.67 14.5,8.5C14.5,9.33 13.83,10 13,10M19,13.81C20.16,14.65 20.96,15.77 20.96,17.25V19H24V17.25C24,15.23 21.46,14.08 19,13.81M21,8.5C21,10.43 19.43,12 17.5,12C17.42,12 17.34,12 17.26,11.97C18.04,11.03 18.5,9.82 18.5,8.5C18.5,7.18 18.04,5.97 17.26,5.03C17.34,5 17.42,5 17.5,5C19.43,5 21,6.57 21,8.5M0,11H8V13H0' />
  </Svg>
)

AccountMultipleMinusOutlineIcon.displayName = 'AccountMultipleMinusOutlineIcon'

AccountMultipleMinusOutlineIcon.defaultProps = {
  size: 24
}

export default AccountMultipleMinusOutlineIcon