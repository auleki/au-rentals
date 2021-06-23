import styled, { css } from 'styled-components'
import { colors, metrics } from '../components/constants'

export const HeaderStyle = styled.div(
  ({ bgImage }) => css`
    height: 80vh;
    background: linear-gradient(to right, #1a1a1a50, #f3790720),
      url('https://res.cloudinary.com/dyj6pqx6d/image/upload/v1624443336/car-rental/kevin-bonilla-YPfnvLc3bbQ-unsplash_i0iiop.jpg')
        fixed bottom no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 2px solid ${colors.orange};

    .header_text {
      text-align: center;
    }

    .header_form {
      display: flex;
      gap: 1em;
      margin-top: 1em;
    }
  `
)

export const InputStyle = styled.input(
  ({ bgColor }) => css`
    /* width: 100%; */
    /* height: 4em; */
    padding: 1em;
    background: ${colors.black};
    color: ${colors.altWhite};
    outline: 0;
    border-radius: ${metrics.radius};
    transition: background 200ms ease-in;

    &:focus {
      background: ${colors.lightBlack};
    }
  `
)

export const Button = styled.button(
  ({ bgColor }) => css`
    background: ${colors.orange};
    color: ${colors.altWhite};
    padding: 1em 1.5em;
    transition: background 200ms ease-in, color 300ms ease-in;
    border-radius: ${metrics.radius};
    font-size: ${metrics.smallFont};
    border: ${metrics.border} solid transparent;
    outline: 0;

    &:hover,
    &:focus {
      background: ${colors.ghostWhite};
      outline: 0;
      border: ${metrics.border} solid ${colors.orange};
      color: ${colors.orange};
      cursor: pointer;
    }
  `
)

export const Title = styled.h1(
  ({ font, color }) => css`
    color: ${colors.altWhite};
  `
)

export const Paragraph = styled.p(
  ({ font, size, color }) => css`
    font-size: ${size || 1}em;
    color: ${colors.orange};
  `
)

export const PageContainer = styled.div(
  ({ full }) => css`
    height: 100vh;
    background: ${colors.lightBlack};
  `
)

export const LandingContainer = styled.div(
  ({ full }) => css`
    /* height: 0vh; */
    background: ${colors.midGreen};
  `
)
