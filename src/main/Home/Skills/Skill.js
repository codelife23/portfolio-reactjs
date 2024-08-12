import { useLayoutEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useInView,
} from 'framer-motion';

const WrapStyled = styled('div')(() => ({
  display: 'inline-block',

  img: {
    filter: 'grayscale(1)',
    transition: 'filter 0.3s ease',
  },

  '&:hover': {
    img: {
      filter: 'none',
    },
  },
}));

const CircleBgStyled = styled(motion.circle)(({ theme: { palette } }) => ({
  display: 'block',
  strokeDashoffset: 0,
  strokeWidth: 2,
  fill: 'none',
  stroke:
    palette.mode === 'dark' ? palette.common.pumpkin : palette.common.yellow,
  opacity: 0.4,
}));

const CircleIndicatorStyled = styled(motion.circle)(
  ({ theme: { palette } }) => ({
    strokeDashoffset: 0,
    strokeWidth: 10,
    fill: 'none',
    stroke:
      palette.mode === 'dark' ? palette.common.pumpkin : palette.common.yellow,
  })
);

function Skill({ logoSrc, to, title }) {
  const number = useRef(null);

  const isInView = useInView(number, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const pathLength = useTransform(count, (lates) => (lates / 100).toFixed(2));

  useLayoutEffect(() => {
    if (!number.current) return;
    if (!isInView) return;

    const animation = animate(count, to, { duration: 2 });

    return animation.stop;

    // eslint-disable-next-line
  }, [isInView]);

  return (
    <WrapStyled>
      <div className="relative h-120 w-120 mx-auto">
        <div className="circle">
          <svg
            className="-rotate-90"
            width="120"
            height="120"
            viewBox="0 0 120 120"
          >
            <CircleBgStyled cx="60" cy="60" r="55" pathLength="1" />
            <CircleIndicatorStyled
              cx="60"
              cy="60"
              r="55"
              pathLength="1"
              className="indicator"
              style={{ pathLength }}
            />
          </svg>
        </div>

        <div
          className="text-48 font-bold absolute top-1/2 left-1/2 z-2 -translate-x-1/2 -translate-y-1/2"
          style={{ fontFamily: 'monospace' }}
        >
          <motion.span ref={number}>{rounded}</motion.span>%
        </div>
      </div>

      <div className="mt-36 flex items-center gap-12 text-24 text-center font-semibold text-[#676767] leading-none">
        {logoSrc && (
          <div>
            <img className="h-34 w-auto" src={logoSrc} alt={title} />
          </div>
        )}
        <div>{title}</div>
      </div>
    </WrapStyled>
  );
}

export default Skill;
