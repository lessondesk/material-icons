import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CommentEyeIcon = ({
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
    <path d='M20,12V16C20,17.11 19.11,18 18,18H13.9L10.2,21.71C10,21.89 9.76,22 9.5,22H9C8.45,22 8,21.55 8,21V18H4C2.9,18 2,17.1 2,16V6C2,4.89 2.9,4 4,4H9.5C8.95,4.67 8.5,5.42 8.14,6.25L7.85,7L8.14,7.75C9.43,10.94 12.5,13 16,13C17.44,13 18.8,12.63 20,12M16,6C16.56,6 17,6.44 17,7C17,7.56 16.56,8 16,8C15.44,8 15,7.56 15,7C15,6.44 15.44,6 16,6M16,3C18.73,3 21.06,4.66 22,7C21.06,9.34 18.73,11 16,11C13.27,11 10.94,9.34 10,7C10.94,4.66 13.27,3 16,3M16,4.5C14.62,4.5 13.5,5.62 13.5,7C13.5,8.38 14.62,9.5 16,9.5C17.38,9.5 18.5,8.38 18.5,7C18.5,5.62 17.38,4.5 16,4.5' />
  </Svg>
)

CommentEyeIcon.displayName = 'CommentEyeIcon'

CommentEyeIcon.defaultProps = {
  size: 24
}

export default CommentEyeIcon