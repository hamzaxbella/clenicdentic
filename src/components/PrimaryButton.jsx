import { Link } from "react-router-dom"

export const PrimaryButton = ({action}) => {
  return (
    <Link to="/contact" className={`${action && ' !shadow-none  lg:!px-20 lg:!py-4 lg:!text-lg'} hover:shadow-xl shadow-lg shadow-slate-300 lg:shadow-lg lg:shadow-gray-300 hover:-translate-y-[5px] duration-300  text-sm rounded-md text-white font-semibold bg-primary py-2 px-8 md:py-3 md:px-10 lg:py-[0.75rem] lg:px-12  w-fit h-fit`}>Contactez-nous</Link>
  )
}
