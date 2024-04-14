import Badge from "../Badge";
export default function Experience({range, title, description, className, skills}){
  return (
    <div className={`flex flex-row justify-between text-xs ${className}`}>
      <div className='min-w-28'>
        <p className='text-light-2'>{range}</p>
      </div>
      <div className='flex flex-col ml-5'>
        <p className='font-semibold'>{title}</p>
        <p className='text-light-2 mt-2'>{description}</p>
        <div className='flex flex-row flex-wrap mt-3'>
          {skills && skills.map((skill, index) => <Badge key={index} className='mr-1' label={skill}/>)}
        </div>
        
      </div>
    </div>
  );
}