import React from "react"
import { Link, graphql } from "gatsby"
import { Flex, Box } from "theme-ui"

import H from "../components/Typography/H"
import P from "../components/Typography/P"
import S from "../components/Typography/S"

import { InstagramFeed } from "../contracts/post"

import SEO from "../components/SEO"

export interface Props {
  data: {
    allInstaNode: InstagramFeed
  }
  location: Location
}

const SvgComponent = (props) => (
  <Box
    sx={{
      maxWidth: 500,
      "& *": { stroke: "currentColor !important" },
    }}
  >
    <svg viewBox="0 0 797.46 814.59" {...props}>
      <defs>
        <style>
          {
            ".cls-1,.cls-6,.cls-7{fill:none}.cls-2{fill:#949494}.cls-3{fill:url(#New_Pattern)}.cls-4{fill:#f8f8f8}.cls-5{fill:#d3d3d3}.cls-6,.cls-7{stroke:#000;stroke-linecap:round;stroke-width:2.5px}.cls-6{stroke-linejoin:round}.cls-7{stroke-miterlimit:10}"
          }
        </style>
        <pattern
          id="New_Pattern"
          data-name="New Pattern"
          width={12}
          height={12}
          patternUnits="userSpaceOnUse"
          viewBox="0 0 12 12"
        >
          <path className="cls-1" d="M0 0H12V12H0z" />
          <path className="cls-1" d="M0 0H12V12H0z" />
          <circle className="cls-2" cx={12} cy={3} r={2} />
          <circle className="cls-2" cx={6} r={2} />
          <circle className="cls-2" cy={3} r={2} />
          <circle className="cls-2" cx={12} cy={9} r={2} />
          <circle className="cls-2" cx={6} cy={6} r={2} />
          <circle className="cls-2" cy={9} r={2} />
          <circle className="cls-2" cx={6} cy={12} r={2} />
        </pattern>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="vector">
          <path
            className="cls-3"
            d="M452.59 222.7L458.06 208.54 449.71 207.74 447.28 186.44 442.54 165.38 439.8 145.19 435.11 124.91 434.51 121.92 434.72 94.67 432.07 86.36 427.15 80.58 422.19 82.67 426.69 93.94 428.32 110.34 425.92 122.84 425.79 124.63 428.66 145.62 433.06 168.28 437.09 189.67 442.39 212.02 444.69 230.03 453.16 226.74 452.59 222.7z"
          />
          <path
            className="cls-4"
            d="M445.24 229.3l-10.83-56.46-9.22-49.72v-.07c-.08.19-.15.39-.23.57 1.13 5.84 19.48 101 19.88 105.83zM428 111.34v-.07a1 1 0 010 .17z"
          />
          <path
            className="cls-4"
            d="M703.84 272.59c-19.68-33.74-36.26-63.2-52.17-89-63.11-7.15-99.54-35.7-131.16-35.7-3.68 0-9.4 1.5-11.57 1.5l-4.8 9 .14 12.39 7.43 1.4 10 5.33 7.09 6.61 8.68 12.92-.59.39c4.27 1.65 7.63 4.19 9.52 7.88 2.47 4.8 2.26 10.44.29 16.29 15.29 57.24 5.37 142.37-.34 147.1-8.64 7.16-100.75-17-108.4-27.66-3.18-4.4-2.53-34.51 3.18-68.27l.73-.35c-12.55 1.5-23.82 0-30.89-7.05-16.12-16.12-8.22-129.11-7.34-141a46.85 46.85 0 01-3.7-19.06C400 89.69 406.33 77 414.17 77c3.49 0 6.69 2.53 9.16 6.71l-1-2.4h3.68l3.87 2.58 5 9.07 1.24 6.93-.38 24.67 14.62 84.1 8.88-.87 4.51-10 9.77-13.72 7.65-8.33v-5.28c-14.84-2.54-26.4-22.84-26.4-47.5 0-1.86.06-3.7.19-5.5l.84-10.58 1.56-3.49c.07-.27.14-.54.22-.8-1.15-.63-5-4.17-5-16.37 0-24 26.56-36.9 48.83-41.9-29.62-12.8-62.77-22.73-99.28-30.8C327.68-2.62 239.75-11.07 186.53 28S114.82 153.14 84.44 248.61c-30.6 95.46-73.08 200.29-51.15 296 21.69 95.47 108 181.8 202.58 193.9s197.33-50 306.5-91.35S767.1 585.48 792 522.45s-40.66-168.78-88.16-249.86zM290.3 607.48h-57.56l39.06-13.81v-8.07h18.5zM426.49 91.3z"
          />
          <path
            className="cls-4"
            d="M462.08 92.88a11.39 11.39 0 01.08-1.5c-1.83 3.06-4.21 10-4.6 11.28l.07.15z"
          />
          <path
            className="cls-3"
            d="M503.78 263.8c5.32 2.29 50.69 29.49 50.26 58.74.83-25.17.83-46.24.83-46.24L552 254.14l-4.71-30.58-9.63 14.8-12.56 13.39-14.78 10.65z"
          />
          <path
            className="cls-5"
            d="M171.08 774.78h-31.3v37.07H93.89v-37.07H0v-14l108.48-148.26h31.3v122.76h31.3zm-77.19-39.5v-46.19l-32.81 46.19zM197.21 712.49c0-57.43 16.71-102.71 75-102.71 58 0 74.14 45.28 74.14 102.71 0 57.13-16.1 102.1-74.14 102.1-58.29 0-75-44.97-75-102.1zm103.31 0c0-34.64-6.69-61.38-28.26-61.38-21.88 0-29.47 26.74-29.47 61.38 0 34.33 7.59 60.47 29.47 60.47 21.57.04 28.26-26.14 28.26-60.47zM535.1 774.78h-31.3v37.07h-45.88v-37.07H364v-14l108.5-148.26h31.3v122.76h31.3zm-77.18-39.5v-46.19l-32.82 46.19z"
          />
          <path d="M536.15 404.21c.86 8.18 18.93 360.89 18.93 360.89h-18.93L444.1 433z" />
          <path d="M546.4 368.72c2.39 48.19-18.14 87.66-53.79 87.66-48.94 0-113.73-31.2-131.56-48.81-4.45 13.16-67.57 178.92-67.57 178.92h-26.14s16.75-193 48.15-242.5c10.33-13.76 79.92-13.25 122.51-2.93 33.81 21.39 96.73 30.94 108.4 27.66z" />
          <path
            className="cls-6"
            d="M422.33 82.2a6.11 6.11 0 013.68-.86c3.83.27 10.09 10.39 10.09 18.58s-2.31 11.27-1.61 17.22 15.85 86.63 15.85 91.55a67.52 67.52 0 008.88-.57"
          />
          <path
            className="cls-7"
            d="M503.78 170.42c15.32 1.72 26.35 12.16 34.15 27.44M452.23 226.58c7-21.6 16.54-40.38 28.92-49.85M546.74 221.62c15.29 57.24 5.37 142.37-.34 147.1-8.64 7.16-100.75-17-108.4-27.66-3.18-4.4-2.53-34.51 3.18-68.27"
          />
          <path
            className="cls-6"
            d="M472.8 218.76c-4.07 1.38-27.94 10.69-27.94 10.69-.4-4.8-18.75-100-19.88-105.83a47.62 47.62 0 003.37-18.3C428.35 89.69 422 77 414.17 77S400 89.69 400 105.32a46.85 46.85 0 003.7 19.06c-.88 11.9-8.78 124.89 7.34 141 16.44 16.44 55.53 2.68 80.81-8.57"
          />
          <path
            transform="rotate(14.87 446.238 113.066)"
            d="M438.44 107.64H453.94V118.47H438.44z"
          />
          <path
            className="cls-7"
            d="M527.77 195.32c8.55 1 15.57 4 18.68 10 11.29 21.92-33.42 61.41-45.79 58.47s-32.32-47.08-28.59-55c1.06-2.27 6.73-5.28 14.52-7.91"
          />
          <path
            className="cls-6"
            d="M481.15 176.73v-6.2M503.78 158.94v29.78c0 1.8-5.33 2.95-10.81 3.12M508.94 149.37a48.54 48.54 0 01-5.16 9.57M490.25 169.83a18.84 18.84 0 01-6 1c-16.32 0-29.54-21.39-29.54-47.77a72.77 72.77 0 012.81-20.37"
          />
          <path
            className="cls-6"
            d="M504.46 141.17c.58 5.45 2.64 8.2 4.48 8.2 2.17 0 7.89-1.5 11.57-1.5 36.14 0 78.58 37.31 160 37.31 42.53 0 109.27-10.73 109.27-73.19 0-33.73-12.14-74.49-76.31-74.49-40.75 0-69.3 20-102.78 20-43 0-59.58-15.57-89.29-15.57-21.16 0-68.78 12.26-68.78 44.38 0 12.2 3.82 15.74 5 16.37.39-1.3 2.77-8.22 4.6-11.28a18.94 18.94 0 003.62 12.56M498.24 123.68a32.23 32.23 0 012.34 3"
          />
          <path
            className="cls-6"
            d="M497.05 128.09a7.43 7.43 0 014.21-1.29 7.54 7.54 0 013.2 14.37"
          />
          <path d="M428.35 105.32a49.32 49.32 0 01-2.71 16.68c8.51 1 14.67 1.73 14.67 1.73l5.87-23.73s-8.68-3.61-19.49-8a51.94 51.94 0 011.66 13.32zM400 105.32c0-8.83 2-16.71 5.2-21.9-9.33-3.67-17.18-6.65-19.41-7.21-6.49-1.6-16 37.61-9.69 39.18 2.55.63 13.52 2.1 25.69 3.64a51.61 51.61 0 01-1.79-13.71z" />
          <path
            className="cls-6"
            d="M290.3 585.6L290.3 607.48 232.74 607.48 271.81 593.67 271.81 585.6"
          />
          <path
            className="cls-6"
            d="M554.08 764.27L554.08 786.15 502.52 786.15 537.51 772.34 537.51 764.27"
          />
        </g>
      </g>
    </svg>
  </Box>
)

export default (props: Props) => {
  return (
    <Flex
      sx={{
        p: [3, 4],
        pt: [8, 8],
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SEO title="404: Not found" />
      <Box>
        <H as="h1" sx={{ textAlign: "center" }}>
          404: Not found
        </H>
        <P sx={{ textAlign: "center", mb: [3, 4] }}>How did you get here?</P>
        <S sx={{ textAlign: "center", mb: [3, 4] }}>
          We can't find the thing you're looking for.
        </S>
        <Box mt={[3, 4]}>
          <SvgComponent />
        </Box>
      </Box>
    </Flex>
  )
}
