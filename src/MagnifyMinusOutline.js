import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MagnifyMinusOutlineIcon = ({
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
    <path d='M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5C16,5.91 13.09,3 9.5,3C5.91,3 3,5.91 3,9.5C3,13.09 5.91,16 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z' />
  </Svg>
)

MagnifyMinusOutlineIcon.displayName = 'MagnifyMinusOutlineIcon'

MagnifyMinusOutlineIcon.defaultProps = {
  size: 24
}

export default MagnifyMinusOutlineIcon