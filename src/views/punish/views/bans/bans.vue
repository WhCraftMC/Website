<template>
  <div class="table-container">
    <table v-if="bans">
      <thead>
        <tr>
          <th>封禁ID</th>
          <th>游戏ID</th>
          <th>操作者</th>
          <th>原因</th>
          <th>日期</th>
          <th>失效日期</th>
          <th>生效服务器</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ban in bans" :key="ban.id" @click="openPage(ban.id)">
          <td>{{ ban.id }}</td>
          <td>
            <p>
              <img :src="`https://api.mineatar.io/face/${ban.uuid}`" alt="banfaces" class="faces" /><br />
              {{ ban.name }}
            </p>
          </td>
          <td>
            <p>
              <img :src="banbyface(ban.banned_by_uuid)" alt="banbyfaces" class="faces" /><br />
              {{ ban.banned_by_name }}
            </p>
          </td>
          <td>{{ ban.reason }}</td>
          <td>{{ formattedTime(ban.time, false) }}</td>
          <td>{{ formattedTime(ban.until, true) }}</td>
          <td>{{ ban.server_scope }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

async function fetchNameData(uuid: string) {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/punish/getname/${uuid}`);
    const name = <string>response.data.data[0]?.name;
    return name;
  } catch (error) {
    console.error(error);
  }
}

function banbyface(uuid: string) {
  if (uuid === 'CONSOLE') {
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQAAAADskrjOAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAACqjSMyAAAACXBIWXMAAABIAAAASABGyWs+AAAAGUlEQVQI12NgQAUyqARzAwohw/8AmaAUAACL6gT/jmpfkAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNS0wOS0xMFQxNzoxNTo0OSswMjowMBQVjpkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTUtMDktMTBUMTc6MTU6NDkrMDI6MDBlSDYlAAAAAElFTkSuQmCC';
  } else {
    return `https://api.mineatar.io/face/${uuid}`;
  }
}

function openPage(id: number) {
  window.location.href = ('/punish?type=bans&id=' + id);
}

function formattedTime(timestamp: number, untime: boolean) {
  const date = new Date(timestamp);
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const time = String(`${year}/${month}/${day} ${hours}:${minutes}:${seconds}`);

  if (untime) {
    if (new Date(timestamp) < new Date() && timestamp !== 0) {
      return time + '(已过期)';
    }
    if (timestamp === 0) {
        return '永久';
    }
  }
  return time;
}

interface BanData {
  name: string;
  id: number;
  uuid: string;
  banned_by_uuid: string;
  banned_by_name: string;
  reason: string;
  time: number;
  until: number;
  server_scope: string;
  // 其他属性...
}

const bans = ref<BanData[]>([]);

const fetchData = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/punish/bans`);
    const data = response.data.data;
    for (const ban of data) {
      ban.name = await fetchNameData(ban.uuid);
    }
    bans.value = data; // 更新bans的值
  } catch (error) {
    console.error(error);
  }
};

fetchData();
</script>

<style scoped lang="scss">
.table-container {
  overflow-x: auto;
  text-align: center;
  text-wrap: nowrap;
  table {
    border-collapse: collapse;
    width: 100%;
    border: 0.5px solid;
    thead {
      background: rgba(255, 255, 255, 0);
      tr {
        th {
          border: 0.5px solid;
          padding: 1rem;
        }
      }
    }
    tbody {
      background: rgba(255, 255, 255, 0);
      tr {
        td {
          border: 0.5px solid;
          padding: 1rem;
          width: 100%;
          p {
            color: white;
            .faces {
              width: 25px;
              height: 25px;
            }
          }
        }
      }
    }
  }
}
</style>