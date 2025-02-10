import { Suspense } from "react"
import { Modal } from "shared/ui/Modal/Modal"
import { CreateChatFormAsync } from "../CreateChatForm/CreateChatForm.async"

interface CreateChatFormModalProps {
    isOpen: boolean
    onClose: () => void
}

export const CreateChatFormModal = ({ isOpen, onClose }: CreateChatFormModalProps) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Suspense fallback='load'>
                <CreateChatFormAsync />
            </Suspense>
        </Modal>
    )
}
