import { css } from "styled-components";

export const typo = ({
  fontFamily,
  lineHeight,
  size = 16,
  weight = 400,
  color = "gray-900",
}: {
  fontFamily?: string;
  lineHeight?: string | null;
  size?: number;
  weight?: number;
  color?: string;
}) => css`
    font-family: ${`var(--font-${fontFamily})` || null};
    line-height: ${lineHeight || "1.5"};
    font-size: var(--font-size-${size});
    font-weight: ${weight};
    color: var(--color-${color});
`;

export const truncate = css`
  overflow: hidden; 
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const multiTruncate = ({
  row = 2,
}: {
  row?: number;
}) => css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${row};
`;
