import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FolderSyncIcon = ({
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
    <path d='M10,4L12,6H20C21.1,6 22,6.9 22,8V11.5C21.23,11.18 20.39,11 19.5,11C15.91,11 13,13.91 13,17.5C13,18.39 13.18,19.23 13.5,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10M19,12V13.5C21.21,13.5 23,15.29 23,17.5C23,18.32 22.75,19.08 22.33,19.71L21.24,18.62C21.41,18.28 21.5,17.9 21.5,17.5C21.5,16.12 20.38,15 19,15V16.5L16.75,14.25L19,12M19,23V21.5C16.79,21.5 15,19.71 15,17.5C15,16.68 15.25,15.92 15.67,15.29L16.76,16.38C16.59,16.72 16.5,17.1 16.5,17.5C16.5,18.88 17.62,20 19,20V18.5L21.25,20.75L19,23Z' />
  </Svg>
)

FolderSyncIcon.displayName = 'FolderSyncIcon'

FolderSyncIcon.defaultProps = {
  size: 24
}

export default FolderSyncIcon