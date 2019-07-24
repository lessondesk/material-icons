import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const InboxArrowUpIcon = ({
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
    <path d='M14,14H10V11H8L12,7L16,11H14V14M16,11M5,15V5H19V15H15C15,16.66 13.66,18 12,18C10.34,18 9,16.66 9,15H5M19,3H5C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3' />
  </Svg>
)

InboxArrowUpIcon.displayName = 'InboxArrowUpIcon'

InboxArrowUpIcon.defaultProps = {
  size: 24
}

export default InboxArrowUpIcon