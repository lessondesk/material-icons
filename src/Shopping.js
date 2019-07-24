import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ShoppingIcon = ({
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
    <path d='M12,13C9.24,13 7,10.76 7,8H9C9,9.66 10.34,11 12,11C13.66,11 15,9.66 15,8H17C17,10.76 14.76,13 12,13M12,3C13.66,3 15,4.34 15,6H9C9,4.34 10.34,3 12,3M19,6H17C17,3.24 14.76,1 12,1C9.24,1 7,3.24 7,6H5C3.89,6 3,6.89 3,8V20C3,21.1 3.9,22 5,22H19C20.1,22 21,21.1 21,20V8C21,6.89 20.1,6 19,6Z' />
  </Svg>
)

ShoppingIcon.displayName = 'ShoppingIcon'

ShoppingIcon.defaultProps = {
  size: 24
}

export default ShoppingIcon