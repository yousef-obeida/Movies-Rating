import axios from 'axios'
import { pick } from 'vuetify/lib/util/helpers.mjs';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
})

export const getStats = async () => {
  const [users, posts] = await Promise.all([
    api.get('/users'),
    api.get('/posts')
  ]);

  return [
    { title: 'Total Visitors', value: (users.data.length * 7189).toLocaleString() },
    { title: 'Avg. Open Rate', value: '58.16%' },
    { title: 'Avg. Click Rate', value: '24.57%' },
  ];
}

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data.map(Userinfo);
}

export const createUser = (data) => api.post("/users", data)

export const updateUser = (id, data) => api.put(`/users/${id}`, data)

export const deleteUser = (id) => api.delete(`/users/${id}`)

function Userinfo (user) {
  return {
    id: user.id,
    firstname: user.name.split(' ')[0],
    lastname: user.name.split(' ')[1] || '',
    name: user.name,
    username: user.username,
    email: user.email,
    picture: `https://i.pravatar.cc/150?u=${user.id}`,

  }
}
export default api
