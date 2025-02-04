import type Task from "@/types/tasks/Task"
import { TaskPriority } from "~/enums/tasks/TaskPriority"
import { TaskType } from "~/enums/tasks/TaskType"
import { userOne, userThree, userTwo } from "./taskUsers"

const draft: Task[] = [];

const toDo: Task[] = [
    {
        type: TaskType.BUG,
        title: 'task',
        key: 'TMS_1',
        content: 'stuff',
        reporter: userOne,
        assignee: userTwo,
        priority: TaskPriority.MEDIUM,
        status: 'todo',
    },
    {
        type: TaskType.FEATURE,
        title: 'task feature',
        key: 'TMS_2',
        content: 'stuff two with a big long title',
        reporter: userOne,
        assignee: userTwo,
        priority: TaskPriority.LOW,
        status: 'todo',
    },
    {
        type: TaskType.TEST,
        title: 'task test',
        key: 'TMS_3',
        content: 'stuff three',
        reporter: userOne,
        assignee: userThree,
        priority: TaskPriority.VERY_HIGH,
        status: 'todo',
    }
];

const inProgress: Task[] = [
    {
        type: TaskType.BUG,
        title: 'task',
        key: 'TMS_4',
        content: 'stuff',
        reporter: userOne,
        assignee: userTwo,
        priority: TaskPriority.MEDIUM,
        status: 'in progress',
    },
    {
        type: TaskType.FEATURE,
        title: 'task feature with a big title',
        key: 'TMS_5',
        content: 'stuff two',
        reporter: userOne,
        assignee: userTwo,
        priority: TaskPriority.LOW,
        status: 'in progress',
    },
    {
        type: TaskType.TEST,
        title: 'task test',
        key: 'TMS_6',
        content: 'stuff three',
        reporter: userOne,
        priority: TaskPriority.VERY_HIGH,
        status: 'in progress',
    }
];

const done: Task[] = [
    {
        type: TaskType.BUG,
        title: 'task',
        key: 'TMS_7',
        content: 'stuff',
        reporter: userOne,
        priority: TaskPriority.MEDIUM,
        status: 'done',
    },
    {
        type: TaskType.FEATURE,
        title: 'task feature',
        key: 'TMS_8',
        content: 'stuff two',
        reporter: userOne,
        assignee: userTwo,
        priority: TaskPriority.LOW,
        status: 'done',
    },
    {
        type: TaskType.TEST,
        title: 'task test',
        key: 'TMS_9',
        content: 'stuff three',
        reporter: userOne,
        assignee: userThree,
        priority: TaskPriority.VERY_HIGH,
        status: 'done',
    }
];

export default {
    'draft': draft,
    'toDo': toDo,
    'inProgress': inProgress,
    'done': done,
    'released': []
};