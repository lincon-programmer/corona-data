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
     *      description: listagem de dados contendo os estados infectados, essa lista é atulizada todos os dias ás 19h00, O formato de data que deve ser inserido é DD-MM-AAAA.
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
    /**
     * @swagger
     * /SP/{data}:
     *    get:
     *      tags:
     *          - SP
     *      parameters:
     *          - in: path
     *            name: data
     *            type: string
     *      summary: Rota com os dados de infectados do estado São Paulo
     *      description: listagem de dados contendo Os municipios de são paulo que foram infectados pelo coronavírus, essa lista é atulizada todos os dias ás 19h00, O formato de data que deve ser inserido é DD-MM-AAAA.
     *      responses:
     *          200:
     *              schema:
     *                  type: object
     *                  properties:
     *                      data:
     *                          type: string
     *                          example: 07-04-2020
     *                      estado:
     *                          type: string
     *                          example: São Paulo
     *                      casos:
     *                          type: number
     *                          example: 13717
     *                      obitos:
     *                          type: number
     *                          example: 667
     *                      casos_por_municipio:
     *                          type: object
     *                          properties:
     *                              Municipio:
     *                                  type: string
     *                                  example: águas de Lindóia
     *                              Total_De_Casos:
     *                                  type: number
     *                                  example: 1
     *                              Total_De_Obitos:
     *                                  type: number
     *                                  example: 0
    */
    app.get(listRouters.sp, listdata.sp());
    /**
     * @swagger
     * /AL/{data}:
     *    get:
     *      tags:
     *          - AL
     *      parameters:
     *          - in: path
     *            name: data
     *            type: string
     *      summary: Rota com os dados de infectados do estado Alagoas
     *      description: listagem de dados contendo Os municipios de Alagoas que foram infectados pelo coronavírus, essa lista é atulizada todos os dias ás 19h00, O formato de data que deve ser inserido é DD-MM-AAAA.
     *      responses:
     *          200:
     *              schema:
     *                  type: object
     *                  properties:
     *                      data:
     *                          type: string
     *                          example: 07-04-2020
     *                      estado:
     *                          type: string
     *                          example: São Paulo
     *                      casos:
     *                          type: number
     *                          example: 13717
     *                      obitos:
     *                          type: number
     *                          example: 667
     *                      casos_por_municipio:
     *                          type: object
     *                          properties:
     *                              Municipio:
     *                                  type: string
     *                                  example: águas de Lindóia
     *                              Total_De_Casos:
     *                                  type: number
     *                                  example: 1
     *                              Total_De_Obitos:
     *                                  type: number
     *                                  example: 0
    */
    app.get(listRouters.al, listdata.al());
}