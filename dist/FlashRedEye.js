import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FlashRedEyeIcon = ({
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
    <path d='M16,5C15.44,5 15,5.44 15,6C15,6.56 15.44,7 16,7C16.56,7 17,6.56 17,6C17,5.44 16.56,5 16,5M16,2C13.27,2 10.94,3.66 10,6C10.94,8.34 13.27,10 16,10C18.73,10 21.06,8.34 22,6C21.06,3.66 18.73,2 16,2M16,3.5C17.38,3.5 18.5,4.62 18.5,6C18.5,7.38 17.38,8.5 16,8.5C14.62,8.5 13.5,7.38 13.5,6C13.5,4.62 14.62,3.5 16,3.5M3,2V14H6V23L13,11H9L10.12,8.5C9.44,7.76 8.88,6.93 8.5,6C9.19,4.29 10.5,2.88 12.11,2H3Z' />
  </Svg>
)

FlashRedEyeIcon.displayName = 'FlashRedEyeIcon'

FlashRedEyeIcon.defaultProps = {
  size: 24
}

export default FlashRedEyeIcon