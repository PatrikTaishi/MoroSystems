import { test, expect } from '@playwright/test';

test('GET /tasks Retrieve Task List', async ({ request }) => {
  const response = await request.get('/tasks');

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(Array.isArray(body)).toBe(true);

  for (const task of body) {
    expect(task).toHaveProperty('id');
    expect(typeof task.id).toBe('string');

    expect(task).toHaveProperty('text');
    expect(typeof task.text).toBe('string');

    expect(task).toHaveProperty('completed');
    expect(typeof task.completed).toBe('boolean');

    expect(task).toHaveProperty('createdDate');
    expect(typeof task.createdDate).toBe('number');
  }
});

test('POST /tasks Create, Update and Delete (CRUD) a task', async ({ request }) => {
  //POST Create New Task/User
  const createPayload = { text: 'New Task/User' };
  const createResponse = await request.post('/tasks', { data: createPayload });
  expect(createResponse.status()).toBe(200);

  const createdTask = await createResponse.json();
  const taskId = createdTask.id;

  expect(createdTask.text).toBe(createPayload.text);
  expect(typeof createdTask.completed).toBe('boolean');
  expect(typeof createdTask.createdDate).toBe('number');

  //POST Update Task Information
  const updatePayload = { text: 'Updated Task' };
  const updateResponse = await request.post(`/tasks/${taskId}`, { data: updatePayload });
  expect(updateResponse.status()).toBe(200);

  const updatedTask = await updateResponse.json();

  expect(updatedTask.id).toBe(taskId);
  expect(updatedTask.text).toBe(updatePayload.text);
  expect(typeof updatedTask.completed).toBe('boolean');
  expect(typeof updatedTask.createdDate).toBe('number');

  //DELETE Delete Task
  const deleteResponse = await request.delete(`/tasks/${taskId}`);

  expect(deleteResponse.status()).toBe(200);
});


