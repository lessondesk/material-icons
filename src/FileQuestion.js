import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileQuestionIcon = ({
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
    <path d='M6,2C4.89,2 4,2.89 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2H6M13,3.5L18.5,9H13V3.5M12,11C13.66,11 15,12.34 15,14C15,15.88 12.75,16.06 12.75,17.75H11.25C11.25,15.31 13.5,15.5 13.5,14C13.5,13.17 12.83,12.5 12,12.5C11.17,12.5 10.5,13.17 10.5,14H9C9,12.34 10.34,11 12,11M11.25,18.5H12.75V20H11.25V18.5Z' />
  </Svg>
)

FileQuestionIcon.displayName = 'FileQuestionIcon'

FileQuestionIcon.defaultProps = {
  size: 24
}

export default FileQuestionIcon