import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PokemonGoIcon = ({
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
    <path d='M12,2C15.87,2 19,5.13 19,9C19,10.4 18.59,11.71 17.88,12.8L12,22.21L6.12,12.8C5.41,11.71 5,10.4 5,9C5,5.13 8.13,2 12,2M12,3.5C9.3,3.5 7.06,5.44 6.59,8H9.17C9.58,6.83 10.69,6 12,6C13.31,6 14.42,6.83 14.83,8H17.41C16.94,5.44 14.7,3.5 12,3.5M12,12C10.69,12 9.58,11.17 9.17,10H6.59C6.72,10.69 6.97,11.34 7.34,11.91V11.91L7.38,12C8.36,13.5 10.06,14.5 12,14.5C13.94,14.5 15.64,13.5 16.62,12L16.66,11.91V11.91C17.03,11.34 17.28,10.69 17.41,10H14.83C14.42,11.17 13.31,12 12,12M12,7.5C11.17,7.5 10.5,8.17 10.5,9C10.5,9.83 11.17,10.5 12,10.5C12.83,10.5 13.5,9.83 13.5,9C13.5,8.17 12.83,7.5 12,7.5Z' />
  </Svg>
)

PokemonGoIcon.displayName = 'PokemonGoIcon'

PokemonGoIcon.defaultProps = {
  size: 24
}

export default PokemonGoIcon