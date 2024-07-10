type InputProps = {
    type: string;
    placeholder: string;
    classes?: string;
    register: any
    name: string;
    message?: string;
}

export default function Input({ type, placeholder, classes, register, name, message }: InputProps) {
    return (
        <input
            type={`${type}`}
            placeholder={`${placeholder}`}
            className={`bg-[#e9edff] text-[#71717A] rounded-md w-full px-3 py-2 border outline-none ${classes}`}
            {...register(`${name}`, { required: `${message}` })}
        />
    )
}