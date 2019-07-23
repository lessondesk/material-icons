import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EmoticonKissOutlineIcon = ({
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
    <path d='M9,9.5C9,10.3 8.3,11 7.5,11C6.7,11 6,10.3 6,9.5C6,8.7 6.7,8 7.5,8C8.3,8 9,8.7 9,9.5M16,9.5C16,10.3 15.3,11 14.5,11C13.7,11 13,10.3 13,9.5C13,8.7 13.7,8 14.5,8C15.3,8 16,8.7 16,9.5M14,14.12L11.88,12L10.82,13.06L11.88,14.12L10.82,15.18L11.88,16.24L10.82,17.3L11.88,18.36L14,16.24L12.94,15.18L14,14.12M16.85,13C15.72,13 14.8,13.92 14.8,15.05C14.8,15.62 15.03,16.12 15.4,16.5L18.9,20L22.4,16.5C22.77,16.13 23,15.61 23,15.05C23,13.92 22.08,13 20.95,13C20.4,13 19.87,13.23 19.5,13.6L18.9,14.2L18.3,13.61C17.93,13.23 17.4,13 16.85,13M15,18.92C13.82,19.6 12.46,20 11,20C6.58,20 3,16.42 3,12C3,7.58 6.58,4 11,4C15.26,4 18.73,7.33 19,11.5C19.58,11.19 20.26,11 20.95,11C20.45,5.95 16.18,2 11,2C5.48,2 1,6.48 1,12C1,17.52 5.48,22 11,22C13,22 14.88,21.4 16.45,20.38L15,18.92Z' />
  </Svg>
)

EmoticonKissOutlineIcon.displayName = 'EmoticonKissOutlineIcon'

EmoticonKissOutlineIcon.defaultProps = {
  size: 24
}

export default EmoticonKissOutlineIcon