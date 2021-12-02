// transformed using https://react-svgr.com/playground/?native=true&typescript=true
import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const Logo = (props: SvgProps) => (
  <Svg width={230} height={250} fill="none" {...props}>
    <G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m180 150-38-62H50v62h130Z"
        fill="url(#b)"
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M126 108.278c29.726-.234 54-24.42 54-54.636C180 24.186 155.726 0 126 0H50v150c0-41.722 76-41.722 76-41.722Z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={-29.948}
        y1={104.742}
        x2={12.748}
        y2={214.853}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#84C1FF" />
        <Stop offset={1} stopColor="#FF7B45" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Logo;
