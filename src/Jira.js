import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const JiraIcon = ({
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
    <path d='M11.53,2C11.53,4.4 13.5,6.35 15.88,6.35H17.66V8.05C17.66,10.45 19.6,12.39 22,12.4V2.84C22,2.38 21.62,2 21.16,2H11.53M6.77,6.8C6.78,9.19 8.72,11.13 11.11,11.14H12.91V12.86C12.92,15.25 14.86,17.19 17.25,17.2V7.63C17.24,7.17 16.88,6.81 16.42,6.8H6.77M2,11.6C2,14 3.95,15.94 6.35,15.94H8.13V17.66C8.14,20.05 10.08,22 12.47,22V12.43C12.47,11.97 12.09,11.59 11.63,11.59L2,11.6Z' />
  </Svg>
)

JiraIcon.displayName = 'JiraIcon'

JiraIcon.defaultProps = {
  size: 24
}

export default JiraIcon