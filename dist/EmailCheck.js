import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EmailCheckIcon = ({
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
    <path d='M21,13.34C20.37,13.12 19.7,13 19,13C15.69,13 13,15.69 13,19C13,19.34 13.03,19.67 13.08,20H3C1.9,20 1,19.1 1,18V6C1,4.89 1.89,4 3,4H19C20.1,4 21,4.9 21,6V13.34M23.5,17L18.5,22L15,18.5L16.5,17L18.5,19L22,15.5L23.5,17M3,6V8L11,13L19,8V6L11,11L3,6Z' />
  </Svg>
)

EmailCheckIcon.displayName = 'EmailCheckIcon'

EmailCheckIcon.defaultProps = {
  size: 24
}

export default EmailCheckIcon