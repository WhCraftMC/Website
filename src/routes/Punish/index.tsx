import React from 'react';
import './index.scss';

import List from './components/list/index';
import Info from './components/info/index';

import 'mdui/mdui.css';
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
          <p>你可以在这里找到所有的处罚信息</p>
      </section>

      <main>
        <div className="container">
          <div className="buttons">
            <ButtonText to="/punish?page=bans" className="child">封禁列表</ButtonText>
            <ButtonText to="/punish?page=warns" className="child">警告列表</ButtonText>
            <ButtonText to="/punish?page=mutes" className="child">禁言列表</ButtonText>
          </div>
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
