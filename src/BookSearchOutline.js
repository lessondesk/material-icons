import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BookSearchOutlineIcon = ({
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
    <path d='M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14C14.12,14 13,15.12 13,16.5C13,17.88 14.12,19 15.5,19C16.88,19 18,17.88 18,16.5C18,15.12 16.88,14 15.5,14M13,4V12L10.5,9.75L8,12V4H6V20H10C10.54,20.81 11.23,21.5 12.03,22H6C4.9,22 4,21.1 4,20V4C4,2.9 4.9,2 6,2H18C19.1,2 20,2.9 20,4V11.81C19.42,11.26 18.75,10.81 18,10.5V4H13Z' />
  </Svg>
)

BookSearchOutlineIcon.displayName = 'BookSearchOutlineIcon'

BookSearchOutlineIcon.defaultProps = {
  size: 24
}

export default BookSearchOutlineIcon