import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ThermometerChevronUpIcon = ({
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
    <path d='M17.41,11.83L20.58,15L22,13.59L17.41,9L12.82,13.59L14.24,15L17.41,11.83M12,17C12,19.76 9.76,22 7,22C4.24,22 2,19.76 2,17C2,15.43 2.74,13.94 4,13V5C4,3.34 5.34,2 7,2C8.66,2 10,3.34 10,5V13C11.26,13.94 12,15.43 12,17M6,8V14.17C4.44,14.72 3.62,16.44 4.17,18C4.72,19.56 6.44,20.38 8,19.83C9.56,19.27 10.38,17.56 9.83,16C9.53,15.14 8.85,14.47 8,14.17V8H6Z' />
  </Svg>
)

ThermometerChevronUpIcon.displayName = 'ThermometerChevronUpIcon'

ThermometerChevronUpIcon.defaultProps = {
  size: 24
}

export default ThermometerChevronUpIcon