"use-client"
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Event() {
    const eventcontainer = useRef(null);
    const logo = useRef(null);
    useEffect(()=> {
        gsap.set(logo.current, {
            y: -240,
        });
        gsap.to(logo.current, {
            scrollTrigger: {
                trigger: logo.current,
                start: "250px center",
                end: "bottom 300px",
                scrub: 1,
            },
            y: 130,
        });

        gsap.set(eventcontainer.current, {
            y: 150,
        })
        gsap.to(eventcontainer.current, {
            scrollTrigger: {
                trigger: eventcontainer.current,
                start: "top center",
                end: () => "bottom bottom",
            },
            y: 0,
        });
    })
    return (
        <div ref={eventcontainer} className="relative h-screen w-full bg-gradient-to-bl from-[#FE603D] to-[#FEBF59]">
            <div className="absolute w-1/2 -top-40 -right-0 h-full">
                <Image ref={logo} className="absolute -top-40 -right-0" src="/3d/bintang3.png" width={900} height={900} />
            </div>
        </div>
    );
}