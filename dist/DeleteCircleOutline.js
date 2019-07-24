import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DeleteCircleOutlineIcon = ({
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
    <path d='M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4M16,10V17C16,17.55 15.55,18 15,18H9C8.45,18 8,17.55 8,17V10H16M13.5,6L14.5,7H17V9H7V7H9.5L10.5,6H13.5Z' />
  </Svg>
)

DeleteCircleOutlineIcon.displayName = 'DeleteCircleOutlineIcon'

DeleteCircleOutlineIcon.defaultProps = {
  size: 24
}

export default DeleteCircleOutlineIcon