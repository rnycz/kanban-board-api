# Kanban Board API

REST API made for [Kanban Board App](https://github.com/rnycz/kanban-board) <br />
Built using Node.js, Express and MongoDB

## How to setup

In file db.config.js use your [MongoDB](https://www.mongodb.com/). <br />
Clone down this repository:

```bash
git clone https://github.com/rnycz/kanban-board-api.git
```

Make sure that you are in your root folder of application.<br />
Install necessary dependiences:

```bash
  npm install
```

Run server:

```bash
  node index.js
```

In your browser go to:

```bash
  http://localhost:3001
```

## API Reference

#### Get all tasks

```http
  GET /tasks
```

#### Post task

```http
  POST /tasks
```

| Request body | Type      | Description                         |
| :----------- | :-------- | :---------------------------------- |
| `todo`       | `String`  | **Required**. The text of the task  |
| `color`      | `String`  | **Required**. The color of the task |
| `isDone`     | `Boolean` | Done or not done                    |
| `addDate`    | `String`  | The add date of the task            |
| `finishDate` | `String`  | The finish date of the task         |
| `type`       | `String`  | todo/doing/completed                |

#### Patch task

```http
  PATCH /tasks/:id
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of item to update |

Endpoint used to update the selected task with selected parameters the same as in the request body above.

#### Delete task

```http
  DELETE /tasks/:id
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete |
