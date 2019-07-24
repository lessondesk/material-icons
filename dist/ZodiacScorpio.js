import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ZodiacScorpioIcon = ({
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
    <path d='M17.71,15.29L16.29,16.71L17.59,18H16C14.9,18 14,17.1 14,16V6C14,4.34 12.66,3 11,3C10.25,3 9.55,3.29 9,3.78C7.86,2.76 6.14,2.76 5,3.78C4.45,3.28 3.74,3 3,3V5C3.55,5 4,5.45 4,6V16H6V6C6,5.45 6.45,5 7,5C7.55,5 8,5.45 8,6V16H10V6C10,5.45 10.45,5 11,5C11.55,5 12,5.45 12,6V16C12,18.21 13.79,20 16,20H17.59L16.29,21.29L17.71,22.71L21.41,19L17.71,15.29Z' />
  </Svg>
)

ZodiacScorpioIcon.displayName = 'ZodiacScorpioIcon'

ZodiacScorpioIcon.defaultProps = {
  size: 24
}

export default ZodiacScorpioIcon