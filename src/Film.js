import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FilmIcon = ({
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
    <path d='M3.5,3H5V1.8C5,1.36 5.36,1 5.8,1H10.2C10.64,1 11,1.36 11,1.8V3H12.5C13.33,3 14,3.67 14,4.5V5H22V20H14V20.5C14,21.33 13.33,22 12.5,22H3.5C2.67,22 2,21.33 2,20.5V4.5C2,3.67 2.67,3 3.5,3M18,7V9H20V7H18M14,7V9H16V7H14M10,7V9H12V7H10M14,16V18H16V16H14M18,16V18H20V16H18M10,16V18H12V16H10Z' />
  </Svg>
)

FilmIcon.displayName = 'FilmIcon'

FilmIcon.defaultProps = {
  size: 24
}

export default FilmIcon