import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MusicNotePlusIcon = ({
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
    <path d='M9,3V12.26C8.5,12.09 8,12 7.5,12C5,12 3,14 3,16.5C3,19 5,21 7.5,21C10,21 12,19 12,16.5V6H16V3H9M17,9V12H14V14H17V17H19V14H22V12H19V9H17Z' />
  </Svg>
)

MusicNotePlusIcon.displayName = 'MusicNotePlusIcon'

MusicNotePlusIcon.defaultProps = {
  size: 24
}

export default MusicNotePlusIcon