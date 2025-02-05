<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'
import { useMouse, useWindowScroll } from '@vueuse/core'
import datas from "@/datas/tasks"
import type Task from '@/types/tasks/Task'
import DeleteTaskModal from '@/components/tasks/modals/DeleteTaskModal.vue'

type SelectedTask = {
  taskKey: string,
  status: string
}

const taskLists = reactive(datas)
const { x, y } = useMouse()
const { y: windowY } = useWindowScroll()
const isOpen = ref(false)
const virtualElement = ref({ getBoundingClientRect: () => ({}) })
const selectedTask = ref<SelectedTask | null>(null)
const { metaSymbol } = useShortcuts()
const toast = useToast()
const modal = useModal()
let selectedColumnStatus: string | null = null;


function onContextMenu(event: MouseEvent) {
  event.preventDefault()

  const taskElement = (event.target as HTMLElement).closest('.task-item')
  if (!taskElement) return

  const taskKey = taskElement.dataset.taskKey
  selectedTask.value = {
    taskKey: taskKey,
    status: taskElement.dataset.taskStatus
  }

  const taskColumn = (event.target as HTMLElement).closest('.task-list')
  selectedColumnStatus = taskColumn.dataset.taskStatus;

  // Set virtual position
  const top = y.value - windowY.value
  const left = x.value
  virtualElement.value.getBoundingClientRect = () => ({
    width: 0,
    height: 0,
    top,
    left
  })

  isOpen.value = true
}

function onUpdate(event) {
  console.log('update')
}
function onAdd(event) {
  const taskKey = event.item.dataset.taskKey;
  const newColumn = event.to;
  const newStatus = newColumn.dataset.taskStatus;
  const taskObject: Task = taskLists[selectedColumnStatus].find((task: Task) => task.key === taskKey);
  /**
   * @todo use taskObject to change the status
   */
}
function remove(event) {
  console.log('remove', event)
}

function openDeleteModal() {
  modal.open(DeleteTaskModal, {
    onSuccess() {
      /**
       * @todo call api to delete task + try catch
       */
      const selectedTaskIndex = taskLists[selectedColumnStatus].findIndex((task: Task) => selectedTask.value?.taskKey === task.key)
      taskLists[selectedColumnStatus].splice(selectedTaskIndex, 1)

      toast.add({
        title: 'Task ' + selectedTask.value?.taskKey + ' was deleted !',
        id: 'modal-success'
      })
      modal.close()
    }
  })
}

defineShortcuts({
  meta_D: {
    usingInput: true,
    whenever: [isOpen],
    handler: () => {
      openDeleteModal()
    }
  },
  alt_D: {
    usingInput: true,
    whenever: [isOpen],
    handler: () => {
      const selectedTaskIndex = taskLists[selectedColumnStatus].findIndex((task: Task) => selectedTask.value?.taskKey === task.key)
      const taskDuplicate = Object.assign({}, taskLists[selectedColumnStatus][selectedTaskIndex]);

      /**
       * @todo call api to duplicate task + try catch, like a task creation but remove the task key
       */
      taskLists[selectedColumnStatus].splice(selectedTaskIndex + 1, 0, taskDuplicate)
      toast.add({
        title: 'Task ' + selectedTask.value?.taskKey + ' was duplicated !',
        id: 'modal-success'
      })
    }
  },
  E: {
    usingInput: true,
    whenever: [isOpen],
    handler: () => { alert('edit') }
  }
})
</script>

<template>
  <div class="grid gap-4 auto-cols-max grid-flow-col p-5 overflow-x-auto bg-gradient-to-b bg-gray-100"
    @contextmenu="onContextMenu">
    <!-- TASK LIST (NO INDIVIDUAL EVENT LISTENERS) -->
    <div class="w-[320px]" v-for="(taskList, key) in taskLists" :key="key">
      <h2 class="border-b-2 border-indigo-400 dark:border-indigo-600 mb-4 pb-1 capitalize text-xl">{{ key }}</h2>
      <VueDraggable class="grid gap-4 task-list" animation="150" group="tasks" ghostClass="ghost" v-model="taskLists[key]"
        @update="onUpdate" @add="onAdd" @remove="remove" :data-task-status="key">
        <DragTaskCard v-for="task in taskList" :key="task.key" :task="task" />
      </VueDraggable>

      <UContextMenu v-model="isOpen" :virtual-element="virtualElement" :popper="{ arrow: true, placement: 'right' }">
        <div class="px-4 py-2 m-1 hover:bg-slate-100 cursor-pointer flex items-middle">
            Edit <UKbd class="ml-2">E</UKbd>
        </div>
        <div class="px-4 py-2 m-1 hover:bg-slate-100 cursor-pointer flex items-middle" @click="openDeleteModal">
          Delete <UKbd class="ml-2">{{ metaSymbol }} + D</UKbd>
        </div>
        <div class="px-4 py-2 m-1 hover:bg-slate-100 cursor-pointer flex items-middle">
          Duplicate <UKbd class="ml-2">Alt + D</UKbd>
        </div>
      </UContextMenu>
    </div>
  </div>
</template>
