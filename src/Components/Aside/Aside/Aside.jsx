import Filter from '@Components/Aside/Filter/Filter';
import Advertising from '@Components/Aside/Advertising/Advertising';

import './Aside.scss';

export default function Aside() {
  return (
    <aside className="aside">
      <div className="aside__sticky">
        <Filter />
        <Advertising />
      </div>
    </aside>
  );
}
