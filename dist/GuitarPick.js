import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GuitarPickIcon = ({
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
    <path d='M19,4.1C18.1,3.3 17,2.8 15.8,2.5C15.5,2.4 13.6,2 12.2,2C12.2,2 12.1,2 12,2C12,2 11.9,2 11.8,2C10.4,2 8.4,2.4 8.1,2.5C7,2.8 5.9,3.3 5,4.1C3,5.9 3,8.7 4,11C5,13.5 6.1,15.7 7.6,17.9C8.8,19.6 10.1,22 12,22C13.9,22 15.2,19.6 16.5,17.9C18,15.8 19.1,13.5 20.1,11C21,8.7 21,5.9 19,4.1Z' />
  </Svg>
)

GuitarPickIcon.displayName = 'GuitarPickIcon'

GuitarPickIcon.defaultProps = {
  size: 24
}

export default GuitarPickIcon