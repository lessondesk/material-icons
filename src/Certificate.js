import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CertificateIcon = ({
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
    <path d='M4,3C2.89,3 2,3.89 2,5V15C2,16.1 2.9,17 4,17H12V22L15,19L18,22V17H20C21.1,17 22,16.1 22,15V8L22,6V5C22,3.9 21.1,3 20,3H16V3H4M12,5L15,7L18,5V8.5L21,10L18,11.5V15L15,13L12,15V11.5L9,10L12,8.5V5M4,5H9V7H4V5M4,9H7V11H4V9M4,13H9V15H4V13Z' />
  </Svg>
)

CertificateIcon.displayName = 'CertificateIcon'

CertificateIcon.defaultProps = {
  size: 24
}

export default CertificateIcon