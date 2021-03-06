import styled, { css } from "styled-components";
import { colors, fonts, metrics } from "../components/constants";

export const HeaderStyle = styled.div(
  ({ bgImage }) => css`
    height: 80vh;
    background: linear-gradient(to right, #1a1a1a50, #f3790720),
      url("https://res.cloudinary.com/dyj6pqx6d/image/upload/v1624443336/car-rental/kevin-bonilla-YPfnvLc3bbQ-unsplash_i0iiop.jpg")
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
);

export const InputStyle = styled.input(
  ({ bgColor, small, hoverBg }) => css`
    /* width: 100%; */
    /* height: 4em; */
    width: ${small ? "5rem" : "inherit"};
    padding: 1em;
    background: ${colors.black};
    font-family: ${fonts.paragraph};
    color: ${colors.altWhite};
    outline: 0;
    border-radius: ${metrics.radius};
    transition: background 200ms ease-in;
    &.password {
      letter-spacing: 0.5rem;
    }
    &:focus {
      background: ${hoverBg || colors.lightBlack};
    }
  `
);

export const TextButton = styled.button(
  () => css`
    padding: 0.5rem;
    background: transparent;
    color: ${colors.white};
    transition: color 200ms ease-in;
    font-family: ${fonts.general};
    &:hover {
      cursor: pointer;
      color: ${colors.darkOrange};
    }
  `
);

export const Button = styled.button(
  ({ bgColor }) => css`
    background: ${colors.white};
    /* background: transparent; */
    color: ${colors.altWhite};
    /* padding: 0.5em 1.2em; */
    font-family: ${fonts.general};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    transition: background 200ms ease-in, color 300ms ease-in;
    border-radius: ${metrics.radius};
    font-size: ${metrics.smallFont};
    border: ${metrics.border} solid transparent;
    outline: 0;
    overflow: hidden;
    &:hover {
      background: ${colors.ghostWhite};
      outline: 0;
      /* border: ${metrics.border} solid ${colors.orange}; */
      color: ${colors.white};
      cursor: pointer;
      box-shadow: 2px 4px 10px 5px rgba(5, 5, 5, 0.9);

      .text {
        background: ${colors.darkGreen};
      }

      .icon {
        transform: translate(0, 0.2rem) scale(1.3);
        color: ${colors.red};

        &:hover {
          /* transform: scale(1); */
        }
      }
    }
    &:active {
      transform: translateY(0.1rem);
    }

    .text {
      background: ${colors.orange};
      padding: 0.5rem 1rem;
    }

    .icon {
      background: ${colors.white};
      position: relative;
      /* top: 0.15rem; */
      color: ${colors.orange};
      /* font-size: 1rem; */
      padding: 0.5rem 1rem;
      transform: scale(1.1);
      transition: transform 200ms ease-out;
    }
  `
);

export const IconButton = styled.button(
  ({ round, bg, color }) => css`
    height: 1rem;
    width: 1rem;
    padding: 1rem;
    border-radius: ${round ? "50%" : metrics.radius};
    background: ${bg || colors.white};
    display: flex;
    border: 0.2rem solid ${colors.lightPurple};
    justify-content: center;
    align-items: center;
    color: ${color || colors.lightGreen};
    font-weight: 600;
    transition: color 200ms ease-in, border-color 200ms ease-in;
    &:hover {
      background: ${colors.orange};
      cursor: pointer;
      color: ${color || colors.white};
      border-color: ${colors.lightOrange};
    }
  `
);

export const Title = styled.h1(
  ({ font, color }) => css`
    color: ${colors.altWhite};
    letter-spacing: 2px;
    font-family: ${fonts.heading};
  `
);

export const SectionTitle = styled.h2(
  ({ color, size }) => css`
    font-family: ${fonts.secondParagraph};
    letter-spacing: 1px;
    font-size: ${size || metrics.bigFont};
  `
);

export const Paragraph = styled.p(
  ({ font, size, color }) => css`
    font-size: ${size || 1}em;
    color: ${colors.orange};
    font-family: ${fonts.paragraph};
  `
);

export const PageContainer = styled.div(
  ({ full }) => css`
    min-height: 100vh;
    background: ${colors.lightBlack};
    color: ${colors.white};
    overflow: hidden;
  `
);

export const LandingContainer = styled.div(
  ({ full }) => css`
    /* height: 0vh; */
    background: ${colors.white};
    color: ${colors.black};
    /* overflow-y: scroll; */
    /* Styling for the landing page content */
    main {
      .how_it_works {
        background: ${colors.black};
        color: ${colors.white};
        display: flex;
        font-family: ${fonts.general};
        justify-content: center;
        align-items: center;
        gap: 1em;
        height: 30vh;
        padding: 1em;
        .step {
          width: 22em;
          background: ${colors.lightBlack};
          border-radius: ${metrics.radius};
          color: ${colors.ghostWhite};
          padding: 1em;
          margin-top: 2em;
        }
      }
      .popular_cars {
        background: ${colors.white};
        /* background: ${colors.black}; */
        color: ${colors.black};
        padding: 1em;
        .title {
          text-align: center;
          padding: 2em 0;
        }
        // STYLING FOR THE SWIPER CONTAINER
        .swiper-container {
          width: 25em;
          background-color: ${colors.lightBlack};
          color: ${colors.white};
          border-radius: ${metrics.radius};
          padding: 5em 0 1em;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .swiper-slide {
          color: ${colors.white};
          .actions {
            margin: 3em 0 1em;
          }
          .info,
          .actions {
            display: flex;
            align-items: center;
            font-family: ${fonts.paragraph};
            justify-content: space-around;
          }
          .model {
            font-family: ${fonts.secondParagraph};
            font-size: ${metrics.bigFont};
            color: ${colors.orange};
            font-weight: 400;
          }
          .price_section {
            /* font-size: ${metrics.bigFont}; */
            display: flex;
            flex-direction: column;
            .price {
              font-size: ${metrics.bigFont};
            }
            span {
              color: ${colors.lightOrange};
              align-self: flex-end;
            }
          }
          img {
            object-fit: cover;
            width: 100%;
            display: block;
          }
        }
      }
    }
  `
);

export const Container = styled.section(
  () => css`
    /* border: 1px solid green; */
    background-color: white;
    color: black;
    padding: 1rem;
  `
);

export const TitleContainer = styled.div(
  () => css`
    text-align: center;
  `
);

export const SWhyUs = styled.section(
  () => css`
    background-color: white;
    color: black;
    padding: 1rem;
    .reasons {
      display: flex;
      justify-content: center;
      padding: 1rem;
      gap: 2rem;
    }
    .reason {
      height: 200px;
      padding: 1rem;
      border-radius: 1rem;
      border: 0.5px solid #e2e2e2;
      .icon {
        padding: 1rem;
        border-radius: 1rem;
        background: #5ef81150;
        font-weight: 800;
        display: inline-flex;
      }
      p {
        font-weight: bold;
        /* position: fixed; */
        bottom: 0;
      }
    }
  `
);

export const SDiscover = styled.div(
  () => css`
    margin: 1rem 4rem;
    background: ${colors.black};
    color: ${colors.white};
    border-radius: 1rem;
    padding: 4rem 0;
    text-align: center;
    box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.75);
    p {
      margin: 1rem 0;
    }
  `
);

export const SFooter = styled.footer(
  () => css`
    /* border: 1px solid aquamarine; */
    display: flex;
    justify-content: space-around;
    padding: 2rem 3rem;
  `
);

export const SNavbar = styled.nav(
  () => css`
    display: flex;
    padding: 1rem 2rem;
    /* position: sticky; */
    /* top: 1rem; */
    justify-content: space-between;
    align-items: center;
    color: ${colors.white};
    background: ${colors.lightBlack};
    font-family: ${fonts.paragraph};
    a {
      text-decoration: none;
      color: inherit;
    }
    .navbar {
      list-style-type: none;
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
    }
    .navlinks {
      border-bottom: 2px solid transparent;
      padding: 0.5rem 0;
      transition: border 200ms ease-in;
      &:hover {
        border-color: ${colors.yellow};
      }
    }
  `
);

export const SSubscribeForm = styled.section(
  () => css`
    text-align: center;
    display: flex;
    flex-direction: column;
    .subscription_form {
      margin-top: 1rem;
      border: 2px solid ${colors.lightOrange};
      border-radius: 0.4rem;
      overflow: hidden;
      transition: border-color 200ms ease-in-out;
      &:hover {
        border-color: ${colors.midGreen};
      }
    }
  `
);

export const SubscribeInput = styled.input(
  () => css`
    padding: 1rem 1.5rem;
    background: transparent;
    outline: 0;
  `
);

export const SAuthModal = styled.div(
  () => css`
    position: absolute;
    top: 0;
    overflow: none;
    height: 100vh;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 0;
    background: ${colors.lightBlack};
    font-family: ${fonts.general};
    /* opacity: .8; */
    .closeModal {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  `
);

export const SForm = styled.form(
  () => css`
    display: flex;
    flex-direction: column;
  `
);

export const SAuthForm = styled.form(
  () => css`
    display: flex;
    flex-direction: column;
    width: 30rem;
    gap: 1rem;
    opacity: 1;
    background: ${colors.black};
    padding: 1rem;
    border-radius: ${metrics.radius};
    .inputGroup {
      display: flex;
      flex-direction: column;
      label {
        margin-bottom: 0.5rem;
        color: ${colors.darkOrange};
        font-size: 0.8rem;
      }
    }
  `
);

export const Row = styled.div(
  ({ justify, alignment, gap }) => css`
    display: flex;
    justify-content: ${justify || "inherit"};
    gap: ${gap || 0};
    align-items: ${alignment || "inherit"};
  `
);

export const SRentals = styled.div(
  () => css`
    display: grid;
    grid-template-columns: 250px 100%;
    height: 100vh;
    font-family: ${fonts.general};
    border-top: 2px solid ${colors.altWhite};
    /* padding-bottom: 10rem; */
    overflow: hidden;
  `
);

export const SCarRentals = styled.div(
  () => css`
    display: flex;
    flex: 1 1 50rem;
    gap: 1rem;
    overflow-y: scroll;
    flex-wrap: wrap;
    padding: 2rem;
  `
);

export const SFilterSection = styled.div(
  () => css`
    border-right: 2px solid ${colors.darkOrange};
    overflow-x: hidden;
    padding: 2rem;

    .filter {
      .filterName {
        color: ${colors.gray};
        margin: 1rem 0 0.5rem;
        font-weight: 400;
      }
      .checkGroup {
        margin-bottom: 0.5rem;
        label {
          margin-left: 0.5rem;
        }
      }

      .selectGroup {
        select {
          padding: 0.5rem 1.5rem 0.5rem 0.5rem;
          outline: none;
        }
      }
    }
    .buttons {
      margin-top: 2rem;
    }
  `
);

export const SCarCard = styled.div(
  () => css`
    background: ${colors.black};
    margin-bottom: 2rem;
    font-family: ${fonts.general};
    color: ${colors.white};
    border-radius: 10px;
    transition: transform 200ms ease-in;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 2rem;
    padding-bottom: 0;
    gap: 1rem;

    &:hover {
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
    }

    // ICON BUTTON
    .icon {
      &.favorite {
        padding: 0.5rem;
        transition: transform 50ms ease-in-out;

        &:hover {
          cursor: pointer;
          background: ${colors.lightBlack};
          color: ${colors.white};
        }
      }

      &:active {
        transform: translateY(0.3rem);
      }
    }

    .info {
      .describer {
        color: #333;
        font-weight: 800;
      }
      .value {
        color: ${colors.white};
        font-weight: 400;
      }
      div {
        margin-bottom: 1rem;
      }
      .pricePerDay {
        font-size: 2.5rem;
        font-weight: 600;
        .text {
          font-size: 1rem;
          font-weight: 400;
          color: ${colors.lightGreen};
        }
      }
    }

    .carImage {
      height: 300px;
      width: 300px;
      object-fit: cover;
    }
  `
);
