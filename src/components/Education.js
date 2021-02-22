import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import ScrollAnimatorContainer from "react-scroll-motion/dist/ScrollContainer";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());


const Education = () => {
    return (
        <section id = "Education">
        <div className = "center">
        <ScrollContainer>
            <ScrollPage page={1}>
                <Animator animation={batch(Fade(), MoveIn(), FadeIn())}>
                    <span style={{ fontSize: "30px" }}> Education </span>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
        </div>  

        </section>
    )
}

export default Education
