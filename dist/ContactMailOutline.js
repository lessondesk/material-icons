import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ContactMailOutlineIcon = ({
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
    <path d='M22,3H2C0.9,3 0,3.9 0,5V19C0,20.1 0.9,21 2,21H22C23.1,21 24,20.1 24,19V5C24,3.9 23.1,3 22,3M22,19H2V5H22V19M21,6H14V11H21V6M20,8L17.5,9.75L15,8V7L17.5,8.75L20,7V8M9,12C10.66,12 12,10.66 12,9C12,7.34 10.66,6 9,6C7.34,6 6,7.34 6,9C6,10.66 7.34,12 9,12M9,8C9.55,8 10,8.45 10,9C10,9.55 9.55,10 9,10C8.45,10 8,9.55 8,9C8,8.45 8.45,8 9,8M15,16.59C15,14.09 11.03,13 9,13C6.97,13 3,14.09 3,16.59V18H15V16.59M5.5,16C6.22,15.5 7.7,15 9,15C10.3,15 11.77,15.5 12.5,16H5.5Z' />
  </Svg>
)

ContactMailOutlineIcon.displayName = 'ContactMailOutlineIcon'

ContactMailOutlineIcon.defaultProps = {
  size: 24
}

export default ContactMailOutlineIcon