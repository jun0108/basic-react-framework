import { css } from "styled-components";

export const autoPrefix = ({
	prefix,
	name,
	value,
}: {
  prefix: 'webkit' | 'moz' | 'ms' | 'o';
  name: string;
  value: string;
  }) => css`
    -${prefix}-${name}: ${value};
`;
