import { cn } from "../../utils/utils"

export const InputField = ({ label, type = "text", placeholder, className, id }: { label: string, type?: string, placeholder: string, className?: string, id?: string }) => {
      return (<><div>
            <label htmlFor={id} className="mb-3 block text-black dark:text-white">{label}</label>
            <input
                  name={id}
                  id={id}
                  type={type} placeholder={placeholder} className={cn('w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary', className)} />
      </div>
      </>)
}