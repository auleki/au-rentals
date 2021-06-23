import styled, { css } from 'styled-components'
import { colors, fonts, metrics } from '../components/constants'

export const HeaderStyle = styled.div(
  ({ bgImage }) => css`
    height: 80vh;
    background: linear-gradient(to right, #1a1a1a50, #f3790720),
      url('https://res.cloudinary.com/dyj6pqx6d/image/upload/v1624443336/car-rental/kevin-bonilla-YPfnvLc3bbQ-unsplash_i0iiop.jpg')
        scroll center no-repeat;
    background-size: cover;
    /* background-attachment: ; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 2px solid ${colors.orange};

    .header_text {
      text-align: center;

      h1 {
        font-family: ${fonts.heading};
        font-size: ${metrics.biggerFont};

        span {
          color: ${colors.orange};
        }
      }

      p {
        /* background: #e85d0460; */
        background: #1a1a1a60;
        display: inline-flex;
        padding: 0.5em;
        margin: 0.5em 0;
        font-family: ${fonts.general};
        font-size: ${metrics.mediumFont};
        letter-spacing: 1px;
        color: ${colors.ghostWhite};
        border-radius: ${metrics.radius};

        span {
          font-weight: 800;
          margin: 0 0.25em;
        }
      }
    }

    .header_form {
      display: flex;
      gap: 1em;
      margin-top: 3em;
    }
  `
)

export const InputStyle = styled.input(
  ({ bgColor }) => css`
    /* width: 100%; */
    /* height: 4em; */
    padding: 1em;
    background: ${colors.black};
    font-family: ${fonts.paragraph};
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
    font-family: ${fonts.paragraph};
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
    letter-spacing: 2px;
    font-family: ${fonts.heading};
  `
)

export const SectionTitle = styled.h2(
  ({ color }) => css`
    font-family: ${fonts.secondParagraph};
    letter-spacing: 1px;
    font-size: ${metrics.bigFont};
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
    /* height: 100vh; */
    background: ${colors.lightBlack};
    /* overflow-y: hidden; */
  `
)

export const LandingContainer = styled.div(
  ({ full }) => css`
    /* height: 0vh; */
    background: ${colors.black};
    color: ${colors.white};
    /* overflow-y: scroll; */

    /* Styling for the landing page content */
    main {
      .how_it_works {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
        height: 30vh;
        padding: 1em;

        .step {
          width: 20em;
          background: ${colors.red};
        }
      }

      .popular_cars {
        background: ${colors.white};
        color: ${colors.black};
        padding: 1em;

        .title {
          text-align: center;
        }

        .swiper-container {
          width: 30em;
          height: 100%;
          /* background-color: ${colors.darkGreen}; */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .swiper-slide {
          img {
            width: 100%;
            display: block;
          }
        }
      }
    }
  `
)
