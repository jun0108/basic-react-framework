import { css } from "styled-components";

export const typo = ({
	fontFamily = "var(--font-noto)",
	lineHeight,
	size = "var(--font-size-16)",
	weight = 400,
	color = "var(--color-gray-900)",
}: {
    fontFamily?: string | null;
    lineHeight?: string | null;
    size?: string;
    weight?: number;
    color?: string;
  }) => css`
    font-family: ${fontFamily};
    ${lineHeight ? `line-height: ${lineHeight};` : "1.5"}
    font-size: ${size};
    font-weight: ${weight};
    color: ${color};
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
