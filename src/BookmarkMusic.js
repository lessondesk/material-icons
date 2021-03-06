import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BookmarkMusicIcon = ({
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
    <path d='M17,3C18.1,3 19,3.9 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,11C9.9,11 9,11.9 9,13C9,14.1 9.9,15 11,15C12.1,15 13,14.1 13,13V8H16V6H12V11.27C11.71,11.1 11.36,11 11,11Z' />
  </Svg>
)

BookmarkMusicIcon.displayName = 'BookmarkMusicIcon'

BookmarkMusicIcon.defaultProps = {
  size: 24
}

export default BookmarkMusicIcon