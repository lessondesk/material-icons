import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SignalVariantIcon = ({
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
    <path d='M4,6V4H4.1C12.9,4 20,11.1 20,19.9V20H18V19.9C18,12.2 11.8,6 4,6M4,10V8C10.63,8 16,13.37 16,20H14C14,14.48 9.52,10 4,10M4,14V12C8.42,12 12,15.58 12,20H10C10,16.69 7.31,14 4,14M4,16C6.21,16 8,17.79 8,20H4V16Z' />
  </Svg>
)

SignalVariantIcon.displayName = 'SignalVariantIcon'

SignalVariantIcon.defaultProps = {
  size: 24
}

export default SignalVariantIcon