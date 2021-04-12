import * as React from 'react';

function Euro(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 61 61" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={30.5} cy={30.5} r={30.5} fill="#917FE5" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M39.07 39v-3.47h-9.42v-4.589h6.591v-2.588h-6.59v-.774c0-1.281.384-2.25 1.153-2.91.769-.657 1.886-.986 3.35-.986 1.648 0 3.021.32 4.12.96l1.345-3.415C38.136 20.409 36.296 20 34.099 20c-2.819 0-5.011.68-6.576 2.041-1.566 1.361-2.348 3.234-2.348 5.618v.694h-2.746v2.588h2.746v4.59h-2.746V39h16.64z"
        />
      </g>
    </svg>
  );
}

const MemoEuro = React.memo(Euro);
export default MemoEuro;
