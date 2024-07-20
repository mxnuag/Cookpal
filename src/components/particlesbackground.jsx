import React from 'react'
import Particles from "react-particles";
import particleConfig from './config/particlesconfig';

export const particlesbackground = () => {
  return (
   <Particle> params={particleConfig}</Particle>
  )
}
