import { Suspense } from "react"
import { Modal } from "shared/ui/Modal/Modal"
import { AuthByInstaceFormAsync } from "../AuthByInstancsForm/AuthByInstaceForm.async"

interface AuthByInstanceProps {
    isOpen: boolean
    onClose: () => void
}

export const AuthByInstaceModal = ({isOpen, onClose}: AuthByInstanceProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Suspense fallback='load'>
                <AuthByInstaceFormAsync />
            </Suspense>
        </Modal>
    )
}
