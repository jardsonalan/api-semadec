import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Atleta from './atleta.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Equipe extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare curso: string

  @column()
  declare nome: string

  @hasMany(() => Atleta)
  declare atletas: HasMany<typeof Atleta>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
