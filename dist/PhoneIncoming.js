import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PhoneIncomingIcon = ({
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
    <path d='M4,3C3.45,3 3,3.45 3,4C3,13.39 10.61,21 20,21C20.55,21 21,20.55 21,20V16.5C21,15.95 20.55,15.5 20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.17L13.21,17.37C10.38,15.93 8.06,13.62 6.62,10.78L8.82,8.57C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4C8.5,3.45 8.05,3 7.5,3H4M19,11V9.5H15.5L21,4L20,3L14.5,8.5V5H13V11H19Z' />
  </Svg>
)

PhoneIncomingIcon.displayName = 'PhoneIncomingIcon'

PhoneIncomingIcon.defaultProps = {
  size: 24
}

export default PhoneIncomingIcon