import { User } from "./search-panel";

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}
interface ListProps {
  list: Project[];
  users: User[];
}
export const List = ({ list, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>负责 人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{users.find((user) => user.id === item.id)?.name || "未知"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
