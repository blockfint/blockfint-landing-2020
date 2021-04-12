import * as React from 'react';

function Oval(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 17" {...props}>
      <ellipse
        cx={415}
        cy={70.5}
        rx={9}
        ry={8.5}
        transform="translate(-406 -62)"
        fill="#FCBC14"
        fillRule="evenodd"
      />
    </svg>
  );
}

const MemoOval = React.memo(Oval);
export default MemoOval;
