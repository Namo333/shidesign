import React, { useEffect } from 'react';
import { gsap } from "gsap";

const Preloader = () => {
    useEffect(() => {
        gsap.timeline({repeat:-1})
            .to('.b1', {duration:0.4, y:-25, ease:'power3', transformOrigin:'50% 50%'}, 0)
            .to('.b1', {duration:0.55, y:55, ease:'power2.inOut'}, 0.35)
            .to('.b1', {duration:0.9, x:120, ease:'expo.inOut'}, 0.4)
            .to('.b1', {duration:0.6, scale:0.82, ease:'power3.in', yoyo:true, repeat:1}, 0.25)
            .to('.b1', {duration:0.4, y:0, ease:'back.out(6)'}, 0.95)
            .to('.b1', {duration:0.4, rotation:-270, ease:'power1.in'}, 0.9)

            .to('.b', {duration:0.9, x:-30, ease:'expo.inOut', stagger:0.04}, 0.3)
            .to('.b', {duration:0.45, rotation:5, stagger:0.04, ease:'power3.in', transformOrigin:'60% 95%'}, 0.3)
            .to('.b', {duration:0.4, rotation:0, stagger:0.04, ease:'back.out(10)'}, 0.85)
    }, []);

    return (
        <div className="flex items-center justify-center ">
            <div className="preloader">
                <svg className='svg' width="160" height="140" xmlns="http://www.w3.org/2000/svg" fill="#BA93DF">
                    <rect className="b1" x="10" y="60" rx="3" ry="3" width="20" height="20" />
                    <rect className="b" x="40" y="60" rx="3" ry="3" width="20" height="20" />
                    <rect className="b" x="70" y="60" rx="3" ry="3" width="20" height="20" />
                    <rect className="b" x="100" y="60" rx="3" ry="3" width="20" height="20" />
                    <rect className="b" x="130" y="60" rx="3" ry="3" width="20" height="20" />
                </svg>
            </div>
        </div>
    );
};

export default Preloader;