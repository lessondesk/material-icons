import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SignatureImageIcon = ({
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
    <path d='M22,22H2V20H22V22M6.2,17.3L4.8,15.9L6.2,14.5L5.5,13.8L4.1,15.2L2.7,13.8L2,14.5L3.4,15.9L2,17.3L2.7,18L4.1,16.6L5.5,18L6.2,17.3M20,5H10C8.9,5 8,5.9 8,7V16C8,17.1 8.9,18 10,18H20C21.1,18 22,17.1 22,16V7C22,5.9 21.1,5 20,5M10,16L12.6,12.7L14.4,14.9L16.8,11.6L20,16H10Z' />
  </Svg>
)

SignatureImageIcon.displayName = 'SignatureImageIcon'

SignatureImageIcon.defaultProps = {
  size: 24
}

export default SignatureImageIcon