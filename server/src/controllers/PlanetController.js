import { Auth0Provider } from "@bcwdev/auth0provider";
import { planetService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetController extends BaseController {
    constructor() {
        super('api/planets')
        this.router

            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createPlanet)
    }

    async createPlanet(request, response, next) {
        try {
            const planetData = request.body
            const userInfo = request.userInfo
            planetData.creatorId = userInfo.id
            const planet = await planetService.createPlanet(planetData)
            return response.send(planet)
        } catch (error) {
            next(error)
        }
    }
}