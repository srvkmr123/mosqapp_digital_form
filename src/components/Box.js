import styled, { css } from "styled-components";
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  system,
  variant,
} from "styled-system";
import theme from "../../theme";
import PropTypes from "prop-types";

const hideScrollCss = css`
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
    display: none;
  }
`;

const textVariants = css`
  ${variant({
    variants: {
      text1: {
        fontSize: theme.fontSizes.xl,
        fontWeight: theme.fontWeights.bold,
      },
      text2: {
        fontSize: theme.fontSizes.lg,
        fontWeight: theme.fontWeights.bold,
      },
      text3: {
        fontSize: theme.fontSizes.lg,
        fontWeight: theme.fontWeights.normal,
      },
      text4: {
        fontSize: theme.fontSizes.md,
        fontWeight: theme.fontWeights.bold,
      },
      text5: {
        fontSize: theme.fontSizes.md,
        fontWeight: theme.fontWeights.normal,
      },
      text6: {
        fontSize: theme.fontSizes.sm,
        fontWeight: theme.fontWeights.bold,
      },
      text7: {
        fontSize: theme.fontSizes.sm,
        fontWeight: theme.fontWeights.normal,
      },
      text8: {
        fontSize: theme.fontSizes.xs,
        fontWeight: theme.fontWeights.normal,
      },
    },
  })}
`;

const Box = styled.div`
  cursor: ${(props) => (props.onClick ? "pointer" : "auto")};

  ${space};
  ${color};
  ${typography};
  ${layout};
  ${flexbox};
  ${grid};
  ${background};
  ${border};
  ${position};
  ${shadow};

  ${system({
    cursor: {
      property: "cursor",
    },
    transform: {
      property: "transform",
    },
    whiteSpace: {
      property: "white-space",
    },
    textOverflow: {
      property: "text-overflow",
    },
  })};

  ${(props) => (props.noScrollBar ? hideScrollCss : "")};

  ${(props) => props.variant && textVariants};
`;

Box.propTypes = {
  variant: PropTypes.oneOf([
    "text1", // Text 1 - 22/600
    "text2", // Text 2 - 18/600
    "text3", // Text 3 - 18/400
    "text4", // Text 4 - 16/600
    "text5", // Text 5 - 16/400
    "text6", // Text 6 - 14/600
    "text7", // Text 7 - 14/400
    "text8", // Text 8 - 12/400
  ]),
};

export default Box;
