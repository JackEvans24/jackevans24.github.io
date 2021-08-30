import { Component, OnInit } from '@angular/core';
import { IProject } from '../models/project';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [];

  constructor(private service: ProjectService) { }

  ngOnInit(): void {
    this.service.getApps().subscribe(projects => this.projects = projects);
  }
}
