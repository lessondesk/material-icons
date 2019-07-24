import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MoleculeIcon = ({
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
    <path d='M7.27,10L9,7H14.42L15.58,5L15.5,4.5C15.5,3.67 16.17,3 17,3C17.83,3 18.5,3.67 18.5,4.5C18.5,5.21 18,5.81 17.33,5.96L16.37,7.63L17.73,10L18.59,8.5L18.5,8C18.5,7.17 19.17,6.5 20,6.5C20.83,6.5 21.5,7.17 21.5,8C21.5,8.71 21,9.3 20.35,9.46L18.89,12L20.62,15C21.39,15.07 22,15.71 22,16.5C22,17.33 21.33,18 20.5,18C19.67,18 19,17.33 19,16.5V16.24L17.73,14L16.37,16.37L17.33,18.04C18,18.19 18.5,18.79 18.5,19.5C18.5,20.33 17.83,21 17,21C16.17,21 15.5,20.33 15.5,19.5L15.58,19L14.42,17H10.58L9.42,19L9.5,19.5C9.5,20.33 8.83,21 8,21C7.17,21 6.5,20.33 6.5,19.5C6.5,18.79 7,18.19 7.67,18.04L8.63,16.37L4.38,9C3.61,8.93 3,8.29 3,7.5C3,6.67 3.67,6 4.5,6C5.33,6 6,6.67 6,7.5C6,7.59 6,7.68 6,7.76L7.27,10M10.15,9L8.42,12L10.15,15H14.85L16.58,12L14.85,9H10.15Z' />
  </Svg>
)

MoleculeIcon.displayName = 'MoleculeIcon'

MoleculeIcon.defaultProps = {
  size: 24
}

export default MoleculeIcon