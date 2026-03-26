import { test, expect } from '@playwright/test';
import { TasksApi, CreateTask } from '../../generated-client/api';
import axios from 'axios';

const api = new TasksApi(undefined, 'http://localhost:8080', axios);

test('Generated API: create task', async () => {
  const newTask: CreateTask = { text: 'Generated Task' };
  const response = await api.tasksPost(newTask);

  const task = response.data;

  console.log(task); 

  expect(task).toHaveProperty('id');
  expect(task.text).toBe(newTask.text);
  expect(task.completed).toBe(false);
  expect(typeof task.createdDate).toBe('number');
});

test('Generated API: update task', async () => {
  const createResp = await api.tasksPost({ text: 'Task to update' });
  const taskId = createResp.data.id;

  const updateResp = await api.tasksIdPost(taskId, { text: 'Updated Task' });
  const updatedTask = updateResp.data;

  console.log(updatedTask);

  expect(updatedTask.id).toBe(taskId);
  expect(updatedTask.text).toBe('Updated Task');
});

test('Generated API: delete task', async () => {
  const createResp = await api.tasksPost({ text: 'Task to delete' });
  const taskId = createResp.data.id;

  const deleteResp = await api.tasksIdDelete(taskId);
  console.log(deleteResp.data); 
});