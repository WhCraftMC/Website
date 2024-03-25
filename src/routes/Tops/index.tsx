import React from 'react';
import './index.scss';

import { useLocation } from 'react-router-dom';

import Economy from './components/economyTop';

function updateTitle(page: string|undefined) {
    const title = "经济排行榜 | WhCraft";
    document.title = title;
}

function Index() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const page = params.get('page') as string|undefined;

  updateTitle(page);

  return (
    <div className="punish">
      <section className="punish-section">
        <h2>数据排行榜</h2>
        <p>谁不想当第一呢?</p>
      </section>

      <main>
        <div className="container">
          <Economy/>
        </div>
      </main>
    </div>
  );
}

export default Index;
