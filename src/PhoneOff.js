import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PhoneOffIcon = ({
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
    <path d='M20.22,2.5L2.5,20.22L3.77,21.5L8.65,16.62C11.76,19.43 15.81,21 20,21C20.55,21 21,20.55 21,20V16.5C21,15.95 20.55,15.5 20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C12.06,16.8 11,16.06 10.06,15.21L21.5,3.77L20.22,2.5M4,3C3.45,3 3,3.45 3,4C3,7.57 4.14,11.05 6.24,13.94L7.66,12.5C7.28,11.97 6.93,11.39 6.62,10.79L8.82,8.59C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4C8.5,3.45 8.05,3 7.5,3H4Z' />
  </Svg>
)

PhoneOffIcon.displayName = 'PhoneOffIcon'

PhoneOffIcon.defaultProps = {
  size: 24
}

export default PhoneOffIcon