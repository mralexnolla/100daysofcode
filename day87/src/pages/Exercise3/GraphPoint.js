import { useState } from 'react';
import React from 'react';

import './styles.css';

// export const GraphPoint = () => {
//   const [on] = useState(Math.random() > 0.8);

//   return <div className={`e3-graph-point ${on ? 'e3-graph-point-on' : ''}`} />;
// };

export const GraphPoint = React.memo(() => {
  const [on] = useState(Math.random() > 0.8);

  return <div className={`e3-graph-point ${on ? 'e3-graph-point-on' : ''}`} />;
});
