import { Menu } from 'lucide-react';
export const HeaderNav = ({ className }) => {
  return (
    <button className={className}>
      <Menu width='1.75rem' height='auto' />
    </button>
  );
};
