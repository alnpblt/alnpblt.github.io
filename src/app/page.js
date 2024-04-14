
import SideNav from "@/components/SideNav";
import SkillCard from "@/components/SkillCard";
import Experience from "@/components/Experience";
import Project from "@/components/Projects";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger, faLinkedin, faTelegram, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  

  return (
    <main className='min-h-screen bg-background' id='main'>
      <div className='flex flex-row max-w-5xl m-auto'>
        <SideNav />
        <div className='mx-5 '>
          <div className='min-h-screen flex text-light' id='intro'>
            <div className='self-center'>
              <p className='text-3xl mb-3'>Hello, I&lsquo;m</p>
              <p className='text-5xl text-primary font-semibold'>Allen Poblete</p>
              <p className='text-3xl mt-3'>Back end Developer</p>
              <p className='text-sm max-w-xl mt-4 text-light/80'>Experienced backend developer specializing in RESTful APIs, Javascript(Node.js), MySQL and Docker. Passionate about crafting efficient and scalable solutions. Let&lsquo;s turn your ideas into reality!</p>
              <div className='text-primary font-semibold mt-9'>
                <button className=' p-3 rounded-lg outline outline-2 hover:outline-none hover:bg-primary hover:text-light'><a href="mailto:pobleteallen@gmail.com">Contact Me</a></button>
                <button className=' p-3 rounded-lg outline outline-2 ml-3 hover:outline-none hover:bg-primary hover:text-light'><a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/static/docs/resume.pdf`} download='allen_poblete_resume'>Resume</a></button>

              </div>

            </div>
          </div>
          <div className='w-full flex scroll-mt-5 text-light' id='about'>
            <div className='self-center'>
              <h1 className='text-primary text-3xl font-semibold'>About Me</h1>
              <p className='text-lg mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis convallis quam nec mattis. Vivamus varius nisl sapien, non eleifend ex venenatis vitae. In tortor diam, tincidunt at velit id, vestibulum fermentum ipsum. Nunc viverra magna sit amet ante convallis fringilla. Vestibulum sapien velit, volutpat hendrerit euismod eget, tincidunt vitae libero. Etiam fringilla, neque sit amet commodo feugiat, nibh nibh dignissim dui, hendrerit bibendum risus neque non ligula. Cras vitae dignissim mi. Phasellus elementum odio dui, quis aliquet sem scelerisque sed. Sed nec luctus neque.</p>
            </div>
            
          </div>
          <div className='w-full flex scroll-mt-5 text-light mt-24' id="skills">
            <div className='self-center'>

              <h1 className='text-primary text-3xl font-semibold'>Skill Set</h1>
              <div className='mt-5 flex flex-row flex-wrap justify-evenly'>
                <SkillCard className='mr-3 mb-3' description='Javascript' icon='javascript.svg'/>
                <SkillCard className='mr-3 mb-3' description='PHP' icon='php.svg'/>
                <SkillCard className='mr-3 mb-3' description='HTML 5' icon='html.svg'/>
                <SkillCard className='mr-3 mb-3' description='NodeJS' icon='nodejs.svg'/>
                <SkillCard className='mr-3 mb-3' description='Laravel' icon='laravel.svg'/>
                <SkillCard className='mr-3 mb-3' description='ReactJS' icon='reactjs.svg'/>
                <SkillCard className='mr-3 mb-3' description='JQuery' icon='jquery.svg'/>
                <SkillCard className='mr-3 mb-3' description='Docker' icon='docker.svg'/>
                <SkillCard className='mr-3 mb-3' description='Kubernetes' icon='kubernetes.svg'/>
                <SkillCard className='mr-3 mb-3' description='MySQL' icon='mysql.svg'/>
                <SkillCard className='mr-3 mb-3' description='PostgreSQL' icon='postgresql.svg'/>
                <SkillCard className='mr-3 mb-3' description='Git' icon='git.svg'/>
              </div>
            </div>
          </div>
          <div className='w-full flex scroll-mt-5 text-light mt-24' id="experience">
            <div className='self-center'>

              <h1 className='text-primary text-3xl font-semibold'>Experience</h1>
              <div className='mt-5 flex flex-row flex-wrap'>
                <Experience range='2018 - Present' title='Senior Web Programmer • Ole Elite Software Philippines, Inc.' description='Design and implement scalable microservices architecture using tools like docker and kubernetes. Lead a team of back-end developers in architecting, developing, and maintaining complex distributed systems using Laravel and ExpressJS framework. Collaborate with cross-functional teams including front-end developers, QA engineers and app developers to delivery end-to-end solutions. Investigate and resolve critical production issues, applying root cause analysis to prevent recurrence and improve system reliability.' skills={['PHP', 'Laravel', 'Lumen', 'Javascript', 'JQuery', 'Docker', 'Kubernetes', 'Node.js', 'ExpressJS', 'Kubernetes', 'Node.js', 'ExpressJS', 'NGINX', 'NGINX Ingress', 'MySQL']}/>
                <Experience className='mt-5' range='2017 - 2018' title='Web Programmer • WAMD Web and Mobile Development Services' description='Build and maintain website, back-end and web services Collaborate with designers and app developers to implement best practices and seamless user experiences.' skills={['PHP', 'HTML', 'JQuery', 'CSS', 'Javascript', 'MySQL']}/>
              </div>
            </div>
          </div>
          <div className='w-full flex scroll-mt-5 text-light mt-24' id="projects">
            <div className='self-center'>

              <h1 className='text-primary text-3xl font-semibold'>Projects</h1>
              <div className='mt-5 flex flex-row flex-wrap'>
                <Project image={<Image className='w-full self-start max-lg:self-center rounded drop-shadow text-light' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/static/images/etaren.png`} alt='project' width={1980} height={1024}/>} title='AI Image Generator' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis convallis quam nec mattis. Vivamus varius nisl sapien, non eleifend ex venenatis vitae. In tortor diam, tincidunt at velit id, vestibulum fermentum ipsum. Nunc viverra magna sit amet ante convallis fringilla. Vestibulum sapien velit, volutpat hendrerit euismod eget, tincidunt vitae libero.' skills={['ReactJS', 'Javascript', 'HTML', 'CSS', 'SCSS', 'PostgreSQL', 'NodeJS', 'ExpressJS', 'Stripe API', 'Cloudflare']}/>
                <Project className='mt-5' image={<Image className='w-auto self-start max-lg:self-center rounded drop-shadow text-light' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/static/images/minting.png`} alt='project' width={1980} height={1024}/>} title='Solana NFT Minting Site' description='Build and maintain website, back-end and web services. Collaborate with designers and app developers to implement best practices and seamless user experiences. ' skills={['NextJS', 'Javascript', 'HTML', 'ChakraUI', 'Vercel', 'CSS', 'Web3']}/>
              </div>
            </div>
          </div>
          <div className='w-full text-light text-center mt-10 mb-5 flex flex-row max-sm:flex-col justify-center max-lg:justify-between'>
            <p className='text-xs self-center'>Designed and coded by <span className='text-primary'>Allen Poblete</span> • 2024</p>
            <div className='hidden max-lg:flex flex-row justify-start max-sm:self-center max-sm:mt-3'>
              <a href="https://m.me/allen.poblete.1" target='_blank'>
                <FontAwesomeIcon
                  className='text-light-2/80 hover:text-light text-2xl mx-3'
                  icon={faFacebookMessenger}
                />
              </a>
              <a href="https://linkedin.com/in/allenpoblete" target='_blank'>

                <FontAwesomeIcon
                  className='text-light-2/80 hover:text-light text-2xl mx-3'
                  icon={faLinkedin}
                />
              </a>
              <a href="https://t.me/allenpoblete" target='_blank'>

                <FontAwesomeIcon
                  className='text-light-2/80 hover:text-light text-2xl mx-3'
                  icon={faTelegram}
                />
              </a>
              <a href="https://github.com/alnpblt" target='_blank'>

                <FontAwesomeIcon
                  className='text-light-2/80 hover:text-light text-2xl mx-3'
                  icon={faGithub}
                />
              </a>
            </div>
          </div>
        </div>
        
      </div>



    </main>
  );
}
