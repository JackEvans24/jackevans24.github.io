import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public languages = [
        { text: 'C#', icon: 'star' },
        { text: 'TypeScript', icon: 'star' },
        { text: 'JavaScript' },
        { text: 'SQL' },
        { text: 'HTML' },
        { text: 'CSS/SCSS' },
        { text: 'Python' },
        { text: 'HLSL' },
        { text: 'Bash' }
    ];

    public frameworks = [
        { text: '.NET', icon: 'star' },
        { text: '.NET Core', icon: 'star' },
        { text: 'Entity Framework' },
        { text: 'Node' },
        { text: 'Angular', icon: 'star' },
        { text: 'React' },
        { text: 'JQuery' },
        { text: 'Git' }
    ];

    public software = [
        { text: 'Azure DevOps' },
        { text: 'Azure Portal' },
        { text: 'Firebase' },
        { text: 'Postman' },
        { text: 'IIS' },
        { text: 'XCode' },
        { text: 'SQL Server Management Studio' }
    ];

    public gameDev = [
        { text: 'Unity', icon: 'star' },
        { text: 'Photon' },
        { text: 'ShaderLab' },
        { text: 'Blender' },
        { text: 'GIMP' },
        { text: 'Procreate' },
        { text: 'Audacity' },
        { text: 'Bfxr' }
    ];
}
