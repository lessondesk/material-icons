import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FastForward30Icon = ({
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
    <path d='M11.5,3C6.85,3 2.92,6.03 1.53,10.22L3.9,11C4.95,7.81 7.96,5.5 11.5,5.5C13.46,5.5 15.23,6.22 16.62,7.38L14,10H21V3L18.4,5.6C16.55,4 14.15,3 11.5,3M19,14V20C19,21.11 18.11,22 17,22H15C13.9,22 13,21.1 13,20V14C13,12.9 13.9,12 15,12H17C18.11,12 19,12.9 19,14M15,14V20H17V14H15M11,20C11,21.11 10.1,22 9,22H5V20H9V18H7V16H9V14H5V12H9C10.1,12 11,12.9 11,14V15.5C11,16.33 10.33,17 9.5,17C10.33,17 11,17.67 11,18.5V20Z' />
  </Svg>
)

FastForward30Icon.displayName = 'FastForward30Icon'

FastForward30Icon.defaultProps = {
  size: 24
}

export default FastForward30Icon