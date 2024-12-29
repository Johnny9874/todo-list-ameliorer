import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'; // Import du service pour récupérer les tâches

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = []; // Déclare un tableau pour stocker les tâches

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // Lorsque le composant est initialisé, on récupère les tâches
    this.taskService.getTasks().subscribe((data: any[]) => {
      this.tasks = data; // On assigne les données récupérées au tableau `tasks`
    });
  }
}

