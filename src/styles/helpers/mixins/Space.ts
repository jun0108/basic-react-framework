import { css } from "styled-components";

export const space = ({ x, y }: { x?: string | number; y?: string | number }) => css`
  & > :not([hidden]) ~ :not([hidden]) {
    ${x ? `margin-left: ${x};` : ""}
    ${y ? `margin-top: ${y};` : ""}
  }
`;

/* gap 스타일이 필요시 크로스브라우징 이슈로 사용 가능 */
export const gapMargin = (x?: string, y?: string, mode?: string) => css`
  display: ${mode ? mode : ''};
  margin: -${y} -${x} 0 0;
  & > :not([hidden]) {
    box-sizing: border-box;
    margin: ${y} ${x} 0 0;
  }
`;