import type TaskUser from "~/types/tasks/TaskUser"
import type { TaskPriority } from "~/enums/tasks/TaskPriority"
import type { TaskType } from "~/enums/tasks/TaskType"

export default interface Task {
    type: TaskType
    title: string
    key: string
    reporter: TaskUser
    assignee?: TaskUser
    priority: TaskPriority
    status: string,
    content: string
}