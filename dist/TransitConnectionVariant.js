import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TransitConnectionVariantIcon = ({
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
    <path d='M18,11H14.82C14.4,9.84 13.3,9 12,9C10.7,9 9.6,9.84 9.18,11H6C5.67,11 4,10.9 4,9V8C4,6.17 5.54,6 6,6H16.18C16.6,7.16 17.7,8 19,8C20.66,8 22,6.66 22,5C22,3.34 20.66,2 19,2C17.7,2 16.6,2.84 16.18,4H6C4.39,4 2,5.06 2,8V9C2,11.94 4.39,13 6,13H9.18C9.6,14.16 10.7,15 12,15C13.3,15 14.4,14.16 14.82,13H18C18.33,13 20,13.1 20,15V16C20,17.83 18.46,18 18,18H7.82C7.4,16.84 6.3,16 5,16C3.34,16 2,17.34 2,19C2,20.66 3.34,22 5,22C6.3,22 7.4,21.16 7.82,20H18C19.61,20 22,18.93 22,16V15C22,12.07 19.61,11 18,11M19,4C19.55,4 20,4.45 20,5C20,5.55 19.55,6 19,6C18.45,6 18,5.55 18,5C18,4.45 18.45,4 19,4M5,20C4.45,20 4,19.55 4,19C4,18.45 4.45,18 5,18C5.55,18 6,18.45 6,19C6,19.55 5.55,20 5,20Z' />
  </Svg>
)

TransitConnectionVariantIcon.displayName = 'TransitConnectionVariantIcon'

TransitConnectionVariantIcon.defaultProps = {
  size: 24
}

export default TransitConnectionVariantIcon