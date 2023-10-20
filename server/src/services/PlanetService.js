import { dbContext } from "../db/DbContext.js"

class PlanetService {
    async getPlanetByGalaxyId(galaxyId) {
        const planets = await dbContext.Planets.find({ galaxyId: galaxyId })
        return planets
    }
    async createPlanet(planetData) {
        const planet = await dbContext.Planets.create(planetData)
        return planet
    }

}

export const planetService = new PlanetService()