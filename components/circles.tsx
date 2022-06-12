import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';

export const Circles: FunctionComponent = () => (
  <motion.div initial="offscreen" whileInView="onscreen" exit="offscreen">
    <Circle
      color="#839791"
      size="max(29vw, 29vh)"
      offX="50px"
      offY="-30px"
      zIndex={-1000}
    />
    <Circle
      color="#aac0af"
      size="max(23vw, 23vh)"
      offX="0px"
      offY="-30px"
      zIndex={-998}
      fromRight={true}
    />
    <Circle
      color="#efd5c3"
      size="max(24vw, 24vh)"
      offX="50px"
      offY="0px"
      zIndex={-999}
      fromBottom={true}
    />
  </motion.div>
);

type CircleProps = {
  size: string;
  offX: string;
  offY: string;
  color: string;
  zIndex: number;
  fromRight?: boolean;
  fromBottom?: boolean;
};

const Circle: FunctionComponent<CircleProps> = ({
  size,
  offX,
  offY,
  color,
  zIndex,
  fromRight = false,
  fromBottom = false,
}) => {
  const approxMid = `50vh + 100px`;
  const distToEdge = `(1.4142135 * ${size} / 2 - ${size} / 2) / 1.4142135`;
  const left = fromRight
    ? `calc(50vw - ${distToEdge} + ${offX})`
    : `calc(50vw - ${size} + ${distToEdge} + ${offX})`;
  const bottom = fromBottom
    ? `calc(${approxMid} - ${size} + ${distToEdge} + ${offY})`
    : `calc(${approxMid} - ${distToEdge} + ${offY})`;
  return (
    <motion.div
      style={{
        position: 'absolute',
        left,
        bottom,
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color,
        zIndex,
      }}
      variants={{
        offscreen: {
          x: fromRight
            ? `calc(100vw - (${left}))`
            : `calc((${left} + ${size}) * -1)`,
        },
        onscreen: { x: 0 },
      }}
    />
  );
};
