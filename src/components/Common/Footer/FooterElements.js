import styled from '@emotion/styled'

export const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  background: #35363a;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`