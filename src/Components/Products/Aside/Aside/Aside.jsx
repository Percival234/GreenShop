import React from 'react';
import './Aside.scss';

import Filter from '../Filter/Filter/Filter';
import Advertising from '../Advertising/Advertising';

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
