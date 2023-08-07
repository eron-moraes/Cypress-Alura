describe('Buscar fotos e dados', () => {

    // código comentado omitido…
    
        it('buscar fotos do usuário', () => {
          
          const tempoEsperado = Math.random() * 50;
    
            cy.request({
                method: 'GET' ,
                url: 'http://localhost:3000/carowl/photos'
            }).then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body[0]).to.have.property('description')
                expect(res.body[0].description).to.be.equal('porquinho')
                expect(res.duration).to.be.lte(tempoEsperado)
            })
        })
    })
    
