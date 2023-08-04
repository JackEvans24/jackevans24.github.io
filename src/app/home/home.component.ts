import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public languages = [
        'C#',
        'JavaScript',
        'TypeScript',
        'SQL',
        'HTML',
        'CSS/SCSS',
        'Python',
        'HLSL',
        'Bash'
    ];

    public frameworks = [
        '.NET',
        '.NET Core',
        'Entity Framework',
        'Node',
        'Angular',
        'React',
        'JQuery',
        'Git'
    ];

    public software = [
        'Azure DevOps',
        'Azure Portal',
        'Firebase',
        'Postman',
        'IIS',
        'XCode',
        'SQL Server Management Studio'
    ];

    public gameDev = [
        'Unity',
        'Photon',
        'ShaderLab',
        'Blender',
        'GIMP',
        'Procreate',
        'Audacity',
        'Bfxr'
    ];
}
