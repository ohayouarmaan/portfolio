"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Mesh, Vector3 } from "three";
import Scene from "./Low_poly_computer";

function Cube({position, color}: {position: number[], color?: string}) {
    const cube_mesh = useRef<Mesh>(null);
    const [mousePosition, setMousePosition] = useState<{x: number, y: number}>({x: 0, y: 0});
    const [lightPosition, setLightPosition] = useState<{x: number, y: number}>({x: 0, y: 0});
    window.addEventListener("mousemove", (event) => {
        setMousePosition({
            x: (event.clientX - (window.screen.width / 2)) / window.screen.width,
            y: (event.clientY - (window.screen.height / 2)) / window.screen.height,
        });
        setLightPosition({
            x: event.clientX / window.innerWidth,
            y: event.clientY / window.innerHeight
        });
    })
    useFrame((state, delta) => {
        if(cube_mesh.current) {
            cube_mesh.current.rotation.y = -mousePosition.x + 300
            cube_mesh.current.rotation.x = -mousePosition.y
        };
    });
    return (
        <mesh ref={cube_mesh} position={position as unknown as Vector3}>
            <ambientLight intensity={0.5} />
    
            <directionalLight
                position={[5, 5, 5]}
                intensity={1}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />

            <pointLight position={[-5, -5, -5]} intensity={0.5} />
            <Scene rotation={[0,0,0]} />
        </mesh>
    )
}

export default function Hero() {
   return (<div className="flex w-full h-[90vh]">
    <div className="flex flex-col items-center justify-center p-5 w-[50%]">
        <div className="flex flex-col items-start">
            <h1 className="font-bold text-[4rem]">Hey Everybody!</h1>
            <h1 className="text-neutral-300 text-[2rem]">my name is Armaan and I code.</h1>
            <h3 className="text-neutral-400 text-[1.2rem]">ps: I sometimes make music as well</h3>
        </div>
    </div>
    <div className="flex flex-col w-[50%] items-start">
    <Canvas>
        <Cube position={[0,0,0]} />
    </Canvas>
    </div>
   </div>)
}
