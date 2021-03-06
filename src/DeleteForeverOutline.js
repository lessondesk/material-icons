import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DeleteForeverOutlineIcon = ({
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
    <path d='M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19C6,20.1 6.9,21 8,21H16C17.1,21 18,20.1 18,19V7H6V19M8,9H16V19H8V9Z' />
  </Svg>
)

DeleteForeverOutlineIcon.displayName = 'DeleteForeverOutlineIcon'

DeleteForeverOutlineIcon.defaultProps = {
  size: 24
}

export default DeleteForeverOutlineIcon