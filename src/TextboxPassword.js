import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TextboxPasswordIcon = ({
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
    <path d='M17,7H22V17H17V19C17,19.55 17.45,20 18,20H20V22H17.5C16.95,22 16,21.55 16,21C16,21.55 15.05,22 14.5,22H12V20H14C14.55,20 15,19.55 15,19V5C15,4.45 14.55,4 14,4H12V2H14.5C15.05,2 16,2.45 16,3C16,2.45 16.95,2 17.5,2H20V4H18C17.45,4 17,4.45 17,5V7M2,7H13V9H4V15H13V17H2V7M20,15V9H17V15H20M8.5,12C8.5,11.17 7.83,10.5 7,10.5C6.17,10.5 5.5,11.17 5.5,12C5.5,12.83 6.17,13.5 7,13.5C7.83,13.5 8.5,12.83 8.5,12M13,10.89C12.39,10.33 11.44,10.38 10.88,11C10.32,11.6 10.37,12.55 11,13.11C11.55,13.63 12.43,13.63 13,13.11V10.89Z' />
  </Svg>
)

TextboxPasswordIcon.displayName = 'TextboxPasswordIcon'

TextboxPasswordIcon.defaultProps = {
  size: 24
}

export default TextboxPasswordIcon