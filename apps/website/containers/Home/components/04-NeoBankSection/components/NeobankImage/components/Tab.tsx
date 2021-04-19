import * as React from 'react';

function Tab(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 321 209" {...props}>
      <defs>
        <linearGradient
          id="tab_prefix__b"
          x1="66.445%"
          x2="63.807%"
          y1="46.911%"
          y2="51.644%"
        >
          <stop offset="0%" stopColor="#E8F7FA" />
          <stop offset="100%" stopColor="#70CACF" />
        </linearGradient>
        <linearGradient
          id="tab_prefix__c"
          x1="66.095%"
          x2="63.796%"
          y1="46.911%"
          y2="52.184%"
        >
          <stop offset="0%" stopColor="#C5EFF1" />
          <stop offset="100%" stopColor="#8DD2DC" />
        </linearGradient>
        <filter
          id="tab_prefix__a"
          width="250.7%"
          height="694.7%"
          x="-75.3%"
          y="-297.4%"
          filterUnits="objectBoundingBox"
        >
          <feOffset
            dx={-32}
            dy={8}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation={12}
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
            values="0 0 0 0 0.324344252 0 0 0 0 0.210225919 0 0 0 0 0.546875 0 0 0 0.3 0"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          id="tab_prefix__d"
          width="106.4%"
          height="125.8%"
          x="-3.2%"
          y="-12.9%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation={1.6} />
        </filter>
      </defs>
      <g
        filter="url(#tab_prefix__a)"
        transform="translate(85.844 85.538)"
        strokeWidth={1.6}
        fill="none"
        fillRule="evenodd"
      >
        <path
          fill="#8BDEE2"
          stroke="url(#tab_prefix__b)"
          d="M131.334.8c4.926 0 9.386 1.997 12.614 5.225a17.784 17.784 0 015.225 12.614c0 4.926-1.997 9.386-5.225 12.614a17.784 17.784 0 01-12.614 5.225h0H18.639a17.784 17.784 0 01-12.614-5.225A17.784 17.784 0 01.8 18.639c0-4.926 1.997-9.386 5.225-12.614A17.784 17.784 0 0118.639.8h0z"
        />
        <path
          stroke="url(#tab_prefix__c)"
          d="M131.334.8c4.926 0 9.386 1.997 12.614 5.225a17.784 17.784 0 015.225 12.614c0 4.926-1.997 9.386-5.225 12.614a17.784 17.784 0 01-12.614 5.225h0H18.639a17.784 17.784 0 01-12.614-5.225A17.784 17.784 0 01.8 18.639c0-4.926 1.997-9.386 5.225-12.614A17.784 17.784 0 0118.639.8h0z"
          filter="url(#tab_prefix__d)"
        />
      </g>
    </svg>
  );
}

const MemoTab = React.memo(Tab);
export default MemoTab;
