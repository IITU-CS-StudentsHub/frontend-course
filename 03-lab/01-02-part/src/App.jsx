import { Counter } from './components'
import { ButtonInteractive } from './components/button-interactive/ButtonInteractive'
import { ChangeTheme } from './components/change-theme/ChangeTheme'
import { DataFetcher } from './components/data-fetcher/DataFetcher'
import { ListManager } from './components/list-manager/ListManager'
import { ProfileManager } from './components/profile/ProfileManager'
import { TaskList } from './components/task-list/TaskList'
import { TaskWrapper } from './components/task-wrapper/TaskWrapper'
import { Timer } from './components/timer/Timer'
import { TogglePanel } from './components/toggle-panel/TogglePanel'
import { WindowSize } from './components/window-size/WindowSize'

const TASKS = [
  <Counter />,
  <ListManager />,
  <TogglePanel />,
  <ProfileManager />,
  <ButtonInteractive />,
  <ChangeTheme />,
  <DataFetcher />,
  <TaskList />,
  <Timer />,
  <WindowSize />
]

function App() {
  return (
    <div>
      <header>
        <div>
          <h1>Lab 3, 1-2 part (10 tasks)</h1>
          <h2>Name: Maxim Novikov</h2>
          <h2>Group: IT3-2304</h2>
        </div>
      </header>

      <main>
        {TASKS.map((task, index) => (
          <TaskWrapper key={index} title={`Task ${index + 1}`}>
            {task}
          </TaskWrapper>
        ))}
      </main>
    </div>
  )
}

export default App
