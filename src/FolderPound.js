import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FolderPoundIcon = ({
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
    <path d='M15.25,13H17.25L16.75,15H14.75L15.25,13M22,8V18C22,19.1 21.1,20 20,20H4C2.9,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H20C21.1,6 22,6.9 22,8M20,12H18.5L19,10H18L17.5,12H15.5L16,10H15L14.5,12H13V13H14.25L13.75,15H12V16H13.5L13,18H14L14.5,16H16.5L16,18H17L17.5,16H19V15H17.75L18.25,13H20V12Z' />
  </Svg>
)

FolderPoundIcon.displayName = 'FolderPoundIcon'

FolderPoundIcon.defaultProps = {
  size: 24
}

export default FolderPoundIcon