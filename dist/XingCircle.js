import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const XingCircleIcon = ({
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
    <path d='M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M15.85,6H17.74C17.86,6 17.94,6.04 18,6.12C18.04,6.2 18.04,6.3 18,6.41L13.84,13.76L16.5,18.59C16.53,18.69 16.53,18.8 16.5,18.88C16.43,18.96 16.35,19 16.24,19H14.36C14.07,19 13.93,18.81 13.84,18.64L11.17,13.76C11.31,13.5 15.35,6.36 15.35,6.36C15.45,6.18 15.57,6 15.85,6M7.5,8.57H9.39C9.67,8.57 9.81,8.75 9.9,8.92L11.19,11.17C11.12,11.3 9.17,14.75 9.17,14.75C9.07,14.92 8.94,15.11 8.66,15.11H6.78C6.67,15.11 6.59,15.06 6.54,15C6.5,14.9 6.5,14.8 6.54,14.69L8.53,11.17L7.27,9C7.21,8.87 7.2,8.77 7.25,8.69C7.3,8.61 7.39,8.57 7.5,8.57Z' />
  </Svg>
)

XingCircleIcon.displayName = 'XingCircleIcon'

XingCircleIcon.defaultProps = {
  size: 24
}

export default XingCircleIcon