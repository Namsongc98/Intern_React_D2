import { useSelector } from "react-redux";
import Button from "./Button";
import Input from "./Input";

import useInput from "../hook/useInput";
import useButtom from "../hook/useButtom";
import { useState } from "react";

function Redux() {
  const job = useInput("");
  const [check, setCheck] = useState(false);
  const { handleDispatchRedux } = useButtom();
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <>
      <Input {...job} />
      <input
        type="checkbox"
        checked={check}
        onChange={(e) => setCheck(e.target.checked)}
      />
      <Button
        onclick={() =>
          handleDispatchRedux({
            job: job.value,
            completd: check,
          })
        }
      >
        Thêm job
      </Button>
      <ul>
        {todos?.map((item) => (
          <li key={item?.id}>
            {item?.job}{" "}
            {item.completd ? <span>xong việc</span> : <span>chưa xong</span>}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Redux;
