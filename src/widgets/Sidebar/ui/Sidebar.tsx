import { AuthByInstaceForm } from "features/AuthByInstace";
import { memo, useCallback, useState } from "react";
import { CiLogin } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { Modal } from "shared/ui/Modal/Modal";

export const Sidebar = memo(() => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = useCallback(() => {
        setIsOpen(true)
    }, [isOpen])

    const handleClose = useCallback(() => {
        setIsOpen(false)
    }, [])

    return (
        <div className=' border w-80 h-screen bg-white'>
            <div className="w-full mb-10 p-6 flex justify-between items-center">
                <div className="text-3xl font-bold">
                    Чаты
                </div>
                <div className="flex items-center gap-2">
                    <IoCreateOutline className="text-3xl cursor-pointer"/>
                    <CiLogin onClick={handleOpen} className="text-3xl cursor-pointer"/>
                </div>
            </div>
            <div className="h-full overflow-auto">
                <div className="w-2xl border p-3 flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-red border">
                    </div>
                    <div className="text-xl">
                        Иван Иванов
                    </div>
                </div>
                <div className="w-2xl border p-3 flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-red border">
                    </div>
                    <div className="text-xl">
                        Иван Иванов
                    </div>
                </div>
                <div className="w-2xl border p-3 flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-red border">
                    </div>
                    <div className="text-xl">
                        Иван Иванов
                    </div>
                </div>
                <div className="w-2xl border p-3 flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-red border">
                    </div>
                    <div className="text-xl">
                        Иван Иванов
                    </div>
                </div>
                <div className="w-2xl border p-3 flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-red border">
                    </div>
                    <div className="text-xl">
                        Иван Иванов
                    </div>
                </div>
                <div className="w-2xl border p-3 flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-red border">
                    </div>
                    <div className="text-xl">
                        Иван Иванов
                    </div>
                </div>
                <div className="w-2xl border p-3 flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-red border">
                    </div>
                    <div className="text-xl">
                        Иван Иванов
                    </div>
                </div>
                <div className="w-2xl border p-3 flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-red border">
                    </div>
                    <div className="text-xl">
                        Иван Иванов
                    </div>
                </div>
                <div className="w-2xl border p-3 flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-red border">
                    </div>
                    <div className="text-xl">
                        Иван Иванов
                    </div>
                </div>
                <div className="w-2xl border p-3 flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-red border">
                    </div>
                    <div className="text-xl">
                        Иван Иванов
                    </div>
                </div>
                <div className="w-2xl border p-3 flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-red border">
                    </div>
                    <div className="text-xl">
                        Иван Иванов
                    </div>
                </div>
                <div className="w-2xl border p-3 flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-red border">
                    </div>
                    <div className="text-xl">
                        Иван Иванов
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={handleClose}>
                <AuthByInstaceForm />
            </Modal>
        </div>
    )
})
