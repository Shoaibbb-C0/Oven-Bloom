import { appendFile, mkdir } from 'node:fs/promises'
import path from 'node:path'

const dataDirectory = path.resolve(process.cwd(), '.data')

export async function persist(collection, data) {
  const record = { id: crypto.randomUUID(), ...data, createdAt: new Date().toISOString() }
  await mkdir(dataDirectory, { recursive: true })
  await appendFile(path.join(dataDirectory, `${collection}.jsonl`), `${JSON.stringify(record)}\n`, 'utf8')
  return record
}
