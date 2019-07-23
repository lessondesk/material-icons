import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CropPortraitIcon = ({
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
    <path d='M17,19H7V5H17M17,3H7C5.9,3 5,3.9 5,5V19C5,20.1 5.9,21 7,21H17C18.1,21 19,20.1 19,19V5C19,3.89 18.1,3 17,3Z' />
  </Svg>
)

CropPortraitIcon.displayName = 'CropPortraitIcon'

CropPortraitIcon.defaultProps = {
  size: 24
}

export default CropPortraitIcon