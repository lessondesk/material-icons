import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DiameterVariantIcon = ({
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
    <path d='M4.15,21.46L5.47,19.58C3.35,17.74 2,15.03 2,12C2,6.48 6.48,2 12,2C13.78,2 15.44,2.46 16.89,3.27L18.21,1.39L19.85,2.54L18.53,4.42C20.65,6.26 22,8.97 22,12C22,17.52 17.52,22 12,22C10.22,22 8.56,21.54 7.11,20.73L5.79,22.61L4.15,21.46M12,4C7.58,4 4,7.58 4,12C4,14.35 5,16.46 6.63,17.93L15.73,4.92C14.62,4.33 13.35,4 12,4M12,20C16.42,20 20,16.42 20,12C20,9.65 19,7.54 17.37,6.07L8.27,19.08C9.38,19.67 10.65,20 12,20Z' />
  </Svg>
)

DiameterVariantIcon.displayName = 'DiameterVariantIcon'

DiameterVariantIcon.defaultProps = {
  size: 24
}

export default DiameterVariantIcon