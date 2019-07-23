import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DishwasherIcon = ({
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
    <path d='M18,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V4C20,2.9 19.1,2 18,2M10,4C10.55,4 11,4.45 11,5C11,5.55 10.55,6 10,6C9.45,6 9,5.55 9,5C9,4.45 9.45,4 10,4M7,4C7.55,4 8,4.45 8,5C8,5.55 7.55,6 7,6C6.45,6 6,5.55 6,5C6,4.45 6.45,4 7,4M18,20H6V8H18V20M14.67,15.33C14.69,16.03 14.41,16.71 13.91,17.21C12.86,18.26 11.15,18.27 10.09,17.21C9.59,16.71 9.31,16.03 9.33,15.33C9.4,14.62 9.63,13.94 10,13.33C10.37,12.5 10.81,11.73 11.33,11L12,10C13.79,12.59 14.67,14.36 14.67,15.33' />
  </Svg>
)

DishwasherIcon.displayName = 'DishwasherIcon'

DishwasherIcon.defaultProps = {
  size: 24
}

export default DishwasherIcon