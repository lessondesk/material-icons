import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BookPlayIcon = ({
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
    <path d='M6,22C4.9,22 4,21.1 4,20V4C4,2.89 4.9,2 6,2H7V9L9.5,7.5L12,9V2H18C19.1,2 20,2.9 20,4V11.5C19.23,11.18 18.39,11 17.5,11C13.91,11 11,13.91 11,17.5C11,19.25 11.69,20.83 12.81,22H6M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M16.07,15V20L20,17.5L16.07,15Z' />
  </Svg>
)

BookPlayIcon.displayName = 'BookPlayIcon'

BookPlayIcon.defaultProps = {
  size: 24
}

export default BookPlayIcon