import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MathCompassIcon = ({
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
    <path d='M20,19.88V22L18.2,20.83L13.41,11.83C14.07,11.62 14.67,11.28 15.19,10.83L20,19.88M15,7C15,8.66 13.66,10 12,10C11.85,10 11.71,10 11.56,10L5.8,20.83L4,22V19.88L9.79,9C8.69,7.77 8.79,5.87 10.03,4.76C10.57,4.28 11.27,4 12,4V2C12.55,2 13,2.45 13,3V4.18C14.2,4.6 15,5.73 15,7M13,7C13,6.45 12.55,6 12,6C11.45,6 11,6.45 11,7C11,7.55 11.45,8 12,8C12.55,8 13,7.55 13,7Z' />
  </Svg>
)

MathCompassIcon.displayName = 'MathCompassIcon'

MathCompassIcon.defaultProps = {
  size: 24
}

export default MathCompassIcon