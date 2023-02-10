describe('POST /users', function() {
    it('responds with json', function(done) {
      request(app)
        .post('/post')
        .send({
            "name":"sam",
            "role":"Testing"
        })
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });