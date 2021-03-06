import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FolderAlertOutlineIcon = ({
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
    <path d='M15,12H17V17H15V12M15,18H17V20H15V18M16,9C17.07,9 18.09,9.24 19,9.67V8H3V18H9.29C9.1,17.36 9,16.69 9,16C9,12.13 12.13,9 16,9M23,16C23,19.87 19.87,23 16,23C13.62,23 11.5,21.81 10.25,20H3C1.89,20 1,19.1 1,18V6C1,4.89 1.89,4 3,4H9L11,6H19C20.1,6 21,6.9 21,8V11.1C22.24,12.36 23,14.09 23,16M16,11C13.24,11 11,13.24 11,16C11,18.76 13.24,21 16,21C18.76,21 21,18.76 21,16C21,13.24 18.76,11 16,11Z' />
  </Svg>
)

FolderAlertOutlineIcon.displayName = 'FolderAlertOutlineIcon'

FolderAlertOutlineIcon.defaultProps = {
  size: 24
}

export default FolderAlertOutlineIcon