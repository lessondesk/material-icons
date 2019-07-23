import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PenguinIcon = ({
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
    <path d='M19,16C19,17.72 18.37,19.3 17.34,20.5C17.75,20.89 18,21.41 18,22H6C6,21.41 6.25,20.89 6.66,20.5C5.63,19.3 5,17.72 5,16H3C3,14.75 3.57,13.64 4.46,12.91L4.47,12.89C6,11.81 7,10 7,8V7C7,4.24 9.24,2 12,2C14.76,2 17,4.24 17,7V8C17,10 18,11.81 19.53,12.89L19.54,12.91C20.43,13.64 21,14.75 21,16H19M16,16C16,13.79 14.21,12 12,12C9.79,12 8,13.79 8,16C8,18.21 9.79,20 12,20C14.21,20 16,18.21 16,16M10,9L12,10.5L14,9L12,7.5L10,9M10,5C9.45,5 9,5.45 9,6C9,6.55 9.45,7 10,7C10.55,7 11,6.55 11,6C11,5.45 10.55,5 10,5M14,5C13.45,5 13,5.45 13,6C13,6.55 13.45,7 14,7C14.55,7 15,6.55 15,6C15,5.45 14.55,5 14,5Z' />
  </Svg>
)

PenguinIcon.displayName = 'PenguinIcon'

PenguinIcon.defaultProps = {
  size: 24
}

export default PenguinIcon