import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ContactPhoneIcon = ({
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
    <path d='M22,3H2C0.9,3 0,3.9 0,5V19C0,20.1 0.9,21 2,21H22C23.1,21 24,20.1 24,19V5C24,3.9 23.1,3 22,3M8,6C9.66,6 11,7.34 11,9C11,10.66 9.66,12 8,12C6.34,12 5,10.66 5,9C5,7.34 6.34,6 8,6M14,18H2V17C2,15 6,13.9 8,13.9C10,13.9 14,15 14,17V18M17.85,14H19.5L21,16L19,18C17.7,17 16.73,15.61 16.28,14C16.1,13.36 16,12.69 16,12C16,11.31 16.1,10.64 16.28,10C16.73,8.38 17.7,7 19,6L21,8L19.5,10H17.85C17.63,10.63 17.5,11.3 17.5,12C17.5,12.7 17.63,13.37 17.85,14Z' />
  </Svg>
)

ContactPhoneIcon.displayName = 'ContactPhoneIcon'

ContactPhoneIcon.defaultProps = {
  size: 24
}

export default ContactPhoneIcon