import * as React from 'react';
import SVGIcon from './SVGIcon';

export default class BackboneJS extends SVGIcon {
  public render(): React.ReactNode {
    return (
      <svg
        className="svg-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 318"
      >
        <path
          d="M0 0v171.945L127.984 244.9v-49.592l-85.62-48.807v-76.66l85.62 48.806V72.956L0 0z"
          fill="#002A41"
        />
        <path
          d="M255.967 0v171.945L127.984 244.9v-49.592l85.619-48.807v-76.66l-85.62 48.806V72.956L255.968 0z"
          fill="#0071B5"
        />
        <path
          d="M0 317.933V145.988l127.984-72.956v49.592l-85.62 48.806v72.761l85.62-48.806v49.592L0 317.933z"
          fill="#0071B5"
        />
        <path
          d="M255.967 317.933V145.988L127.984 73.032v49.592l85.619 48.806v72.761l-85.62-48.806v49.592l127.984 72.956z"
          fill="#002A41"
        />
      </svg>

    );
  }
}
