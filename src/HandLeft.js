import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HandLeftIcon = ({
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
    <path d='M3,6.58V18.67C3,20.5 4.5,22 6.33,22H12.42C13.32,22 14.17,21.64 14.79,21L21.33,14.36C21.33,14.36 20.28,13.33 20.25,13.32C20.07,13.16 19.84,13.07 19.59,13.07C19.41,13.07 19.24,13.12 19.09,13.21C19.06,13.22 15.5,15.26 15.5,15.26V5.33C15.5,4.64 14.94,4.08 14.25,4.08C13.56,4.08 13,4.64 13,5.33V11.17H12.17V3.25C12.17,2.56 11.61,2 10.92,2C10.23,2 9.67,2.56 9.67,3.25V11.17H8.83V4.08C8.83,3.39 8.27,2.83 7.58,2.83C6.89,2.83 6.33,3.39 6.33,4.08V11.17H5.5V6.58C5.5,5.89 4.94,5.33 4.25,5.33C3.56,5.33 3,5.89 3,6.58Z' />
  </Svg>
)

HandLeftIcon.displayName = 'HandLeftIcon'

HandLeftIcon.defaultProps = {
  size: 24
}

export default HandLeftIcon