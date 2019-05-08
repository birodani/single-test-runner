// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
		console.log('Congratulations, your extension "single-test-runner" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('runSpecTs', (uri:vscode.Uri) => {
		// The code you place here will be executed every time your command is executed
		const fileName = uri.fsPath.substring(uri.fsPath.lastIndexOf('\\')+1);

		const terminal = vscode.window.createTerminal('test: ' + fileName);
		terminal.show();
		terminal.sendText('ng test --main '+uri.fsPath.toString());
		// Display a message box to the user
		//vscode.window.showInformationMessage(uri.path);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
