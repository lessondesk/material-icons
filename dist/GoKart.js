import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GoKartIcon = ({
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
    <path d='M18,10H15.53L14.38,8.28L15.8,7.33L14.7,5.67L10.2,8.67L11.3,10.33L12.73,9.38L13.88,11.12L13,12H10.2L5.83,5.45L4.17,6.55L5.87,9.11C3.04,9.65 1,12.12 1,15V17H3C3,18.66 4.34,20 6,20C7.66,20 9,18.66 9,17H15C15,18.66 16.34,20 18,20C19.66,20 21,18.66 21,17H23V15C23,12.24 20.76,10 18,10M6,18.5C5.17,18.5 4.5,17.83 4.5,17C4.5,16.17 5.17,15.5 6,15.5C6.83,15.5 7.5,16.17 7.5,17C7.5,17.83 6.83,18.5 6,18.5M18,18.5C17.17,18.5 16.5,17.83 16.5,17C16.5,16.17 17.17,15.5 18,15.5C18.83,15.5 19.5,16.17 19.5,17C19.5,17.83 18.83,18.5 18,18.5Z' />
  </Svg>
)

GoKartIcon.displayName = 'GoKartIcon'

GoKartIcon.defaultProps = {
  size: 24
}

export default GoKartIcon