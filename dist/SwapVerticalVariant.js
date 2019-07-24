import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SwapVerticalVariantIcon = ({
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
    <path d='M18,4L14,8H17V16C17,17.1 16.1,18 15,18C13.9,18 13,17.1 13,16V8C13,5.79 11.21,4 9,4C6.79,4 5,5.79 5,8V16H2L6,20L10,16H7V8C7,6.9 7.9,6 9,6C10.1,6 11,6.9 11,8V16C11,18.21 12.79,20 15,20C17.21,20 19,18.21 19,16V8H22L18,4Z' />
  </Svg>
)

SwapVerticalVariantIcon.displayName = 'SwapVerticalVariantIcon'

SwapVerticalVariantIcon.defaultProps = {
  size: 24
}

export default SwapVerticalVariantIcon