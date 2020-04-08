const   Listdata = require("../controllers/list-controllers"),
        listdata = new Listdata();

module.exports = (app) =>{
    const listRouters = Listdata.routers();
    /**
     * @swagger
     * /BR/{data}:
     *    get:
     *      tags:
     *          - Brasil
     *      parameters:
     *          - in: path
     *            name: data
     *            type: string
     *      summary: Rota com os dados de cada estado infectado pelo coronavírus
     *      description: listagem de dados contendo os estados infectados, essa lista é atulizada todos os dias ás 19h00.
     *      responses:
     *          200:
     *              schema:
     *                  type: object
     *                  properties:
     *                      data:
     *                          type: string
     *                          example: 07-04-2020
     *                      casos_confirmados:
     *                          type: number
     *                          example: 13717
     *                      Obitos:
     *                          type: number
     *                          example: 667
     *                      Letalidate:
     *                          type: string
     *                          example: 4,9%
     *                      estados:
     *                          type: object
     *                          properties:
     *                              Lat:
     *                                  type: number
     *                                  example: -9.0478679
     *                              Lon:
     *                                  type: number
     *                                  example: -70.5264976
     *                              Title:
     *                                  type: string
     *                                  example: Acre
     *                              Casos:
     *                                  type: number
     *                                  example: 50
     *                              Obitos:
     *                                  type: number
     *                                  example: 1
    */
    app.get(listRouters.brasil, listdata.brasil());
}