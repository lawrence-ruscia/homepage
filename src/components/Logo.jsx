import { ChevronRight } from 'lucide-react';
export const Logo = ({ eleId = '', className, iconStyles }) => {
  return (
    <a href={`#${eleId}`} className={className}>
      <ChevronRight className={iconStyles} width='1.5rem' height='auto' />
      <div className='text'>Renz</div>
    </a>
  );
};
