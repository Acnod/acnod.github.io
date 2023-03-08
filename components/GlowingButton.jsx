import styles from "@/styles/GlowingButton.module.scss";
import $ from "jquery";
import {useEffect, useRef} from "react";

export default function GlowingButton({ borderSize = 6, gradientSize = "300px", glowSize = "100px -30px", container, children }) {
    const ref = useRef();
    useEffect(() => {
        const button = $(ref.current),
            content = button.find(`.${styles.content}`),
            rect = content[0].getBoundingClientRect();
        $(container.current).mousemove(e => {
            const rect = button[0].getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top,
                rectContainer = $(`.${styles.button}`)[0].getBoundingClientRect(),
                center = {
                    x: rectContainer.left + rectContainer.width / 2,
                    y: rectContainer.top + rectContainer.height / 2
                },
                // Calculates the cursor rotation from the center in degrees
                degrees = Math.round((180/Math.PI)*Math.atan2(e.clientY-center.y, e.clientX-center.x)),
                // Offsets the glow effect
                shadowX = (rect.width/2-x)/-10,
                shadowY = (rect.height/2-y)/-10;
            button.css("--mouse-x", `${x}px`);

            button.css("--mouse-y", `${y}px`);
            button.css("--shadow", `${shadowX}px ${shadowY}px`);
            button.css("--hue-degrees", `${degrees}`);
        })
        button.css("--gradient-size", `${gradientSize}`);
        button.css("--glow-size", `${glowSize}`);
        if (borderSize !== 0){
            button.find(content).css("transform", `scale(${(rect.width - borderSize) / rect.width}, ${(rect.height - (borderSize + 1)) / rect.height})`);
        }
    })

    return (
        <>
            <div className={styles.button} ref={ref}>
                <span className={styles.shadow}></span>
                <div className={styles.content}>{children}</div>
            </div>
        </>
    )
}
