import Equipe from '#models/equipe'
import type { HttpContext } from '@adonisjs/core/http'

export default class EquipesController {
  public async index({}: HttpContext) {
    return await Equipe.all()
  }

  public async show({ response, params }: HttpContext) {
    try {
      return await Equipe.find(params.id)
    } catch {
      return await response.json({
        errors: {
          default: 'Equipe não encontrada.',
        },
      })
    }
  }

  public async store({ request }: HttpContext) {
    return await Equipe.create(request.only(['curso', 'nome']))
  }

  public async update({ response, request, params }: HttpContext) {
    try {
      const equipe = await Equipe.findOrFail(params.id)
      equipe.merge(request.only(['curso', 'nome']))
      return await equipe.save()
    } catch {
      return await response.json({
        errors: {
          default: 'Equipe não encontrada.',
        },
      })
    }
  }

  public async destroy({ response, params }: HttpContext) {
    try {
      const equipe = await Equipe.findOrFail(params.id)
      return await equipe.delete()
    } catch {
      return await response.json({
        errors: {
          default: 'Equipe não encontrada.',
        },
      })
    }
  }
}
