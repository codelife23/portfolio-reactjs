import { Outlet } from 'react-router-dom';

function PageLayout() {
  return (
    <div className="flex-auto pt-90 pb-80">
      <Outlet />
    </div>
  );
}

export default PageLayout;
