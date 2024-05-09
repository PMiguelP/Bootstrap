<?php

class TodoList
{
    private $tasks = [];

    public function addTask($task)
    {
        $this->tasks[] = $task;
    }

    public function markTaskAsCompleted($taskIndex)
    {
        if (isset($this->tasks[$taskIndex])) {
            $this->tasks[$taskIndex]["completed"] = true;
        }
    }

    public function displayTasks()
    {
        if (empty($this->tasks)) {
            echo "Lista de tarefas vazia.\n";
        } else {
            foreach ($this->tasks as $index => $task) {
                $status = $task["completed"] ? "Concluída" : "Pendente";
                echo $index + 1 . ". {$task["description"]} - $status\n";
            }
        }
    }

    public function clearTasks()
    {
        $this->tasks = [];
    }
}

// Exemplo de uso da classe TodoList
$todoList = new TodoList();

$todoList->addTask(["description" => "Fazer compras", "completed" => false]);
$todoList->addTask(["description" => "Estudar PHP", "completed" => false]);
$todoList->addTask(["description" => "Ir ao médico", "completed" => true]);

echo "Tarefas antes de marcar como concluída:\n";
$todoList->displayTasks();

$todoList->markTaskAsCompleted(0); // Marcar a primeira tarefa como concluída

echo "\nTarefas após marcar a primeira como concluída:\n";
$todoList->displayTasks();

$todoList->clearTasks(); // Limpar todas as tarefas

echo "\nTarefas após limpar a lista:\n";
$todoList->displayTasks();

?>
