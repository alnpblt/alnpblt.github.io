import Image from "next/image";
export default function SkillCard({description, icon, className}){
  return (
    <div className={`w-32 p-6 bg-secondary rounded-lg shadow text-light text-center flex flex-col ${className}`}>
      <Image className='w-14 self-center drop-shadow' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/static/images/${icon}`} alt='icon' width={0} height={0}/>
      <p className='text-xs mt-2 font-semibold'>{description}</p>
    </div>
  );
}