import * as React from 'react';

function Thunder(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 63 63" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          fill="currentColor"
          d="M57.572 46.965c8.818-14.675 4.07-33.72-10.606-42.538C32.29-4.39 13.245.358 4.427 15.033-4.39 29.709.358 48.755 15.033 57.572c14.676 8.818 33.721 4.07 42.539-10.606z"
        />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M28.098 43.311l4.558-7.89 13.855 10.544a.896.896 0 001.09-.006.915.915 0 00.3-1.058l-9.989-25.597a.89.89 0 00-.623-.544.904.904 0 00-.807.203l-7.219 6.347-14.3-6.814a.914.914 0 00-1.187 1.261l12.75 23.545a.89.89 0 00.778.467.908.908 0 00.794-.458z"
        />
      </g>
    </svg>
  );
}

const MemoThunder = React.memo(Thunder);
export default MemoThunder;
