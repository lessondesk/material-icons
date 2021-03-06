import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EmailSearchOutlineIcon = ({
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
    <path d='M3,4H19C20.1,4 21,4.9 21,6V10.82C20.42,10.26 19.74,9.81 19,9.5V8.37L17.78,9.13C17.36,9.04 16.93,9 16.5,9C13.86,9 11.5,10.6 10.5,13.04L3,8.37V18H10.5C10.81,18.74 11.26,19.42 11.81,20H3C1.89,20 1,19.1 1,18V6C1,4.89 1.89,4 3,4M3,6L11,11L19,6H3M16.5,11C19,11 21,13 21,15.5C21,16.38 20.75,17.21 20.31,17.9L23.39,21L22,22.39L18.88,19.32C18.19,19.75 17.37,20 16.5,20C14,20 12,18 12,15.5C12,13 14,11 16.5,11M16.5,13C15.12,13 14,14.12 14,15.5C14,16.88 15.12,18 16.5,18C17.88,18 19,16.88 19,15.5C19,14.12 17.88,13 16.5,13Z' />
  </Svg>
)

EmailSearchOutlineIcon.displayName = 'EmailSearchOutlineIcon'

EmailSearchOutlineIcon.defaultProps = {
  size: 24
}

export default EmailSearchOutlineIcon