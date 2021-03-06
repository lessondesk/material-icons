import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FlowerPoppyIcon = ({
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
    <path d='M18.5,12C20.43,12 22,10.43 22,8.5C22,4.91 19.09,2 15.5,2C13.57,2 12,3.57 12,5.5C12,3.57 10.43,2 8.5,2C4.91,2 2,4.91 2,8.5C2,10.43 3.57,12 5.5,12C3.57,12 2,13.57 2,15.5C2,19.09 4.91,22 8.5,22C10.43,22 12,20.43 12,18.5C12,20.43 13.57,22 15.5,22C19.09,22 22,19.09 22,15.5C22,13.57 20.43,12 18.5,12M12,16C9.79,16 8,14.21 8,12C8,9.79 9.79,8 12,8C14.21,8 16,9.79 16,12C16,14.21 14.21,16 12,16M14.5,12C14.5,13.38 13.38,14.5 12,14.5C10.62,14.5 9.5,13.38 9.5,12C9.5,10.62 10.62,9.5 12,9.5C13.38,9.5 14.5,10.62 14.5,12Z' />
  </Svg>
)

FlowerPoppyIcon.displayName = 'FlowerPoppyIcon'

FlowerPoppyIcon.defaultProps = {
  size: 24
}

export default FlowerPoppyIcon