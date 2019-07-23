import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ContactPhoneOutlineIcon = ({
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
    <path d='M22,3H2C0.9,3 0,3.9 0,5V19C0,20.1 0.9,21 2,21H22C23.1,21 24,20.1 24,19V5C24,3.9 23.1,3 22,3M22,19H2V5H22V19M19,18L21,16L19.5,14H17.85C17.63,13.37 17.5,12.7 17.5,12C17.5,11.3 17.63,10.63 17.85,10H19.5L21,8L19,6C17.7,7 16.73,8.38 16.28,10C16.1,10.64 16,11.31 16,12C16,12.69 16.1,13.36 16.28,14C16.73,15.61 17.7,17 19,18M9,12C10.66,12 12,10.66 12,9C12,7.34 10.66,6 9,6C7.34,6 6,7.34 6,9C6,10.66 7.34,12 9,12M9,8C9.55,8 10,8.45 10,9C10,9.55 9.55,10 9,10C8.45,10 8,9.55 8,9C8,8.45 8.45,8 9,8M15,16.59C15,14.09 11.03,13 9,13C6.97,13 3,14.09 3,16.59V18H15V16.59M5.5,16C6.22,15.5 7.7,15 9,15C10.3,15 11.77,15.5 12.5,16H5.5Z' />
  </Svg>
)

ContactPhoneOutlineIcon.displayName = 'ContactPhoneOutlineIcon'

ContactPhoneOutlineIcon.defaultProps = {
  size: 24
}

export default ContactPhoneOutlineIcon