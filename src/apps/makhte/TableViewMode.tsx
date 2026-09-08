import { useTableViewTasks } from './store'
import { TasksTable } from './TasksTable'

export const TableViewMode = () => {
  const tasks = useTableViewTasks()

  return <TasksTable tasks={tasks} />

  // return (
  //   <Table>
  //     <TableHeader>
  //       <TableRow>
  //         <TableHead>عنوان</TableHead>
  //         <TableHead className='w-48'>وضعیت</TableHead>
  //         <TableHead className='w-24'>عملیات</TableHead>
  //       </TableRow>
  //     </TableHeader>

  //     <TableBody>
  //       {tasks.map(task => (
  //         <TableTaskRow task={task} key={task.id} />
  //       ))}

  //       {tasks.length === 0 && (
  //         <TableRow>
  //           <TableCell
  //             colSpan={4}
  //             className='h-24 text-center text-muted-foreground'
  //           >
  //             هنوز تسکی نداریم.
  //           </TableCell>
  //         </TableRow>
  //       )}
  //     </TableBody>
  //   </Table>
  // )
}
