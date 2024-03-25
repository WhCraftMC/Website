import React from 'react';
import './index.scss';

import List from './components/list/index';
import Info from './components/info/index';

import { useLocation } from 'react-router-dom';
import ButtonText from '../../components/Button';

function updateTitle(page: string|undefined) {
    if (page === 'warns') {
        const title = "警告列表 | WhCraft";
        document.title = title;
        return;
    }

    if (page === 'mutes') {
        const title = "禁言列表 | WhCraft";
        document.title = title;
        return;
    }

    const title = "封禁列表 | WhCraft";
    document.title = title;
}

function Index() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const page = params.get('page') as string|undefined;
  const id = params.get('id') as string|undefined;

  updateTitle(page);

  return (
    <div className="punish">
      <section className="punish-section">
        <h2>处罚列表</h2>
          <p>记仇的小本本</p>
      </section>

      <main>
        <div className="container">
          <br/>
          {id !== null && id!==undefined && page !== undefined && (
            <>
              <Info page={page} id={id}/>
            </>
          )}
          {id === null && (
            <>
              {page!==undefined && page!==null ? (
                <List page={page}/>
              ) : (
                <List page="bans"/>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Index;
