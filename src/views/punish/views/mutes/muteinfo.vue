<template>
    <a class="go-back" @click="goback()">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" width="16pt" height="16pt" style="isolation: isolate;"><defs><clipPath id="_clipPath_RUQAMchPMjTYlaqoPz7UFjjxXFCmVBdG"><rect width="16" height="16"></rect></clipPath></defs><g clip-path="url(#_clipPath_RUQAMchPMjTYlaqoPz7UFjjxXFCmVBdG)"><rect width="16" height="16" fill-opacity="0" style="fill: rgb(0, 0, 0);"></rect><path d=" M 3 7 L 3 5 L 5 5 L 5 3 L 7 3 L 7 1 L 9 1 L 9 7 L 15 7 L 15 9 L 9 9 L 9 15 L 7 15 L 7 13 L 5 13 L 5 11 L 5 11 L 3 11 L 3 9 L 1 9 L 1 7 L 1 7 L 1 7 L 1 7 L 3 7 Z " fill="rgb(255,255,255)"></path></g></svg>
        Go Back
    </a>
    <div class="table-container">
      <h2>Mute #{{ route.query.id }}</h2>
      <table v-if="mutes">
        
        <tbody v-for="mute in mutes">
            <tr>
				<td>禁言ID</td>
				<td>{{ mute.id }}</td>
			</tr>
            <tr>
				<td>游戏ID</td>
                <td>
                    <p>
                        <img :src="`https://api.mineatar.io/face/${mute.uuid}`" alt="mutefaces" class="faces" /><br />
                        {{ mute.name }}
                    </p>
                </td>
            </tr>
            <tr>
                <td>操作者</td>
                <td>
                    <p>
                        <img :src="mutebyface(mute.banned_by_uuid)" alt="mutebyfaces" class="faces" /><br />
                        {{ mute.banned_by_name }}
                    </p>
                </td>
            </tr>
            <tr>
                <td>原因</td>
                <td>{{ setLength(RawText(mute.reason), 10) }}</td>
            </tr>
            <tr>
                <td>日期</td>
                <td>{{ formattedTime(mute.time, false) }}</td>
            </tr>
            <tr>
                <td>失效日期</td>
                <td>{{ formattedTime(mute.until, true) }}</td>
            </tr>
            <tr>
                <td>生效服务器</td>
                <td>{{ mute.server_scope }}</td>
            </tr>
            <tr>
                <td>发起服务器</td>
                <td>{{ mute.server_origin }}</td>
            </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { RawText, setLength } from '../../utils/textColor';

const route = useRoute();
const userId = route.query.id;
  
async function fetchNameData(uuid: string) {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/punish/getname/${uuid}`);
        const name = <string>response.data.data[0]?.name;
        return name;
    } catch (error) {
        console.error(error);
    }
}
  
function mutebyface(uuid: string) {
    if (uuid === 'CONSOLE') {
        return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQAAAADskrjOAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAACqjSMyAAAACXBIWXMAAABIAAAASABGyWs+AAAAGUlEQVQI12NgQAUyqARzAwohw/8AmaAUAACL6gT/jmpfkAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNS0wOS0xMFQxNzoxNTo0OSswMjowMBQVjpkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTUtMDktMTBUMTc6MTU6NDkrMDI6MDBlSDYlAAAAAElFTkSuQmCC';
    } else {
        return `https://api.mineatar.io/face/${uuid}`;
    }
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
  
interface MuteData {
    name: string;
    id: number;
    uuid: string;
    banned_by_uuid: string;
    banned_by_name: string;
    reason: string;
    time: number;
    until: number;
    server_scope: string;
    server_origin: string;
    // 其他属性...
}
  
const mutes = ref<MuteData[]>([]);
  
const fetchData = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/punish/mutes/${userId}`); // 使用指定的ID获取数据
        const data = response.data.data;
        for (const mute of data) {
            mute.name = await fetchNameData(mute.uuid);
        }
        mutes.value = data; // 更新mutes的值
    } catch (error) {
        console.error(error);
    }
};
  
function goback() {
    window.history.back();
}
  
fetchData();
</script>

<style scoped lang="scss">
.go-back {
    display: flex;
    flex-direction: row;
    place-items: center;
    width: -webkit-max-content;
    width: max-content;
    color: #fff;
    grid-column-gap: .5rem;
    -webkit-column-gap: .5rem;
    column-gap: .5rem;
    font-family: "MinecraftFive";
    text-decoration: none;
    font-size: 1.125rem;
    margin-top: -20px;
    margin-bottom: 15px;
    font-weight: 100;
    font-style: normal;
    text-shadow: 0 3px rgba(0,0,0,.4117647059);
    -webkit-user-select: none;
    user-select: none;
}

.table-container {
  overflow-x: auto;
  text-align: center;
  text-wrap: nowrap;
  table {
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
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