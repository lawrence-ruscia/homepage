import { ChevronRight } from 'lucide-react';
export const Logo = ({ className, iconStyles }) => {
  return (
    <div className={className}>
      <ChevronRight className={iconStyles} width='1.5rem' height='auto' />
      <div className='text'>Renz</div>
    </div>
  );
};
