import React from "react";
import "../App.css";
import { Stack } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import EditModel from "../actions/editModel";

const Task = ({ todo }) => {
  return (
    <div className="oneTask">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          {todo.isdone ? (
            <DoneIcon color="success" />
          ) : (
            <DoneIcon color="disabled" />
          )}
          <p>{todo.description}</p>
        </Stack>

        <EditModel todoValue={todo} />
      </Stack>
    </div>
  );
};

export default Task;
