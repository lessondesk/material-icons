import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BookLockOpenIcon = ({
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
    <path d='M18,2H12V9L9.5,7.5L7,9V2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V4C20,2.9 19.1,2 18,2M18,20H10V16H11V14C11,12.34 12.34,11 14,11C15.66,11 17,12.34 17,14H15C15,13.45 14.55,13 14,13C13.45,13 13,13.45 13,14V16H18V20Z' />
  </Svg>
)

BookLockOpenIcon.displayName = 'BookLockOpenIcon'

BookLockOpenIcon.defaultProps = {
  size: 24
}

export default BookLockOpenIcon