import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const UnicodeIcon = ({
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
    <path d='M2,5V16.29C2,16.29 2.16,18 3.43,19.26C4.71,20.54 6.63,21 6.63,21H8.32C8.32,21 10.07,20.8 11.67,19.2C13.24,17.62 13.05,16.06 13.05,16.06V12.28L18.39,21H22V9.88H18.28V13.8L13,5H9.42V15.17C9.42,17.41 7.47,17.39 7.5,17.39C7.5,17.39 5.55,17.36 5.55,15.17V5M18.28,5V8.77H22V5' />
  </Svg>
)

UnicodeIcon.displayName = 'UnicodeIcon'

UnicodeIcon.defaultProps = {
  size: 24
}

export default UnicodeIcon