import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ContentSaveSettingsOutlineIcon = ({
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
    <path d='M15,4V8H5V18H9.35C8.5,17.27 8,16.19 8,15C8,12.79 9.79,11 12,11C14.21,11 16,12.79 16,15C16,16.19 15.5,17.27 14.65,18H19V6.83L16.17,4H15M5,6H13V4H5V6M17,2L21,6V18C21,19.1 20.1,20 19,20H5C3.89,20 3,19.1 3,18V4C3,2.9 3.9,2 5,2H17M12,13C10.9,13 10,13.9 10,15C10,16.1 10.9,17 12,17C13.1,17 14,16.1 14,15C14,13.9 13.1,13 12,13M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z' />
  </Svg>
)

ContentSaveSettingsOutlineIcon.displayName = 'ContentSaveSettingsOutlineIcon'

ContentSaveSettingsOutlineIcon.defaultProps = {
  size: 24
}

export default ContentSaveSettingsOutlineIcon