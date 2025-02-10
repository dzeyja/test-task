// import React, { HTMLAttributes } from "react"

// type HTMLInputProps = Omit<HTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'onClick'>

// interface InputProps extends HTMLInputProps {
//     value?: string
//     onChange?: (value: string) => void
//     onClick?: (React.MouseEvent<HTMLButtonElement>) => void
//     inChat?: boolean
// }

// export const Input = ({ value, onChange, onClick, inChat }: InputProps) => {
//     const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//         onChange?.(e.target.value)
//     }

//     return (
//         <div className="relative w-full">
//             <input 
//                 value={value} 
//                 placeholder="Напишите сообщение"
//                 onChange={changeHandler} 
//                 className="p-6 pr-20 rounded-lg border w-full" 
//                 type="text" 
//             />
//             {inChat && (
//                 <button 
//                     onClick={onClick} 
//                     className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-primary text-white rounded-lg"
//                 >
//                     Отправить
//                 </button>
//             )}
//     </div>)
// }
