export default function Badge({label}){
  return (
    <div className='bg-primary text-xs font-medium mb-2 me-2 px-2.5 py-1 rounded-xl'>
      <span>{label}</span>
    </div>
  )
}