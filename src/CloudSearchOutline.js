import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CloudSearchOutlineIcon = ({
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
    <path d='M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14C14.12,14 13,15.12 13,16.5C13,17.88 14.12,19 15.5,19C16.88,19 18,17.88 18,16.5C18,15.12 16.88,14 15.5,14M22,13C22,11.34 20.66,10 19,10H17.5V9.5C17.5,6.46 15.04,4 12,4C9.5,4 7.37,5.69 6.71,8H6C3.79,8 2,9.79 2,12C2,14.21 3.79,16 6,16H9V16.5C9,17 9.06,17.5 9.17,18H6C2.69,18 0,15.31 0,12C0,8.9 2.34,6.36 5.35,6.04C6.6,3.64 9.11,2 12,2C15.64,2 18.67,4.59 19.36,8.04C21.95,8.22 24,10.36 24,13C24,14.65 23.21,16.1 22,17V16.5C22,15.77 21.88,15.06 21.65,14.4C21.87,14 22,13.5 22,13Z' />
  </Svg>
)

CloudSearchOutlineIcon.displayName = 'CloudSearchOutlineIcon'

CloudSearchOutlineIcon.defaultProps = {
  size: 24
}

export default CloudSearchOutlineIcon