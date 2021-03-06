import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ZodiacTaurusIcon = ({
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
    <path d='M15.59,9C17.7,7.74 19,5.46 19,3H17C17,5.76 14.76,8 12,8C9.24,8 7,5.76 7,3H5C5,5.46 6.3,7.74 8.41,9C5.09,11 4,15.28 6,18.6C7.97,21.92 12.27,23 15.59,21C18.91,19.04 20,14.74 18,11.42C17.42,10.43 16.58,9.59 15.59,9M12,20C9.24,20 7,17.76 7,15C7,12.24 9.24,10 12,10C14.76,10 17,12.24 17,15C17,17.76 14.76,20 12,20Z' />
  </Svg>
)

ZodiacTaurusIcon.displayName = 'ZodiacTaurusIcon'

ZodiacTaurusIcon.defaultProps = {
  size: 24
}

export default ZodiacTaurusIcon