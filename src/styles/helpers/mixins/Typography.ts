import { css } from "styled-components";

export const typo = ({
  fontFamily = "var(--font-noto)",
  lineHeight,
  size = 16,
  weight = 400,
  color = "gray-900",
}: {
  fontFamily?: string | null;
  lineHeight?: string | null;
  size?: number;
  weight?: number;
  color?: string;
}) => css`
    ${fontFamily ? `font-family: ${fontFamily};` : ""}
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
