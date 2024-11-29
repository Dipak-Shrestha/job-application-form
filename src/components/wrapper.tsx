import { CSSProperties, ReactNode, forwardRef } from "react";

const Wrapper = forwardRef<HTMLDivElement,{children:ReactNode,className?:string, style?:CSSProperties}>(({children,className,style},ref)=> {
    return (
        <div  ref={ref} className={`lg:px-24 md:px-8 sm:px-4 px-4 ${className}`} style={style}>
            {children}
        </div>
    )
})

export default Wrapper;