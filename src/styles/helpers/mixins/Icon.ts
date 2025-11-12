import { css } from "styled-components";

export const icon = ({
	name,
	format = 'svg',
	size = "100%",
}: {
  name: string;
  format: string;
  size: string;
  }) => css`
  background: url('/icon/${name}.${format}') no-repeat center center/${size};
`;
