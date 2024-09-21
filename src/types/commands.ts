import type { Command } from 'obsidian'

export type RawCommand = Omit<Command, 'id'>
