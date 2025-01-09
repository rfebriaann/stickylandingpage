"use-client"
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Jumbotorn() {
    const sticky = useRef(null);
    const content = useRef(null);
    const flowimage = useRef(null);
    const bintang = useRef(null);
    const logo = useRef(null);

    useEffect(()=>{
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

        gsap.to(bintang.current, {
            transformOrigin: "center",
            rotation: "360",
            duration: 2,
            repeat: -1, // Ulang terus menerus
            ease: "linear",
        });
        
        gsap.to(flowimage.current, {
            scrollTrigger: {
                trigger: flowimage.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 3,
            },
            y: -650,
            rotation: 30,
            ease: "power3.out"
        });

        gsap.to(sticky.current, {
            scrollTrigger: {
                trigger: sticky.current,
                start: "top top",
                end: () => "+=" + (window.innerHeight + content.current.offsetHeight * 0.5),
                scrub: 1,
            },
            y: 650,
            scale: 0.55,
            rotation: -15,
            ease: "power3.out"
        });

        gsap.fromTo(content.current,
            {
                x: -200,
                scale: 0.3,
                rotation: 15,
            },
            {
                scrollTrigger: {
                    trigger: content.current,
                    start: "top 600px",
                    end: "top 400px",
                    scrub: 1,
                },
                x: 0,
                scale: 1,
                rotation: 0,
                ease: "power3.in"
            }
        );
    });

    return (
        <div className="h-full w-full">
            <section ref={sticky} className="relative h-screen w-full bg-[#FE603D] overflow-hidden">
                <div className="absolute top-40 left-28 h-full w-full">
                <div className="">
                    <svg
                        width="100"
                        height="100"
                        viewBox="0 0 610 668"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                        <mask id="star-mask">
                            <rect width="610" height="668" fill="white" />
                            <path
                            ref={bintang}
                            d="M313.479 320.988V416.612L387.479 416.612L387.479 320.988L462.884 379.901L508.443 321.588L410.577 245.127L508.443 168.665L462.884 110.352L387.479 169.266L387.479 73.643L313.479 73.643L313.479 169.265L238.074 110.352L192.515 168.665L290.381 245.127L192.515 321.588L238.074 379.901L313.479 320.988Z"
                            fill="black"
                            />
                        </mask>
                        </defs>

                        <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M610 667.788V238.978C594.021 159.389 516.485 0.209229 334.18 0.209229C151.875 0.209229 55.3493 181.2 29.8747 271.696L0 376.114H95.877V538.31H334.18V667.788H610Z"
                        fill="black"
                        mask="url(#star-mask)"
                        />
                    </svg>
                    {/* <Image src="/svg/textlogo.svg" width={200} height={200} /> */}
                    </div>
                </div>
                <div className="absolute top-40 h-full w-full flex justify-between items-center gap-20 px-10">
                    <div className="basis-1/3 font-figtree text-white font-medium">
                        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</h1>
                    </div>
                    <Image className="basis-1/3" ref={flowimage} src="/image/flow.svg" width={550} height={550} />
                    <div className="basis-1/3 flex flex-col items-end gap-5">
                        <div className="p-2 bg-gradient-to-br from-[#FEBF59] to-[#FE603D] rounded-full shadow-md">
                            <Image src="/svg/instagram.svg" width={30} height={30} />
                        </div>
                        <div className="p-2 bg-gradient-to-br from-[#FEBF59] to-[#FE603D] rounded-full shadow-md">
                            <Image src="/svg/facebook.svg" width={30} height={30} />
                        </div>
                        <div className="p-2 bg-gradient-to-br from-[#FEBF59] to-[#FE603D] rounded-full shadow-md">
                            <Image src="/svg/github.svg" width={30} height={30} />
                        </div>
                    </div>
                </div>
            </section>
            <section ref={content} className="relative h-screen w-full bg-gradient-to-br from-[#FEBF59] to-[#FE603D]">
                <div className="absolute w-1/2 left-0 h-full">
                    <Image ref={logo} className="absolute -left-40" src="/3d/logo.png" width={1200} height={1200} />
                </div>
                {/* <div className="absolute w-1/2 -bottom-40 right-0 h-full">
                    <Image ref={logo} className="absolute -bottom-60 -right-0" src="/3d/bintang3.png" width={1200} height={1200} />
                </div> */}
            </section>
        </div>
    );
}