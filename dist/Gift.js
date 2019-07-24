import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GiftIcon = ({
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
    <path d='M9.06,1.93C7.17,1.92 5.33,3.74 6.17,6H3C1.9,6 1,6.9 1,8V10C1,10.55 1.45,11 2,11H11V8H13V11H22C22.55,11 23,10.55 23,10V8C23,6.9 22.1,6 21,6H17.83C19,2.73 14.6,0.42 12.57,3.24L12,4L11.43,3.22C10.8,2.33 9.93,1.94 9.06,1.93M9,4C9.89,4 10.34,5.08 9.71,5.71C9.08,6.34 8,5.89 8,5C8,4.45 8.45,4 9,4M15,4C15.89,4 16.34,5.08 15.71,5.71C15.08,6.34 14,5.89 14,5C14,4.45 14.45,4 15,4M2,12V20C2,21.1 2.9,22 4,22H20C21.1,22 22,21.1 22,20V12H13V20H11V12H2Z' />
  </Svg>
)

GiftIcon.displayName = 'GiftIcon'

GiftIcon.defaultProps = {
  size: 24
}

export default GiftIcon