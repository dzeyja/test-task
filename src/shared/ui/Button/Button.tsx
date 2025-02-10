import { HTMLAttributes, memo, ReactNode } from "react"
import { classNames } from "shared/lib/classNames/classNames"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    return (
        <button 
            type="button"
            className={classNames("px-4 py-2 bg-primary text-white rounded-lg", {}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    )
})
