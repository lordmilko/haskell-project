import * as vscode from 'vscode';
import { readdir } from 'fs';
import { basename } from 'path';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    
    context.subscriptions.push(vscode.commands.registerCommand('haskell-project.createApp', () => {
        createProject("simple")
    }));

    context.subscriptions.push(vscode.commands.registerCommand('haskell-project.createLib', () => {
        createProject("simple-library");
    }));
}

function createProject(template : string) {
    var folders = vscode.workspace.workspaceFolders;
    
    if (!folders || folders.length == 0) {
        vscode.window.showErrorMessage("Could not initialize a new Haskell Project as no folder is open.")
        
        return;
    }
    
    var folder = folders[0].uri.fsPath;
    
    readdir(folder, function(err, files) {
        if(err)
            vscode.window.showErrorMessage(err.message);
        else
        {
            if(files.length > 0)
                vscode.window.showErrorMessage("Cannot initialize Haskell Project as the current folder is not empty.");
            else
            {
                var folderName = basename(folder);
                
                exec(`stack new ${folderName} ${template} --bare`, { cwd: folder }, (error, stdout, stderr) => {
                    
                    console.log(error?.message);
                });             
            }
        }
    });
}

export function deactivate() {}
