import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AttachmentIcon = ({
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
    <path d='M7.5,18C4.46,18 2,15.54 2,12.5C2,9.46 4.46,7 7.5,7H18C20.21,7 22,8.79 22,11C22,13.21 20.21,15 18,15H9.5C8.12,15 7,13.88 7,12.5C7,11.12 8.12,10 9.5,10H17V11.5H9.5C8.95,11.5 8.5,11.95 8.5,12.5C8.5,13.05 8.95,13.5 9.5,13.5H18C19.38,13.5 20.5,12.38 20.5,11C20.5,9.62 19.38,8.5 18,8.5H7.5C5.29,8.5 3.5,10.29 3.5,12.5C3.5,14.71 5.29,16.5 7.5,16.5H17V18H7.5Z' />
  </Svg>
)

AttachmentIcon.displayName = 'AttachmentIcon'

AttachmentIcon.defaultProps = {
  size: 24
}

export default AttachmentIcon