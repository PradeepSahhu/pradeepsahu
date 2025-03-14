import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframe animations
const earthRotate = keyframes`
  0% { background-position: 0px 0; }
  100% { background-position: 600px 0; }
`;

const cloudRotate = keyframes`
  0% { background-position: 0px 0; }
  100% { background-position: 620px 0; }
`;

const blink = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

const dataPulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(30); opacity: 0; }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.2; }
  50% { opacity: var(--opacity); }
`;

// Styled components
const Scene = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  transform-style: preserve-3d;
  perspective: 1000px;
`;

const EarthContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
`;

const Earth = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: url("/api/placeholder/600/300");
  background-size: 600px 300px;
  animation: ${earthRotate} 24s linear infinite;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.9),
    0 0 50px 10px rgba(76, 169, 255, 0.3);
`;

const Clouds = styled.div`
  position: absolute;
  width: 310px;
  height: 310px;
  border-radius: 50%;
  background: url("/api/placeholder/620/310");
  background-size: 620px 310px;
  opacity: 0.5;
  top: -5px;
  left: -5px;
  animation: ${cloudRotate} 20s linear infinite;
  pointer-events: none;
`;

const EarthGlow = styled.div`
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(76, 169, 255, 0.2) 0%,
    rgba(76, 169, 255, 0) 70%
  );
  top: -10px;
  left: -10px;
  pointer-events: none;
`;

const Orbit = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
`;

const Satellite = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  transform-origin: center;
`;

const SatelliteBlink = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 0, 0, 0.7);
  border-radius: 50%;
  top: 2px;
  right: -2px;
  animation: ${blink} 2s infinite;
`;

const DataStream = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  background: rgba(76, 169, 255, 0.7);
  border-radius: 50%;
  animation: ${dataPulse} 2s infinite;
  opacity: 0;
`;

const Star = styled.div`
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: ${twinkle} var(--duration) ease-in-out infinite;
  opacity: var(--opacity);
`;

const EarthWithSatellites = () => {
  return (
    <Scene>
      <EarthContainer>
        <Earth />
        <Clouds />
        <EarthGlow />
      </EarthContainer>

      <Orbit
        style={{
          width: "400px",
          height: "400px",
          animation: "orbit-rotation-1 30s linear infinite",
        }}
      >
        <Satellite
          style={{ top: "0", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <SatelliteBlink />
          <DataStream />
        </Satellite>
        <Satellite
          style={{
            bottom: "0",
            left: "50%",
            transform: "translate(-50%, 50%)",
          }}
        >
          <SatelliteBlink />
          <DataStream />
        </Satellite>
        <Satellite
          style={{ top: "50%", left: "0", transform: "translate(-50%, -50%)" }}
        >
          <SatelliteBlink />
          <DataStream />
        </Satellite>
      </Orbit>

      {/* Add more orbits and satellites here */}

      {/* Stars */}
      {[...Array(100)].map((_, index) => (
        <Star
          key={index}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            "--duration": `${Math.random() * 2 + 2}s`,
            "--opacity": `${Math.random() * 0.5 + 0.5}`,
          }}
        />
      ))}
    </Scene>
  );
};

export default EarthWithSatellites;
