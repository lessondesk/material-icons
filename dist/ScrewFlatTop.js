import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ScrewFlatTopIcon = ({
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
    <path d='M13.5,17V19L12,22L10.5,19L13.5,17M14.5,6.3L13.5,7V6H10.5V9L9.5,9.7V10.7L14.5,7.4V6.3M14.5,10.3L13.5,11V9L10.5,11V13L9.5,13.7V14.7L14.5,11.4V10.3M14.5,14.3L13.5,15V13L10.5,15V17L9.5,17.7V18.7L14.5,15.4V14.3M8,2C8,2 7,2 7,3L10,5H14L17,3C17,3 17,2 16,2C15,2 8,2 8,2Z' />
  </Svg>
)

ScrewFlatTopIcon.displayName = 'ScrewFlatTopIcon'

ScrewFlatTopIcon.defaultProps = {
  size: 24
}

export default ScrewFlatTopIcon