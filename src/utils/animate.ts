export default function animate(elem: HTMLDivElement, animationClass: string) {
    const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            elem.classList.add(animationClass);
        }
    });

    observer.observe(elem);


    return () => {
        observer.unobserve(elem);
    }
}
export function animateMultiple(anims: { elem: any, animationClass: string }[]) {
    return animateMultipleE(anims.map(anim => {
        return {
            elem: anim.elem,
            animationClass: [anim.animationClass]
        }
    }))
}
export function animateMultipleE(anims: { elem: any, animationClass: string[] }[]) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anims.forEach(anim => {
                    if (entry.target === anim.elem) {
                        anim.animationClass.forEach(ac => anim.elem.classList.add(ac))
                    }
                })
            }
        });
    })

    anims.forEach(anim => {
        observer.observe(anim.elem);
    })


    return () => {
        anims.forEach(anim => {
            observer.unobserve(anim.elem);
        })
    }
}