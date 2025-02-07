import React, { ReactNode, useCallback } from "react"
import { classNames, Mods } from "shared/lib/classNames/classNames"
import cls from './Modal.module.scss'

interface ModalProps {
    children: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Modal = (props: ModalProps) => {
    const {
        children,
        isOpen,
        onClose
    } = props

    const handleClose = useCallback(() => {
        if (onClose) {
            onClose()
        }
    }, [onClose])

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    return (
            <div className={classNames(cls.Modal, mods, [])}>
                <div className={cls.overlay} onClick={handleClose}>
                    <div
                        className={cls.content}
                        onClick={handleClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
    );
}
