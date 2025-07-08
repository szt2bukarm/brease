"use client";
import { useEffect, useRef, useState } from "react";
import Button from "../common/Button";
import Heading from "../common/Heading";
import FullstackCard from "./FullstackCard";
import gsap from "gsap";

const cards = [
    {
        image: "feature-2.png",
        title: "Collections, Dynamic content",
        subtext: "$SendNudes is a multilang variable"
    },
    {
        image: "feature-3.png",
        title: "Responsive at it’s core",
        subtext: "Mobile-ready is key"
    },
    {
        image: "feature-1.png",
        title: "React.js under the hood",
        subtext: "Scale with React.js, there is no limit"
    },
    {
        image: "feature-1.png",
        title: "React.js under the hood",
        subtext: "Scale with React.js, there is no limit"
    },
    {
        image: "feature-1.png",
        title: "React.js under the hood",
        subtext: "Scale with React.js, there is no limit"
    },
    {
        image: "feature-1.png",
        title: "React.js under the hood",
        subtext: "Scale with React.js, there is no limit"
    },
];

export default function Fullstack() {
    const wrapperRef = useRef<HTMLDivElement>(null);  // drag listener parent
    const innerRef = useRef<HTMLDivElement>(null);    // card container

    const [currentScroll, setCurrentScroll] = useState(0);
    const [visibleCards, setVisibleCards] = useState(1);
    const [disableLeft, setDisableLeft] = useState(true);
    const [disableRight, setDisableRight] = useState(false);
    const [disableDrag, setDisableDrag] = useState(false);

    // Drag refs
    const startX = useRef(0);
    const isDragging = useRef(false);
    const dragThreshold = 100; // px
    const cardWidth = 440; // px

    // visible card count
    useEffect(() => {
        const updateVisibleCards = () => {
            if (wrapperRef.current) {
                const wrapperWidth = window.innerWidth - 50; // 100vw - (gap + 10px to account for scrollbar width issue)
                const cardsVisible = Math.floor(wrapperWidth / (cardWidth+30)); // +30px to safeguard last card from being clipped
                console.log(cardsVisible)
                setVisibleCards(prevVisibleCards => {
                    const maxScroll = cards.length - cardsVisible;
                    setCurrentScroll(prevScroll => Math.min(prevScroll, Math.max(0, maxScroll)));
                    return cardsVisible;
                });
            }
        };
    
        updateVisibleCards();
        window.addEventListener("resize", updateVisibleCards);
        return () => window.removeEventListener("resize", updateVisibleCards);
    }, []);

    const moveLeft = () => {
        const maxScroll = cards.length - visibleCards;
        if (currentScroll < maxScroll) {
            setCurrentScroll(prev => prev + 1);
        }
    };

    const moveRight = () => {
        if (currentScroll > 0) {
            setCurrentScroll(prev => prev - 1);
        }
    };

    useEffect(() => {
        const maxScroll = cards.length - visibleCards;

        setDisableLeft(currentScroll === 0);
        setDisableRight(currentScroll >= maxScroll);

        setDisableDrag(true);
        gsap.to(innerRef.current, {
            x: currentScroll * -cardWidth,
            duration: 0.25,
            onComplete: () => setDisableDrag(false),
        });
    }, [currentScroll, visibleCards]);

    const dragStart = (e: React.MouseEvent) => {
        if (disableDrag) return;
        isDragging.current = true;
        startX.current = e.clientX;
    };

    const dragMove = (e: React.MouseEvent) => {
        if (!isDragging.current) return;

        const delta = e.clientX - startX.current;

        gsap.to(innerRef.current, {
            x: -currentScroll * cardWidth + delta,
            duration: 0.25,
        });
    };

    const dragEnd = (e: React.MouseEvent) => {
        if (!isDragging.current) return;

        const delta = e.clientX - startX.current;
        isDragging.current = false;

        const maxScroll = cards.length - visibleCards;

        if (Math.abs(delta) > dragThreshold) {
            const movedCards = Math.max(1, Math.floor(Math.abs(delta) / cardWidth));
            let newScroll = currentScroll;

            if (delta > 0 && currentScroll > 0) {
                newScroll = Math.max(0, currentScroll - movedCards);
            } else if (delta < 0 && currentScroll < maxScroll) {
                newScroll = Math.min(maxScroll, currentScroll + movedCards);
            }

            if (newScroll !== currentScroll) {
                setCurrentScroll(newScroll);
            } 
        }
        
        // snap back
        setDisableDrag(true);
        gsap.to(innerRef.current, {
            x: currentScroll * -cardWidth,
            duration: 0.25,
            onComplete: () => setDisableDrag(false),
        });
    };


    return (
        <div className="flex flex-col gap-[64px] pb-[80px] lg:pb-[120px] overflow-hidden select-none">
            <div className="flex flex-col md:flex-row gap-[32px] md:gap-[80px] lg:gap-0 px-[24px] md:px-[90px] lg:px-[11vw]">
                <div className="w-full">
                    <p className="font-abc-diatype-bold text-xs-mobile md:text-xs-tablet lg:text-xs-desktop mb-[8px] text-sublabel">
                        FULL STACK
                    </p>
                    <Heading>Focusing on developer needs</Heading>
                    <p className="font-abc-diatype-regular text-md-mobile leading-md-mobile md:text-md-tablet md:leading-md-tablet lg:text-md-desktop lg:leading-md-desktop text-subtext">
                        Brease merges sleek design with powerful functionality, making content management not just efficient, but intuitively simple.
                    </p>
                </div>
                <div className="hidden flex mt-auto gap-[12px] md:flex">
                    <Button disabled={disableLeft} onClick={moveRight} color="black" type="primary" arrow={true} leftArrow={true} />
                    <Button disabled={disableRight} onClick={moveLeft} color="black" type="primary" arrow={true} />
                </div>
            </div>

            {/* wrapper with event listeners */}
            <div
                ref={wrapperRef}
                className="box-border hidden cursor-grab active:cursor-grabbing md:block px-[24px] md:px-[90px] lg:px-[11vw]"
                onMouseDown={dragStart}
                onMouseMove={dragMove}
                onMouseUp={dragEnd}
                onMouseLeave={dragEnd}
            >
                {/* transformed inner container */}
                <div ref={innerRef} className="flex gap-[40px] ">
                    {cards.map((card, index) => (
                        <FullstackCard key={index} image={card.image} title={card.title} subtext={card.subtext} />
                    ))}
                </div>
            </div>

            {/* mobile slider */}
            <div className="flex md:hidden gap-[24px] overflow-x-scroll px-[24px] md:px-[90px] lg:px-[11vw]">
                {cards.map((card, index) => (
                    <FullstackCard key={index} image={card.image} title={card.title} subtext={card.subtext} />
                ))}
            </div>
        </div>
    );
}
