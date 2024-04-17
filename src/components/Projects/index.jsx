import Badge from "../Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
export default function Project({image, title, description, className, skills, link}){
  return (
      <div className={`flex flex-row max-sm:flex-col justify-between text-xs ${className}`}>
        <div className='max-sm:w-full max-sm:px-5 py-2 sm:max-w-28 sm:min-w-28 flex '>
          {image}
        </div>
        <div className='flex flex-col ml-5'>
          <a href={link} className='text-light group' target="_blank">
            <p className='font-semibold'>{title}
              
                <FontAwesomeIcon
                  className='text-sm ml-1 group-hover:text-primary'
                  icon={faGlobe}
                />
              
            </p>
          </a>
          <p className='text-light-2 mt-2'>{description}</p>
          <div className='flex flex-row flex-wrap mt-3'>
            {skills && skills.map((skill, index) => <Badge key={index} className='mr-1' label={skill}/>)}
          </div>
          
        </div>
      </div>
  );
}