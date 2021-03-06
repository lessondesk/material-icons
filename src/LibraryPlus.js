import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LibraryPlusIcon = ({
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
    <path d='M19,11H15V15H13V11H9V9H13V5H15V9H19M20,2H8C6.9,2 6,2.9 6,4V16C6,17.1 6.9,18 8,18H20C21.1,18 22,17.1 22,16V4C22,2.9 21.1,2 20,2M4,6H2V20C2,21.1 2.9,22 4,22H18V20H4V6Z' />
  </Svg>
)

LibraryPlusIcon.displayName = 'LibraryPlusIcon'

LibraryPlusIcon.defaultProps = {
  size: 24
}

export default LibraryPlusIcon