import Filter from '@Components/Aside/Filter/Filter';
import Advertising from '@Components/Aside/Advertising/Advertising';

import { useEventStore } from '@Store/eventStore';

import './Aside.scss';

export default function Aside() {
  const filter = useEventStore((state) => state.filter);
  return (
    <aside className={!filter ? 'aside' : 'aside hidden'}>
      <div className="aside__sticky">
        <Filter />
        <Advertising />
      </div>
    </aside>
  );
}
