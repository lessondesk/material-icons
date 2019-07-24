import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EmoticonTongueOutlineIcon = ({
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
    <path d='M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M9,10C8.26,10 7.61,10.4 7.27,11C7.1,10.71 7,10.36 7,10C7,8.9 7.9,8 9,8C10.11,8 11,8.9 11,10C11,10.36 10.9,10.71 10.73,11C10.39,10.4 9.74,10 9,10M17,10C17,10.36 16.9,10.71 16.73,11C16.39,10.4 15.74,10 15,10C14.26,10 13.61,10.4 13.27,11C13.1,10.71 13,10.36 13,10C13,8.9 13.9,8 15,8C16.11,8 17,8.9 17,10M16,13V15H15C15,17 14.1,18 13,18C11.9,18 11,17 11,15H8V13H16Z' />
  </Svg>
)

EmoticonTongueOutlineIcon.displayName = 'EmoticonTongueOutlineIcon'

EmoticonTongueOutlineIcon.defaultProps = {
  size: 24
}

export default EmoticonTongueOutlineIcon