import { Plugin } from 'obsidian'

export default class MyPlugin extends Plugin {
	onload(): void {
		console.log('hello')
		console.log(this.app)
	}
}
