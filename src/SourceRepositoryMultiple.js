import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SourceRepositoryMultipleIcon = ({
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
    <path d='M8,0H20C21.1,0 22,0.9 22,2V18C22,19.1 21.1,20 20,20H8C6.9,20 6,19.1 6,18V2C6,0.9 6.9,0 8,0M14.75,11.5C17.5,11.5 18.24,9.47 18.43,8.4C19.34,8.11 20,7.26 20,6.25C20,5 19,4 17.75,4C16.5,4 15.5,5 15.5,6.25C15.5,7.19 16.07,8 16.89,8.33C16.67,9 16,10 14,10C12.62,10 11.66,10.35 11,10.84V6.87C11.87,6.56 12.5,5.73 12.5,4.75C12.5,3.5 11.5,2.5 10.25,2.5C9,2.5 8,3.5 8,4.75C8,5.73 8.63,6.56 9.5,6.87V13.13C8.63,13.44 8,14.27 8,15.25C8,16.5 9,17.5 10.25,17.5C11.5,17.5 12.5,16.5 12.5,15.25C12.5,14.32 11.94,13.5 11.13,13.18C11.41,12.5 12.23,11.5 14.75,11.5M10.25,14.5C10.66,14.5 11,14.84 11,15.25C11,15.66 10.66,16 10.25,16C9.84,16 9.5,15.66 9.5,15.25C9.5,14.84 9.84,14.5 10.25,14.5M10.25,4C10.66,4 11,4.34 11,4.75C11,5.16 10.66,5.5 10.25,5.5C9.84,5.5 9.5,5.16 9.5,4.75C9.5,4.34 9.84,4 10.25,4M17.75,5.5C18.16,5.5 18.5,5.84 18.5,6.25C18.5,6.66 18.16,7 17.75,7C17.34,7 17,6.66 17,6.25C17,5.84 17.34,5.5 17.75,5.5M16,22V24H4C2.9,24 2,23.1 2,22V6H4V22H16Z' />
  </Svg>
)

SourceRepositoryMultipleIcon.displayName = 'SourceRepositoryMultipleIcon'

SourceRepositoryMultipleIcon.defaultProps = {
  size: 24
}

export default SourceRepositoryMultipleIcon